function calculateCartPrice(...num1) {
    // here ... is rest that you gave us in the form of bundle and return an array
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "Abhishek",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 899
})

const myNewArr = [200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 5000]));