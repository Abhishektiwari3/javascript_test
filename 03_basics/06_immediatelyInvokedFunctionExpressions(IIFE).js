// immediatelyInvokedFunctionExpressions(IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // we have end the IIFE we use semicolon //used IIFE

(() => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO`);
})();

((username) => {
    console.log(`DB CONNECTED THREE ${username}`);
})('Abhishek');