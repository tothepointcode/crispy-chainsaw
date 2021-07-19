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

const field = document.querySelector("input#field");
field.value = fieldValue;

let buttons = document.querySelectorAll(".keys button");

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let buttonValue = event.target.textContent;
    // fieldValue = `${fieldValue} ${buttonValue}`;
    field.value = buttonValue;
  })
);
