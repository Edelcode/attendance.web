import { IEmployeeBL } from "../contracts/business/i-employee-business";
import { EmployeeModel } from "../data/models/employee.model";
import { IEmployeeRepository } from "../contracts/repositories/i-employee-repository";

export class EmployeeBL implements IEmployeeBL {

    constructor(
        private employeeRepository: IEmployeeRepository,
    ) {}

    find(id: number): EmployeeModel {
        let result = this.employeeRepository.find(id);
        return result;
    }
    get(id: number): EmployeeModel {
        let result = this.employeeRepository.get(id);
        return result;
    }
    save(employee: EmployeeModel):EmployeeModel {
        let result = this.employeeRepository.save(employee);
        return result;
    }
    update(id: number): EmployeeModel {
        let result = this.employeeRepository.update(id);
        return result;
    }
    delete(id: number): boolean {
        let result = this.employeeRepository.delete(id);
        return result;
    }
}