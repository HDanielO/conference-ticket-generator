"use strict";
const emailInputElm = document.querySelector("#emailInput");
const emailValidStatusElm = document.querySelector(".emailValidStatus");

//Email verification functionality

const handleEmailVerification = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const emailInputValue = emailInputElm.value;

  if (!emailRegex.test(emailInputValue)) {
    emailValidStatusElm.classList.remove("displayNone");
    emailInputElm.style.border = "2px solid var(--orange-500)";
  } else {
    emailValidStatusElm.classList.add("displayNone");
    emailInputElm.style.border = "2px solid var(--neutral-500)";
  }
};
