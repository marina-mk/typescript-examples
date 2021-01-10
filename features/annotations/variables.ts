const apples: number = 5;

let nothing: null = null;

//Array
let colors: string[] = ['r', 'g', 'b'];

//Object
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations
// 1) Functions returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) Delayed initialization
let words: string[] = ['r', 'g', 'b'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'g') {
    foundWord = true;
  }
}

// 3) Variables whos type cannot be inferred
let numbers = [-10, -1, 10];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
