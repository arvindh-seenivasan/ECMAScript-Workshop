export const buildName = (firstName:string, lastName?:string):string => {
  if(lastName) return firstName + ' ' + lastName;
  return firstName;
};

export const repeatString = (str:string, count:number):string => {
  let final = '';
  for(let i = 0; i < count; i++) {
    final += str;
  }

  return final;
};

export const isEven = (num:number):boolean => num % 2 === 0;

export const calorieString = (food:string, calories:number) =>
  `Our ${food} has ${calories} calories.`;

export const ageString = ([ name, age ]:[string,number]) =>
  `${name} is ${age} years old.`;
