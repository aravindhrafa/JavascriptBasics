

showNumbers(10); 

// function showNumbers(limit){
//     if(limit > 11)
//         console.log('Limit is reached');
//     else{
//         for(let i=0; i<= limit; i++){
//             if(i%2 === 0)console.log(i,"EVEN");
//             else console.log(i,"ODD");
//         }
//     }

// }



// The above program could also be written as below 


function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        const message = (i%2 === 0 ) ? 'EVEN' : 'ODD'; 
        console.log(i, message)
    }
}

// The above method is easier for implementation