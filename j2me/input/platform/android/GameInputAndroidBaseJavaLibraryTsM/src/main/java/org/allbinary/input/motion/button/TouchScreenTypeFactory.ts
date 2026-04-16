
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
        



import { Activity } from "../../../../../android/app/Activity.js";

    
import { Configuration } from "../../../../../android/content/res/Configuration.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    

import { TouchScreenFactory } from "./TouchScreenFactory.js";

import { TouchScreenTypesFactory } from "./TouchScreenTypesFactory.js";

export class TouchScreenTypeFactory
            extends Object
         {
        

    private static readonly instance: TouchScreenTypeFactory = new TouchScreenTypeFactory();
        
        

    public static getInstance(): TouchScreenTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public update(activity: Activity){
var activity = activity

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var touchScreenFactory: TouchScreenFactory = TouchScreenFactory.getInstance()!;
        
        
;
    

    var touchScreenTypesFactory: TouchScreenTypesFactory = TouchScreenTypesFactory.getInstance()!;
        
        
;
    

    var configuration: Configuration = activity.getResources()!.getConfiguration()!;
        
        
;
    

    var touchScreen: number = configuration.touchscreen;
        
        
;
    

                        if(touchScreen == Configuration.TOUCHSCREEN_FINGER)
                        
                                    {
                                    touchScreenFactory!.setTouchScreenType(touchScreenTypesFactory!.FINGER);
    

                        if(!touchScreenFactory!.isTouch();

                        )
                        
                                    {
                                    PreLogUtil.put("Not Really Exception: This indicates that a touch screen does exist but is not API8 so we will try it", this, commonStrings!.PROCESS);
    
touchScreenFactory!.setTouch(true);
    

                                    }
                                

                                    }
                                
                             else 
                        if(touchScreen == Configuration.TOUCHSCREEN_STYLUS)
                        
                                    {
                                    touchScreenFactory!.setTouchScreenType(touchScreenTypesFactory!.STYLUS);
    

                        if(!touchScreenFactory!.isTouch();

                        )
                        
                                    {
                                    PreLogUtil.put("Not Really Exception: This indicates that a touch screen does exist but is not API8 so we will try it", this, commonStrings!.PROCESS);
    
touchScreenFactory!.setTouch(true);
    

                                    }
                                

                                    }
                                
                             else 
                        if(touchScreen == Configuration.TOUCHSCREEN_NOTOUCH)
                        
                                    {
                                    touchScreenFactory!.setTouchScreenType(touchScreenTypesFactory!.NOTOUCH);
    

                                    }
                                
                             else 
                        if(touchScreen == Configuration.TOUCHSCREEN_UNDEFINED)
                        
                                    {
                                    touchScreenFactory!.setTouchScreenType(touchScreenTypesFactory!.UNDEFINED);
    

                                    }
                                
}


}
                
            

