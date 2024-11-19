
# TS Quiz

## 1. TS 실습 환경 Setup

- <https://www.typescriptlang.org/play/> 접속 끝

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

## 5. 타입 별칭으로 객체의 모양을 지정하고 객체를 생성하라.

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

## 6. readOnly & optional property란 무엇인가?

- readOnly 가 있으면 최초 선언 후 수정할 수 없음
- key뒤에 ?가 있으면 optional property

```ts
type Player = {
    readonly name: string,
    age: number,
    hasChild?: boolean,
}

const kim : Player = {
    name: "kim",
    age: 38,    
}

kim.name = "Park"; // error
```

## 7. 튜플이란 무엇인가? 튜플을 생성하라

- 요소의 개수와 순서가 정해진 배열이다.
- 외부 API로부터 데이터를 받아올 때에 데이터의 형식이 정해져 있으므로 튜플을 많이 사용한다.

```ts
type User = [string, number, boolean];
const ParkTuple : User = ["kim", 38, true];
```

## 8. 함수 정의 및 콜시그니처 사용

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
    (a:number, b:number):number,
    (a:number, b:number, c:number):number,
}
const add : Add = (a,b,c?)=>{    
    if( typeof c =="number") return a+b+c;
    else return a+b;
}
```

## 9. 복수의 콜시그니처와 optional parameter

```Typescript

type Add = {
    (a:number, b:number):number,
    (a:number, b:number, c:number):number,
}

const add : Add = (a,b,c?)=>{    
    if( typeof c =="number") return a+b+c;
    else return a+b;
}
```

## 10. 제네릭를 이용하여 여러가지 유형의 매개변수를 상정한 함수를 정의하라(다형성, Polymorphism)

```ts
type SuperPrint = {
    (a:Array<string>):void
    (a:Array<number>):void
    (a:Array<boolean>):void
}

const superPrint : SuperPrint = (a)=>{    
    a.forEach(i=>{console.log(i)});
}

superPrint(["1","2","3"]);
superPrint([1,2,3]);
superPrint([true,false,true]);
superPrint([1,"2",3]); // error
```

- 위와 같이 파라미터로 어떠한 데이터타입이 올지 알 수 없거나 조합하는 경우의 수가 많은 경우 복수의 콜시그니처를 일일히 작성한다는 것은 번거로운 일이다.
- 그러므로 아래와 같이 제네릭을 이용하여 타입스크립트가 적절한 데이터타입을 유추할 수 있도록 하는 것이 간편하다.

```typescript

type SuperPrint = {
//    <T>(arr:T[]):void
    <T>(arr: Array<T>):void
}

const superPrint : SuperPrint = (a)=>{    
    a.forEach(i=>{console.log(i)});
}

superPrint(["1","2","3"]);
superPrint([1,2,3]);
superPrint([true,false,true]);
superPrint([1,"2",3]); // error

```

- 실제로 이와 같이 제네릭을 이용하여 콜시그니처를 작성할 일은 별로 없을 것이다.
- 주로 다른 패키지를 이용하면서 그 패키지가 제네릭을 이용하여 작성되어 있을 것이다.

## 11. 제네릭을 이용하여 장래 인스턴스 생성 시 타입이 정해질 요소에 포함된 객체의 콜 시그니처를 작성하라

```ts

type Player<E> = {
    name: string,
    age? : number,
    extraInfo?: E,
}

const kim : Player<string> = {
    name: "kim",
    age: 38,
    extraInfo: "handsome"
}

const dohyun : Player<{apearance:string, hasChild:boolean}> ={
    name: "dohyun",    
    extraInfo: {
        apearance: "cute",
        hasChild: false,
    },
}

```

## 12. class를 사용하여 객체의 모양을 지정하고 인스턴스(객체)를 생성하라

- 즉 클래스는 객체를 생성하기 위해 만들어진 객체의 틀이다.
- 클래스없이도 객체는 객체 리터럴를 이용하여 간편하게 생성할 수 있다.
- 그럼에도 불구하고 클래스를 만들고 이를 통해 객체를 생성하는 것은 반복적으로 객체를 생성하고자 함이거나 체계적으로 복잡한 객체를 생성하기 위해서이다.

```typescript

class Player {
    constructor(
        private firstName : string,
        public lastName : string,
        ){}    
}
const kimjh = new Player ("kim", "jh");
kimjh.firstName; // error
kimjh.lastName;

```

## 13. 추상 클래스와 상속 클래스를 이용해서 인스턴스를 생성하라

- 자바스크립트에서는 추상클래스는 없고 일반 클래스간 상속은 가능하다.
- 추상 클래스는 타입스크립트 고유의 개념이고 자바스크립트에서는 일반적인 클래스로 구현된다.

```typescript

