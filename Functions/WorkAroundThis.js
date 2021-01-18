function playVideo(a,b){
    console.log(this);
}

playVideo(); // this will return window object 
playVideo.call({name: 'Aravindh'}, 1,2);  
// When object value is passed, 
// (this in function) will return value that is passed on the call() function


playVideo.apply({name: 'Aravindh'}, [1,2]); 



playVideo.bind({name: 'Aravindh'})(); 
// bind() method does not call the required function 
// Instead it creates a new function and points the value 
// that is  passed on bind method to 'this' value 