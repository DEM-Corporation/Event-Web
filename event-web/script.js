function readAll(){
    const box = document.querySelector(".box");

    let tag="";

    for (var i=0; i<3; i++){
        tag += `
        <div class="review_item"> 
        <img class="profile_image" src="Images/profile_circle.svg"> </img>
        <p class="review_author_nickname"> Mikhail Maevskiy </p>
        <p class="review_publication_date"> 01.11.2021 09:49</p>
        <img class="review_image" src="Images/menu_icon.svg"></img>
        <p class="main_text_review"> Nice party! Party, party. Party </p>
        <img class="like_btn" src="Images/like_filled.svg"> </img>
        <img class="comment_btn" src="Images/comment_icon.svg"> </img>
        <p class="likes_txt"> Likes: 1</p> 
        </div>
        `;
    }

    box.innerHTML = tag;
}

function logout(){
    firebase.auth().signOut();
    window.alert("logged out");
    window.location.href="signup.html";
}

readAll();

const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle"),
      item = body.querySelector(".review_item");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
    item.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})