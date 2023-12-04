function myFuncOperation(op){
    let inputNum = parseFloat(document.getElementById("userInput").value);
    let res = 0;
  
    switch(op){
      case '+2':
  res = inputNum + 2;
        break;
      case '-2':
        res = inputNum- 2;
        break;
      case '*2':
        res = inputNum * 2;
        break;
      case '/2':
        res = inputNum/ 2;
        break;
      case '%2':
        res = inputNum%2;
        break;
      default:
        console.log("Invalid Operation");
        return;
    }
    // Log the result to the console
    console.log('Result:', res);
  
    // Display the result in the result box
    document.getElementById('result').innerText = 'Result: ' + res;
  
  }