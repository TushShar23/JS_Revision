console.log("********************** BREAK *************************\n");


let myArr = ["Flash","Spiderman","Thor","Hulk",10,78,56]

for (let index = 0; index < myArr.length; index++) {
    if(myArr[index] == 10){
        break;
    }
    console.log(myArr[index])
}

console.log("******************* CONTINUE *************************\n")
for (let index = 0; index < myArr.length; index++) {
    if(myArr[index] == 78){
        continue
    }
    console.log(myArr[index])
}

let index=0;
while(index < 20){
    console.log(`value of index is ${index}`)
    index = index +2
}