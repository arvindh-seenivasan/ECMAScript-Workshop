var calc = require('./index');

it('should add two numbers',()=>{
    // write assertions statement for all test cases;
    expect(calc.add(1,6)).toEqual(7);
   expect(calc.add(1,'9')).toEqual(null);
});

it('should subtract two numbers',()=>{
    expect(calc.sub(5,2)).toEqual(3);
});
