

let professor = {
name : "Dr. Moorthy",
age : 55,
desig : "Assistant prof",
degrees:{
    engineering : "CSC",
    PHP :"Adv Computing",
    IT : "Information Tech",
    Java : "Developer",

},
certificates :['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
};


console.log(`Step 4 ==> Adding new property in object`);
professor.totalExperience ="14 years";
console.log(`After adding 'tatalExperience' object is: ${professor.totalExperience}`);

console.log(`Step 5 ==> updating the desig property in object`);
professor.desig = "Sr. Assistant";
console.log(`The updated value is: ${professor.desig}`);

console.log(`Step 6 ==> Add new certificate in object`);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

console.log(`Step 7 ==> Last element of the array certificate`);
professor.certificates.length-1;
console.log(professor.certificates[professor.certificates.length-1]);

console.log(`Step 8 ==> The Object Professor`);
console.log(professor);

console.log(`Step 9 ==> Traverse the array certificate using for of loop`);
for (const certificate of professor.certificates) {
    console.log(certificate);
    
}