abstract class User {
    constructor(
        public firstName: string,
        public lastName: string,
    ){}
    abstract getNickName(): void
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Player extends User {
    getNickName(){
        console.log( `${this.firstName} ${this.lastName}`);
    }
}

const kim = new Player("kim", "JH");

kim.firstName;
kim.lastName;
kim.getNickName;
kim.getFullkName;

```

- 추상 클래스나 추상 메서드는 추후 상속 클래스나 상속 메서드에서 그 구현부분을 작성할 목적으로 공통부분만 작성해둔 클래스, 메서드이다.
- 추상 메서드 작성 시에는 함수의 구현부분을 작성해서는 안되고 콜 시그니처만 작성한다.
- 추상 클래스에서 private 키워드로 프로퍼티를 작성하면 이를 상속한 자식 클래스라 할지라도 그 프로퍼티에는 접근할 수 없다. 그때는 protected 키워드를 사용한다.

## 14. class를 사용하여 해쉬맵을 작성하라

```typescript

type Words = {
    [key:string]:string
}

class Dict {
    private words : Words;
    constructor(){
        this.words = {};
    }
    setWord(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    getWord(term:string){
        return this.words[term];
    }
}

class Word {
    constructor(
        public term: string,
        public def: string,
    ){}
}

const kimchi = new Word("kimchi", "Korean traditional food");

const myDict = new Dict();

myDict.setWord(kimchi);

myDict.getWord("kimchi"); // "Korean traditional food"

```

## 15. readonly property & static method

- 위 해쉬맵 예제에서 Word class를 통해 생성된 Word 인스턴스의 프로퍼티가 수정될 수 없도록 하고자 할 경우 readonly property로 생성하면 된다.
- static method란 인스턴스를 만들 지 않고 호출할 수 있는 클래스의 메서드이다.

```ts
class Word {
    constructor(
        public readonly term: string,
        public readonly def: string,
    ){}
    static hello(){
        console.log("hi")
    }
}
```

## 16. type를 이용하여 정해진 옵션 중 어느 하나만 선택하여 값을 가질 수 있도록 하는 방법

```ts
type Team = "red" | "blue" | "yellow";

type Player = {
    name: string,
    age: number,
    team: Team,
}

const kim : Player = {
    name: "kim",
    age: 38,
    team: "red",
}
```

## 17. interface를 사용하여 객체의 모양을 지정하라

- 인터페이스는 객체의 모양을 지정하는 또다른 방법이다.
- 객체를 모양을 지정하는 방법의 옵션 => 1. type | 2. class | 3. interface

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

## 18. 인터페이스가 인터페이스를 상속하는 예시를 작성하라

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

## 19. 인터페이스의 특성 - 병합성

```ts
interface User {
    name: string    
}

interface User {
    age: number    
}

interface User {
    hasChild: boolean
}

const kim : User = {
    name: "kim",
    age: 38,
    hasChild: true,
}
```

- 인터페이스는 반복하여 정의하여 프로퍼티를 축적할 수 있으므로 위 예제 코드는 에러를 발생시키지 않는다.
- 타입이나 클래스를 위와 같이 작성할 수는 없다.

## 20. 클래스가 인터페이스를 상속하는 예시를 작성하라

- 인터페이스는 타입스크립트 고유의 기능이므로 자바스크립트로 변환되면서 그 부분은 사라진다.
- 코드의 작성 시에는 타입스크립트의 타입 검사 보조의 이익를 받으면서도 배포 시에는 삭제되어 코드가 가벼워지는 이득이 있는 것이다.

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

- 그러나 클래스가 인터페이스를 상속하는 경우에는 클래스의 프로퍼티를 public으로 설정해야 하고 private나 protected로는 설정할 수 없다는 단점이 있다.

## 21. 인터페이스나 클래스를 데이터타입으로 사용하는 경우의 예시

```ts

interface User {
    name: string,
    age: number,
}

interface Human {
    health: number
}

class Player implements User, Human {
    constructor(
        public name: string,
        public age: number,
        public health: number
    ){}   
}

function makeUser(user:User):User{
    return {
        name: user.name,
        age: user.age
    }
}

```

## 22. 로컬 스토리지 API 따라하기 예제

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

## 23. TS 개발환경 수동으로 셋업하기

<!-- ### project 시작 => 대부분의 경우 이것으로 모든 셋팅으로 자동으로 이루어짐.

- $ npx create-react-app my-app --template typescript
- $ npm create vite@latest [프로젝트 명] -- --template react-ts -->

### vscode 실행, 프로젝트 폴더 생성, nodejs 설치

### typescript 설치

- $ npm i -D typescript

### 편의적 패키지 설치

- ts-node
- nodemon

### package.json 생성 및 수정

- $ npm init -y

```JSON package.json 변경
// main 삭제

"script" : {
    "build": "tsc" 
}
```

### tsconfig.ts 생성 => typescript 패키지의 설정 파일

```json /tsconfig.json
{
    "include":[
        "src"
    ],
    "compilerOptions": {
        "outDir": "build",
        "target": "ES6",
        "lib": ["ES6", "DOM"], // ES6 실습용 블록체인 서버, DOM은 브라우저 환경, 자동완성기능 제공
    }
}
```

### ts 코드 작성

```ts | /src/index.ts
const hello = ()=>"hi";
```

### ts 컴파일 및 js 확인

- $ npm run build // tsconfig.json에서 설정한 대로...

## 24. strict mode & .t.ds & allowjs

- 외부 패키지나 레거시 코드는 주로 자바스크립트로 작성되어 있다.
- 자바스크립트로 작성되어 있는 외부 패키지를 타입스크립트에 임포트하는 경우를 생각해보자.
- 외부 패키지는 자바스크립트로 작성되어 있으므로 d.ts파일이 없다.
- 타입스크립트는 자바스크립트 코드의 데이터타입에 관한 정보가 없고 이는 타입스크립트의 강력한 데이터 타입검사 동작이 불가능하다는 의미이다.
- 현재 상태에서 strict mode를 활성화하여 declaration files가 없는 경우에 대해 에러를 발생시키도록 한다.

```json ./tsconfig.json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "esModuleInterop": true,
    "target": "ES6",
    "lib": ["ES6", "dom"],
    "strict": true,
  }
}
```

```ts | ./src/index.ts
import {init, exit} from "./myPackage"

