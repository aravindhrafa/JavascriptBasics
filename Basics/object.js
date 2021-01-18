let person ={
    name : 'Aravindh',  
    age : 24 
};

console.log(person);
console.log(person.name); 
console.log(person.age);



// Dot notation to change the value of objects containing variables 
person.name = 'Durai'; 
person.age = 25;

console.log(person);
console.log(person.name); 
console.log(person.age);


let person1 = {
    name : 'Ravi', 
    age : 55
};

console.log(person1);

person1['name'] = 'Chitra'; 
console.log(person1.name);

// Bracket Notation (Advanced version) 
// This could be understood afte in depth understanding 

let selection = 'name'; 
person[selection] = 'Varsha'