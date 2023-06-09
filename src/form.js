import "./form.css";

// create a form element
const form = document.createElement("form");

// create a input element for name
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "Enter your name");

// create a input element for email
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Enter your email");

// create a submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Submit";

// append all the elements to the form
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitBtn);

// append the form to the body
document.body.appendChild(form);
