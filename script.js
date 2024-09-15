let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let previousValue = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousValue !== null) {
        calculate();
    }
    operation = op;
    previousValue = parseFloat(currentInput);
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousValue = null;
    operation = null;
    display.value = '';
}

function calculate() {
    if (operation === null || currentInput === '') return;
    const currentNumber = parseFloat(currentInput);
    let result;
    switch (operation) {
        case '+':
            result = previousValue + currentNumber;
            break;
        case '-':
            result = previousValue - currentNumber;
            break;
        case '*':
            result = previousValue * currentNumber;
            break;
        case '/':
            if (currentNumber === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = previousValue / currentNumber;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    operation = null;
    previousValue = null;
}
