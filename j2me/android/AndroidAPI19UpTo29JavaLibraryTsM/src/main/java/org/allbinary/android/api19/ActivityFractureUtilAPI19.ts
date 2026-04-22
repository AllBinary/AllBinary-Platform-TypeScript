
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

    
import { View } from "../../../../android/view/View.js";

    
import { ActivityFractureUtilAPI5 } from "../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI19 extends ActivityFractureUtilAPI5 {
        

    private static readonly instance: ActivityFractureUtilAPI19 = new ActivityFractureUtilAPI19();
        
        

    public static getInstance(): ActivityFractureUtilAPI19{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public setFullScreen(activity: Activity){
    //var activity = activity

    var decorView: View = activity.getWindow()!.getDecorView()!;
        
        
;
    

    var visibility: number = View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN;
        
        
;
    
decorView!.setSystemUiVisibility(visibility);
    
}


}
                
            

