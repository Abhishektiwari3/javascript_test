const programming = ["js", "Ruby", "python", "java", "cpp"]

// higher order function for each loop

// programming.forEach((item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// programming.forEach(printMe)

// programming.forEach((element, index, arr) => {
//     console.log(element, index, arr);
// });

const myCoding = [
    {
        languageName : "Javascript",
        languFileName : "js"
    },

    {
        languageName : "java",
        languFileName : "java"
    },

    {
        languageName : "pythpn",
        languFileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})