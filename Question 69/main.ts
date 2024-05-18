
// *Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

// *Explain & TIP:* Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.

// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}

// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3));