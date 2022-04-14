//Stores the last operator clicked.
let operator = "";
// Stores the number into the firstNumber variable when the user presses an operator.
let firstNumber = "";
//The number that the user can input to the calculator.
let lastNumber = "0";
//When the user presses calculate, the answer is added to this variable.
let answer = "";


//Functionality buttons include Clear, negative/positive and Decimal point.
function buttonFunctions(clicked_id) {
  switch (clicked_id) {
    case "clear":
      firstNumber = "";
      lastNumber = "0";
      operator = "";
      answer = "";
      document.getElementById("display").innerHTML = lastNumber;
      break;
    case "negativePositive":
      lastNumber = lastNumber * -1;
      document.getElementById("display").innerHTML = lastNumber.toString().substring(0,9);
      break;
    case "decimalPoint":
      lastNumber.includes(".") == true ? "" : lastNumber = lastNumber + ".";
      document.getElementById("display").innerHTML = lastNumber;
  }
}

//Chosen number is added to the lastNumber variable.
function buttonNumbers(clicked_id) {
  answer !== "" || lastNumber == "0" ? (answer = "", lastNumber = "", lastNumber = lastNumber + clicked_id, lastNumber = lastNumber) : lastNumber = lastNumber + clicked_id;
  lastNumber.length > 9 ? lastNumber = lastNumber.substring(0,9) : "";
  document.getElementById("display").innerHTML = lastNumber;
      
}

// Chosen operator is added to the operator variable.
function buttonOperator(clicked_id) {
  switch (operator) {
    case "add":
      firstNumber == 0 && lastNumber == "0" ? firstNumber = 0 : firstNumber = firstNumber + parseFloat(lastNumber);
      lastNumber = "0";
      document.getElementById("display").innerHTML = firstNumber.toString().substring(0,9);
      break;
    case "subtract":
      firstNumber == 0 && lastNumber == "0" ? lastNumber = "0" : firstNumber = firstNumber - parseFloat(lastNumber);
      lastNumber = "0";
      document.getElementById("display").innerHTML = firstNumber.toString().substring(0,9);
      break;
    case "multiply":
      firstNumber == 0 && lastNumber == "0" ? firstNumber = 0 : firstNumber = firstNumber * parseFloat(lastNumber);
      lastNumber = "0";
      document.getElementById("display").innerHTML = firstNumber.toString().substring(0,9);
      break;
    case "divide":
      lastNumber == "0" ? (firstNumber = 0, document.getElementById("display").innerHTML = "ErRoR?!") : 
      (firstNumber = firstNumber / parseFloat(lastNumber), document.getElementById("display").innerHTML = firstNumber.toString().substring(0,9));
      lastNumber = "0";
      break;
    case "":
      answer !== "" ? firstNumber = parseFloat(lastNumber) : firstNumber = parseFloat(lastNumber);
      lastNumber = "0";
  }
  operator = clicked_id;
}

// Calculates the firstNumber and lastNumber variables based on which operator the user last clicked.
function buttonCalculate() {
  switch (operator) {
    case "add":
      answer = firstNumber + parseFloat(lastNumber);
      document.getElementById("display").innerHTML = answer.toString().substring(0,9);
      firstNumber = "";
      lastNumber = answer.toString();
      operator = "";
      break;
    case "subtract":
      answer = firstNumber - parseFloat(lastNumber);
      document.getElementById("display").innerHTML = answer.toString().substring(0,9);
      firstNumber = "";
      lastNumber = answer.toString();
      operator = "";
      break;
    case "multiply":
      answer = firstNumber * parseFloat(lastNumber);
      document.getElementById("display").innerHTML = answer.toString().substring(0,9);
      firstNumber = "";
      lastNumber = answer.toString();
      operator = "";
      break;
    case "divide":
      answer = firstNumber / parseFloat(lastNumber);
      lastNumber == "0" ? (firstNumber = 0, document.getElementById("display").innerHTML = "ErRoR?!") : 
      (firstNumber = firstNumber / parseFloat(lastNumber), document.getElementById("display").innerHTML = firstNumber.toString().substring(0,9));
      firstNumber = "";
      lastNumber = answer.toString();
      operator = "";
      break;
    case "":
  }
}