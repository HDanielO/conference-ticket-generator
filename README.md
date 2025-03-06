# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Conference ticket generator solution](#frontend-mentor---conference-ticket-generator-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- [Solution URL](https://github.com/HDanielO/conference-ticket-generator)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Things Learnt :

1. form validation - learnt how to use checkValidity() and its limitations
2. learnt about the click() method that can be use to click an html element from js
3. learnt how to get the url of an uploaded file with URL.createObjectURL() method
4. Also learnt how to get the size of the uploaded file with the .size property
5. learnt that the properties of an uploaded file is stored as an object in a files array which can be accessed by the .files property of the input(file) element
6. And you can access the item by .files[0] since it's the first and only file that is stored in the array except you specify multiple attribute in the input(file) element.
7. Also learnt that to reset the value of tht input(file), you have to set t=its value to "" (input.value = ""), instead of resetting the .files array to [] an empty array.
8. also learnt about .preventDefault() method, a method that prevents the default behavior of an event from happening, so i used it to prevents a form doing the default setting of submitting, when the submit event is activated.

DIFFICULTY FACED:

1. preventing the form from submitting and still being able to validate the user input.
2. Styling: styling continually to be a challenge(functionality is so sweet to code)
3. Responsiveness of the ticket-card: This should be under styling but I just had to point it out because of the tough time it gave(I had to write numerous media queries for just one property😭)

### Continued development

In previous projects, I said I was going to continue building with mobile-first workflow; well this is my second project with it. I'm happy it went well(to be honest, I actually prefer it now)

I'm still yet to build an independent project with React or with tailwind, so that's something I'm still looking forward.

I also would like to build something that involves fetching data from an API(sigh tutorial hell is too real, pray for me guys)

### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - This helped me with my problem on how to prevent form default submission and how to check validation of a form without having to submit.
-
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Still the GOAT of web dev resources, if I'm to list the things I learnt from it while building this project, it'll be too long for you to read.

## Author

- Frontend Mentor - [@HDanielO](https://www.frontendmentor.io/profile/HDanielO)
- Twitter/X - [@HameedDaniel\_](https://www.x.com/HameedDaniel_)

## Acknowledgments

Thank you Lord God.
