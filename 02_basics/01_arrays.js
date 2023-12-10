// array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeroes = ["Hanuman Ji", "Ram Ji"];

const myArr2 = new Array(0, 1, 2, 3, 4, 5);

// console.log(myArr);
// console.log(myHeroes);
// console.log(myArr2);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // last value pop out

// myArr.unshift(9)// It put in first position
// myArr.shift(); // pop up first value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //join and change in string
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);// duplicate array manipulate

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);// original array manipulate

console.log(myn2);

console.log("C ", myArr);