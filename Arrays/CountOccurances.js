const numbers = [1,2,3,4]; 
const count = countOccurances(numbers, 1); 
console.log(count);

function countOccurances(array, searchElement){

// This is normal implemetation

    // let count = 0; 
    // for(let element of array)
    //     if(element === searchElement)
    //         count++; 
    // return count; 


// The below is conceptual based implementation 

return array.reduce((accumulator, current) => { 
    const occurrence = (current === searchElement) ? 1 : 0;


    console.log(accumulator, current, searchElement); 

    
    return accumulator + occurrence}, 0);

}