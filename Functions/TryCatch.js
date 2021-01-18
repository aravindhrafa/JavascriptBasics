const person = {
    firstName : 'Aravindh', 
    lastName : 'Ravi', 
    set fullName(value){
        if(typeof value !== 'string') 
            throw new Error('Value is not a string.');


        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');

            
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}; 


person.fullName = ''; 
console.log(person); 
// This results in  ===> {firstName: "", lastName: undefined}

try{
person.fullName = null;
}
catch(e){
    alert(e);
}
console.log(person);
// Throws error like cannot read property split 