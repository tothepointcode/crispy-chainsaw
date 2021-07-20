// Targetting input field
let fieldValue = ``;

// handling click event
let buttons = document.querySelectorAll(".components button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    registerValue(event);
  })
);

// syncing keyboard input with keys click
const field = document.querySelector("input#field");
field.addEventListener("input", (event) => {
  updateField(event.target);
});

// handle calculations
let operandA;
let operandB;
let operator;
let screenContent;

// keep track of values inputted
const registerValue = ({ target }) => {
  let operatorButton = target.getAttribute("operation");
  const screen = document.querySelector(".screen");

  // check if button is an operator
  if (operatorButton && operatorButton === "clear") {
    // handle clear, no need for calculations
    operandA =
      operandB =
      operator =
      fieldValue =
      field.value =
      screen.textContent =
      screenContent =
        "";
  } else if (operatorButton && operatorButton === "del") {
    // handle backspace
    field.value = fieldValue = field.value.slice(0, -1);
  } else if (operatorButton) {
    // when an operator button is clicked

    if (!operandA && !operator && !fieldValue) {
      // do nothing when no value is set;
      return;
    } else if (
      (!operandA && !operator && fieldValue) ||
      (operandA && operator && field.value && !fieldValue)
    ) {
      // update operandA and set operator
      operandA = Number(fieldValue || field.value);
      operator = operatorButton;

      // output operation on screen
      screen.textContent = screenContent = `${operandA} ${produceSymbol(
        operator
      )}`;

      // Now clear fieldValue but not actual field
      fieldValue = "";
    } else if (operandA && operator && fieldValue) {
      // execute operation, store results in opA & operand in operand.
      operandB = Number(fieldValue);

      // display second operand on screen
      screen.textContent = `${screenContent} ${operandB} =`;

      // calculate and put result in operand A and field
      operandA = field.value = doCalculation();
      fieldValue = operandB = "";

      if (operatorButton !== "equals") {
        // for a continuos calculation
        operator = operatorButton;

        // output operation on screen
        screenContent = `${operandA} ${produceSymbol(operator)}`;
      }
    }
  } else {
    // any other button, update input field
    updateField(target);
  }
};

// update input field value
const updateField = ({ textContent, value }) => {
  // if value is from keyboard, we use that. Else we append values from our buttons
  fieldValue = textContent ? `${fieldValue}${textContent}` : value;
  field.value = `${fieldValue}`;
};

// perform operation
const doCalculation = () => {
  // switch for appropriate operation
  switch (operator) {
    case "add":
      return operandA + operandB;

    case "multiply":
      return operandA * operandB;

    case "subtract":
      return operandA - operandB;

    case "divide":
      return operandA / operandB;
  }
};

// produce symbol for small screen
const produceSymbol = (operator) => {
  switch (operator) {
    case "add":
      return "+";

    case "multiply":
      return "x";

    case "subtract":
      return "-";

    case "divide":
      return "/";

    case "equals":
      return "=";
  }
};
