let calculation = [0, "0"];
let operator = "";


//Functionality buttons include Clear, negative/positive and Decimal point
function buttonFunctions(clicked_id) {
  switch (clicked_id) {
    case "clear":
      calculation = [0, "0"];
      operator = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "negativePositive":
      calculation[1] = calculation[1] * -1;
      document.getElementById("display").innerHTML = calculation[1];
      break;
    case "decimalPoint":
      calculation[1].includes(".") == true ? "" : calculation[1] = calculation[1] + ".";
      document.getElementById("display").innerHTML = calculation[1];
  }
}

//Chosen number is added to the calculation.
function buttonNumbers(clicked_id) {
  calculation[1] == "0" ? calculation[1] = clicked_id : calculation[1] = calculation[1] + clicked_id;
  calculation[1].length > 9 ? calculation[1] = calculation[1].substring(0,9) : "";
  console.log(calculation[1]);
  document.getElementById("display").innerHTML = calculation[1];
}

// Chosen operator is added to the calculation.
function buttonOperator(clicked_id) {
  switch (operator) {
    case "add":
      calculation[0] == 0 && calculation[1] == "0" ? calculation[0] = 0 : calculation[0] = calculation[0] + parseFloat(calculation[1]);
      calculation[1] = "0";
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      console.log(calculation);
      break;
    case "subtract":
      calculation[0] = calculation[0] - parseFloat(calculation[1]);
      calculation[1] = "0";
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      break;
    case "multiply":
      calculation[0] == 0 && calculation[1] == "0" ? calculation[0] = 0 : calculation[0] = calculation[0] * parseFloat(calculation[1]);
      calculation[1] = "0";
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      console.log(calculation)
      break;
    case "divide":
      calculation[0] == 0 && calculation[1] == "0" ? (calculation[0] = 0, document.getElementById("display").innerHTML = "WHAT?!")
      : (calculation[0] = calculation[0] / parseInt(calculation[1]), document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9));
      calculation[1] = "0";
      break;
    case "":
      calculation[0] = parseFloat(calculation[1]);
      calculation[1] = "0";
  }
  operator = clicked_id;
}
// Calculates the numbers and operators the user inputted.
function buttonCalculate() {
  switch (operator) {
    case "add":
      calculation[0] = calculation[0] + parseFloat(calculation[1]);
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      break;
    case "subtract":
      calculation[0] = calculation[0] - parseInt(calculation[1]);
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      break;
    case "multiply":
      calculation[0] = calculation[0] * parseInt(calculation[1]);
      document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9);
      break;
    case "divide":
      calculation[0] == 0 && calculation[1] == "0" ? (calculation[0] = 0, document.getElementById("display").innerHTML = "WHAT?!")
      : (calculation[0] = calculation[0] / parseInt(calculation[1]), document.getElementById("display").innerHTML = calculation[0].toString().substring(0,9));
      console.log(calculation);
      break;
    case "":
  }
}