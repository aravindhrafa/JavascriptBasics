function sum(...items){
    return items.reduce((a,b) => a+b); 
}

console.log(sum(1,2,3,4));

// when array is passed inside the sum function 


function sum(...items){
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]]

    return items.reduce((a,b) => a+b); 
}

console.log(sum([1,2,3,4]));