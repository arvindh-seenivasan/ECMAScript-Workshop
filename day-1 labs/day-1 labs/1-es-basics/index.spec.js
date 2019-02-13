const {
  getName, getInterests, isOver30,
  getTopInterest, getNonTopInterests,
  getWorkAddress, getNameAndAddress,
  getYoungerPerson
} = require('./');

const person1 = {
  name: 'Alice',
  age: 42,
  interests: [ 'astronomy', 'maths', 'hiking' ],
  address: {
    home: '12/A, Sunset St.',
    work: '34/B, Central Cross'
  }
};

const person2 = {
  name: 'Bob',
  age: 21,
  interests: [ 'physics', 'fishing', 'driving' ],
  address: {
    home: '56, West Rd.',
    work: '78/C, Lake Av.'
  }
};

it('should get the name correctly', () => {
  expect(getName(person1)).toEqual('Alice');
  expect(getName(person2)).toEqual('Bob');
});

it('should get their interests', () => {
  expect(getInterests(person1)).toEqual([ 'astronomy', 'maths', 'hiking' ]);
  expect(getInterests(person2)).toEqual([ 'physics', 'fishing', 'driving' ]);
});

it('should tell if person is over 30', () => {
  expect(isOver30(person1)).toEqual(true);
  expect(isOver30(person2)).toEqual(false);
});

it('should get their top interest', () => {
  expect(getTopInterest(person1)).toEqual('Top interest: astronomy');
  expect(getTopInterest(person2)).toEqual('Top interest: physics');
});

it('should get their interests without their top interest', () => {
  expect(getNonTopInterests(person1)).toEqual([ 'maths', 'hiking' ]);
  expect(getNonTopInterests(person2)).toEqual([ 'fishing', 'driving' ]);
});

it('should get their work address', () => {
  expect(getWorkAddress(person1)).toEqual('34/B, Central Cross');
  expect(getWorkAddress(person2)).toEqual('78/C, Lake Av.');
});

it('should get name and address', () => {
  expect(getNameAndAddress(person1, 'home')).toEqual({
    name: 'Alice',
    home: '12/A, Sunset St.'
  });

  expect(getNameAndAddress(person2, 'work')).toEqual({
    'name': 'Bob',
    'work': '78/C, Lake Av.'
  });
});

it('should return the younger person', () => {
  expect(getYoungerPerson(person1, person2)).toEqual(person1);
  expect(getYoungerPerson(person2, person1)).toEqual(person1);
});
