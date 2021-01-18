// Falsy(False) -----> But not exactly like Boolean false 
// undefined
// null
// 0 
// false
// ''
// NaN

// Anthing that is not falsy --> (Truthy)


// Examples  
    //  false  || true         Ans: true 
    //  false  || 'aravindh'   Ans: aravindh 
    //  false  || 1            Ans: 1
    //  false  || '1'          Ans: '1'



 // short-circuiting    
    //  false  || 10 || 1      Ans: 10     


// Real World Example 

let userColor = 'red'; 
let defaultColor = 'blue'; 
let currentColor = userColor || defaultColor;
console.log(currentColor);


let userColor1 = ''; 
let defaultColor1 = 'blue'; 
let currentColor1 = userColor1 || defaultColor1;
console.log(currentColor1);

let userColor2 = null; 
let defaultColor2 = 'blue'; 
let currentColor2 = userColor2 || defaultColor2;
console.log(currentColor2);

let userColor3 = undefined; 
let defaultColor3 = 'blue'; 
let currentColor3 = userColor3 || defaultColor3;
console.log(currentColor3);


let userColor4 = false; 
let defaultColor4 = 'blue'; 
let currentColor4 = userColor4 || defaultColor4;
console.log(currentColor4);


let userColor5 =  NaN; 
let defaultColor5 = 'blue'; 
let currentColor5 = userColor5 || defaultColor5;
console.log(currentColor5);