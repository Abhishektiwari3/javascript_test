// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
    
// }

// const greetings = "hello world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// does not take duplicate value like [map.set('IN', "India")] this code does nat execute because it is duplicate

// console.log(map);

for (const [key, value] /* destructureing*/ of map) {
    console.log(key, ':-', value);
}

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] /* destruction by using bracket*/ of myObj) // object is not iterable like this
// {
//     console.log(key, ":-", value);
// }