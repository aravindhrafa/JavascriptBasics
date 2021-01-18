const person = {
    firstName : 'Aravindh', 
    lastName : 'Ravi'
}; 

console.log(`${person.firstName} ${person.lastName}`)

// The above code is the old fashioned way


//________________________________________________________

const person1 = {
    firstName : 'Aravindh', 
    lastName : 'Ravi', 
    fullName(){
        return `${person1.firstName} ${person1.lastName}`; 
    }
}; 


console.log(person1.fullName())


// Problem: This is read only type 
// We cannot do the update process 
// First and last Name update cannot be done through above process


//___________________________________________________________



// To Overcome the above problem

//  getters => access properties
//  setters => change (mutate) them 

const person2 = {
    firstName : 'Aravindh', 
    lastName : 'Ravi', 
    get fullName(){
        return `${person2.firstName} ${person2.lastName}`; 
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
}; 

person2.fullName = 'Ravi Chitra';


console.log(person2);