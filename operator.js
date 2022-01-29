// [ while loop ]
let i = 3;
while (i > 0) {
    console.log(`num: ${i}`);
    i--;
}

// [do while] 
// * 블록{}을 우선적으로  실행한 뒤 조건이 맞는지 안맞는지 확인.

let j = 3
do {
    console.log(`while: ${j}`);
    j--;

} while (j > 0);

// [ for loop ]
// * for(begin; condition; step)
for (i=5; i > 0; i--) {
    console.log(`for: ${i}`);
}

// [ nested loop ]
// * O(n^2)
for (let i = 0; i < 10; i++){
    for (let k = 0; k < 10; k++) {
        console.log(`i: ${i}, k: ${k}`)
    }
}

// [ if, else if, else]
// * if (condition) { statement1 }

let name = "gilbert"

if (name='gilbert') {
    console.log("같음");
} else if (name='kevin') {
    console.log("다름");
} else {
    console.log("???")
}


// [ switch ]
// * if, else if가 많을 경우 고려해보기.
const animal = 'dog'

switch (animal) {
    case 'cat':
        console.log('고양이');
        break;
    
    case 'dog':
    case 'DOG':
        console.log('강아지');
        break;
}


// >>> 1~10 사이의 숫자중 짝수인 수

for (let j = 0; j < 11; j++){
    if (j%2 == 0) {
        console.log("짝수")
    } else {
        console.log("홀수")
    }
}


for (let j = 0; j < 11; j++){
    if (j > 8) {
        break;
    }
    console.log(j) 
}
