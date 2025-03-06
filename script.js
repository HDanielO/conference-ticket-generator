"use strict";
// Selecting the DOM elements
const mainElm = document.querySelector("main");
const ticketSectionElm = document.querySelector(".ticket-section");

const unUploadedLayoutElm = document.querySelector(".un-uploaded-layout");
const uploadedLayoutElm = document.querySelector(".uploaded-layout");
const uploadedImageELm = document.querySelector("#uploaded-image");
const uploadStatusElm = document.querySelector(".uploadStatus");
const errorUploadStatusElm = document.querySelector(".errorUploadStatus");
const emailValidStatusElm = document.querySelector(".emailValidStatus");

// INPUT ELEMENTS
const imageInputELm = document.querySelector("#imageInput");
const fullNameInput = document.querySelector("#fullNameInput");
const emailInputElm = document.querySelector("#emailInput");
const userNameInputElm = document.querySelector("#userNameInput");

// TICKET ELEMENTS
const userFullNameElms = document.querySelectorAll(".user-fullname");
const userEmailElm = document.querySelector("#user-email");
const userGithubUsernameElm = document.querySelector("#user-github-username");
const userImageElm = document.querySelector("#user-image");
const ticketCodeElm = document.querySelector("#ticket-code");

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

//handle upload functionality
const handleUpload = () => {
  const imageUpload = imageInputELm.files[0];
  uploadedImageELm.src = URL.createObjectURL(imageUpload);

  if (imageUpload.size <= 512000) {
    unUploadedLayoutElm.classList.add("displayNone");
    uploadedLayoutElm.classList.remove("displayNone");
    console.log(imageUpload);
  } else {
    console.log(imageUpload);
    uploadStatusElm.classList.add("displayNone");
    errorUploadStatusElm.classList.remove("displayNone");
    console.log(imageUpload);
  }
};

//Generate ticket functionality

// Get your form element
const form = document.querySelector("form");

const generateTicket = () => {
  mainElm.classList.add("displayNone");
  ticketSectionElm.classList.remove("displayNone");
  const ticketCode = "#" + Math.round(Math.random() * 10 ** 5);

  userFullNameElms.forEach((ufnElm) => {
    ufnElm.textContent = fullNameInput.value;
  });

  userEmailElm.textContent = emailInputElm.value;
  userGithubUsernameElm.textContent = userNameInputElm.value;
  userImageElm.src = URL.createObjectURL(imageInputELm.files[0]);
  ticketCodeElm.textContent = ticketCode;
};

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the quick refresh

  // Check if all required fields are filled
  if (form.checkValidity() && imageInputELm.files.length > 0) {
    // Also check if image is uploaded
    generateTicket();
  } else {
    // Optionally show an error message
    alert("Please fill in all fields and upload an image");
  }
});

// Remove Upload Functionality
const removeUpload = () => {
  imageInputELm.value = ""; //resets the value of the file
  unUploadedLayoutElm.classList.remove("displayNone");
  uploadedLayoutElm.classList.add("displayNone");
};

// Change Upload Functionality
const changeUpload = () => {
  imageInputELm.click();
  handleUpload();
};

//Things learnt
//1. form validation - learnt how to use checkValidity() and its limitations
//2. learnt about the click() method that can be use to click an html element from js
//3. learnt how to get the url of an uploaded file with URL.createObjectURL() method
//4. Also learnt how to get the size of the uploaded file with the .size property
//5. learnt that the properties of an uploaded file is stored  as an object in a files array which can be accessed by the .files property of the input(file) element
//6. And you can access the item by .files[0] since it's the first and only file that is stored in the array except you specify multiple attribute in the input(file) element.
//7. Also learnt that to reset the value of tht input(file), you have to set t=its value to "" (input.value = ""), instead of resetting the .files array to [] an empty array.
//8. also learnt about .preventDefault() method, a method that prevents the default behavior of an event from happening, so i used it to prevents a form doing the default setting of submitting, when the submit event is activated.
