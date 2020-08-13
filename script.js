submitbtn = document.getElementById("submit");
emailInpt = document.getElementById("email");
hint = document.querySelector(".hint");

submitbtn.onclick = function() {
    if(emailInpt.value == "") {
        hint.style.visibility = "visible";
        emailInpt.style.border = "1px solid red";
    }
}

emailInpt.onfocus = function() {
    hint.style.visibility = "hidden";
    emailInpt.style.border = "1px solid hsl(0, 0%, 59%)";
}