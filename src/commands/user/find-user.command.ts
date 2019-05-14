import { ICommand } from "../command.interface";
import { IUser } from '../../contracts/models/user.interface';
import { IFindUserRequest } from '../../contracts/requests/find-user-request.interface';
import { EmployeeRepository } from '../../repositories/employee-repository'

class FindUserCommandController implements ICommand<IFindUserRequest, Promise<IUser[]>> {
    public execute(request: IFindUserRequest): Promise<IUser[]> {
        let result = EmployeeRepository.find(request)
        return result;
    }
}

export const FindUserCommand = new FindUserCommandController();