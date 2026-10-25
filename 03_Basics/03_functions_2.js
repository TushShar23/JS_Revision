// if we dont know how many values are going to be send by the user then we should use REST operator(...)
// REST and SPREAD both have same SYNTAX but the usecase is different

// Ex- shopping cart 

function CalculateItemsShoppingCart(...items){
    return items
}
console.log(CalculateItemsShoppingCart(100,200,500,600,1200,4300,129,111,678))

const user = {
    username:"Anon",
    price:990
}

function DisplayObjInfo(anyObj){
    return `Username is ${anyObj.username} and price is ${anyObj.price}`
}

console.log(DisplayObjInfo(user))

// we can also pass the OBJECT LITERAL/DIRECT OBJECT  in this 

console.log(DisplayObjInfo({
    username:"Hikachi",
    price:100
}))

// Passing ARRAYS

function returnSecondVal(anyArray){
    return anyArray[1]
}

const newArr = [100,400,900,1000,78]
console.log(returnSecondVal(newArr))
console.log(returnSecondVal([12,99,79,35]))