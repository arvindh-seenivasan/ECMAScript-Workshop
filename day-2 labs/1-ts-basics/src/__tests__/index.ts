import { repeatString, isEven, buildName, calorieString, ageString } from "../";

it('should build a name correctly', () => {
  expect(buildName('Alice')).toEqual('Alice');
  expect(buildName('John', 'Doe')).toEqual('John Doe');
});

it('should repeat strings correctly', () => {
  expect(repeatString('foo', 3)).toEqual('foofoofoo');
});

it('should tell if a number is even', () => {
  expect(isEven(3)).toEqual(false);
  expect(isEven(2)).toEqual(true);
});

it('should get calories string correctly', () => {
  expect(calorieString('bread', 300)).toEqual('Our bread has 300 calories.');
});

it('should print the age correctly', () => {
  expect(ageString([ 'Bob', 24 ])).toEqual('Bob is 24 years old.');
});

