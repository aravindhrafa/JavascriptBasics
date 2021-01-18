const person = {
    name: "Aravindh",
    age : 24
}; 

for(let index in person)
    console.log(index, person[index]);

const colors = ['red','green','blue']; 
for (let index in colors)
    console.log(index, colors[index]); 


// _________________________explore _____________________________
for(let j in colors)
    console.log(j, colors.j);
    // Need to explore this concept, why colors.j is showing undefined valuel 

// _________________________explore _____________________________