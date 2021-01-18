const number = [1,2,3, -1, -2]; 
const allPositives = number.every(function(element){
    return element >= 0; 
});

console.log(allPositives); 


const atleastOnePositives = number.some(function(element){
    return  element >= 0; 
}); 

console.log(atleastOnePositives);