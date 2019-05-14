import { Component, State } from '@stencil/core';

@Component({
    tag: 'employees-page',
    styleUrl: 'employees.page.scss',
})
export class EmployeesPage {
    @State() date: number;
    public days = new Array();

    constructor() {
    }

    render() {

        return (
            <div class="page">
                <div class="nav-bar">
                    <ul>
                        <li>
                            <a href="#home">Users</a>
                        </li>
                        <li>
                            <a href="#news">Holidays</a>
                        </li>
                    </ul>
                </div>
               <grid-calendar-component ></grid-calendar-component>
            </div>
        );
    }
}
