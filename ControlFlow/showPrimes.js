showPrimes(10); 



//----Writing a piece of code --------------------

/*

function showPrimes(limit){
    for(let number =2; number<= limit; number++){
        let isPrime = true;
        for(let factor=2; factor< number ; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }if(isPrime) console.log(number);
    }       
}

*/

//----Writing a piece of code --------------------




//________________________Effective way of writing the above piece of code_______________________

function showPrimes(limit){
    for(let number = 2; number <= limit; number++)
        if(isPrime(number)) console.log(number);
}


// Reusable piece of code
function isPrime(number){
    for(let factor = 2; factor < number ; factor++)
            if(number % factor  === 0)
                return false;            
        return true;
}

//________________________Effective way of writing the above piece of code_______________________