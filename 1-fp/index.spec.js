const people = require('./stub-data');
const { totalAges } = require('./index');

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
  const peopleFromTN = peopleFrom('TN');
  expect(peopleFromTN(people)).toEqual([
    {
      name: 'Alice',
      age: 42,
      country: 'India',
      state: 'TN'
    }
  ]);

  const peopleFromCA = peopleFrom('CA');
  expect(peopleFromCA(people)).toEqual([
    {
      name: 'Charlie',
      age: 10,
      country: 'USA',
      state: 'CA'
    }  
  ]);
});

it('should get names of Indians', () => {
  expect(namesOfIndians(people)).toEqual(['Alice', 'Bob']);
});

it('should get list of locations', () => {
  expect(locations(people)).toEqual([
    'TN, India',
    'MH, India',
    'CA, USA'
  ]);
});

it.only('should total up the ages', () => {
  expect(totalAges(people)).toEqual(73);
});
