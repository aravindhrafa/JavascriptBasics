const colors = ['red','green','blue']; 

for(let index in colors)
    console.log(index, colors[index]);


for(let color of colors)
    console.log(color);
    // This will print value not the index value 
    // This is the usage of 'for......of' 