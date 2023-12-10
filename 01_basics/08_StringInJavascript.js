const namee = "Abhishek";
const repoCount = 50;

console.log(`Hello my name is ${namee} and my repoCount is ${repoCount}`);

const gameName = new String('Abhishek-ti-ri');
console.log(gameName.split('-'));

console.log(gameName);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('k'));

console.log(gameName.substring(2));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "  abhishek  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20tiwari";
console.log(url.replace('%20', "-"));
console.log(url.includes('abhishek'));


