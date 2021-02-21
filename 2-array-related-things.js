const numbers = [21, 32, 23, 41, 23];
const friends = ['Rofiq', 'Jabbar', 'Barkat'];
const products = [{
    id: 1,
    name: 'Laptop',
    price: 500
}, {
    id: 2,
    name: 'Phone',
    price: 100
}, {
    id: 3,
    name: 'Tablet',
    price: 80
}, {
    id: 4,
    name: 'Watch',
    price: 20
}]
// Map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
const prices2 = products.map(product => {
    // not auto return must be type return
    // do Some Work
    return product.name;
})
console.log(prices2);

// forEach
products.forEach(product => console.log(product.price));

// filter
const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);

// Remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find
const hasWatch = products.find(pd => pd.name === 'Watch');
console.log(hasWatch);

// reduce

// inCludes

// push

// pop

// length

// indexOf