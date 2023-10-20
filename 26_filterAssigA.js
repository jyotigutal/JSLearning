

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

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];

console.log(`Step 1 ==> Traverse all employee details from 'TCS' `);

 const arrayTcsEmp = arrayEmployees.filter((employee)=>{
        return employee.emp_company =='TCS';

    })
    arrayTcsEmp.forEach((employees)=>{        
            console.log(`The Employee Name is: ${employees.emp_name} and Company Name is: ${employees.emp_company}`);
        })

        console.log(`========================================`);
        console.log(`Step 2 ==> Average salary of employee from company 'Wipro'`);

           const arraySalary = arrayEmployees.filter((employee)=>{
              return  employee.emp_company =='Wipro';

            })

           const arraySalaryEmp = arraySalary.map((employee)=>{
                return employee.emp_salary ;
            })
            console.log(arraySalaryEmp);

            let sum=0;
            for (let index = 0; index < arraySalaryEmp.length; index++) {
                 sum= sum+ arraySalaryEmp[index];
                }
            let avgSalary=sum/arraySalaryEmp.length;
            console.log(`Average salary will be: ${avgSalary}`);

            console.log(`========================================`);
            console.log(`Step 3 ==> Average salary of employee from company 'Wipro or Infy'`);


            const arraySalary1 = arrayEmployees.filter((employee)=>{
                return  employee.emp_company =='Wipro' || employee.emp_company =='Infy';
  
              })
        
             const arraySalaryEmp1 = arraySalary1.map((employee)=>{
                     return employee.emp_salary;
  
              })
              console.log(arraySalaryEmp1);
  
              let sumSalary=0;
              for (let index = 0; index < arraySalaryEmp1.length; index++) {
                sumSalary= sumSalary+ arraySalaryEmp1[index];
                  }
              let avgSalaryEmp=sumSalary/arraySalaryEmp1.length;
              console.log(`Average salary will be: ${avgSalaryEmp}`);
    