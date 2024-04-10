
// Ex1
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// Ex1-1. Refactory
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

// Ex2. onclick Event

function handleLoginBtnClick(){
    console.dir(loginInput);  // 정답은 .value property이지만 찾아봐라.
    console.log(loginInput.value)
    console.log("click");
};
loginButton.addEventListener("click", handleLoginBtnClick);

// Ex3. valid check

function onLoginBtnClick(){
    const username = loginInput.value;
    if (username === ""){
        alert("Please write your name.")
    }else if(username.length > 15){
        alert("Your name is too long.")
    }else{

    }
};
loginButton.addEventListener("click", onLoginBtnClick);

// Ex3-1. refactory - 06 submission 에서. 