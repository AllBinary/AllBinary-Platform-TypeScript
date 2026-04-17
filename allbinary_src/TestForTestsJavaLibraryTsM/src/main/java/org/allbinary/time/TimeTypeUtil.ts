
        /* Generated Code Do Not Modify */
        



import { Calendar } from "../../../java/util/Calendar.js";

    
import { TimeZone } from "../../../java/util/TimeZone.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimeTypeUtil
            extends Object
         {
        

    private static readonly instance: TimeTypeUtil = new TimeTypeUtil();
        
        

    public static getInstance(): TimeTypeUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NIGHT: string = "Night";
        
        

    public readonly DAY: string = "Day";
        
        

    public isNight(): boolean{

    var hoursOfDay: number = this.getHourOfDay()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hoursOfDay < 6 || hoursOfDay > 18;
    
}


    public getHourOfDay(): number{

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return calendar.get(Calendar.HOUR_OF_DAY);

                        ;
    
}


    public getNightOrDay(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isNight()
                        ?       
                                NIGHT
                                :

                            DAY;

    ;
    
}


    public getHourOfDay(timeInMillis: number): number{
var timeInMillis = timeInMillis

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    
calendar.setTimeInMillis(timeInMillis);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return calendar.get(Calendar.HOUR_OF_DAY);

                        ;
    
}


    public isNight(timeInMillis: number): boolean{
var timeInMillis = timeInMillis

    var hoursOfDay: number = this.getHourOfDay(timeInMillis)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hoursOfDay < 6 || hoursOfDay > 18;
    
}


    public getNightOrDay(timeInMillis: number): string{
var timeInMillis = timeInMillis



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isNight(timeInMillis)
                        ?       
                                NIGHT
                                :

                            DAY;

    ;
    
}


}
                
            

