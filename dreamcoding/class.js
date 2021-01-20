'use strict';
// Object-oriented programming  
// class: template  
// object: instance of class 
// JavaScript classes  
// - introduced in ES6  
// - syntactical sugar over prototype-based inheritance 

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const duhan = new Person('duhan', 20);
console.log(duhan.name);
console.log(duhan.age);
duhan.speak();

// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() { return this._age; }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative!');
        // }
        // value가 0보다 작다면 0을 쓰고 아니라면 발류
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 지금 쓰기엔 좀 이름 최신브라우저도 안해주는게 많음 
class Experiment {
    publicField = 2;
    #privateField = 0; // # 붙으면 private 클래스 내부에서만 볼 수 있음 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. static properties methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('^^');
    }
    getArea() {
        return (this.width * this.height / 2);
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());




// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());


