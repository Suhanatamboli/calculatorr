let display = document.getElementById('display');
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value); 
        console.log('Result: ', result);
        alert('Result: ' + result);
        display.value = result; 
    } catch (e) {
        alert('Error in the expression');
        display.value = ''; 
    }
}
function performSquareRoot() {
    let currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        alert('Please enter a valid number for square root.');
        return;
    }
    let result = Math.sqrt(currentValue);
    console.log('Square root: ', result);
    alert('Square root: ' + result);
    display.value = result; 
}

function performExponentiation() {
    let currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        alert('Please enter a valid number for exponentiation.');
        return;
    }
    let result = Math.pow(currentValue, 2); 
    console.log('Exponentiation: ', result);
    alert('Exponentiation: ' + result);
    display.value = result; 
}

function performModulus() {
    let currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        alert('Please enter a valid number for modulus.');
        return;
    }
    let modulus = prompt("Enter the divisor for modulus operation:");
    if (modulus === null || modulus === '') {
        return;
    }
    let result = currentValue % parseFloat(modulus);
    console.log('Modulus: ', result);
    alert('Modulus: ' + result);
    display.value = result; 
}
