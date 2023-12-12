function one() {
    const username = "Abhishek";
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Abhishek";
    if (username === "Abhishek") {
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// <======================= Interseting ======================>

// addone(5)// It can be executed
function addone(num) {
    return num + 1;
}

addone(5)

// addTwo(5) // It gives error it is not executed
const addTwo = function(num){
    return num + 2;
}

addTwo(5)