class Transport2 {
  velocity: number;

  constructor(public color: string) {
  }

  public drive(): void {
    console.log('');
  }

  protected honk(): void {
    console.log('');
  }
}

//Basic inheritance
class Car extends Transport2 {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void  {
    this.honk();
  }
}

const vehicle = new Transport2('orange');
vehicle.drive();

const car = new Car(4, 'red');
