const rows = 5;

// A. Growing right triangle
console.log("A. Growing Right Triangle");

// The outer loop controls the number of rows.
// The inner loop adds one more star on each new row.
for (let row = 1; row <= rows; row++) {
  let line = "";

  for (let column = 1; column <= row; column++) {
    line += "*";
  }

  console.log(line);
}


// B. Inverted right triangle
console.log("\nB. Inverted Right Triangle");

// The outer loop starts at 5 and decreases to 1.
// The inner loop prints fewer stars on every new row.
for (let row = rows; row >= 1; row--) {
  let line = "";

  for (let column = 1; column <= row; column++) {
    line += "*";
  }

  console.log(line);
}


// C. Centered pyramid
console.log("\nC. Centered Pyramid");

// The outer loop controls each row.
// The first inner loop adds leading spaces.
// The second inner loop adds an odd number of stars:
// 1, 3, 5, 7, and 9.
for (let row = 1; row <= rows; row++) {
  let line = "";

  for (let space = 1; space <= rows - row; space++) {
    line += " ";
  }

  for (let star = 1; star <= 2 * row - 1; star++) {
    line += "*";
  }

  console.log(line);
}


// D. Inverted pyramid
console.log("\nD. Inverted Pyramid");

// The outer loop decreases the row number.
// Leading spaces increase while the number of stars decreases.
for (let row = rows; row >= 1; row--) {
  let line = "";

  for (let space = 1; space <= rows - row; space++) {
    line += " ";
  }

  for (let star = 1; star <= 2 * row - 1; star++) {
    line += "*";
  }

  console.log(line);
}


// E. Number staircase
console.log("\nE. Number Staircase");

// The outer loop controls the rows.
// The inner loop prints numbers from 1 up to the current row.
for (let row = 1; row <= rows; row++) {
  let line = "";

  for (let number = 1; number <= row; number++) {
    line += number;
  }

  console.log(line);
}


// F. Hollow square
console.log("\nF. Hollow Square");

// The outer loop controls the rows.
// The inner loop controls the columns.
// Stars appear on the border; spaces fill the inside.
for (let row = 1; row <= rows; row++) {
  let line = "";

  for (let column = 1; column <= rows; column++) {
    if (
      row === 1 ||
      row === rows ||
      column === 1 ||
      column === rows
    ) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}


console.log("\nG. Hollow Pyramid");

for (let row = 1; row <= rows; row++) {
  let line = "";

  // Add leading spaces to center the pyramid.
  for (let space = 1; space <= rows - row; space++) {
    line += " ";
  }

  // Print stars on the edges and on the bottom row.
  for (let column = 1; column <= 2 * row - 1; column++) {
    if (column === 1 || column === 2 * row - 1 || row === rows) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}



