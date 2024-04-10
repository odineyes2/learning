
// Ex1. document Object getElementByID Method
const title = document.getElementById("catchMe");


title.innerText = "Got you!"
console.log(title.className);

/*
Description : Most of the time, we don't use ID. 
It is comfortable to use but we use className more or both 
*/

// Ex2. class & querySelector Method : Element를 CSS 방식으로 불러올 수 있다.

const hellos = document.getElementsByClassName("hellos");

console.log(hellos) // object가 아닌 array임을 알 수 있다. 즉, method를 사용하여 상호작용 할 수 없다.

const hellos2 = document.querySelector(".hellos");

// Ex3. querySelectorAll : 해당되는 모든 요소를 array로 return한다. querySelector는 첫번째 것만 return함.

const hellos2 = document.querySelectorAll(".hellos h1");
console.log(hellos2) // Array가 출력된다.

// Ex4. combination #id:first-child

const hellos3 = document.querySelector("#hello:first-child h1");
// class hello를 가진 div 내부의 first-child인 h1를 return한다.

title.innerText = "Hello";