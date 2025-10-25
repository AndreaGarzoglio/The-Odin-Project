const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

function operate(operator, a, b){
  a = Number(a);
  b = Number(b);
  if (operator === "+") return add(a,b);
  if (operator === "-") return subtract(a,b);
  if (operator === "*") return multiply(a,b);
  if (operator === "/") return divide(a,b);
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];

let calculator = {
  firstNumber: '',
  secondNumber: '',
  operator: null,
  displayValue: '',
  justCalculated: false
};

function updateDisplay() {
  display.textContent = calculator.displayValue || calculator.firstNumber || '0';
}

function resetCalculator() {
  calculator.firstNumber = '';
  calculator.secondNumber = '';
  calculator.operator = null;
  calculator.displayValue = '';
  calculator.justCalculated = false;
  updateDisplay();
}

function deleteLast() {
  if (calculator.justCalculated) {
    resetCalculator();
    return;
  }
  calculator.displayValue = calculator.displayValue.slice(0, -1);
  updateDisplay();
}

function inputNumber(value) {
  if (calculator.justCalculated) {
    calculator.displayValue = value;
    calculator.firstNumber = '';
    calculator.operator = null;
    calculator.justCalculated = false;
  } else {
    if (value === '.' && calculator.displayValue.includes('.')) return;
    calculator.displayValue += value;
  }
  updateDisplay();
}

function inputOperator(op) {
  if (!calculator.firstNumber) {
    calculator.firstNumber = calculator.displayValue;
    calculator.operator = op;
    calculator.displayValue = '';
    updateDisplay();
    return;
  }
  if (calculator.firstNumber && calculator.displayValue) {
    calculator.secondNumber = calculator.displayValue;
    const result = operate(calculator.operator, calculator.firstNumber, calculator.secondNumber);
    if (!isFinite(result)) {
      display.textContent = "Can't divide by 0!";
      resetCalculator();
      calculator.justCalculated = true;
      return;
    }
    calculator.firstNumber = result.toString();
    calculator.operator = op;
    calculator.displayValue = '';
    updateDisplay();
    return;
  }
  if (calculator.firstNumber && !calculator.displayValue) {
    calculator.operator = op;
  }
}

function calculate() {
  if (!calculator.firstNumber || !calculator.operator || !calculator.displayValue) return;
  calculator.secondNumber = calculator.displayValue;
  const result = operate(calculator.operator, calculator.firstNumber, calculator.secondNumber);
  if (!isFinite(result)) {
    display.textContent = "Can't divide by 0!";
    resetCalculator();
    calculator.justCalculated = true;
    return;
  }
  calculator.displayValue = '';
  calculator.firstNumber = result.toString();
  calculator.operator = null;
  calculator.justCalculated = true;
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim();
    if (value === 'Clear') resetCalculator();
    else if (value === 'Delete') deleteLast();
    else if (/[0-9.]/.test(value)) inputNumber(value);
    else if (operators.includes(value)) inputOperator(value);
    else if (value === '=') calculate();
  });
});

window.addEventListener('keydown', (e) => {
  const key = e.key;


  if (/^[0-9]$/.test(key) || key === '.') {
    inputNumber(key);
    return;
  }


  if (['+', '-', '*', '/'].includes(key)) {
    inputOperator(key);
    return;
  }

  if (key === 'Enter' || key === '=') {
    calculate();
    e.preventDefault(); 
    return;
  }

  if (key === 'Backspace') {
    deleteLast();
    return;
  }

  if (key === 'Escape') {
    resetCalculator();
    return;
  }
});

