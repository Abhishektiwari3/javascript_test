// if (true) {
//     //execute
// }

// if (false) {
//     //not Exeecute
// }

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
    
// }

// < , >, <=, >=, ==, !=, ===,!==

// if (2 == "2") {
//     console.log("Executed");
// }

// if (2 === "2") {
//     console.log("Not Executed");
// }

// const temperature = 41;
// if (temperature === 41) {
//     console.log("less than 50");
// } else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");

// const score = 200;

// if (score > 100) {
//     const power ="fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User power ${power}`); //It gives error because power variable is not access in global scope it is accessible only inside if statement


// const balance = 1000;

// // if (balance) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 900");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;

const debitCard = true;

const loggedInFromeGoogle = false;

const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromeGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}