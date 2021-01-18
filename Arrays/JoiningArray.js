const numbers = [1,2,3]; 

const joined = numbers.join('');
// this will return the combined string
console.log(joined);
// ans: 123

const message = 'This is my first message'; 
const wholepart = message.split(); 
console.log(wholepart);
// Ans:["This is my first message"]

const parts = message.split(''); 
console.log(parts);
// Ans: ["T", "h", "i", "s", " ", "i", "s", " ", "m", "y", " ", "f", "i", "r", "s", "t", " ", "m", "e", "s", "s", "a", "g", "e"]


const wordparts = message.split(' '); 
console.log(wordparts);
// Ans: ["This", "is", "my", "first", "message"]

const wordcombined = wordparts.join(' '); 
console.log(wordcombined);
// Ans: This is my first message

const partscombined = wordparts.join(''); 
console.log(partscombined);
// Ans: Thisismyfirstmessage


const hypencombined = wordparts.join('-'); 
console.log(hypencombined);
// Ans: This-is-my-first-message