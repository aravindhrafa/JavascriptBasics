let x =10;
let y = x; 


x = 20;
// these are primitive types 


// The below are the reference type understandings 

let p = {value : 10}; 
// Here object is created 
// The value wont be stored on p. Instead address of value will get stored on p (Say 1000)


let q = p ;  
// Based on above code, same address(say 1000 ) will get stored on p and q value 

p.value = 20;
// Once any changes are done on one variable, the changes will also get reflected on another 
// referenced variable 

// so 'p and q' will have same values, if any changes are being done to one variable 

q.value = 50;

// Here q value is changed to 50. So p and q will show the same value 
// check on the console for the confirmation 

//_______________________________________________________________________________________________________// 



let number = 100; 

function increase(number){
    number++; 
}

increase(number); 
console.log(number); 
// On the above code, number is valued with 100 
// on the function increase, number is made a copy based on the value 
// so, number++ after their process will lost their scope or change within the function 

// so, on printing the number, it will show value as 100 and not 101

 

let obj1 = {value :  100};
function increase1 (obj1){
    obj1.value++; 
} 
increase1(obj1);
console.log(obj1);