// // this is used to refer the current context 

// const user ={
//     username: "Abhishek",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// // user.welcomeMessage()
// // user.username = "Sam"
// // user.welcomeMessage()

// console.log(this); // Answer is {} because node ke andar refrence toh empty hai

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // this is not worked on this
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); // this is not worked on this
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this); // this is not worked on this on arrow function
// }

// // chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

//<========================Implict return =================>

// const addTwo = (num1, num2) => num1 + num2
//                       or 
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Abhishek"})

console.log(addTwo(3,4));

