type location = {
  latitude : number,
  longitude : number
};

type Vehicle = {
  registration : string,
  make : string
};

type Journal = {
  time : number,
  vehicle : object,
  location : object,
  destination ? : string
};

export const createLocation = (latitude:number, longitude:number):location => {
  return { latitude, longitude };
};

export const createVehicle = (registration:string, make:string):Vehicle => {
  return { registration, make };
};

export const createJournalEntry = (time:number, vehicle:object, location:object, destination?:string):Journal => {
  return { time, vehicle, location, destination };
};
