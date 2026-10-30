
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
import { Calendar } from '../../../java/util/Calendar.js';
//not GWT import const Calendar

import { TimeZone } from '../../../java/util/TimeZone.js';
//not GWT import const TimeZone

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimeTypeUtil
            extends Object
         {
        

    private static readonly instance: TimeTypeUtil = new TimeTypeUtil();

    public static getInstance(): TimeTypeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TimeTypeUtil.instance;
    
}


    public readonly NIGHT: string = "Night";

    public readonly DAY: string = "Day";
isNight(...args: any[]): any {
   
    if (args.length === 0) return this.isNight$overload1();
   
    if (args.length === 1 && typeof args[0] === 'number') return this.isNight$overload2(args[0]);
   
   throw new TypeError('No matching overload: isNight'); }
  
    public isNight$overload1(): boolean{

    let hoursOfDay: number = this.getHourOfDay()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hoursOfDay < 6 || hoursOfDay > 18;
    
}

getHourOfDay(...args: any[]): any {
   
    if (args.length === 0) return this.getHourOfDay$overload1();
   
    if (args.length === 1 && typeof args[0] === 'number') return this.getHourOfDay$overload2(args[0]);
   
   throw new TypeError('No matching overload: getHourOfDay'); }
  
    public getHourOfDay$overload1(): number{

    let calendar: Calendar = Calendar.getInstance()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return calendar.get(Calendar.HOUR_OF_DAY);;
    
}

getNightOrDay(...args: any[]): any {
   
    if (args.length === 0) return this.getNightOrDay$overload1();
   
    if (args.length === 1 && typeof args[0] === 'number') return this.getNightOrDay$overload2(args[0]);
   
   throw new TypeError('No matching overload: getNightOrDay'); }
  
    public getNightOrDay$overload1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.isNight() ? this.NIGHT : this.DAY);
    
}


    public getHourOfDay$overload2(timeInMillis: number): number{

    let calendar: Calendar = Calendar.getInstance()!;;
    
calendar.setTimeInMillis(timeInMillis);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return calendar.get(Calendar.HOUR_OF_DAY);;
    
}


    public isNight$overload2(timeInMillis: number): boolean{

    let hoursOfDay: number = this.getHourOfDay(timeInMillis)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hoursOfDay < 6 || hoursOfDay > 18;
    
}


    public getNightOrDay$overload2(timeInMillis: number): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.isNight(timeInMillis) ? this.NIGHT : this.DAY);
    
}


}

