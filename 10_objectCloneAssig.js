

const personalDetail = {
    name : "Jyoti",
    address : "Indapur",
    city : "Pune",

}

const collegeDetail ={
    collegeName : "VIIT",
    collegeAddress : "Baramati",
    course : "B.E",
    grade : "AA+",
}
let mergeObject ={
    name : "Jyoti",
    address : "Indapur",
    city : "Pune",
}

console.log(`================Step 3 =================`);

 Object.assign(mergeObject,personalDetail,collegeDetail)
console.log(`After merging the details are name ==> ${mergeObject.name} | address ==> ${mergeObject.address} | city==> ${mergeObject.city} | College Name==> ${mergeObject.collegeName} | College address==> ${mergeObject.collegeAddress} | Course==> ${mergeObject.course} | Grade==> ${mergeObject.grade}`);

console.log(`============Step 5 Name of Friends===========`);

const friendsName = ["Shital","Swati","Supriya","Chetana","Aditi"];
Object.freeze(friendsName);

for (let index = 0; index <=friendsName.length-1; index++) {
    const element = friendsName[index];
    console.log(element);
}

console.log(`================Step 6 =================`);

let str = "Codemind Technology";

let char ='';
for (let index = str.length-1; index >=0; index--) {
     char = char + str.charAt(index);
     
    if(str.charAt(index) ==' '){
        break;
    }    
}
console.log(char);