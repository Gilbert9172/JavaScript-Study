// [ 1. user strict ]
//* JavaScript는 굉장히 유연 (즉, 실수 유발 가능성 상승)

'use strict';
console.log('hello Node.js');
// let a=6;
// a = 6;

// [ 2. Variable] 
// * let (added in ES6) : mutable data type 
let globalName = 'global name';
{
let name = 'jun';
console.log(name);
name = 'hello'
console.log(name);
console.log(globalName)
}
console.log(globalName);

// ! 더이상 var를 안 사용하는 이유 ! 
//* var : ES6 전에 변수를 선언할 때 사용.
//* var hoisting : 어디에 선언했는지 상관없이 선언을 상위로 끌어올려준다.
//* block scope이 없음

// [3. constants] - read
// * immutable data type : 한 번 설정한 값은 바꾸지 않는다.
// * 보안성
// * 스레드로 부터 접근 안전성
// * 개발자 실수 방지
const count = 12n; // 마지막에 n을 추가하면 bigint type
const size = 1.2;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// [4. variables] - read/write
// symbols : create a unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 == symbol4);

console.log(`value: ${symbol3.description}, type: ${typeof symbol3.description}`)


// [ 5. Dynamic typing] : dynamic typed language
let text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);

let x="test";
console.log(x.charAt(0))

const gilbert = {name: '정길준', age: '28'}
console.log(gilbert.age)