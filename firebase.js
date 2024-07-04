// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_Un1TqczbxqhDtl-1LywUlAYJEPxVsr4",
    authDomain: "login-9eded.firebaseapp.com",
    projectId: "login-9eded",
    storageBucket: "login-9eded.appspot.com",
    messagingSenderId: "887186744345",
    appId: "1:887186744345:web:e409ccd97dcfb201173688"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };



