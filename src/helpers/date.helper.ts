import moment from 'moment';

export class DateHelper{
    public static getDaysOfMonth(year:string, month:string) {
        let days = new Array();
        let monthAndYear = year + '-' + month;
        
        var firstDayOfMonth = moment(monthAndYear).startOf('month');
        var lastDayOfMonth= moment(monthAndYear).endOf('month');
        let startDate= moment(firstDayOfMonth).add(-firstDayOfMonth.day(), 'days');
        let endDate= moment(lastDayOfMonth).add(6-lastDayOfMonth.day(), 'days');

        for (endDate; startDate.isBefore(endDate); startDate.add(1, 'day'))  {
            
            days.push(startDate.clone());
        }
        return days;
    }
}