import { ICommand } from "../command.interface";
import { IUser } from '../../contracts/models/user.interface';
import { EmployeeRepository } from "../../repositories/employee-repository";

class GetUserCommandController implements ICommand<number, Promise<IUser>> {
    public execute(id: number): Promise<IUser> {
        let result = EmployeeRepository.get(id);
        return result;
    }
}

export const GetUserCommand = new GetUserCommandController();