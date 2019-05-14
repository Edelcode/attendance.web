import { ICommand } from "../command.interface";
import { EmployeeRepository } from "../../repositories/employee-repository";

class DeleteUserCommandController implements ICommand<number, Promise<boolean>> {
    public execute(id: number): Promise<boolean> {
        let result = EmployeeRepository.delete(id);
        return result;
    }
}

export const DeleteUserCommand = new DeleteUserCommandController();