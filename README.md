# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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
- Complete the form using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/assets/images/Screenshot 2025-02-17 at 09-46-22 Ticket Generator.png)

### Links

- Solution URL: [ solution URL ](https://github.com/Shaimaa01/Conference-ticket-generator)
- Live Site URL: [ live site URL ](https://conference-ticket-generator-kohl.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Formik](https://formik.org/) - Form management library
- [Yup](https://github.com/jquense/yup) - Schema validation library
- Semantic HTML5 markup
- js

### What I learned

During this project, I learned several key concepts and techniques that improved my understanding of web development:

- How to use the `<input type="file">` element to open a file explorer and select files for uploading.
- How to implement drag-and-drop functionality for file uploads, allowing users to drag a file into a designated area.
- How to pass values between pages/components using React Router's `navigate` function. This allows me to pass state (like form values) to another page, making the app more dynamic and interactive.
- How to make my components more organized by breaking them down into smaller, reusable parts for better maintainability and readability.
- The importance of web accessibility. I learned how to improve accessibility by properly associating `<label>` elements with inputs using `id` attributes.
- The significance of `aria-describedby` for providing additional context to users of assistive technologies, and how to use `aria-invalid` to indicate form validation errors, improving the experience for screen reader users.

These skills have allowed me to build more interactive, user-friendly, and accessible features while keeping my codebase clean and manageable.

```js
// Example of passing values with React Router's navigate function
navigate("/ticket", { state: values });
```
