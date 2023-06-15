import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhO78HqaOV41fWlCFxtssdYvOXQSMY3EA",
    authDomain: "coin-game-f51a7.firebaseapp.com",
    projectId: "coin-game-f51a7",
    storageBucket: "coin-game-f51a7.appspot.com",
    messagingSenderId: "517801551065",
    appId: "1:517801551065:web:31232413cbbbbc865a4ac8",
    measurementId: "G-35Z4JBZMKN"
};

const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

