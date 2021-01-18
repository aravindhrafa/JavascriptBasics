
// String primitive 
const message = 'This is my first message'
console.log(message);

// When typeing: message. 
// We can able to see various properties and methods that 
// are highlighting for us
// __this seems that string primitive type will get wrappeed 
// __with String Object types. So methods and properties are 
// __getting highlighted even for primitive types 




// The below methods are being tried for primitive type message

/*

1) message.length
2) message[0]
3) message[1]
4) message.includes('my')
5) message.includes('not')
6) message.startsWith('This')
7) message.startsWith('this')
8) message.endsWith('e')
9) message.indexOf('my')
10) message.replace('first', 'second')
11) 


*/





const another   = new String('hi'); 
// This is reference types 


const message1 = ' This is my first message '

/*
message1.trim()
message1.trimLeft
message1.trimLeft()
*/


const message2 = 'I like \'Javascript\' a lot;'

console.log(message2);

const message3 = 'I like to roam\n inside Neyveli';
console.log(message3);


// message3.split()  
// Put the whole sentence on one array (one string inside an array)
// ["I like to roam↵ inside Neyveli"]

// message3.split('')
// Splits works into sepereate index and place it inside an array 
// ["I", "like", "to", "roam↵", "inside", "Neyveli"]