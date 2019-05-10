import { EmployeeModel } from "../../data/models/employee.model";

export interface IEmployeeRepository {

    find(id:number):EmployeeModel;
    get(id:number):EmployeeModel;
    save(employee:EmployeeModel):EmployeeModel;
    update(id:number):EmployeeModel;
    delete(id:number):boolean;

}