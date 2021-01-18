const array = [1,2,3,4]

console.log(countTruthy(array));

function countTruthy(array){
    let count = 0; 
    for(let x of array){
        if(x)
            count++; 
    }return count;

}