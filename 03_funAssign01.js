
console.log("============Step 1- function with no arguments and no return type=============");
function collegeDetails(){
    console.log("Name : VIIT Baramati");
    console.log("Degree : MCA");
    console.log("University : Pune");
}

collegeDetails();
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

function employeeDetails(){
    console.log("Employee Id : 124");
    console.log("Employee Name : Jenny");
    console.log("Employee Designation : Testing");
}

employeeDetails();

console.log("============Step 2- function with arguments =============");

function personalDetails(firstName,lastName,collegeName){
    console.log("First Name is ",firstName);
    console.log("Last Name is ",lastName);
    console.log("College Name is ",collegeName);
}

personalDetails("Jyoti","Gutal","VIIT");

console.log("============Step 3- function with arguments and no return type =============");
function swapValues(num1,num2) {
    console.log("Values before swapping is ",num1,num2);
    var temp =num1;
    num1 = num2;
    num2 = temp;
    console.log("Values after swapping is ",num1,num2);
}
swapValues(10,20);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
swapValues("Virat","Anushka");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
swapValues(1000,2000);

console.log("============Step 4- function with arguments and return type =============");

function addThreeValues(num1,num2,num3){
    var temp = num1+num2+num3;
    return temp;
}
var addition= addThreeValues(12,22,24);
console.log("Addition of 12,22,24 = ",addition);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
addition = addThreeValues(10.23,600,40);
console.log("Addition of 10.23,600,40 = ",addition);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
var addition= addThreeValues("Hello"," Good"," Morning");
console.log("Addition of three words = ",addition);