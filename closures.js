function makeLoadedDie() {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  var i = -1;

  function rollDice() {
    i = i + 1;
    return list[i];
  }

  return(rollDice);
}

// **this is REALLY good way to explain how closure works:
// run this through REPL:
// console.log(makeLoadedDie)
// console.log(makeLoadedDie())
// console.log(makeLoadedDie()())

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6




// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());  // 1 (for example)