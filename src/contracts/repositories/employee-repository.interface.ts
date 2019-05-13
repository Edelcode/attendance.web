import { EmployeeModel } from "../../data/models/employee.model";
import { BaseRequest } from "../../data/requests";

export interface IEmployeeRepository {
    find(request: BaseRequest): Promise<EmployeeModel[]>;
    get(id: number): Promise<EmployeeModel>;
    save(employee: EmployeeModel): Promise<EmployeeModel>
    delete(id: number): Promise<boolean>;

}