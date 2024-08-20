import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDccScW4VtN3qQooMQCy28uyMFP7fpi1b0",
  authDomain: "e-commerce-webpage-b25c3.firebaseapp.com",
  projectId: "e-commerce-webpage-b25c3",
  storageBucket: "e-commerce-webpage-b25c3.appspot.com",
  messagingSenderId: "1005475178615",
  appId: "1:1005475178615:web:e2c73205524d7e0c8dbe72",
  measurementId: "G-XWD6FCKZB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get references to login form, signup form, and buttons to switch between them
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

// Event listener to switch to signup form when the 'Sign Up' button is clicked
showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

// Event listener to switch to login form when the 'Sign In' button is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

// Function to handle sign up
signupForm.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Account created successfully!');
            // Redirect to login page or other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

// Function to handle login
loginForm.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Login successful!');
            // Redirect to dashboard or perform other actions
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

import { signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Function to handle sign out
document.getElementById('logoutButton').addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('User signed out successfully!');
        // Optionally, redirect to the login page
        window.location.href = 'login.html';
    }).catch((error) => {
        alert(`Error: ${error.message}`);
    });
});



                /*--pseudo code-- *

                           START

                           // Get references to login form, signup form, and buttons to switch between them
                           DECLARE loginForm AS REFERENCE TO ELEMENT WITH ID 'loginForm'
                           DECLARE signupForm AS REFERENCE TO ELEMENT WITH ID 'signupForm'
                           DECLARE showSignupBtn AS REFERENCE TO ELEMENT WITH ID 'showSignup'
                           DECLARE showLoginBtn AS REFERENCE TO ELEMENT WITH ID 'showLogin'
                           
                           // Event listener to switch to signup form when the 'Sign Up' button is clicked
                           DEFINE FUNCTION ON 'click' EVENT OF showSignupBtn
                               ADD CLASS 'hidden' TO loginForm
                               REMOVE CLASS 'hidden' FROM signupForm
                           END FUNCTION
                           
                           // Event listener to switch to login form when the 'Sign In' button is clicked
                           DEFINE FUNCTION ON 'click' EVENT OF showLoginBtn
                               REMOVE CLASS 'hidden' FROM loginForm
                               ADD CLASS 'hidden' TO signupForm
                           END FUNCTION
                           
                           // Event listener for login form submission
                           DEFINE FUNCTION ON 'submit' EVENT OF FORM INSIDE loginForm
                               PREVENT DEFAULT FORM SUBMISSION BEHAVIOR
                           
                               // Get the input values
                               DECLARE email AS VALUE OF INPUT ELEMENT WITH ATTRIBUTE type="Your email" INSIDE loginForm
                               DECLARE password AS VALUE OF INPUT ELEMENT WITH ATTRIBUTE type="Your password" INSIDE loginForm
                           
                               // Check if the email and password are correct
                               IF email IS EQUAL TO 'musosa@yahoo.com' AND password IS EQUAL TO 'musa123'
                                   DISPLAY ALERT 'Login successful!'
                                   // Redirect or perform other actions on successful login
                               ELSE
                                   DISPLAY ALERT 'Invalid email or password.'
                               END IF
                           END FUNCTION
                           
                           END

                           */

                           /*----psuedo explanation---*
                           Detailed Explanation
                        1. Get References to Elements:
                           
                           Retrieve and store references to the login form, signup form, and buttons that switch 
                           between the forms using their respective IDs.
                        2. Event Listener to Switch to Signup Form:
                           
                           Define a function that executes when the 'Sign Up' button is clicked.
                           In this function:
                           Add the 'hidden' class to the login form to hide it.
                           Remove the 'hidden' class from the signup form to show it.
                        3. Event Listener to Switch to Login Form:
                           
                           Define a function that executes when the 'Sign In' button is clicked.
                           In this function:
                           Remove the 'hidden' class from the login form to show it.
                           Add the 'hidden' class to the signup form to hide it.
                        4. Event Listener for Login Form Submission:
                           
                           Define a function that executes when the form inside the login form is submitted.
                           In this function:
                           Prevent the default form submission behavior to handle the submission with JavaScript.
                           Retrieve the values of the email and password input fields inside the login form.
                           Check if the retrieved email and password match the predefined credentials ('musosa@yahoo.com' and 'musa123').
                           If the credentials match, display a success alert and optionally redirect or perform other actions.
                           If the credentials do not match, display an error alert.
                           Final Note
                           This pseudo code abstracts the JavaScript functionality into high - level steps, making it easier to understand
                            the flow and logic of the login authentication process.             
                                                -- */