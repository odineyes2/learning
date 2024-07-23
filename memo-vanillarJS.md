## Vanilar JS basic

### Datatype
### Function
### Condtion
### Iteration
### console.dir()
### .querySelecor()
- class: .    
- id: #
```
    const hello = document.querySelector("#hello"); // id: hello
    const hello = document.querySelector(".hello"); // class: hello
    const hello = document.querySelector("#hello:first-child");
    const hello = document.querySelector(".hello:first-child h1");
```
### Event

#### addEventLister()
##### click
```
const title = document.querySelector("#coolId");

function handleTitleClick(){
    console.log("clicked!!");
};

title.addEventListener("click",handleTitleClick);
```

#### onClick method
```
const title = document.querySelector("#id");
title.onClick = functionName;

function functionName(){
    console.log("something");
}

```

#### .removeEventListener()

#### 그밖에 event : https://developer.mozilla.org/ko/docs/Web/API/Window

### 자바스크립트 공식문서(MDN) : https://developer.mozilla.org/ko/docs/Web/JavaScript

### ES6
### .map()
