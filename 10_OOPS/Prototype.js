// let myName = "Abhishek     "

// console.log(myName.truelength);

let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }

}

Object.prototype.abhishek = function(){
    console.log(`Abhishekis present in all Objects`);
}

Array.prototype.heyAbhishek = function(){
    console.log(`Abhishek says hello`);
}// its only given access to array

// heroPower.abhishek()
myHeroes.heyAbhishek()
// heroPower.heyAbhishek() // only access to array

// <============= Inheritance =========>

const User = {
    name: "chai",
    email: "chai@gppgle.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __porto__: teachingSupport // old approach
}

// Teacher.__porto__ = User // Old Approach

// <========= Modern Syntax =========>

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Abhishek".trueLength()
"iceTea".trueLength()