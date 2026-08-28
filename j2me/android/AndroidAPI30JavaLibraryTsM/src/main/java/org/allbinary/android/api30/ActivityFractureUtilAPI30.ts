
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

      
//not game specific package import { Window } from '../../../../android/view/Window.js';
      const Window = globalThis.android.view.Window;

      
//not game specific package import { WindowCompat } from '../../../../androidx/core/view/WindowCompat.js';
      const WindowCompat = globalThis.androidx.core.view.WindowCompat;

      
//not game specific package import { WindowInsetsCompat } from '../../../../androidx/core/view/WindowInsetsCompat.js';
      const WindowInsetsCompat = globalThis.androidx.core.view.WindowInsetsCompat;

      
//not game specific package import { WindowInsetsControllerCompat } from '../../../../androidx/core/view/WindowInsetsControllerCompat.js';
      const WindowInsetsControllerCompat = globalThis.androidx.core.view.WindowInsetsControllerCompat;

      
//not game specific package import { ActivityFractureUtilAPI5 } from '../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js';
      const ActivityFractureUtilAPI5 = globalThis.org.allbinary.android.api5.ActivityFractureUtilAPI5;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ActivityFractureUtilAPI30 extends ActivityFractureUtilAPI5 {
        

    private static readonly instance30: ActivityFractureUtilAPI30 = new ActivityFractureUtilAPI30();

    public static getInstance(): ActivityFractureUtilAPI30{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ActivityFractureUtilAPI30.instance30;
    
}


    public setFullScreen(activity: Activity){

    var window: Window = activity.getWindow()!;;
    

    var windowInsetsController: WindowInsetsControllerCompat = WindowCompat.getInsetsController(window, window.getDecorView())!;;
    
windowInsetsController!.hide(WindowInsetsCompat.Type.systemBars());
    
windowInsetsController!.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
    
}


}



