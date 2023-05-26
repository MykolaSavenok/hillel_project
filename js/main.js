// if else 
const userName = prompt('What is your name?', '');
if (userName === '' || userName === null) {
   alert('Hello, noname! How are you?');
   console.log('This is noname!');
} else if (userName === userName) {
   alert(`Hello, ${userName}! How are you?`);
   console.log(`This is ${userName}`);
}
//////////////////////////////////////////////
const userName2 = prompt('What is your name?');
if (!userName2) {
   alert('Hello, noname! How are you?');
   console.log('This is noname!');
} else {
   alert(`Hello, ${userName2}! How are you?`);
   console.log(`This is ${userName2}`);
}
//////////////////////////////////////////////
const time = +prompt('Введіть кількість годин');
let minutes = 60;
let seconds = 60;
let result = minutes * seconds;
if (!time) {
   alert('Invalid result');
   console.log('Invalid result');
} else {
   alert(`You enter ${time * result} seconds`);
   console.log(`User enter ${time * result} seconds`);
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
