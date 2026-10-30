
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
import { Calendar } from '../../../java/util/Calendar.js';
//not GWT import const Calendar

import { Assertions } from '../../../org/junit/jupiter/api/Assertions.js';
//not GWT import const Assertions

import { DisplayName } from '../../../org/junit/jupiter/api/DisplayName.js';
//not GWT import const DisplayName

import { Test } from '../../../org/junit/jupiter/api/Test.js';
//not GWT import const Test

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeTypeUtil } from './TimeTypeUtil.js';
//sameFolderImports - not GWT import - same folder const TimeTypeUtil
//import { TestableTimeTypeUtil } from './TestableTimeTypeUtil.js';
//sameFolderImports - not GWT import - same folder const TestableTimeTypeUtil

export class TimeTypeTest
            extends Object
         {
        

//inner= member=true isStatic=static
static TestableTimeTypeUtil = class extends TimeTypeUtil {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    private readonly hour: number;

 constructor (hour: number){

            super();
        this.hour= hour;
    
}


    public getHourOfDay(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hour;
    
}


}
    static millisForHourLocal(hour: number): number{

    let cal: Calendar = Calendar.getInstance()!;;
    
cal.set(Calendar.HOUR_OF_DAY, hour);
    
cal.set(Calendar.MINUTE, 0);
    
cal.set(Calendar.SECOND, 0);
    
cal.set(Calendar.MILLISECOND, 0);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cal.getTimeInMillis();;
    
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

    let nightUtil: TimeTypeUtil = new this.TestableTimeTypeUtil(0);;
    
Assertions.assertEquals(nightUtil!.NIGHT, nightUtil!.getNightOrDay());
    

    let dayUtil: TimeTypeUtil = new this.TestableTimeTypeUtil(12);;
    
Assertions.assertEquals(dayUtil!.DAY, dayUtil!.getNightOrDay());
    
}


    getHourOfDay_long_converts_epoch_to_local_hour(){

    let util: TimeTypeUtil = new TimeTypeUtil();;
    

                    //Otherwise - statement - ForEachStmt

}


    isNight_long_expected_ranges(){

    let util: TimeTypeUtil = new TimeTypeUtil();;
    

                    //Otherwise - statement - ForEachStmt


                    //Otherwise - statement - ForEachStmt

}


    getNightOrDay_long_consistency(){

    let util: TimeTypeUtil = new TimeTypeUtil();;
    

    let nightMillis: number = TimeTypeTest.millisForHourLocal(0)!;;
    

    let dayMillis: number = TimeTypeTest.millisForHourLocal(12)!;;
    
Assertions.assertEquals(util.NIGHT, util.getNightOrDay(nightMillis));
    
Assertions.assertEquals(util.DAY, util.getNightOrDay(dayMillis));
    
}


    boundaries_day_for_long_based_api(){

    let util: TimeTypeUtil = new TimeTypeUtil();;
    

                    //Otherwise - statement - ForEachStmt

}


    constants_accessible_and_stable(){

    let util: TimeTypeUtil = new TimeTypeUtil();;
    
Assertions.assertEquals("Night", util.NIGHT);
    
Assertions.assertEquals("Day", util.DAY);
    
}


    getInstance_returns_same_singleton(){

    let a: TimeTypeUtil = TimeTypeUtil.getInstance()!;;
    

    let b: TimeTypeUtil = TimeTypeUtil.getInstance()!;;
    
Assertions.assertSame(a, b);
    
}


}

