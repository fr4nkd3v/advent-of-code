
let numbers;
let boards = [];
let winnerBoards = [];

const formatLine = (line) => line.trim().replace(/  /g, " ");

const getLineArr = (line) => line.split(" ")
                                 .map(line => line * 1);

function getInitialData(puzzleInput) {
  numbers = puzzleInput.shift()
    .split(",")
    .map( n => n * 1);

  // Iteramos los tableros
  for (let str of puzzleInput) {
    
    boards.push([]);
    let lines = str.split("\n");
    
    for (let line of lines) {
      const lineArr = getLineArr( formatLine(line) );
      boards[boards.length - 1].push( lineArr );
    }
  }
}

function markBoard(board, num) {
  
  for (const row of board) {
    
    for (const idx in row) {
      row[idx] = (row[idx] === num) ? "X" : row[idx];
    }
  }
}

function isWinnBoard(board) {

  const columns = [[], [], [], [], []];

  for (let row in board) { // Itero y verifica las filas
    
    for (let n in board[row]){ // De paso guardo las columnas en un array
      columns[n].push(board[row][n]);
    }
    
    const win = board[row].every((n) => n === "X"); // "true" si toda la fila está marcada, sino "false"
    if (win) return win; // Si es true retorna true
  }

  for (let col of columns) { // "true" si toda la columna está marcada, sino "false"
    const win = col.every((n) => n === "X");
    if (win) return win; // Si es true retorna true
  }

  return false;
}

function notMarkedSum(board) {

  let sum = 0;
  for (const row of board) {
    sum += row.filter( n => n !== "X" )
      .reduce( (acc, n) => acc + n, 0)
  }
  return sum;
}

function isThereWinnerBoard(calledN) {

  for (let idx in boards) {

    let bingo = isWinnBoard(boards[idx]);

    if (bingo) {

      const obj = {
        board: [...boards[idx]],
        calledN: calledN
      }
      winnerBoards.push(obj);
      boards.splice(idx, 1);
    }
  }

  // return false;
}

function callNumbers(nums) {

  for(let n of nums) {
  
    for (let board of boards) {
      markBoard(board, n);
    }

    isThereWinnerBoard(n);
    // if (typeof isThere === "number") { // Si hay tablero ganador
    //   return isThere * n;
    // }

  }

}

function getLastWinnerBoard() {

  const obj = winnerBoards[winnerBoards.length - 1];
  const n = obj.calledN;
  const s = notMarkedSum(obj.board);

  const board = {
    board: obj,
    calledN: n,
    sum: s,
    score: n * s
  }
  
  return board;
}

// . Call the second function
getInitialData(puzzleInput);
callNumbers(numbers);
console.log(getLastWinnerBoard());