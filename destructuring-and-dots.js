// Array destructuring
const numbers = [43, 54, 43, 55, 23, 12];
const x = numbers[0];
const y = numbers[1];
const [x, y] = [43, 54];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 5];
}
const boxed = boxify(8);
const [box1, box2] = boxify(8);
console.log(box1, box2);

// obj destructuring
const person = {
    name: 'Rahim',
    age: 25
};
console.log(person.name, person.age);

const {
    name,
    age,
    id,
    money
} = {
    id: 1,
    money: 32,
    name: 'Rahim',
    age: 25
};
const {
    money
} = person;
console.log(name, age);
console.log(name, age, id, money);

// create object shortcut
const one = 20;
const two = 30;
const obj = {
    x: x,
    y: y
};
const obj2 = {
    one,
    two
}
// console.log(obj2);

// new array using three dots
numbers.push(56);
const newNumbers = [...numbers, 56];