
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
        
//not game specific package import { TransistionTypes } from '../../../../../../org/allbinary/animation/transition/TransistionTypes.js';
      const TransistionTypes = globalThis.org.allbinary.animation.transition.TransistionTypes;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Activity } from '../../../../../../android/app/Activity.js';
      const Activity = globalThis.android.app.Activity;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProgressRunnable } from './ProgressRunnable.js';
import { ProgressCanvas } from './ProgressCanvas.js';

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



