// 1. Submarine Location: the horizontal position, depth and aim
const submarineLocation = {
  Hposition: 0,
  depth: 0,
  aim: 0
}

// 2. Submarine Movements: Forward, Up, Down in X units
const movements = {
  forward: (x) => {
    submarineLocation.Hposition += x;
    submarineLocation.depth += (submarineLocation.aim * x);
  },
  down: (x) => submarineLocation.aim += x,
  up: (x) => submarineLocation.aim -= x
}

// 3. Function that returns the multiplication of the final horizontal position by the final depth.
function positionHxDepth(commands) {

  commands.forEach(cmd => movements[cmd[0]](Number(cmd[1])) );

  const {Hposition, depth} = submarineLocation;
  return (Hposition * depth);
}

// 4. Call the function
console.log(positionHxDepth(puzzleInput));


