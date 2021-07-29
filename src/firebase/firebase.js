import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDCSf4shzM31NovRx6sNwc_ilVqtUkAwlU",
    authDomain: "expensetracker-c87cd.firebaseapp.com",
    databaseURL: "https://expensetracker-c87cd-default-rtdb.firebaseio.com",
    projectId: "expensetracker-c87cd",
    storageBucket: "expensetracker-c87cd.appspot.com",
    messagingSenderId: "866908809019",
    appId: "1:866908809019:web:17975d5bf21bb852ce791e",
    measurementId: "G-7E0194B84G"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };

