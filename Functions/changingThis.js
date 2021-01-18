const video = {
    title: 'a', 
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function (tag){
            console.log(this.title, tag);
        }, this); 
    } 
}; 

video.showTags(); 



//________ 1st method to overcome this usage(above appraoch)_________________


const video1 = {
    title: 'a', 
    tags : ['a','b','c'],
    showTags(){
        const self = this;
        this.tags.forEach(function (tag){
            console.log(self.title, tag);
        }); 
    } 
}; 

video1.showTags(); 


//__________ 2nd method to overcome this usage(above appraoch)____________




const video2 = {
    title: 'a', 
    tags : ['a','b','c'],
    showTags(){
        //const self = this;
        this.tags.forEach(function (tag){
            console.log(this.title, tag);
        }.bind(this)); 
    } 
}; 

video2.showTags(); 



//__________  3rd solution _____________________________

const video3 = {
    title: 'a', 
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => {
            // Here Arrow function inherts this objects internally
            console.log(this.title, tag);
        }); 
    } 
}; 

video3.showTags(); 