// Hour
// If hour is between 6AM and 12 PM: Good Morning!
// If it is between 12PM and 6 PM: Good Afternoon!
// Otherwise: Good Evening!


let hour = 19; 

if(hour >= 6 && hour < 12){
    console.log("Good Morning!");
}
else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon!")
}

else{
    console.log("Good Evening!");
}