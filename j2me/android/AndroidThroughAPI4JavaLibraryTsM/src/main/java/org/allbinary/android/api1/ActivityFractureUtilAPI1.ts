
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
        



import { ActivityFractureUtil } from "../../../../org/allbinary/android/ActivityFractureUtil.js";

    
import { Activity } from "../../../../android/app/Activity.js";

    
import { WindowManager } from "../../../../android/view/WindowManager.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI1 extends ActivityFractureUtil {
        

    private static readonly instance: ActivityFractureUtilAPI1 = new ActivityFractureUtilAPI1();
        
        

    public static getInstance(): ActivityFractureUtilAPI1{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public process(activity: Activity){
    //var activity = activity
}


    public setFullScreen(activity: Activity){
    //var activity = activity
activity.getWindow()!.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
    
}


}
                
            

