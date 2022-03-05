// [ JSON ]
// [ JavaScript Object Notaion ]

//- 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['username','gilbert'])
console.log(json);

const person = {
    name: 'gilbert',
    age: 29,
    jump: () => {
        console.log("wjdlrsfasd");
    },
};

json = JSON.stringify(person);
console.log(json);

// json = JSON.stringify(person, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return value;
// });
// console.log(json);

//- 2. JSON to Object 
//parse(json)

// 객체 JSON화.
json = JSON.stringify(person);      
console.log("json", json)
//! undefined : console.log(json.name); 

console.clear();

// JSON 객체화
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value
});
console.log("obj" ,obj);
//> gilbert : console.log(obj.name)

person.jump();
/**
 * JSON화 하면 내부에 있던 함수는 같이 안바뀜 
 * 따라서 obj.jump(); 사용시 에러 발생
*/
