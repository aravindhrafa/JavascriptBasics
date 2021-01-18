const circle = {
    radius: 1, 
    draw() {
        console.log('draw');
    }
}

// const another = {}; 
// for(let key in circle)
//     another[key]  =  circle [key];


// The above code could be simplified using below approach 
const another = Object.assign({}, circle); 
// Here {} can be empty or already contain methods and properties 
// second argument is the object having methods and properties which need to be assign to another object 





const another1 = { ...circle};
// cloning an object concept 
// Easiest way of copying one object to another object 
// ...  ---> Spread operator : Takes properties and methods and put inside the curly braces



console.log(another);
console.log(another1);