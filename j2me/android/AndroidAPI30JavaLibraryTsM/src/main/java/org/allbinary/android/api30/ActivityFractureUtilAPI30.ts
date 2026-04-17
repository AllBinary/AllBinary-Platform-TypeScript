
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
        



import { Activity } from "../../../../android/app/Activity.js";

    
import { Window } from "../../../../android/view/Window.js";

    
import { WindowCompat } from "../../../../androidx/core/view/WindowCompat.js";

    
import { WindowInsetsCompat } from "../../../../androidx/core/view/WindowInsetsCompat.js";

    
import { WindowInsetsControllerCompat } from "../../../../androidx/core/view/WindowInsetsControllerCompat.js";

    
import { ActivityFractureUtilAPI5 } from "../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI30 extends ActivityFractureUtilAPI5 {
        

    private static readonly instance: ActivityFractureUtilAPI30 = new ActivityFractureUtilAPI30();
        
        

    public static getInstance(): ActivityFractureUtilAPI30{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public setFullScreen(activity: Activity){
    //var activity = activity

    var window: Window = activity.getWindow()!;
        
        
;
    

    var windowInsetsController: WindowInsetsControllerCompat = WindowCompat.getInsetsController(window, window.getDecorView())!;
        
        
;
    
windowInsetsController!.hide(WindowInsetsCompat.Type.systemBars());
    
windowInsetsController!.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
    
}


}
                
            

