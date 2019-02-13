const { readFile } = require('fs');
const {promisify} = require('util');
const pRead = promisify(readFile);
const readMessagePart = async path => (await pRead(path,'utf8')).toUpperCase();


const readFullMessage = async paths => {
  const result = await Promise.all(paths.map(readMessagePart));
  return result.join(' ');
};

module.exports.readMessagePart = readMessagePart;
module.exports.readFullMessage = readFullMessage;
