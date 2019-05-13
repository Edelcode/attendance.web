import { BaseRequest } from "../data/requests";
import { HttpClient } from './../utilities';

export class BaseRepository<T1 extends BaseRequest, T2>{
    public async find(request: T1): Promise<T2[]> {
        try {
            return await HttpClient.find<T1, T2[]>(request);
        } catch (e) {
            return e;
        }
    }

    public async get(id: number): Promise<T2> {
        try {
            return await HttpClient.get<T2>(id);
        } catch (e) {
            return e;
        }
    }

    public async save(model: T2): Promise<T2> {
        try {
            return await HttpClient.save<T2>(model);
        } catch (e) {
            return e;
        }
    }

    public async delete(id: number): Promise<boolean> {
        try {
            return await HttpClient.delete(id);
        } catch (e) {
            return e;
        }
    }
}