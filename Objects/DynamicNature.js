const circle = {
    radius: 1
}; 

// cicrle = {}       // This assignment to constant variable is not possible 
// we can add values and methods to constant objects(objects on say)

circle.color = 'yellow'; 
circle.draw = function (){

}

console.log(circle);
console.log(circle.draw);


delete circle.color; 
delete circle.draw; 

console.log(circle);