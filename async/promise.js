const promise = new Promise((resolve, reject)=> {
    
    console.log('doing Something...');
    
    setTimeout(()=>{
        resolve('gilbert');
    },2000);

});

// 2. consumers 
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally")
    });

// promise channing
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() =>resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>resolve(num-1),1000);
        });
    })
    .then(num => console.log(num));