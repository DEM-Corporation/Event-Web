const box = document.querySelector(".box");

let tag="";

for (var i=0; i<3; i++){
    tag += "<p class='il'> Hello, World </p>";
}

box.innerHTML = tag;