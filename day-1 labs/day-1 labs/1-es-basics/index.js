const getName = person => person.name;

const getAge  = person => person.age;

// function getAge(person) {
//   return person.age;
// }

const getInterests = person => person.interests;

// function getInterests(person) {
//   return person.interests;
// }

const isOver30 = person => person.age > 30;
// function isOver30(person) {
//   return person.age > 30 ? true : false;
// }

const getTopInterest = person => `Top interest: ${getInterests(person)[0]}`; // java script evealuate the experssion ginven in ${here\\}
// function getTopInterest(person) {
//
//   return 'Top interest: ' + topInterest;
// }

const getNonTopInterests = person => {
  const interests = [].concat(person.interests);  // We don't want to change the original array!
  interests.shift(); // Remove topmost interest;
  return interests;
};
// function getNonTopInterests(person) {
//   const interests = [].concat(person.interests);  // We don't want to change the original array!
//   interests.shift(); // Remove topmost interest;
//   return interests;
// }

const getWorkAddress = ({address:{work}}) => work;

// function getWorkAddress(person) {
//   return person.address.work;
// }

const getNameAndAddress = (person, addressType) => {
  const newObj = {
    name: person.name
  };
  newObj[addressType] = person.address[addressType];
  return newObj;
};
// function getNameAndAddress(person, addressType) {
//  const newObj = {
//     name: person.name
//   };
//   newObj[addressType] = person.address[addressType];
//   return newObj;
// }

const getYoungerPerson = (person1,person2) => person1.age > person2.age ? person1 : person2;

// function getYoungerPerson(person1, person2) {
//   if(person1.age > person2.age) {
//     return person1;
//   } else {
//     return person2;
//   }
// }

module.exports.getName = getName;
module.exports.getAge = getAge;
module.exports.getInterests = getInterests;
module.exports.isOver30 = isOver30;
module.exports.getTopInterest = getTopInterest;
module.exports.getWorkAddress = getWorkAddress;
module.exports.getNameAndAddress = getNameAndAddress;
module.exports.getYoungerPerson = getYoungerPerson;
module.exports.getNonTopInterests = getNonTopInterests;
