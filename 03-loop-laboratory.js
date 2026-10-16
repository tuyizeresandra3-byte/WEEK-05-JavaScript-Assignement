console.log("Loop Laboratory");

// 1. Print even numbers from 2 through 50 in ascending order.
// A for loop is useful because we know the starting and ending numbers.

let ascending = "Ascending: ";

for (let number = 2; number <= 50; number += 2) {
  ascending += number + " ";
}

console.log(ascending.trimEnd());


// 2. Print even numbers from 50 down to 2.
// A while loop repeats as long as its condition is true.

let number = 50;
let descending = "Descending: ";

while (number >= 2) {
  descending += number + " ";
  number -= 2;
}

console.log(descending.trimEnd());


// 3. Skip multiples of 6 between 1 and 30 using continue.
// continue skips the current iteration and moves to the next number.

console.log("Numbers from 1 to 30, skipping multiples of 6:");

for (let value = 1; value <= 30; value++) {
  if (value % 6 === 0) {
    continue;
  }

  console.log(value);
}


// 4. EXTRA CHALLENGE: Sum odd numbers from 1 through 99.

let sum = 0;

for (let odd = 1; odd <= 99; odd += 2) {
  sum += odd;
}

console.log("Sum of odd numbers from 1 to 99:", sum);
