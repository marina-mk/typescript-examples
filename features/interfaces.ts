interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `${this.name}`;
  }
};

const printVechicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.summary()}`);
}

printVechicle(oldCivic);
