import moment from 'moment';

export class DateHelper{
    public static getDaysOfMonth(monthAndYear:string) {
        let days = new Array();
        
        var firstDayOfMonth = moment(monthAndYear).startOf('month');
        var lastDayOfMonth= moment(monthAndYear).endOf('month');
        let startDate= moment(firstDayOfMonth).add(-firstDayOfMonth.day(), 'days');
        let endDate= moment(lastDayOfMonth).add(6-lastDayOfMonth.day(), 'days');

        for (endDate; startDate.isBefore(endDate); startDate.add(1, 'day'))  {
            
            days.push(startDate.clone());
        }
        return days;
    }

    public static getYears(startDate:string, endDate:string){
        var years =new Array();

        var start = new Date( startDate);
        var first = start.getFullYear();
    
        var end = new Date( endDate);
        var second = end.getFullYear();
    
       for(var i = first; i <= second; i++) years.push(i).toString();
       return years;
    }
}