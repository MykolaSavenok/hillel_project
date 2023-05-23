const theName = prompt('What is your name?');
if (theName == 'John') {
   alert('Hello, John! How are you?');
   console.log('This is John');
} else if (theName !== 'John') {
   alert('Hello, noname! How are you?');
   console.log('This is no name');
}