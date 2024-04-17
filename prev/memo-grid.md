# html creation & link to css file. & emmet : .container>.item*3{$}

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

# grid-auto-flow & grid-auto-rows & grid-auto-columns // html요소가 추가되는 경우 어떻게 처리할지 결정하는 프로퍼티
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-auto-flow: row; // 새로 추가될 요소가 행이나 열 중 어느 요소로 늘어날지 결정하는 프로퍼티 기본값은 row(행추가)
    grid-auto-rows: 1fr; // 추가될 행의 크기를 지정
    grid-auto-columns: 1fr; // 추가될 열의 크기를 지정
