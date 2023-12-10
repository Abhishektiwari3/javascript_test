// SingleTon (When we create objects from constructor)

// Object.create

// <=====================================>

// Object literals

const mySym = Symbol("key1") // to use symbol in object we have to use [] square brackets

const jsUser = {
    name: "Abhishek",
    age: 22,
    [mySym]: "mykey1", //if we not put brackets then it refers as String when we put bracket it refer as Symbol
    "full name": "Abhishek Tiwari",
    location: "Sangrur",
    email: "abhishek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(jsUser.email); //Not a proficient one because when the key is in String we cannot access through this method

console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "abhishek@github.com"; //this method is used to change the value of the key but we use mostly this method
// Object.freeze(jsUser)// to freeze the object we use this method so nobody can change
jsUser.email= "tiwari@facebook.com"; //It does not chnage because we already freeze the object
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //When we use backticks `` it is called string interplation // when we have to reference the same object we can use this. and access the object properties
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());
