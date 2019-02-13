import sumList from '../sum-list';

it('should sum an array of numbers', () => {
  expect(sumList([1, 2, 3])).toEqual(6);
  expect(sumList([1, 0, 0, 0])).toEqual(1);
});
