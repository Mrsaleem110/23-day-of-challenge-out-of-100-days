// *Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// *Explain & TIP:* When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.

// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}

// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2))