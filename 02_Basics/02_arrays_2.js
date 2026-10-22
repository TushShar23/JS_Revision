// More operations on arrays
const m_heros = ["thor","spiderman","hulk","captain america"]
const d_heros = ["superman","batman","flash"]

// push() and concat() will add the array to the array don't join them

// const newpush = m_heros.push(d_heros)
// const newCon = m_heros.concat(d_heros)
// console.log(newpush,newCon)

// To JOIN ARRAYS
const newArr = [...m_heros,...d_heros]
console.log(newArr)


// FLATTENING the array
const arr = [1,2,3,[6,5,7,8,[9,10,[11,12,13,14,[15,19,20]]]]]
const arrFlat = arr.flat(Infinity)
console.log(arrFlat)


// questions

console.log(Array.isArray("Helloworld"))
console.log(Array.from("Helloworld"))

// special case of from()
//Creates an array from an iterable object.
console.log(Array.from({name:"Natasha"}))
// when from() fails to convert a string into an array then it will give [](empty array) as the output.

// of()
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


// from() vs of()

//The fundamental difference is how they interpret their arguments: 

// Array.from() expects a single object that already looks like or acts like a collection 

// Array.of() treats every individual argument as a separate item to be placed into the array.

