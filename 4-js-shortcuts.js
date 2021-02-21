const money = 150;
let food;
const active = false;
if (money > 100) {
    food = 'Biriani';
} else {
    food = 'vorta';
}
// ternary
// condition ? true value : false value;
let food2 = money > 100 ? 'biriany' : 'Alur vorta';
let cssClass;
if (cssClass === true) {
    cssClass = 'active'
} else {
    cssClass = 'inactive'
}
const cssClass2 = active === true ? 'active' : 'inactive';
const cssClass3 = active ? 'active' : 'inactive';

// function call shortcut alternative
active ? displayUser() : hideUser();
// 
active && displayUser();
active || hideUser();
// 
const x = active && 5;
const y = active || 5;
console.log(y);

// string to number
const number = +'45';
console.log(number);

// number to string
const numText = 45 + '';
console.log(numText);

// default parameter
function add(num1, num2 = 5) {
    num2 = num2 || 5;
    return num1 + num2;
}
add(45, 10)