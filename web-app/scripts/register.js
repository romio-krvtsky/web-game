import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import firebaseConfig from '../api/firebase-config.js';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();


const registerForm = document.querySelector('#authorization-form');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = registerForm.name.value;
    const password = registerForm.password.value;
    const confirmedPassword = registerForm.confirmedPassword.value;

    if (password !== confirmedPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered:', userCredential.user);
        window.location.href = "../html/signin.html";
    } catch (error) {
        console.error(error);
    }
});
