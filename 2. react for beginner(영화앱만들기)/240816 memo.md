## prop types
```terminal

npm install --save prop-types

```

``` javascript 

import React from "react";
import PropTypes from "prop-types";

const Button = function ({text}) {
  const [counter, setCounter] = React.useState(0);
  const onClickFn = function () {
    setCounter((pre) => pre + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClickFn}>{text}</button>
    </div>
  );
};

Button.propTypes={
  text: PropTypes.string.isRequired,
}

export default Button;


```


## react 초기 환경 셋업

- module type script
- module type 스크립트는 비교적 근래에 추가된 javascript 임베딩의 한 형태다.
- 기존에는 레거시한 형태의 script 임베딩만이 가능했다.
- 코드를 script 태그로 가져오거나, 바로 정의해서 사용할 수 있었다.
- 근데 여기에는 문제가 많았다. 글로벌 범위에 다 쏟아부어버려서 캡슐화가 전혀 되지도 않고, 
- import/export 형태로 정의된 모듈 코드를 사용할 수도 없었기 때문이다.
- ​새로 추가된 module script를 사용하면 그러한 문제들을 해결할 수 있다. 
```html
<script type="module" src="./src/index.jsx"></script>
```

- ReactDOM.createRoot(document.getElementById('root')).render(<App />);
- ReactDOM.createRoot()
- 기존의 ReactDOM.render( )을 대체하고 Concurrent 모드를 활성화한다.
- Concurrent 모드
- 동시성을 향상시킨다.
- 사용자 경험을 향상시키는 렌더링 최적화
- 렌더링 최적화를 위한 작업 우선순위 결정
	
- import & export 
```javascript 
import React from "react";
import ReactDOM for "reactDOM";
import App from "./src/App.jsx";
import "./styles/App.css";

export default App;
```

## react component props
```javascript



```

## 비동기 처리
- 코드를 수행하여 작업을 처리할 때 응답을 기다리지 않고 병렬적으로 처리한다는 의미이다.
- api로 부터 데이터를 fetch할 때 응답이 완료될 때까지 기다리지 않는다.

## 프로미스
- 프로미스는 비동기 처리 상태와 비동기 처리 결과를 관리하는 객체이다.
- 프로미스의 후속 메서드 : then, catch, finally

## fetch() - 전역 함수, 비동기 함수, 프로미스를 반환
- fetch()는 네트워크에서 리소스를 취득하는 절차를 시작하고, 응답이 사용 가능해지면 이행하는 프로미스를 반환한다.
- http 요청 전송 기능을 제공하는 클라이언트 사이드 Wep Api 이다.
- fetch 함수는 http 응답을 나타내는 response 객체를 래핑한 프로미스를 반환한다.

```javascript

const url = "http://www.google.co.kr/";
fetch(url) // 외부 API에서 리소스 취득 절차를 시작 [option를 비우면 get] , fetch는 response 객체를 래핑한 프로미스 객체를 반환한다.
.then(response=>reponse.json()) // response 객체를 json으로 해석하여 자바스크립트 객체를 반환한다.
.then((json)=>console.log(json)); // 비로소 자바스크립트 객체로 활용하여 필요한 코드를 수행한다.

```

## async & await
- 프로미스를 후속처리 메서드없이 마치 동기처리처럼 프로미스를 사용할 수 있다.
- await 키워드는 반드시 async 함수 내부에서 사용해야 한다.
- async 함수는 언제나 프로미스를 반환한다.
- await 함수는 프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolved한 처리 결과를 반환한다.

```javascript

async function fetchTodo{
    const url = "http://www.google.co.kr/";
    const response = await fetch(url); // fetch()가 반환한 프로미스가 settled 될 때까지 대기하다가 settled되면 프로미스가 resolved한 처리결과가 response 변수에 할당된다.
    const toDo = await response.json();
    console.log(toDo)
}

```

## await.Promise.all
- 복수의 병렬 처리 있는 경우 앞선 비동기 처리의 완료를 대기하지 않고 개별적으로 처리할 경우에는 all로 처리하는 것이 좋다.
```javascript
const res = await Promise.all([
    new Promise(res=>res.resolve(1)),
    new Promise(res=>res.resolve(2)),
    new Promise(res=>res.resolve(3)),
]);

```

## try & catch 에 적용
```javascript
const foo = async ()=>{
    try{
        const url = "http://www.google.co.kr/";
        const response = await fetch(url); // fetch()가 반환한 프로미스가 settled 될 때까지 대기하다가 settled되면 프로미스가 resolved한 처리결과가 response 변수에 할당된다.
        const toDo = await response.json();
        console.log(toDo)
    } catch(err) {
        console.log(err)
    }
};

foo()
```

- async 함수 내에서 catch문을 사용해서 에러처리를 하지 않으면 async함수는 발생한 에러를 리젝트하는 프로미스를 반환한다.
- 이를 이용하여 Promise.prototype.catch 후속처리 메서드를 사용하여 에러를 캐치할 수도 있다.

```javascript

foo()
    .then(console.log)
    .catch(console.error);
    
```