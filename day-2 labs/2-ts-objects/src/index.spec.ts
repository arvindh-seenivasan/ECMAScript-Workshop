import { createLocation, createVehicle, createJournalEntry } from './';

it('should create a location', () => {
  const location = createLocation(13.051100, 80.281320);
  expect(location).toEqual({
    latitude: 13.051100,
    longitude: 80.281320
  });
});

it('should create a vehicle', () => {
  const vehicle = createVehicle('TN-04 A 1234', 'Tata');
  expect(vehicle).toEqual({
    registration: 'TN-04 A 1234',
    make: 'Tata'
  });
});

it('should create a journal entry', () => {
  const vehicle = createVehicle('TN-04 A 1234', 'Tata');
  const location = createLocation(13.051100, 80.281320);
  const destination = createLocation(13.051100, 80.281320);
  const time = Date.now();

  const entry = createJournalEntry(time, vehicle, location, destination);

  expect(entry).toEqual({ time, vehicle, location, destination });
});

it('should create a journal entry without destination', () => {
  const vehicle = createVehicle('TN-04 A 1234', 'Tata');
  const location = createLocation(13.051100, 80.281320);
  const time = Date.now();

  const entry = createJournalEntry(time, vehicle, location);

  expect(entry).toEqual({ time, vehicle, location });
});
