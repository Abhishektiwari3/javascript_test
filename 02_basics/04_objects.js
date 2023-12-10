// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = '123abc';
tinderUser.name = "Sammy";
tinderUser.isLoggedIN = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname: {
            firstname : "Abhishek",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = { obj1, obj2} // Not appropriable

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "abhishek@github.com"
    },
    {
        id: 2,
        email: "tiwari@github.com"
    }
]

// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // It is given as array and we can also use loop and other function which we can impliment on array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hasOwnProperty() it tells that that the vlaue or key exist in object or not