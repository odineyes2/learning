
## 1. TS 환경 Setup 초기 설정에 필요한 것은?

- project 시작
    - $ npx create-react-app my-app --template typescript 
    - $ npm create vite@latest [프로젝트 명] -- --template react-ts

- typescript 설치
    - $ npm i -D typescript

- 편의적 패키지 설치
    - ts-node
    - nodemon

- package.json 생성 및 수정
    - $ npm init -y $

    ```JSON package.json 변경
    // main 삭제

    "script" : {
        "build": "tsc" 
    }

    ```


## 2. 변수 선언 시 명시적으로 데이터 타입을 정하고자 할 때의 사용 방법은?

```typescript

const name : string = kim;

또는

type name = string;

const kim : name = "kimjh";

```

## 3. 변수에 배열을 지정하고자 할 때 두 가지 방법은?

```typescript

const users : Array<string> = ["kim", "lee", "park"]

const users : string[] = ["kim", "lee", "park"]

```

## 4. 타입 별칭으로 변수 타입 지정하기

```typescript

type scores = Array<number>;
const JhScores : scores = [1,2,3];

```

## 5. 객체를 생성하고 타입 별칭으로 구성요소의 모양을 지정하고 그 중 하나를 선택적으로 지정하라.

```typescript

type User = {
    name : string,
    age : number,
    hasChild? : boolean
}

const Player : User = {
    name : "kim",
    age : 38,
}

```

## 6. 튜플을 생성하라.

```typescript

const player : [ string, number, boolean ] = [ "kim", 12, true ]

```

## 7. 함수 정의 및 콜시그니처 사용 

- 함수을 정의하기 전에 함수의 매개변수와 리턴값을 먼저 정의할 수 있다. 
- 이것을 콜 시그니처라고 한다.
- 콜 시그니처에는 함수의 매개변수와 리턴값의 데이터 타입을 정의하고
- 함수의 정의문에는 함수의 로직만 기입한다.

```typescript

type Add = {
    (a:number, b:number) : number    
}
const add : Add = function (a,b){
    return a+b;
}

```

- 또는 콜 시그니처는 다음과 같이 적을 수도 있다.

```typescript

type Add = (a:number, b:number) => number
const add : Add = function (a,b){
    return a+b;
}

```

- 그러나 콜 시그니처가 복수로 존재하는 경우 즉, 함수을 오버로딩하는 경우에는 무조건 위의 방법을 사용해야 한다.

```typescript

type Add = {
    (a:number, b:number) : number,
    (a:number, b:number, c: number) : number,
}
const add : Add = function (a,b){
    return a+b;
}
```

## 8. 제네릭를 이용하여 여러가지 유형의 인자를 복합적으로 가질 수 있는 함수를 정의하라.

```typescript

type SuperPrint = {
    <T>(arr:T[]): void,    
}

const superPrint : SuperPrint = function(arr){
    arr.forEach(i=>console.log(i))
}

superPrint([1,2,3]);
superPrint(["1","2",3]);

```

## 9. class를 사용하여 객체의 모양을 지정하고 인스턴스를 생성하라.

```typescript

class Player {
    constructor(
        public firstName : String,
        public lastName : String,        
        ){}    
}
const kimjh = new Player ("kim", "jh");
kimjh.firstName;
kimjh.lastName;

```

## 10. 추상 클래스와 상속 클래스를 이용해서 인스턴스를 생성하라.

```typescript

abstract class User {
    constructor(
        protected firstName : String,
        protected lastName : string,
        protected nickName : String
    ) {}    
    abstract getNickname() : void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }   
}

class Player extends User{
    getNickname(){
        console.log(this.nickName)
    }
}

const kimJH = new Player("Kim", "JH", "Daddy");

kimJH.getFullName()

```


## 11. class를 사용하여 해쉬맵을 작성하라.

```typescript

type Words = {
    [key:string]:string
}

class Dict {
    private words : Words
    constructor(){
        this.words = {}
    }
    setWord(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    getWord(term : string){
        return this.words[term];
    }
}

class Word {
    constructor(
        public term : string,
        public def : string
    ){}    
}

const kimchi = new Word("kimchi", "food");

```

## 12. interface를 사용하여 객체의 모양을 지정하라. 

```typescript

interface User {
    name : string,
    age : number,
    hasChild : boolean,    
}

const kimjh : User = {
    name : "kim",
    age : 37,
    hasChild : true
}

```

## 13. 인터페이스가 인터페이스를 상속하는 예시를 작성하라.

```typescript

interface User {
    name : string
    age : number
}

interface Player extends User {
    hasChild : boolean
}

const kim : Player = {
    name : "kim",
    age : 38,
    hasChild : true
}

```

## 14. 클래스가 인터페이스를 상속하는 예시를 작성하라.

```typescript

interface User {
    name : string
    age : number
}

class Player implements User {
    public hasChild : boolean
    constructor(
        public name : string,
        public age : number
    ){}
}

const kimjh = new Player("kimjh",38);

```

## 15. 로컬 스토리지 API 따라하기 예제
- 로컬 스토리지 클래스를 만들되, 값의 데이터 필드가 문자열, 숫자, 불리안으로 각각 지정될 수 있도록 생성하라.

```typescript

interface Sstorage<T> {
    [key:string] : T
}

class LocalStorage<T> {
    private storage : Sstorage<T> = {}
    set(key:string, value: T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key];
    }
    get(key:string):T{
        return this.storage[key];
    }
    clear(){
        this.storage = {};
    }
}

const kimsStringStorage = new LocalStorage<string>();
const kimsBooleanStorage = new LocalStorage<Boolean>();

```

## 16. Blockchain 예제 따라하기

```typescript  // Blockchain.ts

import crypto from "crypto";

interface BlockShape {
    hash : string;
    preHash : string;
    height : string;
    data : string;
}

class Block implements BlockShape {
    public hash : string;
    constructor(
        public preHash : string,
        public height : number,
        public data : string,
    ){
        this.hash = "";
    }
    static calculateHash( preHash:string,height:number,data:string ){
        const toHash = `${preHash}${height}${data}`;
        return crypto.createHash("sha25").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks : Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length===0) return "";
        return this.blocks[this.blocks.length-1].hash;
    }
    public addBlock(data:string){
        const newBlock  = new Block(this.getPrevHash(),this.blocks.length+1,data);
        this.blocks.push(newBlock);
    }
    public getBlock(){
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("firstBlock");
blockchain.addBlock("2nd");
blockchain.addBlock("3rd");

console.log(blockchain.getBlock);

```