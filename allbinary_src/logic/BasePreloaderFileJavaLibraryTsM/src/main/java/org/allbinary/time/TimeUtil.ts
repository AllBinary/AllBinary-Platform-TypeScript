
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
        



            import { Integer } from "../../../java/lang/Integer.js";
        
import { Calendar } from "../../../java/util/Calendar.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimeUtil
            extends Object
         {
        

    private static readonly instance: TimeUtil = new TimeUtil();
        
        

    public static getInstance(): TimeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly calendar: Calendar = Calendar.getInstance()!;
        
        

    public setCalendar(calendar: Calendar, yearString: string, monthString: string, dayString: string, hourString: string){
var calendar = calendar
var yearString = yearString
var monthString = monthString
var dayString = dayString
var hourString = hourString

    var year: number = new Integer(yearString).
                            toInt()!;
        
        
;
    

    var month: number = new Integer(monthString).
                            toInt()!;
        
        
;
    

    var day: number = new Integer(dayString).
                            toInt()!;
        
        
;
    

    var hour: number = new Integer(hourString).
                            toInt()!;
        
        
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
                            toInt()!;
        
        
;
    

    var month: number = new Integer(monthString).
                            toInt()!;
        
        
;
    

    var day: number = new Integer(dayString).
                            toInt()!;
        
        
;
    

    var hour: number = new Integer(hourString).
                            toInt()!;
        
        
;
    

    var minute: number = new Integer(minuteString).
                            toInt()!;
        
        
;
    

    var second: number = new Integer(secondString).
                            toInt()!;
        
        
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
                            toInt();
        
        
;
    

    var month: number = calendar.get(Calendar.MONTH) +new Integer(monthsString).
                            toInt();
        
        
;
    

    var day: number = calendar.get(Calendar.DAY_OF_MONTH) +new Integer(daysString).
                            toInt();
        
        
;
    

    var hour: number = calendar.get(Calendar.HOUR) +new Integer(hoursString).
                            toInt();
        
        
;
    

    var minute: number = calendar.get(Calendar.MINUTE) +new Integer(minutesString).
                            toInt();
        
        
;
    

    var second: number = calendar.get(Calendar.SECOND) +new Integer(secondsString).
                            toInt();
        
        
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

    var time: number = calendar.getTimeInMillis()!;
        
        
;
    
this.setExpirationCalendar(calendar, yearString, monthString, dayString, hourString, minuteString, secondString);
    

    var timeDelta: number = calendar.getTimeInMillis()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeDelta -time;
    
}


}
                
            

