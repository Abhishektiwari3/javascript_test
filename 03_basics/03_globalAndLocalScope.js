// var c =300
let a = 300

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER: ", a);
}

// console.log(a); // it does not print because variable a scope is local not global
// console.log(b);  // it does not print because variable b scope is local not global
console.log(c);