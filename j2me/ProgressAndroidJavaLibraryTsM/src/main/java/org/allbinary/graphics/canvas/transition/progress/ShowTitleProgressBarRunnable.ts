
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

    

export class ShowTitleProgressBarRunnable extends ProgressRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas)                        

                            : super(midletActivity, progressCanvas){

            super();
            var midletActivity = midletActivity
var progressCanvas = progressCanvas


                            //For kotlin this is before the body of the constructor.
                    
}


    private readonly FADE_IN_HALF: IntArray = intArrayOf(TransistionTypes.getInstance()!.FADE_IN_TO_HALF_ALPHA,TransistionTypes.getInstance()!.FADE_IN_FROM_HALF_ALPHA);
        
        

    public run(){

        try {
            this.midletActivity!.onShowProgress(false, FADE_IN_HALF)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


}
                
            

