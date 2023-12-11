// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumber(1, 2)

// const result = addTwoNumber(3,5)
// console.log(result); // this is not giving the answer because the function is not returning anything it simply printing the value

function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(2,3)
 console.log("Result: ", result);

function loginUserMessage(username) {
    if (username === undefined) {
        return("String is not given");
    }
    return `${username} just logged in`
} 

console.log(loginUserMessage("Abhishek"));