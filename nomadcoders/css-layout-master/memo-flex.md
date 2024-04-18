# vite

- [ ] Open Terminal
- [ ] npm create vite@latest
- [ ] √ Project name: ... css-layout-masterclass
- [ ] √ Select a framework: » Vanilla
- [ ] √ Select a variant: » JavaScript
- [ ] cd css-layout-masterclass
- [ ] npm install
- [ ] code . // Open Vscode
- [ ] npm run dev

# setup

- [ ] html element creation
- [ ] link html to style.css

# emmet

- .box\*3 ↲ //class:box 3ea
- .box\*20>{$} ↲ //class:box20ea inside with number

# flex box

- [ ] display: flex

# Container Properties

## flex direction / flex wrap / flex flow

- [ ] flex-direction: row|column|row-reverse|column-reverse <!-- main axis를 결정하는 property default는 row -->
- [ ] flex wrap: nowrap | wrap
- [ ] flex flow: row nowrap; <!-- flex direction + flex wrap-->

## Main axis and Cross axis

- [ ] justify-content : flex-start | flex-end | center | space-between | space-around 좌우, 메인축 상에 아이템를 정렬하는 방법을 결정하는 프로퍼티
- [ ] align-items : stretch | center | flex-start | flex-end | baseline 상하, 교차축 상에 아이템를 정렬하는 방법을 결정하는 프로퍼티

## align-content : 다중라인 플렉스 컨테이너에서 라인들의 정렬 설정

- align-content: center;
- align-content: space-between;
- align-content: start;
- align-content: end;

## Container Height

- [ ] height: 100vh

# item properties

## .item:nth-child(n) tag / order / align-self

- .item:nth-child(n){} tag
- .item:first-child{}
- .item:last-child{}
- [ ] order: -n~-1|0|1~n;
- [ ] align-self: flex-start | center | flex-end; / 교차축 정렬를 아이템에서 개별적으로 설정하는 프로퍼티

## flex-grow / flex-shrink / flex-basis / flex

- [ ] flex-grow: 0 | 1~n <!-- 플렉스 그로우는 아이템의 길이나 너비의 성장속도비율이다. 0이면 최소한 길이나 너비를 가지고 1~n이면 상대적 비율로 설정된다.  -->
- [ ] flex-shrink: 0 | 1~n <!-- 플렉스 슈링크는 아이템의 줄어드는 비율이다. 기본값은 1이고 0이면 줄어들지 않는다. 큰 수일수록 빠르게 줄어든다. -->
- [ ] flex-basis: 500px; <!-- 플렉스 베이시스는 아이템의 초기값, flex-grow:0이면 최대값으로 작용하고 flex-shrink:0이면 최소값으로 작용 -->
- [ ] flex: 1 0 500px; <!-- (flex-grow, flex-shrink, flex-basis) 한꺼번에 설정 -->

# details

- [ ] gap : 10px;
- [ ] column-gap:
- [ ] row-gap:
- [ ] background-color: tomato;
- [ ] color: white;
- [ ] border-radius: 20px;

# flex-froggy: css flexbox game.

http://flexboxfroggy.com/#ko
