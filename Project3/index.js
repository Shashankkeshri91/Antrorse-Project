function checkPrime() {
    var number = parseInt(document.getElementById('numberInput').value);
    var isPrime = true;

    if (number < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

   console.log( displayResult(isPrime ? number + ' is a Prime Number' : number + ' is not a Prime Number'));
}




function fibonacci() {
    var n = parseInt(document.getElementById('numberInput').value);
    var fibArray = [0, 1];

    for (var i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    displayResult('Fibonacci Sequence: ' + fibArray.join(', '));
}

function checkStrong() {
    var number = parseInt(document.getElementById('numberInput').value);
    var originalNumber = number;
    var sum = 0;

    while (number > 0) {
        var digit = number % 10;
        var factorial = 1;

        for (var i = 1; i <= digit; i++) {
            factorial *= i;
        }

        sum += factorial;
        number = Math.floor(number / 10);
    }

    var isStrong = sum === originalNumber;
    displayResult(isStrong ? originalNumber + ' is a Strong Number' : originalNumber + ' is not a Strong Number');
}

function checkArmstrong() {
    var number = parseInt(document.getElementById('numberInput').value);
    var originalNumber = number;
    var n = originalNumber.toString().length;
    var sum = 0;

    while (number > 0) {
        var digit = number % 10;
        sum += Math.pow(digit, n);
        number = Math.floor(number / 10);
    }

    var isArmstrong = sum === originalNumber;
    displayResult(isArmstrong ? originalNumber + ' is an Armstrong Number' : originalNumber + ' is not an Armstrong Number');
}

function calculateFactorial() {
    var number = parseInt(document.getElementById('numberInput').value);
    var factorial = 1;

    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    displayResult('Factorial of ' + number + ' is ' + factorial);
}

function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById('numberInput').value);
    var fahrenheit = (celsius * 9/5) + 32;
    displayResult(celsius + '°C is equal to ' + fahrenheit.toFixed(2) + '°F');
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
}