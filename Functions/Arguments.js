function sum(a,b){
    return a+b; 
}
console.log(sum(1,2)); 

///________________________


function sum1(a,b){
    return a+b;  // 1 + undefined 
}
console.log(sum(1));
// console.log(sum(1)); 
// this will return NaN(Not a Number)

// _________________________

// But Javascript have special characteristics called arguments 


// function sum2(a,b){
function sum2(){
    let total = 0; 
    for(let value of arguments)
        total += value; 

    return total; 

    // console.log(arguments); 
    // return a+b; 
}

console.log(sum2(1,2,3,4,5,6));
// This still takes first two arguments and return correct sum value 



// Function with varying number of parameters
