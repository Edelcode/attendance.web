import { EmployeeModel } from "../data/models/employee.model";
import { IEmployeeRepository } from "../contracts/repositories/i-employee-repository";

export class EmployeeRepository implements IEmployeeRepository {

    find(id: number): EmployeeModel {
        var url = ' ';
        var data = { id: id };

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        return ;
    }

    get(id: number): EmployeeModel {
        var url = ' ';
        var data = { id: id };

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        return ;
    }

    save(employee: EmployeeModel): EmployeeModel {
        var url = ' ';
        var data = { employee: employee };

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        return ;
    }

    update(id: number): EmployeeModel {
        var url = ' ';
        var data = { id: id };

        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        return ;
    }

    delete(id: number): boolean {
        var url = ' ';
        var data = { id: id };

        fetch(url, {
            method: 'DELETE', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        return ;
    }

}