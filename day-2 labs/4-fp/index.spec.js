const people = require('./data');
const { getIndians, anyoneFromTN } = require('./data');

it('should get all Indian people', () => {
  expect(getIndians(people)).toEqual([
    {
      name: 'Alice',
      age: 42,
      country: 'India',
      state: 'TN'
    },
    {
      name: 'Bob',
      age: 21,
      country: 'India',
      state: 'MH'
    }  
  ])
});

it('should return true if anyone lives in TN', () => {
  expect(anyoneFromTN(people)).toEqual(true);
});

it('should return all the adults', () => {
  expect(adults(people)).toEqual([
    {
      name: 'Alice',
      age: 42,
      country: 'India',
      state: 'TN'
    },
    {
      name: 'Bob',
      age: 21,
      country: 'India',
      state: 'MH'
    }
  ]);
});

it('should return all the people from a state', () => {
  expect(peopleFrom('TN')).toEqual([
    {
      name: 'Alice',
      age: 42,
      country: 'India',
      state: 'TN'
    }
  ]);

  expect(peopleFrom('CA')).toEqual([
    {
      name: 'Charlie',
      age: 10,
      country: 'USA',
      state: 'CA'
    }  
  ]);
});

