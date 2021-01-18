const numbers = [1,2,3]; 

for(let number of numbers)
    console.log(number);

numbers.forEach(function(number)
{
    console.log(number); 
}); 


// the above code could be further optimized as below 

numbers.forEach(number => console.log(number));
// This is clean one line of code 


// Passing two parameters inside forEach function 

numbers.forEach((number, index)=> console.log(index,number));