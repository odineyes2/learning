// Ex1. onclick
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
};

title.addEventListener("click", handleTitleClick) // 실행될 함수의 이름만 적는다.

// Ex2. Object의 사용가능한 property 확인하기(1. mozillar 공식문서 확인하기 혹은 2.)

console.dir(title);

// Ex3. onmouseenter, onmouseleaver

function handleMouseEnter(){
    title.innerText = "Mouse is here!"
};

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
};

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleaver", handleMouseLeave);

// Ex4. Same Function 
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouserleave = handleMouseLeave;

// Ex5. window object, body Object

function handleBackColor (){
    document.body.style.backgroundColor = 'tomato';
};

window.addEventListener("resize", handleBackColor);

// Ex6. addEventLister(copy, online, offline)

title.addEventListener("copy", handleWindowCopy);
title.addEventListener("offline", handleWindowOffline);
title.addEventListener("online", handleWindowOnline);

function handleWindowCopy(){
    alert("copier!!");
};

function handleWindowOffline(){
    alert("offline!");
};

function handleWindowOnline(){
    alert("online!");
};

