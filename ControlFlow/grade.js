const marks = [80,80,50]; 
// Average = 70
// 1-59 : F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


console.log(calculateGrade(marks));
function calculateGrade(marks){
    const average = calculateAverage(marks); 
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}


function calculateAverage(array){
    let total = 0;
    for(let i=0; i<marks.length;i++)
        total += marks[i];
    return total/marks.length;
}