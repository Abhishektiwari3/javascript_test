const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);

// Object.create()

const chai = {
    name: 'ginger',
    price: 250,
    isAvailable: true,

    orderChai(){
        console.log(`Chai nahi bani`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}
