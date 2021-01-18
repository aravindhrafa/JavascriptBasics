// Strict Equality operator(type and value should match )
console.log(1 === 1); 
console.log('1' === 1) 


// Lost Equality operator(Only value matching is enough )

console.log(1 == 1);
console.log('1' == 1);
// The first value being string. So second comparison value 
// could also get converted to string 

console.log(true == 1);
// True being boolean value will convert the second comparison value to boolean value for comparison 

console.log(true == '1');