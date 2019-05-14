import { Component, State } from '@stencil/core';
import { DateHelper } from '../helpers/date.helper';
import moment from 'moment';

@Component({
    tag: 'grid-calendar-component',
    styleUrl: 'grid-calendar.component.scss',
})
export class GridCalendarComponents {
    @State() year: string = '2019';
    @State() month: string = '02';
    public days = new Array();

    constructor() {
        this.getDaysOfMonth();
    }

    getDaysOfMonth() {
        this.days = DateHelper.getDaysOfMonth(this.year, this.month);
    }

    handleYearChange(event) {
        this.year = event.target.value;
        this.getDaysOfMonth();
    }

    handleMonthChange(event) {
        this.month = event.target.value;
        this.getDaysOfMonth();
    }

    render() {
        let someting = this.days.map(day => {
            if (day.format('MM') != this.month) {
                return <div class="grid-item current-month">{day.format('D')}</div>;
            } else {
                return <div class="grid-item">{day.format('D')}</div>;
            }
        });

        return (
            <div>
                <input
                    type="text"
                    value={this.year}
                    onInput={event => this.handleYearChange(event)}
                />

                <input
                    type="text"
                    value={this.month}
                    onInput={event => this.handleMonthChange(event)}
                />

                <div class="row display-month">
                    <div class="material-icons icon">arrow_back_ios</div>
                    <div class="dispay-inline">
                        {moment(this.month).format('MMMM')}
                        {this.year}{' '}
                    </div>
                    <div class="material-icons icon">arrow_forward_ios</div>
                </div>

                <div class="grid-container">
                    <div class="grid-item header">
                        <b>Su</b>
                    </div>
                    <div class="grid-item header">
                        <b>Mo</b>
                    </div>
                    <div class="grid-item header">
                        <b>Tu</b>
                    </div>
                    <div class="grid-item header">
                        <b>We</b>
                    </div>
                    <div class="grid-item header">
                        <b>Th</b>
                    </div>
                    <div class="grid-item header">
                        <b>Fr</b>
                    </div>
                    <div class="grid-item header">
                        <b>Sa</b>
                    </div>
                    {someting}
                </div>
            </div>
        );
    }
}
