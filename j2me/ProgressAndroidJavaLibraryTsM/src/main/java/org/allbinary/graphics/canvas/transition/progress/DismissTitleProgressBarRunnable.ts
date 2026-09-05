
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { TransistionTypes } from '../../../../../../org/allbinary/animation/transition/TransistionTypes.js';
//not GWT import const TransistionTypes = globalThis.org.allbinary.animation.transition.TransistionTypes;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Activity } from '../../../../../../android/app/Activity.js';
//not GWT import const Activity = globalThis.android.app.Activity;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressRunnable } from './ProgressRunnable.js';
//not GWT import - same folder const ProgressRunnable = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressRunnable;

                import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import - same folder const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

                
export class DismissTitleProgressBarRunnable extends ProgressRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas){
            super(midletActivity, progressCanvas);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly ZOOM_OUT_AND_IN: number[] = [TransistionTypes.getInstance()!.ZOOM_OUT,TransistionTypes.getInstance()!.ZOOM_IN];

    public run(){

        try {
            this.midletActivity!.onDismissProgress(this.ZOOM_OUT_AND_IN);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}



