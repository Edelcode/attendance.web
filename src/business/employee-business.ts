import { IEmployeeBusiness } from "../contracts/business/employee-business.interface";
import { EmployeeModel } from "../data/models/employee.model";
import { Prop } from "@stencil/core";

export class EmployeeBusiness implements IEmployeeBusiness {
    @Prop({ connect: 'IEmployeeRepository' }) employeeRepository;

    constructor() {}

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