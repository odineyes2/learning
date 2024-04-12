- [x] 1. 리액트, 리액트돔 임포트
     vanilla
     <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
     <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
     CRA
     import React from "react";
     import ReactDOM from "react-dom";
- [x] 2. JSX : 바벨(JSX->reactjs변환기) 임포트
     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
     <script type="text/babel">

- [x] 3. jsx로 코딩하기

  - 타이틀 컴포넌트
  - 버튼 컴포넌트
  - 버튼 컴포넌트에 이벤트리스너 넣기
    (props 사용없이 컴포넌트에 직접)

- [x] 4. state, useState를 활용하여 코딩

  - modifier 함수의 장점: state변수가 변화할때 이를 감지하여 자동으로 렌더링
  - state 값의 변경방법
  - 버튼 컴포넌트로 counter 올리기

- [x] 5. Proptype 임포트하기 및 적용하기
     <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
     npm i prop-types
     import PropTypes from "prop-types";
     Button.propTypes={
     text:PropTypes.string.isRequired
     }

  - Proptype은 최상위 요소에서 지정한다.

- [x] 6. JS : input, button

  - for & htmlFor : 3.5 2:48
    ※ JSX는 html와 유사하지만 다른 것이며 이미 선점되어 다르게 사용되는 기능이 있다. 예: for, class
  - value 속성
  - disable 속성
  - unit convertor(1) 작성

- [x] 7. superconvertor 만들기

  - unit convertor(1)를 별도의 컨포넌트로 분리하기
  - unit convertor(2) 작성하기
  - App()에서 별도의 컨포넌트를 임포트하기
  - <select>,<option>로 index Selector 만들기

- [x] 8. 컴포넌트 분리 & 프롭으로 전달하기

  - Props는 부모 컴포넌트와 자식컴포넌트 또는 자식컴포넌트간 데이터 전달 방식이다.
  - 한개의 버튼 컴포넌으로 2개의 다른 버튼 만들기
  - 4)에서 한 버튼 컴포넌트로 counter올리기

- [x] 9. React.memo()

  - 기본적으로 리액트에서 부모컴포넌트의 state가 변경되면 자식컴포넌트가 전부 리렌더링된다.
  - .memo()를 활용하면 prop이 변경되지 않는 자식컴포넌트의 리렌더링를 제한할 수 있다.
  - 2가지 컴포넌트를 넣고 이벤트를 일으켜서 언제, 누가 리렌더링 되는지 확인하기
  - React.memo() 메서드로 리렌더링 제한하는 기능 구현하기

- 10. create-react-app 환경셋팅하기 및 웹서버 실행하기

  - nodeJS 설치
  - npx 설치
  - npx create-react-app my-app
  - cd my-app
  - npm start
  - ctrl+c
  - 컴포넌트를 별도의 파일로 분리하고 임포트, 익스포트 하기
  - npm i prop-types
  - import PropTypes from "prop-types"

- 11. 컴포넌트 별로 별도의 css파일 적용하기
  - Button.module.css 5.1

12. useEffect

    - import { useEffect } from "react";
    - 컴포넌트 return문 전에 배치
    - useEffect(실행함수, [디펜던시_대상]);
    - 디펜던시를 빈 어레이로 두면 처음 렌더링 시에만 실행함수가 실행됨
    - 실습:

13. 클린업 함수
    - useEffect에서 최초 렌더링 시 실행함수를 실행시킨 것과 마찬가지로 컴포넌트를 삭제할 때 실행되는 함수
    - useEffect(실행함수,[디펜던시]);에서
      useEffect(실행함수
      return ()=>{
      컴포넌트파괴시 실행할 코드
      }
      ,[디펜던시]);에서
