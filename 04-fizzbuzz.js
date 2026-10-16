console.log("FizzBuzz with a Twist");

let fizzBuzzCount = 0;
let output = "";

// Loop through numbers from 1 to 150.
for (let number = 1; number <= 150; number++) {
  let result = "";

  // Check multiples of 3, 5, and 7 together first.
  // Precedence: FizzBuzzPop, FizzBuzz, FizzPop, BuzzPop, Fizz, Buzz, Pop.
  if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
    result = "FizzBuzzPop";
  } else if (number % 3 === 0 && number % 5 === 0) {
    result = "FizzBuzz";
    fizzBuzzCount++;
  } else if (number % 3 === 0 && number % 7 === 0) {
    result = "FizzPop";
  } else if (number % 5 === 0 && number % 7 === 0) {
    result = "BuzzPop";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else if (number % 7 === 0) {
    result = "Pop";
  } else {
    result = number;
  }

  output += result;

  if (number < 150) {
    output += ", ";
  }
}

console.log(output);
console.log("Total FizzBuzz outputs:", fizzBuzzCount);

