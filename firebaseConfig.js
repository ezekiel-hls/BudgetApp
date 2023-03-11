import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhKab-krUut4ub_IazGJG_JuslbdAf9F4",
    authDomain: "budgetapp-c1bac.firebaseapp.com",
    projectId: "budgetapp-c1bac",
    storageBucket: "budgetapp-c1bac.appspot.com",
    messagingSenderId: "336779764068",
    appId: "1:336779764068:web:79b380cde36cbba9d6da71",
    measurementId: "G-HEKWEG3F5N",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
