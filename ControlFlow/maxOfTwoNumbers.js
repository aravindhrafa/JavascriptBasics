let num1 = 10; 
let num2 = 11; 

if(num1 < num2)
    console.log(num2);
else
    console.log(num1);


// function max(a,b){
//     if(a > b) return a;
//     else return b;
// }


//Most optimized way of the above code 

// function max(a,b){
//     if(a>b) return a;

//     return b;
// }

// Even better optimized way of writing the above code 

function max(a,b){
    return (a>b) ? a:b;
}


let number = max(3,2); 
console.log(number);