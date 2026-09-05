function login() {
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("main").style.display = "none";
}
function createone() {
    document.getElementById("create-account").style.display = "flex";
    document.getElementById("login-page").style.display = "none";
    document.querySelector(".create-account").style.display = "inline-block";
    document.querySelector(".login-page-1").style.display = "none";
}

var form = document.getElementById("form-for-order")
function ordernow(event) {
    form.style.display = "block"
    document.getElementById("order-container-1").style.display = "flex";
    document.getElementById("main").style.display = "none";
    document.getElementById("footer-area").style.display = "block";
}
function acryliccaricature() {
    document.getElementById("order-summary-one").style.display = "inline-block";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";
}
function acrylicnambeboard() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "inline-block";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";

}
function acrylickeychain() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "inline-block";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";
}
function flexprint() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "inline-block";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";
}
function hdvinyl() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "inline-block";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";
}
function multicolr() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "inline-block";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "none";
}
function offsetprint() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "inline-block";
    document.getElementById("order-summary-eight").style.display = "none";
}
function businesscard() {
    document.getElementById("order-summary-one").style.display = "none";
    document.getElementById("order-summary-two").style.display = "none";
    document.getElementById("order-summary-three").style.display = "none";
    document.getElementById("order-summary-four").style.display = "none";
    document.getElementById("order-summary-five").style.display = "none";
    document.getElementById("order-summary-six").style.display = "none";
    document.getElementById("order-summary-seven").style.display = "none";
    document.getElementById("order-summary-eight").style.display = "inline-block";
}

function loginaccount() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main").style.display = "inline-block";
    document.getElementById("loginaccountfirst").style.display = "none";
    document.getElementById("image-btn-div-0").style.display = "inline-block";
}
function imagebtn() {
    document.getElementById("image-btn-onclick").style.display = "inline-block";
}
function closebtn() {
    document.getElementById("image-btn-onclick").style.display = "none"
}
function signout() {
    document.getElementById("image-btn-div-0").style.display = "none"
}

var loginpage = document.getElementById("loginaccount")
var createaccount = document.getElementById("create-account")

loginpage.addEventListener("click", function () {
    createaccount.style.display = "none";
    document.querySelector(".login-page-1").style.display = "block";
    document.getElementById("login-page").style.display = "flex";

})