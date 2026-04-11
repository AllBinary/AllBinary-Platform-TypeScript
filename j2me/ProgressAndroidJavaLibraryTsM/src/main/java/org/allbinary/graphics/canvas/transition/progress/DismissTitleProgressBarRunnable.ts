
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
        



import { TransistionTypes } from "../../../../../../org/allbinary/animation/transition/TransistionTypes.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Activity } from "../../../../../../android/app/Activity.js";

    

export class DismissTitleProgressBarRunnable extends ProgressRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas)                        

                            : super(midletActivity, progressCanvas){

            super();
            var midletActivity = midletActivity
var progressCanvas = progressCanvas


                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly ZOOM_OUT_AND_IN: number[] = intArrayOf(TransistionTypes.getInstance()!.ZOOM_OUT,TransistionTypes.getInstance()!.ZOOM_IN);
        
        

    public run(){

        try {
            this.midletActivity!.onDismissProgress(ZOOM_OUT_AND_IN);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            

