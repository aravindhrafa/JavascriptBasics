const courses = [
    { id: 1, name : 'a'},
    { id: 2, name : 'b'}
]; 



// first finding 

console.log(courses.includes('a'));
// This will return  ''false''  value 

console.log(courses.includes({id:1, name: 'a'})); 
// This will also return ''false'' value 


// ________________to overcome the above issue____________________




// _____________ Using .find(function(element))___________________

const course = courses.find(function(course){
    return course.name === 'a';
})
console.log(course);
// This will return object with values that are present inside the object 


const course1 = courses.find(function(course){
    return course.name === 'xyz';
})
console.log(course1);
// This will return 'undefined' value 


// ________________to overcome the above issue____________________



// _____________ Using .findIndex(function(element))___________________



const course2 = courses.findIndex(function(course){
    return course.name === 'a';
})
console.log(course2);
// This will return 0 value as index value  


const course3 = courses.findIndex(function(course){
    return course.name === 'xyz';
})
console.log(course3);
// This will return -1 as the value 