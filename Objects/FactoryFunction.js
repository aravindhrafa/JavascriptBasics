/*

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    }, 
    isVisible : true,
    draw: function() {
        console.log('Draw');
    }

};


const circle2 = {
    radius: 1,
    location: {
        x:1,
        y:1
    }, 
    isVisible : true,
    draw: function() {
        console.log('Draw');
    }

};


*/
//__________________________________________________________________________________________________

// the above thing is the process of creating two objects having same values
// and same functions 

// But the above way is not the efficient way of the coding, because, same function 
// is present on two objects and it might lead to contridiction on the future 
// If there are 10 other methods inside object, then, complication might arise even further

//__________________________________________________________________________________________________


// Factory function 


/*

function createCircle(radius, location ){
    return {
        radius: radius,
        location: location, 
        isVisible : true,
        draw: function() {
            console.log('Draw');
        }
    
    };    
}

*/ 

//                             |
//                             |
//                             |
//                             |
//                             |
//                             Y


// Optimized factory function

function createCircle(radius, location ){
    return {
        radius,
        draw() {
            console.log('Draw');
        }
    
    };    
}


const circle1 = createCircle(1); 
console.log(circle1); 


const circle2 = createCircle(2); 
console.log(circle2); 