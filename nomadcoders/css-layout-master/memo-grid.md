# html creation & link to css file. & emmet : .container>.item\*3{$}

# Columns & rows

.container{
display: grid;
grid-template-columns: 100px 200px;
grid-template-rows: 200px 100px;  
 gap: 10px;
}

# grid lines

.item:nth-child(1){
grid-row-start: 1;
grid-row-end: -1;
}

.item:nth-child(4){
background-color: teal;
grid-column-start: 2;
grid-column-end: -1;
}

# grid line name

    grid-template-columns: [line-name-1] 100px [line-name-2] 200px [line-name-3] 50px [line-name-4];
    grid-template-rows: [line-name-5] 200px [line-name-6] 100px [line-name-7] ;

    grid-column-start: [line-name-1];
    grid-column-end: [line-name-4];

# grid line shortcut

    grid-column: line1 / line2;
    grid-rows: line3 / line4;

# fr unit & grid template

    body{
        display: grid;
        gap: 10px;
        height: 100vh;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
        grid-template-areas:
        "header header header header"
        "content content content menu"
        "footer footer footer footer";
    }
    header{
        background-color: aqua;
        grid-area: header;
    }
    section{
        background-color: green;
        grid-area: content;
    }
    aside{
        background-color: pink;
        grid-area: menu;
    }
    footer{
        background-color: tomato;
        grid-area: footer;
    }

# shortcut of grid template(grid-template-columns+grid-template-rows+grid-template-areas=grid-template)

    grid-template: "a a a a" 1fr
    "b b b c" 2fr
    "d d d d" 1fr / 1fr 1fr 1fr 1fr

# span keyword

    grid-column: 1 / 3; <!-- 의미: 1번행에서 3번행까지 차지해라. -->
    grid-column: span 2; // 의미: 1번행에서(기본값) 2개의 행을 차지해라.
    grid-column: 2 / span2; // 의미: 2번행에서 2개의 행을 차지해라.

# repeat()

    grid-template-columns: repeat(2, 1fr); // = grid-template-columns: 1fr 1fr;

# grid-auto-flow & grid-auto-rows & grid-auto-columns // html요소가 추가되는 경우 어떻게 처리할지 결정하는 프로퍼티 > container Prop

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-auto-flow: row; // 새로 추가될 요소가 행이나 열 중 어느 요소로 늘어날지 결정하는 프로퍼티 기본값은 row(행추가)
    grid-auto-rows: 1fr; // 추가될 행의 크기를 지정
    grid-auto-columns: 1fr; // 추가될 열의 크기를 지정

# 그리드와 박스의 분리 개념

.container{
justify-content: stretch; // 기본값. 박스의 크기가 정해지지 않은 경우 그리드의 넓이(또는 높이)까지 늘인다.
align-items: stretch; // 상동
}
.item{
width: 50px;
height: 50px;
}

- 숏컷: place-item: strech strech // justify-content align-items

# 개별 아이템 박스의 위치를 조정하고자 하는 경우

.item:nth-child(6) {
background-color: teal;
align-self: start;
justify-self: start;
}

- 숏컷: place-self: start end;

# align content & justify content > container props

> 컨테이너의 행 또는 열에 남는 공간이 있어야 작동됨(너비를 fr로 지정하면 작동안함)
> 아이템이 함께 움직이며 작동하는 프롭임
> .container{

    align-content: center | start | end | space-between
    justify-content: center | start | end | space-between
    place-content: (align justify) start end;

}

# auto size and minmax

grid-template-columns: 1fr max-content 1fr // 최대 사이즈 배정: 한줄로 표시하는 너비
grid-template-columns: 1fr min-content 1fr // 최소 사이즈 배정: 가장 긴 단어의 너비
grid-template-columns: 1fr minmax(250px,1fr) 1fr // 1fr로 하되 최소 250px 너비 또는 높이(반응형 레이아웃을 만드는데 사용됨)
grid-template-columns: repeat(3, minmax(300px, 350px));

# auto fill and auto fit

- grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
<!-- auto-fill은 여분의 공간이 생기면 빈 그리드를 만들어서 채움 -->

- grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  <!-- auto-fit은 여분의 공간이 생기면 있는 그리드의 너비를 키워서 채움 -->
  <!-- 여분의 공간이 없으면 작동이 동일함 -->

# pratice css grid

https://cssgridgarden.com/#ko
