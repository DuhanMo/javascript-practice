// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('^');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 30),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 90),
];

// Q5. find a student with the score 90
{
    students.forEach((student) => {
        if (student.score === 90) {
            console.log(student);
        }
    });
}

{
    // Ellie 버전 
    // find는 true, false를 반환하고 true일때까지만 콜백이 돈다. 따라서 처음마주치는 90점만 반환하고 끝남.
    // 
    const result = students.find((value) => {
        return value.score === 90;
    });
    console.log(result);
}
// Q6. make an array of enrolled students
{
    console.log('----6번문제');
    const result = students.filter((student) => {
        return student.enrolled;
    });
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log('----7번문제');
    // 새로운 배열을 만들때 Arrow Function에서 중괄호로 묶었으면 return을 명시해줘야한다.
    // const result = students.map((student)=>{return student.score;});
    const result = students.map((student) => student.score);
    console.log(result);
}
console.clear();
// Q8. check if there is a student with the score lower than 50
// true , false 로 나오게하기
// some 이용
{
    console.log('-----8번문제 50점보다 낮은애가 있는지 체크해라');

    const result = students.some((student)=>student.score < 50);
    console.log(result);
}
{
    const result = students.find((student) => student.score < 50);
    console.log(result);
}
{
    console.log('------');
    const result = students.filter((student) => student.score < 50);
    console.log(result);
}
{
    students.forEach((student) => {
        if (student.score < 50) {
            console.log(student);;
        }
    });
}
{
    const isLower50 = (element) => element < 50;
    const result = students.some(isLower50);
    console.log(result);
}
// Q9. compute students' average score
{

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
