//1. Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.
let sum = 0
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0 || i % 5 == 0) {
        sum += i
    }
}
console.log(sum)

//2. Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, 
// it should print: // Output: // 3 x 1 = 3 // 3 x 2 = 6

let num = 4
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


//3. Use a for loop to create the following pattern: output
let variable = "variable";
let count = 0;
for (let i = 1; i <= 10; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
        console.log(str);
    }
}

//4. Detect Perfect Numbers A perfect number is a positive integer that is equal to the sum of its proper
// divisors (excluding the number itself). Write a program using a for loop to check if a given number is a perfect number.
// // Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28
let num2 = 28
let sum1 = 0
for (let i = 1; i < num2; i++) {
    if (num2 % i === 0) {
        sum1 += i
    }
}
if (sum1 === num2) {
    console.log(`${num2} is a perfect number.`);
} else {
    console.log(`${num2} is not a perfect number.`);
}