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
