const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USERNAME_KEY = "username";
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");


function paintGreeting(username){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`;
};

function onSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    loginForm.classList.add("hidden") ;
};

if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onSubmit);
}else{
    loginForm.classList.add("hidden") ;
    paintGreeting(savedUsername);    
};



