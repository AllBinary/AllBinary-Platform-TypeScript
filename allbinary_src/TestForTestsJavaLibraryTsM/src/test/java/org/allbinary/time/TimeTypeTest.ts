
        /* Generated Code Do Not Modify */
        



import { Calendar } from "../../../java/util/Calendar.js";

    
import { Assertions } from "../../../org/junit/jupiter/api/Assertions.js";

    
import { DisplayName } from "../../../org/junit/jupiter/api/DisplayName.js";

    
import { Test } from "../../../org/junit/jupiter/api/Test.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TimeTypeUtil } from "./TimeTypeUtil.js";

export class TimeTypeTest
            extends Object
         {
        

    static millisForHourLocal(hour: number): number{
var hour = hour

    var cal: Calendar = Calendar.getInstance()!;
        
        
;
    
cal.set(Calendar.HOUR_OF_DAY, hour);
    
cal.set(Calendar.MINUTE, 0);
    
cal.set(Calendar.SECOND, 0);
    
cal.set(Calendar.MILLISECOND, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cal.getTimeInMillis();

                        ;
    
}


export class TestableTimeTypeUtil extends TimeTypeUtil {
        
/*Static stuff is not allowed for Typescript inner classes*//**/


    private readonly hour: number
 constructor (hour: number){

            super();
        var hour = hour
this.hour= hour;
    
}


    public getHourOfDay(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hour;
    
}


}
                
            
    isNight_returnsTrue_for_hours_less_than_6(){

                    //Otherwise - statement - ForEachStmt

}


    isNight_returnsTrue_for_hours_greater_than_18(){

                    //Otherwise - statement - ForEachStmt

}


    isNight_returnsFalse_for_boundary_hours_6_and_18(){

                    //Otherwise - statement - ForEachStmt

}


    getNightOrDay_returns_expected_label(){

    var nightUtil: TimeTypeUtil = new TestableTimeTypeUtil(0);
        
        
;
    
Assertions.assertEquals(nightUtil!.NIGHT, nightUtil!.getNightOrDay());
    

    var dayUtil: TimeTypeUtil = new TestableTimeTypeUtil(12);
        
        
;
    
Assertions.assertEquals(dayUtil!.DAY, dayUtil!.getNightOrDay());
    
}


    getHourOfDay_long_converts_epoch_to_local_hour(){

    var util: TimeTypeUtil = new TimeTypeUtil();
        
        
;
    

                    //Otherwise - statement - ForEachStmt

}


    isNight_long_expected_ranges(){

    var util: TimeTypeUtil = new TimeTypeUtil();
        
        
;
    

                    //Otherwise - statement - ForEachStmt


                    //Otherwise - statement - ForEachStmt

}


    getNightOrDay_long_consistency(){

    var util: TimeTypeUtil = new TimeTypeUtil();
        
        
;
    

    var nightMillis: number = millisForHourLocal(0)!;
        
        
;
    

    var dayMillis: number = millisForHourLocal(12)!;
        
        
;
    
Assertions.assertEquals(util.NIGHT, util.getNightOrDay(nightMillis));
    
Assertions.assertEquals(util.DAY, util.getNightOrDay(dayMillis));
    
}


    boundaries_day_for_long_based_api(){

    var util: TimeTypeUtil = new TimeTypeUtil();
        
        
;
    

                    //Otherwise - statement - ForEachStmt

}


    constants_accessible_and_stable(){

    var util: TimeTypeUtil = new TimeTypeUtil();
        
        
;
    
Assertions.assertEquals("Night", util.NIGHT);
    
Assertions.assertEquals("Day", util.DAY);
    
}


    getInstance_returns_same_singleton(){

    var a: TimeTypeUtil = TimeTypeUtil.getInstance()!;
        
        
;
    

    var b: TimeTypeUtil = TimeTypeUtil.getInstance()!;
        
        
;
    
Assertions.assertSame(a, b);
    
}


}
                
            

