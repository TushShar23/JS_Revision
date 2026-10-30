
// Because of global noise/pollution we use IIFE
// we use ";" for ending that last IIFE coz JS does not know where to end that IIFE 

// this is IIFE 

// NAMED
(function Dbcon(){
    console.log("DB Connected!!")
}) ();

// Arrow functions
(()=>{
        console.log("Using Arrow IIFE")
})();

// NAMED
((name)=>{
    console.log(`Hello ${name}`)
})("Hitesh");
// first () is for wrapping the function definition and second is for executing the function 