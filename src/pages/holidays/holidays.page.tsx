import { Component, State } from '@stencil/core';

@Component({
    tag: 'holidays-page',
    styleUrl: 'holidays.page.scss',
})
export class HolidaysPage {
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
               <grid-calendar ></grid-calendar>
            </div>
        );
    }
}
