// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify (obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // Symbol 같이 자바스크립트에만 있는 타입도 변환되지않음 
    // symbol: Symbol('id'),
    // 함수는 오브젝트에 있는 데이터가 아니므로 제외
    jump: () =>{
        console.log(`${name} can jump! `);
    }
};
json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key} value: ${value}`);
    return key === 'name' ? 'duhan' : value;
});
console.log(json);

// 2.JSON to Object
// parse(json)
console.clear();

function reviver(key, value) {
    return key === 'birthDate' ? new Date(value) : value;
}

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, reviver);
console.log(obj);
rabbit.jump();

// obj.jump(); //메소드는 변환되지않아 쓸 수 없다.
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

