import { ICommand } from "../command.interface";
import { IUser } from '../../contracts/models/user.interface';
import { EmployeeRepository } from "../../repositories/employee-repository";

class SaveUserCommandController implements ICommand<IUser, Promise<IUser>> {
    public execute(request: IUser): Promise<IUser> {
        let result = EmployeeRepository.save(request);
        return result;
    }
}

export const SaveUserCommand = new SaveUserCommandController();