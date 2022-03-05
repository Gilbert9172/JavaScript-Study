'use strict';

// Q1. make a string out og an array
const fruits1 = ['apple','banana','orage']
const result1 = fruits1.join('.');
console.log("result1 = ", result1);

// Q2. make an array out of a String
const fruits2 = 'apple,banana,orane';
const result2 = fruits2.split(',');
console.log("result2 = ", result2);

// Q3. make this array look like this: [5,4,3,2,1]
const array = [1,2,3,4,5];
const result = array.reverse();
console.log(result);

// Q4. make new array without the first two elements
const array1 = [1,2,3,4,5]

array1.splice(0,2);
console.log(array1);

// Q5. find a student with the score 90

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    };
};

const students = [
    new Student('A', 28, true, 45),
    new Student('B', 26, false, 85),
    new Student('C', 23, true, 90),
    new Student('D', 21, false, 65),
    new Student('E', 29, true, 55),
]


const result5 = students.find((student) => student.score===90);

console.log(result5);

// Q6. make an array of enrolled students
const result6 = students.filter((student) => student.enrolled===true);
console.log(result6);

// Q7. make an array containing only the students scored
const result7 = students.map((student) => student.score);
console.log(result7);

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    // const result = students.some((student) => student.score < 50)
    // console.log(result);

    const result = students.every((student) => student.score < 50);
    console.log(result)
}

// Q9
{
    console.clear();
    // const result = students.reduce((prev, curr) =>{
    //     console.log('------')
    //     console.log("prev" , prev);
    //     console.log("cruu" , curr);
    //     return prev + curr.score;
    // },0 )

    const result = students.reduce((prev, curr) => prev+curr.score,0);
    console.log(result / students.length);
}

// Q10
{
    const result = students
                    .map((student) => student.score)
                    .filter((score) => score >= 50)
                    .join();
    console.log(result);
}

// Q11
{
    const result = students
                        .map((student) => student.score)
                        // .sort((a,b) => a - b)
                        .sort((a,b) => b - a)
                        .join();
    console.log(result);
}