const userEmail = [] // this string supposed truth (thruthy value)
//  if it is empty we suppose it as false (falsey value)

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsey value => false, 0, -0, BigInt(0n),"", null, undefined, nan and expect this all are truthy value 
// Truthy values => "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0; // true
// false == ''; // true
// 0 == ''; // true

// Nullish Coalescing operator (??): null, undefined

let val1;
// val1 = 5 ?? 10 // answer 5
// val1 = null ?? 10 // answer 10
// val1 = undefined ?? 15 // answer 15
val1 = null ?? 10 ?? 15 // answer 10

console.log(val1);

// Terniary Operator (if else condition small version)

// condition ? true : false 

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");