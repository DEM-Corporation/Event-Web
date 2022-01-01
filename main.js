// import {getDatabase, ref, onValue} from "firebase/database"
// import {getAuth} from "firebase/auth"

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

window.onload = (event) => {


    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    var name = document.getElementById("name");
    name.innerHtml="OPP";

    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    });
    document.getElementById("clicked_item").style.backgroundColor = "#1D1B31";

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        };
    }


    const db = getDatabase();


    const auth = getAuth();
    const user = firebase().auth().currentUser;
    const uid=user.uid;
    const ref = firebase().database().ref();
    ref.child("Users").child(uid).child("name").get().then((snapshot)=>{
        if (snapshot.exists()){
            name.innerHTML=snapshot.val();
        }else{
            name.innerHTML="Error";
        }
    })

}