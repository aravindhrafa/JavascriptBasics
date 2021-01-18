function Circle(radius){
    this.radius =  radius, 
    this.draw = function(){
        console.log('draw'); 
    }
}

const another  = new Circle(1); 


// For representing in-built constructor inside JavaScript 
// The below code is scripted 

const Circle1 = new Function('radius', `
this.radius = radius, 
this.draw = function(){
    console.log('draw');
}`);

const cicrle = new Circle1(2);



Circle.call({}, 1); 
// Here, inside call function(), {} arguments will take values that arrive from this.radius
// 1 is abother argument that will be applied explicitly


Circle.apply({}, [1,2,3,4]);

// The above concepts, explained us, the functions are objects on the Javascript 


