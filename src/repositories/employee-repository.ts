import { IUser } from "../contracts/models";
import { IBaseRequest } from "../contracts/requests";
import { BaseRepository } from './base.repository';

class EmployeeRepositoryController extends BaseRepository<IBaseRequest, IUser> { }

export const EmployeeRepository = new EmployeeRepositoryController();