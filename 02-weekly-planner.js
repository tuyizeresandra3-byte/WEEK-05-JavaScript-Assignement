const day = 4;

switch (day) {
  case 1:
    console.log("Day 1: Monday — FREE TIME");
    break;

  case 2:
    console.log("Day 2: Tuesday — CLASS");
    break;

  case 3:
    console.log("Day 3: Wednesday — FREE TIME");
    break;

  case 4:
    console.log("Day 4: Thursday — CLASS");
    break;

  case 5:
    console.log("Day 5: Friday — FREE TIME");
    break;

  case 6:
    console.log("Day 6: Saturday — CLASS");
    break;

  case 7:
    console.log("Day 7: Sunday — FREE TIME");
    break;

  default:
    console.log("Invalid day number. Enter a number from 1 to 7.");
}


console.log("\nFULL WEEKLY SCHEDULE");

for (let number = 1; number <= 7; number++) {
  let dayName;
  let plan;

  switch (number) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
  }

  switch (number) {
    case 2:
    case 4:
    case 6:
      plan = "CLASS";
      break;
    default:
      plan = "FREE TIME";
  }

  console.log(`Day ${number}: ${dayName} — ${plan}`);
}


