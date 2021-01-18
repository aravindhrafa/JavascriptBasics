// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// console.log(true && true); 
// console.log(true && false);
// console.log(false && true);


let highIncome = false; 
let goodCreditScore = false; 

let eligibleForLoan = highIncome && goodCreditScore; 
console.log('Eligible for Loan: ' , eligibleForLoan);


// Logical OR(||)

let eligibleForLoanOnOR = highIncome || goodCreditScore; 
console.log(eligibleForLoanOnOR); 



// NOT operator (!)
let applicationRefused = !eligibleForLoanOnOR; 
console.log("Application refused: " , applicationRefused);

