# scss의 장점

변수 사용
nesting
mix-in
extend

# sass : scss 코드를 처리하여 css file 를 생성하는 프리 프로세서

# vite project에서 사용하는 방법

- [ ] cd vite-project
- [ ] npm add -D sass
- [ ] style.scss 생성 및 이동 to ./vite-project/styles
- [ ] link to ./styles.style.scss
- [ ] npm run dev // 개발용 웹서버 시작

# 배포용 파일 빌드

- [ ] npm run build
- [ ] dist 폴더 생성 확인(css파일 생성)

# css변수

:root {
--bfColor: red;
}

body {
padding: 0;
margin: 0;
background-color: var(--bfColor);
}

# 변수 생성 (scss)

```
$bfColor: red; // scss변수

body {
  padding: 0;
  margin: 0;
  background-color: $bgColor;
}
```

# Nesting - css를 중첩해서 사용

(before Nesting)

```
$bfColor: red;

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

ul li {
  background-color: tomato;
  color: white;
  padding: 5px 10px;
  border-radius: 7px;
}

ul li:hover {
  opacity: 0.8;
}

ul li:hover a {
  color: black;
}

ul li a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}
```

use Nesting

```
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  li {
    background-color: tomato;
    color: white;
    padding: 5px 10px;
    border-radius: 7px;
    &:hover {
      opacity: 0.8;
      a {
        color: gray;
      }
    }
    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
    }
  }
}
```

- 장점: 짧고 체계적이다.
- 주의점 : 컴포넌트 별로 묶어라.

# @extend - css를 각 요소에 공통 적용

```{style.scss}
%alert{
  margin: 10px;
  padding: 10px 20px;;
  border-radius: 10px;
  border: 1px dashed black;
}

.succes {
  @extend %alert;
  background-color: green;
}

.error {
  @extend %alert;
  background-color: red;
}

.warning{
  @extend %alert;
  background-color: yellow;
}
```

# mixins - css를 function 처럼 사용
```
@mixin alert($bgColor, $borderColor);{
  margin: 10px;
  padding: 10px 20px;;
  border-radius: 10px;
  border: 1px dashed $borderColor;
  background-color: $bgColor;
}
.succes {
  @include alert(green,blue);  
}
.error {
  @include alert(red,white);
}
.warning{
  @include alert(yellow,black);
}
```

# responsive web page - mixins & mediaQuery

## mixins - @content - @mixin에 내용을 추가하고자 하는 경우.
```
@mixin alert($bgColor, $borderColor){
  margin: 10px;
  padding: 10px 20px;;
  border-radius: 10px;
  border: 1px dashed $borderColor;
  background-color: $bgColor;
  @content;
}
.succes {
  @include alert(green,blue){
    font-size: 12px;
  };  
}
.error {
  @include alert(red,white){
    font-decoration: underline;
  };
}
.warning{
  @include alert(yellow,black){
    text-transform: uppercase;
  };
}
```

## var
```
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1200px;

@mixin smallDevice{
  @media screen and (min-width: $breakpoint-sm){
    @content;
  }
}
@mixin mediumDevice{
  @media screen and (min-width: $breakpoint-md){
    @content;
  }
}
@mixin largeDevice{
  @media screen and (min-width: $breakpoint-lg){
    @content;
  }
}
@mixin xLargeDevice{
  @media screen and (min-width: $breakpoint-xl){
    @content;
  }
}

body{
  @include smallDevice{
    background-color: blue;
  }
  @include mediumDevice{
    background-color: red;
  }
  @include largeDevice{
    background-color: purple;
  }
  @include xLargeDevice{
    background-color: pink;
  }
}
```