let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}

display.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/[0-9+\-*/.]/.test(key)) {
    event.preventDefault();
    appendToDisplay(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key === 'c' || key === 'C') {
    event.preventDefault();
    clearDisplay();
  }
});

display.addEventListener('input', function() {
  currentInput = display.value;
});
