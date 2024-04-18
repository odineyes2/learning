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
