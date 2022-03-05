let fruits = new Array();
fruits.push("apple");
fruits.push("orange");
fruits.push("banana");

// 1. 
for (let i=0; i < fruits.length; i++) {
    console.log("CASE1" , fruits[i]);
}

for (const fruit of fruits) {
    console.log("CASE2" ,fruit);
}

fruits.forEach((value, index) => {
    console.log(value, index);
})