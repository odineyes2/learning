## 초기환경 셋업

## Hello world 출력
- 정적 리액트 컴포넌트 생성 예제

## total click 
- 동적 리액트 컴포넌트 생성 예제
    - Button 컴포넌트 외부화
    - state
    - prop
        - 컴포넌트가 아규먼트를 필요할 때 {}로..

## api 로딩 컴포넌트
    - url : https://www.data.go.kr/catalog/15025486/fileData.json
    - effect
    - javascript 비동기 함수
        - .fetch() & .then(response.json()) 메서드
        - async & await 함수
    - Array.prototype.length 는 정적 프로퍼티이고 함수가 아니다...

## propTypes Object

## React.memo( ) 메서드

## clean-up 함수

## react router

## useParams
```javascript // Detail.jsx

import {useParams} from "react-router-dom";

const Detail = function () {
  const {id} = useParams();  
  return <div>This is detail.</div>;
};

export default Detail;


```