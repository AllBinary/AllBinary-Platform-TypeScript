
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { Activity } from '../../../../../../android/app/Activity.js';
      
import { MidletActivityBase } from '../../../../../../org/allbinary/android/activity/MidletActivityBase.js';
      
import { SimpleProgressActivityInterface } from '../../../../../../org/allbinary/android/activity/SimpleProgressActivityInterface.js';
      
import { ARunnable } from '../../../../../../org/allbinary/thread/ARunnable.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressCanvas } from './ProgressCanvas.js';

export class ProgressRunnable extends ARunnable {
        

    readonly midletActivity: SimpleProgressActivityInterface

    readonly progressCanvas: ProgressCanvas
public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas){

            super();
        
    var midletActivity2: MidletActivityBase = midletActivity as MidletActivityBase;
;
    
this.midletActivity= midletActivity2 as SimpleProgressActivityInterface;
    
this.progressCanvas= progressCanvas;
    
}


    public run(){
}


}
                
            

