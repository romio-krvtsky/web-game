import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import firebaseConfig from './api/firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
    if (user) {
        const userEmail = user.email;
        window.localStorage.setItem("userEmail", userEmail);
        const cityElement = document.querySelector('.footer-content__city');
        cityElement.textContent = userEmail;

        const signInButton = document.querySelector('.authorization__link-block[href="html/signin.html"]');
        const registerButton = document.querySelector('.authorization__link-block[href="html/register.html"]');
        const signOutButton = document.querySelector('.authorization__link-block[href="index.html"]');
        signInButton.style.display = 'none';
        registerButton.style.display = 'none';
        signOutButton.style.display = 'block';


        signOutButton.addEventListener('click', () => {
            signOut(auth)
                .then(() => {
                    console.log('User is signed out');
                })
                .catch((error) => {
                    console.log(error);
                });
        });

    } else {
        const newGameLink = document.getElementById("new-game-link");
        newGameLink.addEventListener("click", function(event) {
            event.preventDefault();
            alert("YOU SHOULD SIGN IN!");
        });
        console.log('User is not logged in');
    }
});