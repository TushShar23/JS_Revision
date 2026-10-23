// Shallow copy and deep copy
// two ways 

// singleton(using constructor) and object literal(defining the whole object)

let user = {
    name:"User",
    age:20,
    email:"abc123@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Thursday"],
    "gender":"male"
}

// accessing values
//RECOMMENDED,for "gender" attribute we have to use this syntax can't use the following syntax
console.log(user["age"])
console.log(user["LastLoginDays"])
console.log(user["gender"])

console.log(user.isLoggedIn)
console.log(user.name)
console.log(user)

// we can change the attribute's value's
user2 = user
user2.email = "xyz123@gmail.com"
console.log(user)
console.log(user["email"])
console.log(user2)
console.log(user2["email"])
// this is non primitive so the shallow copy will be created.Means both object will points to the same reference/same address.Deep copy is created in the case of primitive type

// freezing object

Object.freeze(user)
user.age = 33
console.log(user["age"])
// will show 20 coz we have locked our object

let JSUser = {
    name:"anon",
    age:22,
    LangKnown:["C++","JS","Go","Rust","Python"]
}
// we can add functions in an object too BUT IT SHOULD BE UNLOCKED
console.log(JSUser)
// arrow functions do not have their own "this"
JSUser.greetings = function(){
    console.log(`Hello,${this.name}`)
}
console.log(JSUser)
console.log(JSUser.greetings)
JSUser.greetings()


