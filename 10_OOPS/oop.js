const user = {
    username: "Abhishek",
    loginCount: 8,
    signedIn: true,

    getUserDetalis: function () {
        // console.log("My name is Abhishek");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetalis());
// console.log(this);

//consrtructor function // new//

function USer(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }
    
    return this; // It defines implicitly
}

const userOne = new USer("abhishek", 8, true) // new keyword helps to don not overwrite the data
const userTwo = new USer("Tiwari", 12, false)

console.log(userOne.constructor); // reference about same function
console.log(userOne);
