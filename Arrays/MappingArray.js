const numbers = [1,2,3,-1,-2]; 
const filtered = numbers.filter(n => n >=0); 
const items = filtered.map(n => '<li>' + n + '</li>');
// console.log(items);

const html = '<ul>'+ items.join('') + '</ul>';
console.log(html);



const items_new = filtered.map( n =>  ({value: n}));
// Bracket should be mentioned 
// {} represents the code block 
// To return object, we need to mention them in paranthesis 

console.log(items_new); 



//__________________________________________



// The below process is (chaining process/methond)

const items_modified_version = 
numbers
    .filter(n => n >=0)
    .map(n =>({value: n}))
    .filter(n => n.value > 1)
    .map(obj => obj.value);
    
    
console.log(items_modified_version)

//____________________________________________