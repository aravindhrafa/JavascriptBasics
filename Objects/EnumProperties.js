const circle = {
    radius : 1, 
    draw(){
        console.log('draw');
    }
}; 

for(let key in circle)
    console.log(key, circle[key]);

for(let key of Object.keys(circle))
    console.log(key); 

for(let entry of Object.entries(circle))
    console.log(entry); 
    // This will give output as key and value pair
    // Object.entries(argument) is being used here 
    // The output will be in the form of array with key and value (paired)


if('radius' in circle) console.log('yes');
if('color' in circle) console.log('yes');
// False statement, so no output is being displayed here

