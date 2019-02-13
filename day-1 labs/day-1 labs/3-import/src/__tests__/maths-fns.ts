import { add, divide } from '../maths-fns'

it('should add two numbers', () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(100, 0)).toEqual(100);
});

it('should divide two numbers', () => {
  expect(divide(2, 2)).toEqual(1);
  expect(divide(100, 1)).toEqual(100);
});
