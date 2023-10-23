
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary =emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];

console.log(`Step 1==> Find all the employees from 'Wipro' company`);
 const empName = arrayEmps.reduce((runningTotal,value)=>{
        if(value.emp_company == 'Wipro'){
            console.log(`The employee name of company 'Wipro' is : ${value.emp_name}`);
        };

    })

    console.log(`==================================================`);
    console.log(`Step 2==> Find all the employees from 'IT' and 'HR'dept`);

    const empDept = arrayEmps.reduce((runningTotal,value)=>{
            if(value.emp_dept == 'IT' || value.emp_dept == 'HR' ){
                console.log(`The employee from 'IT' and 'HR'dept : ${value.emp_name}`);
            }

    },0);
    console.log(`==================================================`);
    console.log(`Step 3==> Find all the employees whose emp id's greater than 50`);

    const empId = arrayEmps.reduce((runningTotal,value)=>{
        if(value.emp_id > 50){
            console.log(`Employee Name ==> ${value.emp_name} || Department ==> ${value.emp_dept} || Company ==> ${value.emp_company} || Salary ==> ${value.emp_salary} `);
        }

    })

    console.log(`==================================================`);
    console.log(`Step 4==> The employees whose name starts with 'A' or 'V' or 'M'`);

    const empStartName = arrayEmps.reduce((runningTotal,value)=>{
            if(value.emp_name.startsWith('A') || value.emp_name.startsWith('V') || value.emp_name.startsWith('M')){
                console.log(`The employee name is : ${value.emp_name}`);   
            }

    },0)

    console.log(`==================================================`);
    console.log(`Step 5==> The average salary of all departments `);
    let sum = 0;
    const empAvgSalary = arrayEmps.reduce((runningTotal,Value)=>{
          sum = sum + Value.emp_salary;     
});

console.log(`The sum of salary is : ${sum/arrayEmps.length}`);

console.log(`==================================================`);
console.log(`Step 6==> The average salary of IT department `);
const arrayItEmployees = arrayEmps.filter( (employee) => {
    return employee.emp_dept=='IT';
 });
//  console.log(arrayItEmployees);
 const arrayITSalary = arrayItEmployees.map( (employee)=> {
    return employee.emp_salary;
 } );

 console.log(arrayITSalary);

    const empAvgSalaryIT = arrayITSalary.reduce((runningTotal,Value)=>{
        return runningTotal + Value;
},0);

console.log(`The average salary of IT dept is : ${empAvgSalaryIT/arrayITSalary.length}`);


