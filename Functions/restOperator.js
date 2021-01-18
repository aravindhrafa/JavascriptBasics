function sum(...args){
    console.log(args);
    // Array of six elements

    // Elegant and more professional 
    return args.reduce((a,b) => a+b)
}
console.log(sum(1,2,3,4,5,10));



//______________________________________________________

function shopping(discount, ...prices){
    
    const total =  prices.reduce((a,b) => a+b); 
    return total * (1-discount); 
}

console.log(shopping(0.1, 20,30))


//______________________________________________________




function shopping1(discount, ...prices, someValue){
 //Trying to include thid argument : someValue 
 
 
 //This throws error like Rest parameter must be last formal parameter
    const total =  prices.reduce((a,b) => a+b); 
    return total * (1-discount); 
}

console.log(shopping1(0.1, 20,30, 1))
// Rest parameter must always be the last parameter to be included inside the function 
