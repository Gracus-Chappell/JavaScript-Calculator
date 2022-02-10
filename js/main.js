let calculation = [0, ""];
let operator = "";

//Chosen number is added to the calculation.
function buttonNumbers(clicked_id) {
  calculation[1] == "0" ? calculation[1] = clicked_id : calculation[1] = calculation[1] + clicked_id;
  document.getElementById("display").innerHTML = calculation[1];
  console.log(calculation);
}

// Chosen operator is added to the calculation.
function buttonOperator(clicked_id) {
  switch (operator) {
    case "add":
      calculation[0] = calculation[0] + parseInt(calculation[1]);
      calculation[1] = "0";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "subtract":
      calculation[0] = calculation[0] - calculation[1];
      calculation[1] = "0";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "multiply":
      calculation[0] = calculation[0] * parseInt(calculation[1]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "divide":
      calculation[0] = calculation[0] / parseInt(calculation[1]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "":
      calculation[1] !== "" ? calculation[0] = parseInt(calculation[1]) : "";
      calculation[1] = "";
  }
  operator = clicked_id;
  console.log(calculation);
}
// Calculates the numbers and operators the user inputted.
function buttonCalculate() {
  switch (operator) {
    case "add":
      calculation[0] = calculation[0] + parseInt(calculation[1]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "subtract":
      calculation[0] = calculation[0] - parseInt(calculation[1]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "multiply":
      calculation[0] = calculation[0] * parseInt(calculation[2]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "divide":
      calculation[0] = calculation[0] / parseInt(calculation[1]);
      calculation[1] = "";
      document.getElementById("display").innerHTML = calculation[0];
      break;
    case "":
      calculation[1] = "";
  }
  operator = "";
  console.log(calculation);
}