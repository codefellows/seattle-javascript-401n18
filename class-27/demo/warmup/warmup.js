const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

// [Odie, Kookla, Fran, Ollie, Garfield]
let newPeople = ['Odie', ...people, 'Garfield'];
console.log(newPeople);

let newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'GMC'],
};
console.log(newStuff);

let state = { stuff, people }
console.log(state);

console.log('====================')

let bigState = { ...state, people: ['Odie', ...people, 'Garfield'], stuff: { ...stuff, cars: [...stuff.cars, 'GMC'] } }

console.log(bigState);

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  // arr is pointing to the same spot in memory as "people"
  // Pass by Reference
  let internalArray = [...arr]; // Use "spread" to make a deep clone
  while (internalArray.length) {
    console.log(internalArray.shift());
  }
}

function mapLoop(arr) {
  let newArray = arr.map((val, idx) => {
    console.log(val);
    return `<div>${val}</div>`
  });

  console.log('NewArray', newArray);

}

function map(arr, callbackFunction) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let value = callbackFunction(arr[i], i);
    newArray.push(value);
  }
  return newArray;
}

function filter(arr, callbackFunction) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let value = callbackFunction(arr[i], i);
    if (value) { newArray.push(arr[i]); }
  }
  return newArray;
}

// console.log('forLoop');
// forLoop(people)
// console.log('================================');
// console.log('whileLoop')
// whileLoop(people);
// console.log('================================');
// console.log('mapLoop');
// mapLoop(people);
// console.log('================================');
// let mapped = map(people, (val, idx) => { return { [idx]: val } });
// console.log('map', mapped);
// console.log('================================');
// let filtered = filter(people, (val, idx) => val === "Kookla")
// console.log('filter');
// console.log(filtered);