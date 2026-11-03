// if,if-else,else if,nested if else,switch case

// ** IF WE DON'T put break in any case then IT WILL RUN TILL THE LAST CASE except DEFAULT

const month = 3

switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    
    default:
        console.log("Please enter a valid month number")
        break;
        
        
}

// OR we can take strings too to compare

const month2 = "Feb"
switch(month2){
    case "Jan":
        console.log("January")
        break;
    case "Feb":
        console.log("Feb")
        break;
    case "March":
        console.log("March")
        break;

    default:
        console.log("Please enter a valid month")
        break;
}


// If else

const userLoggedIn = true
const PurchaseCourse = true
const useDebitCard = true
const HaveCourse = true
const NewcourseUnlock = false

if(userLoggedIn){
    if(PurchaseCourse){
        console.log("User Logged In and purchased a new course");
        if(useDebitCard){
            console.log("Purchased using debit card");
            if(HaveCourse)
                console.log("User have courses prior to this course");
                if(NewcourseUnlock){
                    console.log("User purchased a new course and it is avaiable in the library");
                }
                else{
                    console.log("User purchased a new course and still processing");
                    
                }
            
        }
    }

}

// TRUTHY AND FALSY VALUES
const user = {}
if(user){
    console.log("User Exists");
}
else{
    console.log("User does not exists ");
    
}


if(Object.keys(user) == 0){
    console.log("Empty object");
    
}


// NULL coalescing operator ( ??) - it lets you avoid the NULL value and UNDEFINED to store in the DB
let val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 20
console.log(val1); // it stops null value to come into any var/data

val1 = undefined ?? 30
console.log(val1);





