const marks = [78, 45, 92, 60, 33, 87, 50, 69];

let passCount = 0;
let failCount = 0;
let highest = marks[0];
let lowest = marks[0];
let total = 0;

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;

// for...of visits each mark in the array.
for (const mark of marks) {
  total += mark;

  // Find the highest mark.
  if (mark > highest) {
    highest = mark;
  }

  // Find the lowest mark.
  if (mark < lowest) {
    lowest = mark;
  }

  // Count passes and failures. A mark of 50 is a pass.
  if (mark >= 50) {
    console.log(`Mark: ${mark} | PASS`);
    passCount++;
  } else {
    console.log(`Mark: ${mark} | FAIL`);
    failCount++;
  }

  // Count grades using the assignment's grade bands.
  if (mark >= 80) {
    gradeA++;
  } else if (mark >= 70) {
    gradeB++;
  } else if (mark >= 60) {
    gradeC++;
  } else if (mark >= 50) {
    gradeD++;
  } else {
    gradeF++;
  }
}

// Calculate the average after processing all marks.
const average = total / marks.length;

// Print the summary.
console.log(`Passed: ${passCount} | Failed: ${failCount}`);
console.log(`Highest: ${highest} | Lowest: ${lowest} | Average: ${average.toFixed(2)}`);
console.log(`Grades: A=${gradeA} | B=${gradeB} | C=${gradeC} | D=${gradeD} | F=${gradeF}`);
