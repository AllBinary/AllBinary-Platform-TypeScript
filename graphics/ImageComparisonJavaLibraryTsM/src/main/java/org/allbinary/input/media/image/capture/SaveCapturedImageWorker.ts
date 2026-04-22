
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
        



import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CapturedImageWorkerResultsListener } from "./CapturedImageWorkerResultsListener.js";

import { CapturedImageWorkerResultsEvent } from "./CapturedImageWorkerResultsEvent.js";

export class SaveCapturedImageWorker extends BasicEventHandler implements CapturedImageWorkerResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private running: boolean= false

    private capturedImageWorkerResultsEventVector: Vector = new Vector();
        
        
public constructor (){

            super();
        }

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running;
    
}


    public onCaptureEvent(capturedImageEvent: CapturedImageWorkerResultsEvent){
var capturedImageEvent = capturedImageEvent
capturedImageWorkerResultsEventVector!.add(capturedImageEvent);
    
run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
var allBinaryEventObject = allBinaryEventObject
onCaptureEvent(allBinaryEventObject as CapturedImageWorkerResultsEvent);
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        
;
    
timeHelper!.setStartTime();
    

    var capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent = (this.capturedImageWorkerResultsEventVector!.get(0);

                         as CapturedImageWorkerResultsEvent);
        
        
;
    

    var screenBufferedImage: BufferedImage = capturedImageWorkerResultsEvent!.getBufferedImage()!;
        
        
;
    
new CapturedImageInputOutput().
                            save(screenBufferedImage, capturedImageWorkerResultsEvent!.getFrame());
    
this.capturedImageWorkerResultsEventVector!.remove(capturedImageWorkerResultsEvent);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN);
    
setRunning(false);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

