import average from '../average';

it('should sum an array of numbers', () => {
  expect(average([1, 2, 3])).toEqual(2);
  expect(average([1, 1])).toEqual(1);
});
