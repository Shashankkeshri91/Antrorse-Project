// Function to check if a number is prime
function checkPrime() {
    // Get the user input as a number
    var number = parseInt(document.getElementById('numberInput').value);
    
    // Assume the number is prime
    var isPrime = true;

    // Check for special cases
    if (number < 2) {
        isPrime = false; // Numbers less than 2 are not prime
    } else {
        // Check divisibility up to the square root of the number
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false; // If divisible, the number is not prime
                break;
            }
        }
    }

    // Log the result to the console and display it
    console.log(displayResult(isPrime ? number + ' is a Prime Number' : number + ' is not a Prime Number'));
}

// Function to generate Fibonacci sequence
function fibonacci() {
    // Get the user input as the length of the sequence
    var n = parseInt(document.getElementById('numberInput').value);
    
    // Initialize an array with the first two Fibonacci numbers
    var fibArray = [0, 1];

    // Generate the Fibonacci sequence up to the specified length
    for (var i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    // Display the result
    displayResult('Fibonacci Sequence: ' + fibArray.join(', '));
}

// Function to check if a number is a strong number
function checkStrong() {
    // Get the user input as a number
    var number = parseInt(document.getElementById('numberInput').value);
    
    // Store the original number for comparison later
    var originalNumber = number;
    
    // Initialize the sum
    var sum = 0;

    // Calculate the sum of factorials of individual digits
    while (number > 0) {
        var digit = number % 10;
        var factorial = 1;

        // Calculate the factorial of each digit
        for (var i = 1; i <= digit; i++) {
            factorial *= i;
        }

        // Add the factorial to the sum
        sum += factorial;

        // Move to the next digit
        number = Math.floor(number / 10);
    }

    // Check if the sum is equal to the original number
    var isStrong = sum === originalNumber;

    // Display the result
    displayResult(isStrong ? originalNumber + ' is a Strong Number' : originalNumber + ' is not a Strong Number');
}

// Function to check if a number is an Armstrong number
function checkArmstrong() {
    // Get the user input as a number
    var number = parseInt(document.getElementById('numberInput').value);
    
    // Store the original number for comparison later
    var originalNumber = number;
    
    // Calculate the number of digits in the original number
    var n = originalNumber.toString().length;

    // Initialize the sum
    var sum = 0;

    // Calculate the sum of digits raised to the power of n
    while (number > 0) {
        var digit = number % 10;
        sum += Math.pow(digit, n);
        number = Math.floor(number / 10);
    }

    // Check if the sum is equal to the original number
    var isArmstrong = sum === originalNumber;

    // Display the result
    displayResult(isArmstrong ? originalNumber + ' is an Armstrong Number' : originalNumber + ' is not an Armstrong Number');
}

// Function to calculate the factorial of a number
function calculateFactorial() {
    // Get the user input as a number
    var number = parseInt(document.getElementById('numberInput').value);
    
    // Initialize the factorial
    var factorial = 1;

    // Calculate the factorial of the number
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    displayResult('Factorial of ' + number + ' is ' + factorial);
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
    // Get the user input as a temperature in Celsius
    var celsius = parseFloat(document.getElementById('numberInput').value);
    
    // Calculate the equivalent temperature in Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    displayResult(celsius + '°C is equal to ' + fahrenheit.toFixed(2) + '°F');
}

// Function to display the result in the 'result' div
function displayResult(message) {
    document.getElementById('result').innerText = message;
}
