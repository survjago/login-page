// Get the forms and form containers
const signupForm = document.querySelector('.form-box .form');
const loginForm = document.querySelector('.form-box .form');
const formContainer = document.querySelector('.form-container');

// Add event listeners to the forms
signupForm.addEventListener('submit', signupHandler);
loginForm.addEventListener('submit', loginHandler);


// function signupHandler(event) {
//     event.preventDefault();
//     const fullName = document.querySelector('#full-name').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     localStorage.setItem('fullName', fullName);
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     alert('Signup successful!');
//     window.location.href = 'login.html'; // Redirect to login page
//   }


    


// // Function to handle login form submission
// function loginHandler(event) {
//   event.preventDefault();
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//   const storedEmail = localStorage.getItem('email');
//   const storedPassword = localStorage.getItem('password');
//   if (email === storedEmail && password === storedPassword) {
//     alert('Login successful!');
//     // Display the list of logged-in users
//     const userlist = document.createElement('ul');
//     userlist.innerHTML = `<li>${storedEmail}</li>`;
//     formContainer.appendChild(userlist);
//   } else {
//     alert('Invalid credentials!');
//   }
//   // Check if user just signed up
//   if (!localStorage.getItem('justSignedUp')) {
//     localStorage.setItem('justSignedUp', true);
//   } else {
//     localStorage.removeItem('justSignedUp');
//   }
// }


let signedUp = false;

function signupHandler(event) {
  event.preventDefault();
  const fullName = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  localStorage.setItem('fullName', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  alert('Signup successful!');
  signedUp = false;
  window.location.href = 'login.html'; // Redirect to login page
}

function loginHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const errorMessage = document.querySelector('.error-message');
    if (email === storedEmail && password === storedPassword) {
        console.log('Login credentials match');
      if (!signedUp) {
        errorMessage.innerHTML = 'Login successful!';
      }
      // Display the list of logged-in users
      const userlist = document.createElement('ul');
      userlist.innerHTML = `<li>${storedEmail}</li>`;
      formContainer.appendChild(userlist);
    } else {
      errorMessage.innerHTML = 'Invalid email or password! Please try again.';
    }
    signedUp = false;
    
  }