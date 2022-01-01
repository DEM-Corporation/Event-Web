import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

var config = {
    apiKey: "AIzaSyBhJFUzz0NFPfj2FUHsVKHwWNMg_IrFKv8",
    authDomain: "event-platform-c45a3.firebaseapp.com",
    databaseURL: "https://event-platform-c45a3.firebaseio.com",
    projectId: "event-platform-c45a3",
    storageBucket: "event-platform-c45a3.appspot.com",
    messagingSenderId: "563366618488",
    appId: "1:563366618488:web:b37cb2239453af872b548d",
    measurementId: "G-LX04DHY8L7"
};
firebase.initializeApp(config);

const db = getDatabase();


const auth = getAuth();
const user = firebase().auth().currentUser;
const uid=user.uid;
const ref = firebase().database().ref();
ref.child("Users").child(uid).child("name").get().then((snapshot)=>{
    if (snapshot.exists()){
        name.innerHTML=snapshot.val();
    }else{
        name.innerHTML="PPP";
    }
})