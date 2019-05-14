import { IBaseRequest } from '../../contracts/requests';
class HttpClientController {
    public async find<TInput extends IBaseRequest, TOutput>(request: TInput): Promise<TOutput> {
        var url = ' ';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                return data as TOutput;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async get<T>(id: number): Promise<T> {
        var url = ' ';
        var data = { id: id };

        try {
            const response = await fetch(url, {
                method: 'GET',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data_1 = await response.json();
            return data_1 as T;
        }
        catch (error) {
            throw error;
        }

    }

    public async save<T>(model: T): Promise<T> {
        var url = ' ';

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(model),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                return data as T;
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public async delete(id: number): Promise<boolean> {
        var url = ' ';
        var data = { id: id };

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data_1 = await response.json();
            return data_1 as boolean;
        }
        catch (error) {
            throw error;
        }

    }
}

export const HttpClient = new HttpClientController();