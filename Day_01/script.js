// 1. Function that return the number of measurements that are greater than previous one
function measuresThatAreLargerThanPrevious(measures) {

  let res = 0; // Variable of final response

  // I iterate and check if the current measure is greater than the previous one
  for (let idx = 1; idx < measures.length; idx++) {
    if (measures[idx] > measures[idx - 1]) res++ // If is it then res incremented in 1
  }

  return res;
}

// 2. Function that return the sum that are greater than previous sum
function sumsThatAreGreaterThanPrevious(measures) {

  let res = 0; // Variable of final response
  let prevSum = measures[0] + measures[1] + measures[2]; // the first sum is inicializated

  // I iterate and check if the current sum is greater than previous sum
  for (let idx = 1; idx < (measures.length - 2); idx++) {
    const currentSum = measures[idx] + measures[idx + 1] + measures[idx + 2];
    
    if (currentSum > prevSum) res++ // If is it then res incremented in 1

    prevSum = currentSum; // The previous sum will be equals the current sum
  }

  return res;
}


// 2. Call the functions
console.log("Part One:");
console.log(
  `The number of measurements that are greater than previous one is: ${measuresThatAreLargerThanPrevious(puzzleInput)}`);

console.log("Part Two:");
console.log(
  `The sum that are greater than previous sum is: ${sumsThatAreGreaterThanPrevious(puzzleInput)}`);

