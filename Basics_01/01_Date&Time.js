let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate);
console.log(myCreateDate.toString());


/// +++++++++++++++++++++++++++++++++++++++ TIME +++++++++++++++++++++++++

let timeStamp = Date.now()
console.log(timeStamp);

console.log(myCreateDate.getTime());
// dates start from 1january

// MORE DATE EXTRACTION METHOD 

let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getTime());

newdate.toLocaleString('default',{
    timeStyle:"long",
    dateStyle:"long"
})
console.log(newdate)

//In JavaScript's toLocaleString() method, you cannot mix timeStyle (or dateStyle) with individual component properties like weekday, month, hour, or minute. You have to choose one approach or the other.
// You have to choose 1 approach either only weekday,time these attributes or timestyle,datestyle etc..





