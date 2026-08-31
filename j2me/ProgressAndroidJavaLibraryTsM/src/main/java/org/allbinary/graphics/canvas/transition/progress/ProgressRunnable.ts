
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

        


import { Activity } from '../../../../../../android/app/Activity.js';
      //not GWT import const Activity = globalThis.android.app.Activity;

      
import { MidletActivityBase } from '../../../../../../org/allbinary/android/activity/MidletActivityBase.js';
      //not GWT import const MidletActivityBase = globalThis.org.allbinary.android.activity.MidletActivityBase;

      
import { SimpleProgressActivityInterface } from '../../../../../../org/allbinary/android/activity/SimpleProgressActivityInterface.js';
      //not GWT import const SimpleProgressActivityInterface = globalThis.org.allbinary.android.activity.SimpleProgressActivityInterface;

      
//not plain js import { ARunnable } from '../../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import const  = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

                
export class ProgressRunnable extends ARunnable {
        

    readonly midletActivity: SimpleProgressActivityInterface;

    readonly progressCanvas: ProgressCanvas;

public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas){

            super();
        
    var midletActivity2: MidletActivityBase = midletActivity as MidletActivityBase;;
    
this.midletActivity= midletActivity2 as SimpleProgressActivityInterface;
    
this.progressCanvas= progressCanvas;
    
}


    public run(){
}


}



