const log: (i: number) => void = (i: number) => {
  console.log(i);
}

const add = (a: number, b: number): number => {
  return a + b;
}

const sub = (a: number, b: number): number => {
  return a - b;
}

function div (a: number, b: number): number {
  return a / b;
}

const mul = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error("");
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date, forecast.weather);
}

const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date, weather);
}
