// Equality and comparison work differently.Comparison converts into number

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);


console.log(null >= 0); // in this null is converted to 0 then 0>=0 yes so true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// always false

// STRICT CHECK(checks the equality as well as datatype)
console.log("2" === 2);
console.log(2 === 2);
console.log("2" === "2");

console.log(2 == 2);
console.log("2" == 2);

console.log("02">1);
// It implicit convert the 02 string to a number then compare and gives the result as TRUE.










