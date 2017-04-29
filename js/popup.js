var link = document.querySelector(".adres .btn");
var pop = document.querySelector(".popup");
var closedoc = document.querySelector(".close");
var login = pop.querySelector("[name=sender]");
var password = pop.querySelector("[name=mail-sender]");
var form = pop.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault();
    pop.classList.add("popup-show");
    login.focus();

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});


closedoc.addEventListener("click", function (event) {
    event.preventDefault();
    pop.classList.remove("popup-show");
});

form.addEventListener("submit", function (event) {
    if (!(login.value && password.value)) {
        event.preventDefault();
        console.log("Нужно заполнить поля");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (pop.classList.contains("popup-show")) {
            pop.classList.remove("popup-show");
        }
    }
});