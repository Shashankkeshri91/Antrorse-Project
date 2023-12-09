// Function to perform arithmetic operations based on the provided operation
function myFuncOperation(op) {
  // Get the user input value and convert it to a floating-point number
  let inputNum = parseFloat(document.getElementById("userInput").value);

  // Variable to store the result of the operation
  let res = 0;

  // Switch statement to determine the operation based on the provided 'op' parameter
  switch (op) {
      // If the operation is '+2', add 2 to the input number
      case '+2':
          res = inputNum + 2;
          break;

      // If the operation is '-2', subtract 2 from the input number
      case '-2':
          res = inputNum - 2;
          break;

      // If the operation is '*2', multiply the input number by 2
      case '*2':
          res = inputNum * 2;
          break;

      // If the operation is '/2', divide the input number by 2
      case '/2':
          res = inputNum / 2;
          break;

      // If the operation is '%2', calculate the remainder of the input number divided by 2
      case '%2':
          res = inputNum % 2;
          break;

      // If the operation is not recognized, log an error message to the console and return
      default:
          console.log("Invalid Operation");
          return;
  }

  // Log the result to the console
  console.log('Result:', res);

  // Display the result in the result box
  document.getElementById('result').innerText = 'Result: ' + res;
}
