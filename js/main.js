const userName = prompt('What is your name?', '');
if (userName === '' || userName === null) {
   alert('Hello, noname! How are you?');
   console.log('This is noname!');
} else if (userName === userName) {
   alert(`Hello, ${userName}! How are you?`);
   console.log(`This is ${userName}`);
}
