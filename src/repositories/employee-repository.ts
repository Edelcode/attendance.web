import { EmployeeModel } from "../data/models/employee.model";
import { IEmployeeRepository } from "../contracts/repositories/employee-repository.interface";
import { BaseRequest } from "../data/requests";
import { BaseRepository } from './base.repository';

class EmployeeRepositoryController extends BaseRepository<BaseRequest, EmployeeModel> implements IEmployeeRepository { }

export const EmployeeRepository = new EmployeeRepositoryController();