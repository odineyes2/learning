// Ex1. if-else

const h1 = document.querySelector("div.hello:first-child h1");

h1.addEventListener("click", handleTitleClick);

function handleTitleClick(){
    if(h1.computedStyleMap.color==="blue"){
        h1.computedStyleMap.color="tomato";
    }else{
        h1.computedStyleMap.color="blue";
    }
};

// Ex2. Refactoring

const h1 = document.querySelector("div.hello:first-child h1");

h1.addEventListener("click", handleTitleClick);

function handleTitleClick(){
    const currentColor = h1.computedStyleMap.color;
    let newColor;
    if(currentColor==="blue"){
        newColor="tomato";
    }else{
        newColor="blue";
    }
    h1.style.cikir = newColor;
};