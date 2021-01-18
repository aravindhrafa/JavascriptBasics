// method  --> obj 
// function --> (global, window (In browser))

//_________________________________________________________________________________

const video = {
    title: 'a', 
    play(){
        console.log(this ); 
    }
}; 

video.stop = function() {    // Understanding -- stop is the method in the video object 
    console.log(this);
};

// Understanding -- stop is the method in the video object 

video.play(); 

//________________________________________________________________________________


// Use of this keyword inside the global function 

function playVideo(){
    console.log(this); 
}

playVideo(); // This will return window object 


//________________________________________________________________________________



//Use of this keyword inside the constructor 


function Video(title){
    this.title = title;
    console.log(this)
}

const v = new Video('b');



//________________________________________________________________________________




const videos = {
    title: 'a', 
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this,tag); 
            // this will throw the window object here, because 'this' is inside the global function 
            // this wont contain the videos object  
        }); 
    }
};

videos.showTags(); 


// To overcome the above problem: 



const videos = {
    title: 'a', 
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.titles,tag); 
        }, this); 
    }
};

videos.showTags(); 