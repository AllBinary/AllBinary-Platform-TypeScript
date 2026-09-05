
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

        


import { Activity } from '../../../../android/app/Activity.js';
//not GWT import const Activity = globalThis.android.app.Activity;

      
import { TouchScreenTypeFactory } from '../../../../org/allbinary/input/motion/button/TouchScreenTypeFactory.js';
//not GWT import const TouchScreenTypeFactory = globalThis.org.allbinary.input.motion.button.TouchScreenTypeFactory;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { ActivityFractureUtilAPI1 } from '../../../../org/allbinary/android/api1/ActivityFractureUtilAPI1.js';
//not GWT import const ActivityFractureUtilAPI1 = globalThis.org.allbinary.android.api1.ActivityFractureUtilAPI1;

      
import { TouchScreenFactory } from '../../../../org/allbinary/input/motion/button/TouchScreenFactory.js';
//not GWT import const TouchScreenFactory = globalThis.org.allbinary.input.motion.button.TouchScreenFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI5 extends ActivityFractureUtilAPI1 {
        

    private static readonly instance5: ActivityFractureUtilAPI5 = new ActivityFractureUtilAPI5();

    public static getInstance(): ActivityFractureUtilAPI5{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI5.instance5;
    
}


    private readonly FEATURE_TOUCHSCREEN_MULTITOUCH: string = "android.hardware.touchscreen.multitouch";

    private readonly FEATURE_TOUCHSCREEN: string = "android.hardware.touchscreen";

    private readonly FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT: string = "android.hardware.touchscreen.multitouch.distinct";

    public process(activity: Activity){

    var touchScreenFactory: TouchScreenFactory = TouchScreenFactory.getInstance()!;;
    

    var touchScreenTypeFactory: TouchScreenTypeFactory = TouchScreenTypeFactory.getInstance()!;;
    
touchScreenFactory!.setTouch(this.isTouch(activity));
    
touchScreenFactory!.setMultiTouch(this.isMultiTouch(activity));
    
touchScreenFactory!.setMultiTouchDistinct(this.isMultiTouchDistinct(activity));
    
touchScreenTypeFactory!.update(activity);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.put(touchScreenFactory!.toString(), this, commonStrings!.PROCESS);
    
}


    isTouch(activity: Activity): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isFeature(activity, this.FEATURE_TOUCHSCREEN);;
    
}


    isMultiTouch(activity: Activity): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isFeature(activity, this.FEATURE_TOUCHSCREEN_MULTITOUCH);;
    
}


    isMultiTouchDistinct(activity: Activity): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isFeature(activity, this.FEATURE_TOUCHSCREEN_MULTITOUCH_DISTINCT);;
    
}


    isFeature(activity: Activity, property: string): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return activity.getPackageManager()!.hasSystemFeature(property);;
    
}


}