init({url:"true"});
exit(1);
```

```js | ./src/myPackage.js
export function init(config){
    return true;
}
export function exit(code){
    return code+1;
}
```

- declaration file(.d.ts)파일이 없기 때문에 타입스크립트에서 에러가 발생한다.
- 여기서 tsconfig 파일에서 allowjs를 활성화시키면 타입스크립트가 데이터타입을 추론하면서 에러가 사라진다.

```json ./tsconfig.json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "esModuleInterop": true,
    "target": "ES6",
    "lib": ["ES6", "dom"],
    "strict": true,
    "allowJs": true,
  }
}
```

- 그러나 타입스크립트의 보호기능을 사용하지 않으면 타입스크립트를 사용하는 의미가 없다.

```ts ./src/myPackage.d.ts
interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
```

- index.ts 파일에서 init()나 exit()에서 타입스크립트의 보호기능과 도움말 기능이 작동함을 알 수 있다.

## 25. JSDOC & @ts-check

- 그러나 방대한 레거시 코드에 대해 일일히 d.ts 파일을 작성하는 것은 어렵다.
- declaration file를 작성하지 않고도 타입스크립트의 보호기능을 사용할 수 있는 방법이 있다.
- 주로 레거시 코드를 타입스크립트로 변환하지 않고 그대로 두면서 아래와 같이 주석을 달면
- 그 레거시 코드를 타입스크립트 파일로 임포트 했을 때 마치 d.ts 파일을 작성한 것과 같이 동작한다.

```js | myPackage.js

// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
```

## 26. ts 파일 실행하기

```json //Package.json
{
    ...
    "script": {
        "build": "tsc",
        "start": "node build/index.js" 
    }
    ...
}
```

- $ npm run build && npm start

## 27. 빌드없이 타입스크립트를 실행하는 패키지

- $ npm i -D ts-node
- $ npm i nodemon

```json //Package.json
{
    ...
    "script": {
        "build": "tsc",
        "dev": "nodemon --exec ts-node src/index.ts"
        "start": "node build/index.js"
    }
    ...
}
```

- $ npm run dev

## 28. DefinitelyTyped

- nodejs의 암호화 모듈인 crypto package는 js로 작성되어 있어서 ts에서 사용하려면 d.ts.파일이 필요하다.
- DefinitelyTyped은 오픈소스 프로젝트로 여러 개발자가 자원봉사로 정의파일을 작성해놓았다.
- 적용하는 방법은 다음과 같다.
- $npm i -D @types/node
- cryto package는 nodejs의 기본 패키지이므로 위에 것으로 된다.
- 어떤 패키지가 있는 확인하려면 아래 깃허브 레포지토리에 들어가서 찾아본다.
- <https://github.com/DefinitelyTyped/DefinitelyTyped>
- 현재는 최신 노드 모듈은 업데이트 되어서 @types/필요없다...;;

## 29. Blockchain 예제 따라하기

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

## 30. TS handbook URL

- <https://www.typescriptlang.org/docs/handbook/intro.html>
