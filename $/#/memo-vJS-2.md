## 여러 개의 class를 사용는 경우의 대응


### className 를 이용한 직접 비교, 직접 수정
```
const h1 = document.querySelector(".hello");

function handleTitleCLick(){
    const CLICKEDCLASS = "clicked"
    if(h1.className===CLICKEDCLASS){
        h1.className="";
    } else {
        h1.className=CLICKEDCLASS;
    }
}

```

### classList, .contains(), .remove(), .add()
```
const h1 = document.querySelector(".hello");

function handleTitleCLick(){
    const CLICKEDCLASS = "clicked"
    if(h1.classList.contains(CLICKEDCLASS)){
        h1.classList.remove(CLICKEDCLASS);
    } else {
        h1.classList.add(CLICKEDCLASS);
    }
}

```

### .toggle()
```
const h1 = document.querySelector(".hello");

function handleTitleCLick(){
    const CLICKEDCLASS = "clicked"
    h1.classList.toggle(CLICKEDCLASS);
}

```

## 콜백함수와 첫번째 argument(일반적으로 event라고 쓰지만 인자명은 안중요함)
- 콜백함수의 첫번째 인자에 event를 주고 이것에는 항상 방금 실행된 event에 대한 정보를 JS가 준다.
- 콜백함수의 인자를 비워두면 event 정보를 주지 않는다.
- event.preventDefault()
    - form submition에 의한 page refresh 중지
