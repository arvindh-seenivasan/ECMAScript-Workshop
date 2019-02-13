"use strict";
exports.__esModule = true;
var __1 = require("../");
it('should build a name correctly', function () {
    expect(__1.buildName('Alice')).toEqual('Alice');
    expect(__1.buildName('John', 'Doe')).toEqual('John Doe');
});
it('should repeat strings correctly', function () {
    expect(__1.repeatString('foo', 3)).toEqual('foofoofoo');
});
it('should tell if a number is even', function () {
    expect(__1.isEven(3)).toEqual(false);
    expect(__1.isEven(2)).toEqual(true);
});
it('should get calories string correctly', function () {
    expect(__1.calorieString('bread', 300)).toEqual('Our bread has 300 calories.');
});
it('should print the age correctly', function () {
    expect(__1.ageString(['Bob', 24])).toEqual('Bob is 24 years old.');
});
