// Ex1. className

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.className = "active";
}

// Ex2, if-else & className(약점: 모든 className를 덮어버림)

function handleTitleClick2(){
    if(h1.className==="active"){
        h1.className = "";
    }else{
        h1.className = "active";
    }
}

// Ex3. Debugging By classList

function handleTitleClick3(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
}

// Refactoring by toggle

function handleTitleClick4(){
   h1.classList.toggle("clicked");   
}

h1.addEventListener("clicked", handleTitleClick4)
