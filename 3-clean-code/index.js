const {readdir,stat} = require('fs');
const {promisify} = require('util');
const getFiles = promisify(readdir);
const getStatus = promisify(stat);
const path = require('path');

// const fileStatus = ()=> {
//   console.log(getStatus('dir-a/file-a'));
// };
//
// fileStatus();

const files = ['dir-a/file-a','dir-a/file-b'];

// to do get file status
const pipeline = fns => initialValue => fns.reduce((accumulation,fn)=>{
  console.log('accumulation', accumulation);
  fn(accumulation)
},initialValue);


const getFileStatus = async (files) => {
  const filePromises = files.map(getStatus);
  return (Promise.all(filePromises)).flat();
};

const filterFiles = fileStatus => {
  return fileStatus.filter(file => file.isFile())
};

const findLargeFile = fileStatuses => {
  return fileStatuses.reduce((previous,next)=>{
    if (previous.size > next.size) return previous;
    return next;
  })
};

var fileProcessFunctions = [getFileStatus,filterFiles,findLargeFile];

module.exports = async (dir) => {
  let files = await getFiles(dir);
  if(!Array.isArray(files)) return files;
  console.log('files', files);
  files = files.map((file) => path.join(dir,file));
  console.log('files with path', files);
  const findLargestFile = pipeline(fileProcessFunctions);
  return findLargestFile(files);
};

// module.exports = function (dir, cb) {
//   fs.readdir(dir, function (err, files) {
//     if (err) return cb(err);
//
//     var counter = files.length
//     var errored = false
//     var stats = []
//
//     files.forEach(function (file, index) {
//       fs.stat(path.join(dir, file), function (err, stat) {
//         if (errored) return;
//         if (err) {
//           errored = true
//           return cb(err)
//         }
//         stats[index] = stat
//
//         if (--counter == 0) {
//           var largest = stats
//             .filter(function (stat) {
//                 return stat.isFile()
//             })
//             .reduce(function (prev, next) {
//               if (prev.size > next.size) return prev
//               return next
//             })
//
//           cb(null, files[stats.indexOf(largest)])
//         }
//       })
//     })
//   })
// };
