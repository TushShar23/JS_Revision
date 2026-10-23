// always check the datatype when operating on numbers

function SumNum(num1,num2){
    return Number(num1)+Number(num2)
    // after return nothing will be executed
}

console.log(SumNum(3,4)) // execution/calling
console.log(SumNum) // reference
console.log(typeof(SumNum))


function LoginMessage(username){
    if(!username){ // it checks whether the username has some value IF NOT HAVING ANY VALUE THEN this IF WILL BE EXECUTED
        return "Please enter a username!"
    }
    return `${username} just logged in!!`
}

console.log(LoginMessage("Naman"))

// DEFAULT PARAMETER
function LoginMessageDefParam(username = "Anon"){
    // if(!username){
    //     return "Please enter a user"
    // } // no need coz we have a default parameter so no need to check
    return `${username} Just Logged In!!`
}
console.log(LoginMessageDefParam("Parth"))
console.log(LoginMessageDefParam())


