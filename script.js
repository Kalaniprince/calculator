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

// Handle keyboard input
display.addEventListener('keydown', function(event) {
  const key = event.key;

  // Numbers, operators, and decimal
  if (/[0-9+\-*/.]/.test(key)) {
    event.preventDefault(); // Prevent default typing if we handle it
    appendToDisplay(key);
  }
  // Enter key for equals
  else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  }
  // Backspace to delete last character
  else if (key === 'Backspace') {
    event.preventDefault();
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
  // 'c' or 'C' to clear
  else if (key === 'c' || key === 'C') {
    event.preventDefault();
    clearDisplay();
  }
});

// Sync display with currentInput on direct input
display.addEventListener('input', function() {
  currentInput = display.value;
});