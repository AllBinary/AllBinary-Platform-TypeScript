
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
        



//not game specific package import { Activity } from '../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
//not game specific package import { View } from '../../../../android/view/View.js';
      const View = globalThis.android.view.View;

      
//not game specific package import { ActivityFractureUtilAPI5 } from '../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js';
      const ActivityFractureUtilAPI5 = globalThis.org.allbinary.android.api5.ActivityFractureUtilAPI5;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI16 extends ActivityFractureUtilAPI5 {
        

    private static readonly instance16: ActivityFractureUtilAPI16 = new ActivityFractureUtilAPI16();

    public static getInstance(): ActivityFractureUtilAPI16{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI16.instance16;
    
}


    public setFullScreen(activity: Activity){

    var decorView: View = activity.getWindow()!.getDecorView()!;;
    

    var visibility: number = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN;;
    
decorView!.setSystemUiVisibility(visibility);
    
}


}



