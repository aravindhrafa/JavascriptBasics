const first = [1,2,3]; 
const second = [4,5,6]; 

const combined = first.concat(second); 
console.log(combined);

const slice = combined.slice(2,4);
console.log(slice);

const slice1 = combined.slice(2); 
console.log(slice1); 


const sliceCopy = combined.slice(); 
console.log(sliceCopy); 
// taking copy of the array


const first1 = [{id:1}]; 
const second1 = [4,5,6];

const combined1 = first1.concat(second1);
console.log(combined1);



first1[0].id = 10; 
const combined2 = first1.concat(second1); 
console.log(combined2);