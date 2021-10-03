/*
    Design a user registration page which will accept following inputs from user:
    Username (max length 20 characters)
    Password (min length 8 characters, one lowercase letter, one uppercase letter and one special character)
    Email (validate email)
    Birth date (validate date)
    City (dropdown with 4 major cities)
    Programming Languages known (checkbox with values C, C++, Java, JavaScript, Python)
*/

////////////////////////////
// inputs
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const birthDataInput = document.getElementById("birth-date");
const cityInput = document.getElementById("city");

// error text box
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const dateError = document.getElementById("date-error");

////////////////////////////
// event listeners
usernameInput.addEventListener("blur", (e) => {
  validateData(e.target.value, "username");
});

emailInput.addEventListener("blur", (e) => {
  validateData(e.target.value, "email");
});

passwordInput.addEventListener("blur", (e) => {
  validateData(e.target.value, "password");
});

birthDataInput.addEventListener("blur", (e) => {
  validateData(e.target.value, "date");
});

////////////////////////////
// validation function
const validateData = (value, type) => {
  switch (type) {
    case "username":
      if (value.length < 5 || value.length > 20)
        usernameError.innerHTML =
          "Your username should be of minimum  length 3 and maximum length of 20";
      else usernameError.innerHTML = "";
      break;

    case "email":
      const e_pattern = /^[a-zA-Z0-9+_.-]+@[(gmail|yahoo).com]+$/;
      if (value.length < 3 || !e_pattern.test(value))
        emailError.innerHTML =
          "Your email should include @, gmail or yahoo and .com";
      else emailError.innerHTML = "";
      break;

    case "password":
      const p_pattern = /([a-z]|[A-Z])([A-Z]|[a-z])\d/;
      if (value.length < 8 || !p_pattern.test(value))
        passwordError.innerHTML =
          "Your password should be of minimum length 8 and should contain the following <br/> One uppercase letter <br/> One lowercase letter <br/> Two numeric digits";
      else passwordError.innerHTML = "";
      break;

    case "date":
      const d_pattern = /^\d{1}\-\d{1}\-\d{1,4}$/;
      if (value === "" || d_pattern.test(value))
        dateError.innerHTML =
          "Not a valid date. Please enter in mm/dd/yyyy format";
      else dateError.innerHTML = "";
  }
};
////////////////////////////
