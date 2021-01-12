const carMakers = ['ford', 'toyota', 'chevy'];
const cars: string[] = [];
const dates = [new Date()];

carMakers.map((car: string): string => {
  return car;
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
