var largestFileName = require('./');

it.only('should read largest file using callback', async ()=>{

  const fileName = await largestFileName('./dir-a');
  expect(fileName).toEqual('file-b');
  // largestFileName('./dir-a', function (er, largest_filename) {
  //   expect(largest_filename).toEqual('file-b');
  //   done()
  // })
})

it('should report error if file operations gives up using callback', function (done) {
  largestFileName('./invalid-path', function (err, largest_filename) {
    expect(err.message.includes('no such file or directory')).toEqual(true);
    done();
  })
})
