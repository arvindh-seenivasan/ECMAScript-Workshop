const { join } = require('path');
const { readMessagePart, readFullMessage } = require('./');

const createPath = num => join(__dirname, 'stubs', `${num}.txt`);

it('should read a part of the message', async ()  =>{
    const contents = await readMessagePart(createPath(1));
    expect(contents).toEqual('THE QUICK BROWN FOX')
    }
);

it('should read the full message', () =>
  readFullMessage([
    createPath(1),
    createPath(2),
    createPath(3)
  ]).then(contents =>
    expect(contents).toEqual('THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG')
  )
);
