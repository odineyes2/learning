// Ex1. submit을 Listen 하여 동작
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");

function onSubmit(){
    const username = loginInput.value;
    console.log(username);
};

loginForm.addEventListener("submit", onSubmit);
// submit Event를 catch할 때마다 page가 리셋됨.


// Ex2. EventLister Function & 1st Argument
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");

function onSubmit(event){  // 빈 변수(event)를 argument로 제공한다.
    event.preventDefault(); 
    console.log(event); // 방금 실행된 Event에 대한 정보가 출력됨
};

loginForm.addEventListener("submit", onSubmit);

/*
    1) 
    모든 EventListern Function의 첫번재 argument는 항상
    지금 막 벌어진 일들에 대한 정보이다.
    2) 
    argument를 주지 않으면 그러한 정보를 받지 않게 된다.(선택사항)
    3)
    preventDefault()는 EventLister 함수의 첫번째 argument 안에 있는 Function으로
    어떤 event의 기본행동이든지 발생되지 않도록 한다.
    4) 
    그러한 인자로 관례상 event를 사용한다.
*/ 