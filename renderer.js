// console.log("Values", window.myAPI);
// alert("Hello World");

// const NOTIFICATION_TITLE = "Title";
// const NOTIFICATION_BODY =
//   "Notification from the Renderer process. Click to log to console.";
// const CLICK_MESSAGE = "Notification clicked!";

// new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
//   () => (document.getElementById("output").innerText = CLICK_MESSAGE);

// Targetting input field
let fieldValue = ``;

// handling click event
let buttons = document.querySelectorAll(".components button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    registerValue(event);
  })
);

// handle calculations
let operandA;
let operandB;
let operator;

const registerValue = ({ target }) => {
  const field = document.querySelector("input#field");
  let operatorButton = target.getAttribute("operation");

  // check if button is an operator
  if (operatorButton) {
    if (!operandA && !operator && !fieldValue) {
      // do nothing;
      return;
    } else if (!operandA && !operator && fieldValue) {
      // update operandA and set operator
      operandA = Number(fieldValue);
      operator = operatorButton;
      // Now clear fieldValue but not actual field
      fieldValue = "";
    } else if (operandA && operator && fieldValue) {
      // execute operation
      alert("Do calculation");
      operandB = Number(fieldValue);
      console.log(operandA, operator, operandB);
    }
  } else {
    // any other button, update input field
    buttonValue = target.textContent;
    fieldValue = `${fieldValue}${buttonValue}`;
    field.value = `${fieldValue}`;
  }
};
