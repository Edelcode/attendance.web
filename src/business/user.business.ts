import { FindUserCommand, SaveUserCommand, DeleteUserCommand } from '../commands/user';
import { IUser } from '../contracts/models';
import { IFindUserRequest } from '../contracts/requests/find-user-request.interface';
import { GetUserCommand } from '../commands/user/get-user.command';

export class UserBusiness {
    find(request: IFindUserRequest): Promise<IUser[]> {
        let result = FindUserCommand.execute(request);
        return result;
    }

    get(id: number): Promise<IUser> {
        let result= GetUserCommand.execute(id)
        return result;
    }

    save(request: IUser): Promise<IUser> {
        let result= SaveUserCommand.execute(request)
        return result;
    }

    delete(id: number): Promise<boolean> {
        let result = DeleteUserCommand.execute(id)
        return result;
    }
}