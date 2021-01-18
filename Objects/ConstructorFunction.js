// Camel Notation:
// Pascal Notation: OneTwoThreeFour


// Factory Function
function createCircle(radius, location ){
    return {
        radius,
        draw() {
            console.log('Draw');
        }
    
    };    
}

// Constructor Function 


function Circle(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw');
    }
}


const circle =  new Circle(2);