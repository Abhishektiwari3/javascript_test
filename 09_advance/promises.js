const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() =>{ 
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})

const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email : "chai@example.com"})
    }, 1000)
})

promisethree.then((user) =>{
    console.log(user);
})

const promisefour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "Abhishek", password: "123"})
        } else{
            reject("Error something went wrong")
        }
    }, 1000)
})

promisefour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected");
})

const promisefive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "Javascript", password : "123"})
        } else{
            reject("Error: Js went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})

