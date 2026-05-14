
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
            import { Integer } from '../../../java/lang/Integer.js';
        
import { Calendar } from '../../../java/util/Calendar.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimeUtil
            extends Object
         {
        

    private static readonly instance: TimeUtil = new TimeUtil();

    public static getInstance(): TimeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TimeUtil.instance;
    
}


    private static readonly calendar: Calendar = Calendar.getInstance()!;

    public setCalendar(calendar: Calendar, yearString: string, monthString: string, dayString: string, hourString: string){
var calendar = calendar
var yearString = yearString
var monthString = monthString
var dayString = dayString
var hourString = hourString

    var year: number = new Integer(yearString).
                            intValue()!;
;
    

    var month: number = new Integer(monthString).
                            intValue()!;
;
    

    var day: number = new Integer(dayString).
                            intValue()!;
;
    

    var hour: number = new Integer(hourString).
                            intValue()!;
;
    
calendar.set(year, month, day, hour, 0);
    
}


    public setCalendar(calendar: Calendar, yearString: string, monthString: string, dayString: string, hourString: string, minuteString: string, secondString: string){
var calendar = calendar
var yearString = yearString
var monthString = monthString
var dayString = dayString
var hourString = hourString
var minuteString = minuteString
var secondString = secondString

    var year: number = new Integer(yearString).
                            intValue()!;
;
    

    var month: number = new Integer(monthString).
                            intValue()!;
;
    

    var day: number = new Integer(dayString).
                            intValue()!;
;
    

    var hour: number = new Integer(hourString).
                            intValue()!;
;
    

    var minute: number = new Integer(minuteString).
                            intValue()!;
;
    

    var second: number = new Integer(secondString).
                            intValue()!;
;
    
calendar.set(year, month, day, hour, minute, second);
    
}


    public setExpirationCalendar(calendar: Calendar, yearsString: string, monthsString: string, daysString: string, hoursString: string, minutesString: string, secondsString: string){
var calendar = calendar
var yearsString = yearsString
var monthsString = monthsString
var daysString = daysString
var hoursString = hoursString
var minutesString = minutesString
var secondsString = secondsString

    var year: number = calendar.get(Calendar.YEAR) +new Integer(yearsString).
                            intValue();
;
    

    var month: number = calendar.get(Calendar.MONTH) +new Integer(monthsString).
                            intValue();
;
    

    var day: number = calendar.get(Calendar.DAY_OF_MONTH) +new Integer(daysString).
                            intValue();
;
    

    var hour: number = calendar.get(Calendar.HOUR) +new Integer(hoursString).
                            intValue();
;
    

    var minute: number = calendar.get(Calendar.MINUTE) +new Integer(minutesString).
                            intValue();
;
    

    var second: number = calendar.get(Calendar.SECOND) +new Integer(secondsString).
                            intValue();
;
    
calendar.set(year, month, day, hour, minute, second);
    
}


    public getTotalTime(yearString: string, monthString: string, dayString: string, hourString: string, minuteString: string, secondString: string): number{
var yearString = yearString
var monthString = monthString
var dayString = dayString
var hourString = hourString
var minuteString = minuteString
var secondString = secondString

    var time: number = TimeUtil.calendar.getTimeInMillis()!;
;
    
this.setExpirationCalendar(calendar, yearString, monthString, dayString, hourString, minuteString, secondString);
    

    var timeDelta: number = TimeUtil.calendar.getTimeInMillis()!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeDelta -time;
    
}


}
                
            

