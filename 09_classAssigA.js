

class Vehicle {
    model
    color
    fuelType
    seaters
    constructor(model,color,fuelType,seaters){
        this.model =model;
        this.color= color;
        this.fuelType =fuelType;
        this.seaters= seaters;
    }
    //methods
    // details(){
    //     console.log(`Details of Vehicle, Model=> ${this.model},Color=> ${this.color},Fuel Type=> ${this.fuelType},Seating Capacity=> ${this.seaters}`);
    // }
}

console.log(`Step 1 ==> Class Vehicle with 5 properties`);

const vehicleBMW = new Vehicle("BMW X7","Black","Petrol & Diesel", 6);
// console.log(vehicleBMW);

const vehicleCreta = new Vehicle("Hyundai Creta","Black","Petrol & Diesel", 5);
//  console.log(vehicleCreta);

const vehicleWagonR = new Vehicle("Maruti Wagon R","Solid White","Petrol & CNG", 5);
// console.log(vehicleWagonR);

const vehicleSwift = new Vehicle("Maruti Swift","Red","Petrol & CNG", 5);
// console.log(vehicleSwift);

const vehicleNexon = new Vehicle("Tata Nexon","Red","Petrol", 5);
//  console.log(vehicleNexon);

console.log(`================ Traversing an array ===========================`);
const arrayOfVehicle =[vehicleBMW,vehicleCreta,vehicleWagonR,vehicleSwift,vehicleNexon];
for (const element of arrayOfVehicle) {
    // element.details();
     console.log(`Model of Vehicle==> ${element.model} | Color of Vehicle==> ${element.color} | Fuel Type ==> ${element.fuelType} | Seating Capacity ==> ${element.seaters}`);
}

console.log(`===================================================`);
console.log(`Step 2 ==> Class College with 4 properties`);

class College{
    // name
    // address
    // rating
    // course
    constructor(name,address,rating,course){
        this.Name = name;
        this.Address = address;
        this.Rating = rating;
        this.Course = course;
    }
    display(){
        console.log(`College details : Name==> ${this.Name} | Address==> ${this.Address} | Rating==> ${this.Rating} | Course==> ${this.Course}`);
    }
}


const collegeCOEP = new College("COEP Technological University","Pune","AAAA+","M.E");
//console.log(collegeCOEP.display());

const collegeAIT = new College("Army Institute of Technology","Pune","AAAA+","B.E");
// console.log(collegeAIT);

const collegeVIIT = new College("Vidya Pratishthan’s Institute of IT","Baramati","A+","MCA");
//  console.log(collegeVIIT);

const collegeSBPCOE = new College("S.B Patil College of Engineering","Indapur","A+","B.E");
//  console.log(collegeSBPCOE);

// console.log(`==============================`);

const arrayCollege =[collegeCOEP,collegeAIT,collegeVIIT,collegeSBPCOE];
for (const element of arrayCollege) {
     element.display();
}

console.log(`=============================================`);
console.log(`Step 3==> function traverseObject() with one arg `);

function traverseObject(objectCollege) {
    for (const key in objectCollege) {
        const element = objectCollege[key];
        console.log(`${key} - ${element} `);  
        
    }
}


traverseObject(collegeCOEP);
console.log(`==========================`);
traverseObject(collegeAIT);
console.log(`==========================`);
traverseObject(collegeVIIT);
console.log(`==========================`);
traverseObject(collegeSBPCOE);



