// JSON
const person = {
    name: 'Abdul kiddis',
    age: 45
}
// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed);

// API
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// local storage
// localStorage.setItem('userId', 1234);
const userId = localStorage.getItem('userId');
// console.log(userId);
localStorage.setItem('parson', JSON.stringify(person));
const storedPerson = localStorage.getItem(person);
const parsePerson = JSON.parse(storedPerson);
// console.log(parsePerson.age);

const key = Object.keys(parsePerson);
console.log(key);

const values = Object.values(parsePerson);
console.log(values);