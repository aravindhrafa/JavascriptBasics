const output = FizzBuzz(true); 
console.log(output); 

function FizzBuzz(input){
    if (typeof input !== 'number')
        //return 'Not a number'; 
        return NaN

    if((input %3 === 0)  && (input %5 ===0))
        return 'Fizzbuzz';

    if(input %3 === 0 )
        return 'Fizz';
    
    if(input %5 === 0 )
        return 'Buzz';
    
    return input;
}