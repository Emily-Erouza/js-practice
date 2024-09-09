console.log('hello'+ '' +'world')

// it count the letters(.length)
console.log('Teaching the world how to code'.length);

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase() );

// String Concatenation with Variables
let favoriteAnimal = "giraffe";
console.log("My favorite animal: " + favoriteAnimal);

// String Interpolation
let myName = 'Natalia';
let myCity = 'Mexico City';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

// if else statemnt
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// else if
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// else if stwich
let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

// Calling a Function
function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.')
}
sayThanks();
sayThanks();

// Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
// Thank you for your purchase Cole! We appreciate your business. results

// making shopping lisst
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// function to help us calculate the number of monitors needed!
function monitorCount(rows, columns) {
  return rows * columns;
  }
  const numOfMonitors = monitorCount(5,4) ;
  console.log(numOfMonitors)
  