// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click",onLoginBtnClick);
*/

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

//-- argument로 event정보가 들어간다.
function onLoginSubmit(argument) {
    
    // -> 어떤 event의 기본 행동이 발생되지 않도록 막는다.
    argument.preventDefault();
    console.log(argument)
}

loginForm.addEventListener("submit", onLoginSubmit)
