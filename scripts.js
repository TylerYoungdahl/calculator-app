let previousValue = "";
let operator = "";
let currentValue = "";

const previousScreen = document.querySelector("#previous");
const currentScreen = document.querySelector("#current");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equalsBtn = document.querySelector("#equals");
const pointBtn = document.querySelector("#point");
const backspaceBtn = document.querySelector("#backspace");
const clearBtn = document.querySelector("#clear");

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  });
});

clearBtn.addEventListener("click", () => {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousScreen.textContent = previousValue;
  currentScreen.textContent = currentValue;
});

equalsBtn.addEventListener("click", () => {
  calculate();
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  console.log(previousValue);
}
