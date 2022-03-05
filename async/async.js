// -- asycn & await
// -- clear style of using promise


//- 1. async
// promise바로 생성 가능.
async function fetchUser() {
    return 'gilbert';
};

const user = fetchUser();
console.log(user);

//- 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getOrange() {
    await delay(1000);
    return 'orange';
}

async function pickFruits() {

    const apple = await getApple();
    const orange = await getOrange();

    return `${apple}, ${orange}`;

}

pickFruits().then(console.log);

// 3. useful promise api
function pickAllFruits() {
    return Promise.all([getApple(), getOrange()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getOrange()]);
}
pickOnlyOne().then(console.log);