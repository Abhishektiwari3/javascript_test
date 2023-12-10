// Stack (Primitive Data Type used stack)

// Heap (Non-primitive Datatype used heap)


// Stack (In this the reference of original value not given it gives copy reference and original remain as it as it does not change)

let firstName = "Abhishek";

let anotherName = firstName;
anotherName ="Tiwari";

console.log(firstName);
console.log(anotherName); 

// Heap (original value reference)
let userOne = {
    username: "abhi@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.username = "abhishek@gmail.com";

console.log(userOne);
console.log(userTwo);