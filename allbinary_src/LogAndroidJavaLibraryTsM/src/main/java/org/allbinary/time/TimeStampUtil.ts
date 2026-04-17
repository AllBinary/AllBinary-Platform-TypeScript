
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
        



import { Calendar } from "../../../java/util/Calendar.js";

    

//import { Date } from "../../../java/util/Date.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
/*actual*/ export class TimeStampUtil
            extends Object
         {
        

    private static readonly instance: TimeStampUtil = new TimeStampUtil();
        
        

    /*actual*/ public static getInstance(): TimeStampUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TimeStampUtil.instance;
    
}

private constructor (){

            super();
            }


    /*actual*/ public getAsString(): string{

    var calendar: Calendar = Calendar.getInstance()!;
        
        
;
    

    var date: Date = calendar.getTime()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return date.toString();

                        ;
    
}


}
                
            

