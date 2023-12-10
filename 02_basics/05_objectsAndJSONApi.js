const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "Hitesh"
}

// const {courseInstructor} = course;
const {courseInstructor: Instructor} = course; // Destructuring

// console.log(courseInstructor);
console.log(Instructor);

/*//Destructuring in function in reactjs we use {} instead of props.

const navbar = ({company}) => {
    // We use {company} instead of props.company
}

navbar(company = "Abhishek")

*/


/* // JSON Synatx // API Form

{
    "name" : "Abhishek",
    "coursename" : "Js in Hindi",
    "Teacher" : "Hitesh"
}

*/

/* //Another form of API Form

[
    {},
    {},
    {}
]

*/