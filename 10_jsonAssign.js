
const melonData =`{
    "name": "Aleix Melon",
    "id" :"E00245",
    "role" : ["Dev","DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" :"32, Laham St.  ",
        "city" : "innsbruck",
        "country" : "Austria"
    },
     "referred by" : "E0012"

}`
console.log(typeof melonData );
const data = JSON.parse(melonData);
console.log(typeof data);
console.log(data);

console.log(`============================================`);
let result = data.role;
console.log(`The Role of employee is : ${result[0]}`);

console.log(`============================================`);
let nameData = data.name;
let dataName = nameData.split(" ");
console.log(`The last name of employee is : ${dataName[1]}`);

console.log(`============================================`);

date = data.doj;
console.log(date);
let d = date.split('-');
console.log(`The joining year of employee is :${d[2]}`);
