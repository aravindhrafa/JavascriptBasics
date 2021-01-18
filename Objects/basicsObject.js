// let radius = 1;
// let x = 1;
// let y = 1;

// function draw(){}
// function move(){}


// The above concepts could be made to come under one roof through the OOPS concept 
// Through Object, those variables can be made accessable to various functions 
// Even function could also be written inside the Object, for internal using 
// Through . notation, we can access various values 



//Object Orientiated Style of Programming 
// Here, Object has certain values and functions 
// If a function is part of object, it could be called as the method  ----------> important 
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


circle.draw();