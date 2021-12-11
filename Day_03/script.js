// 1. Zeros and Ones Sums by row
const binaryRes = {
  '0': 0,
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 0,
  '8': 0,
  '9': 0,
  '10': 0,
  '11': 0,
};

// 2. Gamma and Epsilon resultant Binary 
let gammaBinary = "",
  epsilonBinary = "";

// 3. Function that convert a binary to decimal
function binToDec(bin) {
  let dec = 0;
  const values = [1];

  const lastNumber = () => values[values.length - 1];

  for (let i = 1; i < bin.length; i++) values.push(lastNumber() * 2);
  values.sort((a, b) => b - a);

  for (let idx in bin) {
    dec += bin[Number(idx)] === '1' ? values[idx] : 0;
  }

  return dec;
}

// 4. Function that returns the multiplication of the Gamma and Epsilon decimals
function gamEpsMultiplication(report) {

  // Iterate the binaries report for sum zeros and ones
  report.forEach(element => {
    // Iterate the letters of current binary
    for (let idx in element) {
      if (element[idx] === '0') binaryRes[idx]--;
      else                      binaryRes[idx]++;
    }
  });

  // Make the Gamma and Epsilon Binarys
  for (let c of Object.values(binaryRes)) {
    gammaBinary += (c > 0) ? '1' : '0';
    epsilonBinary += (c < 0) ? '1' : '0';
  }

  // And Return the multiplication of Gamma Decimal by Epsilon Decimal
  return binToDec(gammaBinary) * binToDec(epsilonBinary);
}

// 5. Call the function
console.log(gamEpsMultiplication(puzzleInput));


// 6. Function that return the life support Rating
function lifeSupportRate(report) {

  let arrOxigenGR = [...report];
  let arrCO2SR = [...report];

  for (let i = 0; i < report[0].length; i++) {

    function f(arr, i, str) {

      let check = 0;

      arr.forEach(element => {

        if (element[i] === '0') check--;
        else check++;
      });

      if (str === "oxi")  c = (check < 0) ? '0' : '1';
      else                c = (check < 0) ? '1' : '0';

      arr = arr.filter(element => element[i] === c);

      return arr;
    }

    if (arrOxigenGR.length > 1) {
      arrOxigenGR = f(arrOxigenGR, i, "oxi");
    }
    if (arrCO2SR.length > 1) {
      arrCO2SR = f(arrCO2SR, i, "co2");
    }

  }

  return binToDec(arrOxigenGR[0]) * binToDec(arrCO2SR[0]);
}

// 7. Call the second function
console.log(lifeSupportRate(puzzleInput));