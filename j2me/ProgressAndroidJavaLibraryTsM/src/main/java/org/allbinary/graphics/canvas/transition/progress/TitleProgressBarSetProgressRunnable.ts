
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
        



import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Activity } from "../../../../../../android/app/Activity.js";

    

export class TitleProgressBarSetProgressRunnable extends ProgressRunnable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (midletActivity: Activity, progressCanvas: ProgressCanvas)                        

                            : super(midletActivity, progressCanvas){

            super();
            var midletActivity = midletActivity
var progressCanvas = progressCanvas


                            //For kotlin this is before the body of the constructor.
                    
}


    public run(){

        try {
            this.midletActivity!.onSetProgress(this.progressCanvas!.getValue();

                        .toInt(), this.progressCanvas!.getText());
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}
                
            

