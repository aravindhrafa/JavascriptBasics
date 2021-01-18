// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

console.log(1 | 2) ;  // Bitwise OR operator 
console.log(1 & 2) ;  // Bitwise AND operator


// Real World application using Bitwise operators 

const readPermission = 4; 
const writePermission = 2; 
const executePermission = 1; 

let myPermission = 0;
myPermission = myPermission  | writePermission; 
console.log("My Permission with three operands and bitwise operator: " , myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no'; 
console.log("Final Message: ", message);


let myPermission1 = 0;
myPermission1 = myPermission1  | writePermission | readPermission; 
console.log("My Permission with three operands and bitwise operator: " , myPermission1);


let message1 = (myPermission1 & readPermission) ? 'yes' : 'no'; 
console.log("Final Message: " , message1);