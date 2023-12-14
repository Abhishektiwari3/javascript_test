// const myObject = {
//     js : "javascript",
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "Rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// <======= Map is not Iterable in for in loop

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(map[key]);
// }
