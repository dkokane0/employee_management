import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { Employee } from './data/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService :EmployeeService){

    }

    @Get('/findAll')
    getAllEmployees() : Employee[]{
return this.employeeService.findAllEmployees();
}
@Put('/update')
updateEmployee(@Body() employee : Employee) : string{
    return this.employeeService.updateEmployeeService(employee);
}

@Delete('/delete/:id')
deleteEmployee(@Param("id") employeeId : string) : string{
    return this.employeeService.deleteEmployeeService(employeeId);
} 

@Post('/add')
addEmployee(@Body() employee : Employee) : string{
    return this.employeeService.addEmployeeService(employee);
} 


}
 