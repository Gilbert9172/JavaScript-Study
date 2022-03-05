"use strict";

// [Function] 
// - Object로 간주되어 지기 때문에 변수, 파라미터로 전달 될수 있다.

function printHello() {
    console.log('hello');
}

printHello();

function log(message) {
    console.log(message);
}

log("gilbert")

// 2. Parameter
 function changeName (obj) {
     obj.name = 'gilbert';
 }

 const kevin = {
     name : 'kevin'
 };

 changeName(kevin);
 console.log(kevin);

 // 3. default parameters
function showMessage(message, from='gilbert') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest Parameter → 배열 형태로 전달 
function printAll(...args) {
    
    // - CASE1
    for (let i = 0; i < args.length; i++) {
        console.log("CASE1", args[i]);
    }

    // - CASE2
    for (const arg of args) {
        console.log("CASE2", args)
    }

    // - CASE3
    args.forEach((arg) => console.log("CASE3", arg));

}
printAll('dream', 'coding', 'gilbert');

// 5. Local Scope
let globalMessage = 'global';       //! global variable
function printMessage() {
    let message = 'hello';
    console.log(message);           //! local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = "hello";
    }
    //// console.log(childMessage); 
}
printMessage() 

// 6.
function sum(a,b) {
    return a+b;
}

const result = sum(1,2);
console.log(result);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, Early exit
// - 조건이 맞지 않는 경우는 빠르게 함수 종료
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
}


// 8. anonymoust function
const print = function () {
    console.log('print');
}

print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(3,5));

// 9.callback

function randomQuiz(answer, printYes, printNo) {
    if (answer == 'gilbert') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes');
}

const printNo = function () {
    console.log('No');
}

randomQuiz('kevin', printYes, printNo);
randomQuiz('gilbert', printYes, printNo);

// 10. ArrowFunction
const simplePrint = function() {
    console.log('simplePrint!');
}

const simplePrint1 = () => console.log('simplePrint1!');
simplePrint1();

const add1 = (a,b) => a+b;
add1(1,2);

// 11. IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})