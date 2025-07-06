//declare variable
const inputName = document.getElementById("inputName");
const email = document.getElementById("email");
const phone_number = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const rePass = document.getElementById("rePassword");
const submit_box = document.getElementById("submit_box");
const allInput = document.querySelectorAll(".input_style");
const form_box = document.getElementById("form_box");
//end variable
//validator by Regular expression
const nameValidator = /^[A-Za-z\s]+$/;
const emailValidator = /^[\S]{3,13}(@gmail\.com)$/;
const bdNUmberValidator = /^\+?[88]{0,2}-?01[3456789]\d{8}$/;
const passValidator =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^*&]{8,}$/;
//end regex

//event listener
submit_box.addEventListener("click", (e) => {
  e.preventDefault();
  for (let element of allInput) {
    if (!element.value.trim()) {
      alert(element.name + " is blank");
      return;
    }
  }

  if (!nameValidator.test(inputName.value.trim())) {
    alert("Name is Invalid");
    return;
  } else if (!bdNUmberValidator.test(phone_number.value.trim())) {
    alert("Bd Phone Number Is Invalid");
    return;
  } else if (!emailValidator.test(email.value.trim())) {
    alert("email is invalid");
    return;
  } else if (!passValidator.test(password.value.trim())) {
    alert(
      "Write a Strong Password at list each 1(uppercase-lowercase-number-special character)of them"
    );
    return;
  } else if (password.value.trim() !== rePass.value.trim()) {
    alert("password not matched");
    return;
  }
  // for validation the  event has been stop by prevent default
  form_box.submit(); //manually submitting
});
