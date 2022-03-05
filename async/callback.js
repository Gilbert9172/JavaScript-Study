'use strict';

//- Javascript is synchronous.
/**
 * hoisting : var, function declaration 이 가장 상단으로 올라감 
*/
console.log('1');
setTimeout(()=>console.log(0),1000);
console.log('2');
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
} 

printImmediately(() => console.log("gilbert"));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => {
    console.log("printWithDelay")
},2000)

// [Callback Hell Example]
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id == 'gilbert' && password === 'test') ||
                (id == 'gilbert2' && password === 'test1')
            ) {
            onSuccess(id);
            } else {
            onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {

        setTimeout(() => {
            if (user === 'gilbert') {
                onSuccess({name:'gilbert', role: 'admin'});
            } else {
                onError(new Error('no access')); 
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, role: ${userWithRole.role}` )
            },
            error => {
                console.log(error);
            } 
        );
    },
    error => {console.log(error);}
)