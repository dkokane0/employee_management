import { Injectable } from "@nestjs/common";
import { Employee } from "./data/employee.dto";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class EmployeeService {
    public employees : Employee[] = [];


// add employee 
addEmployeeService(employee : Employee) : string {
    employee.id = uuidv4();
this.employees.push(employee);
return "Record added...";
}

// update employee data
 updateEmployeeService(employee : Employee) : string {
     let index = this.employees.findIndex((currentEmployee)=>{
return currentEmployee.id == employee.id;
     });
     this.employees[index] = employee;
     return "record updated"
}
// delete employee
deleteEmployeeService(employeeId : string) : string {
    this.employees = this.employees.filter((employee)=>{
return employee.id != employeeId;
    });
    return "employee record deleted";
}

// find all employee
findAllEmployees() : Employee[] {
    return this.employees;
}


}


