import { Component, State } from '@stencil/core';
import { DateHelper } from '../../helpers/date.helper';
import moment, { Moment } from 'moment';

@Component({
    tag: 'grid-calendar',
    styleUrl: 'grid-calendar.component.scss',
})
export class GridCalendarComponents {
    @State() date: Moment = moment();
    @State() days = new Array();
    public years: string[];

    constructor() {
        this.getDaysOfMonth();
        this.getYears();
    }

    getDaysOfMonth() {
        this.days = DateHelper.getDaysOfMonth(this.date.format('YYYY-MM'));
    }

    getYears() {
        this.years = DateHelper.getYears(
            moment().add(-3, 'year').format('DDMMMMYYYY'),
            moment().add(3, 'year').format('DDMMMYYYY')
        );
    }

    getNextMonth(index: number) {
        this.date = moment(this.date).add(index, 'months');
        this.getDaysOfMonth();
    }

    handleMonthChange(ev: CustomEvent) {
        this.date = moment(this.date).month(ev.detail);
        this.getDaysOfMonth();
    }

    handleYearChange(ev: CustomEvent) {
        this.date = moment(this.date).year(ev.detail);
        this.getDaysOfMonth();
    }

    render() {
        let someting = this.days.map(day => {
            if (day.format('MM') != this.date.format('MM')) {
                return (
                    <div tabindex="1" class="grid-item current-month">
                        {day.format('D')}
                    </div>
                );
            } else {
                return (
                    <div tabindex="1" class="grid-item ">
                        {day.format('D')}
                    </div>
                );
            }
        });

        return (
            <div>
                <div class="display-month">
                    <div class="material-icons icon" onClick={() => this.getNextMonth(-1)}>
                        arrow_back_ios
                    </div>
                    <div class="dispay-inline month">
                        <select-menu
                            model={moment.months()}
                            selectedValue={this.date.format('MMMM')}
                            onSelectedChange={ ev => {
                                this.handleMonthChange(ev);
                            }}
                        />

                        <select-menu
                            model={this.years}
                            selectedValue={this.date.format('YYYY')}
                            onSelectedChange={ev => this.handleYearChange(ev)}
                        />
                    </div>
                    <div class="material-icons icon" onClick={() => this.getNextMonth(1)}>
                        arrow_forward_ios
                    </div>
                </div>

                <div class="grid-container">
                    <div class="grid-item header">Su</div>
                    <div class="grid-item header">Mo</div>
                    <div class="grid-item header">Tu</div>
                    <div class="grid-item header">We</div>
                    <div class="grid-item header">Th</div>
                    <div class="grid-item header">Fr</div>
                    <div class="grid-item header">Sa</div>
                    {someting}
                </div>
            </div>
        );
    }
}
