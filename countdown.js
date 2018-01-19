var countdownGenerator = function (x) {

// var output = ["T-minus 3...", "T-minus 2...", "T-minus 1...", "Blast Off!", "Rockets already gone, bub!", "Rockets already gone, bub!"];

// if (x = 3) {var i = -1};
// if (x = 3) {var i = -1};
// if (x = 3) {var i = -1};

var i = x;

function tminus() {
    if (i > 0)
      console.log("T minus " + i);
    else if (i == 0)
      console.log("BLAST OFF");
    else
      console.log("rockets already gone bub!");
    i = i - 1;
  };
  return(tminus);
}

// **this is REALLY good way to explain how closure works:
// run this through REPL:
// console.log(countdownGenerator)
// console.log(countdownGenerator(3))
// console.log(countdownGenerator(3)(3))
  /* your code here */

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!