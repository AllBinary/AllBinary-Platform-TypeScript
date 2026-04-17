
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    
import { CapturedImageWorkerResultsEvent } from "../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsEvent.js";

    
import { CapturedImageWorkerResultsListener } from "../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsListener.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

import { ImageComparisonResultCacheSingleton } from "./ImageComparisonResultCacheSingleton.js";

export class ImageComparisonWorker extends BasicEventHandler
                , CapturedImageWorkerResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly bufferedImageVector: Vector = new Vector();
        
        

    private readonly imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface

    private readonly imageComparator: ImageComparator

    private running: boolean= false

    private index2: number= 0
public constructor (imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface){

            super();
                //var imageComparatorConstraintsInterface = imageComparatorConstraintsInterface
this.imageComparatorConstraintsInterface= imageComparatorConstraintsInterface;
    
this.imageComparator= new ImageComparator(imageComparatorConstraintsInterface);
    
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

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onCaptureEvent(capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent){
    //var capturedImageWorkerResultsEvent = capturedImageWorkerResultsEvent
this.bufferedImageVector!.add(capturedImageWorkerResultsEvent);
    

                        if(this.bufferedImageVector!.length > 1)
                        
                                    {
                                    this.run();
    

                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public onEvent(allBinaryEventObject: AllBinaryEventObject){
    //var allBinaryEventObject = allBinaryEventObject
this.onCaptureEvent(allBinaryEventObject as CapturedImageWorkerResultsEvent);
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        
;
    
timeHelper!.setStartTime();
    

                        if(this.imageComparatorConstraintsInterface!.isFrameAllowed(index2))
                        
                                    {
                                    
    var capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent[] = new Array(2);
        
        
;
    
capturedImageWorkerResultsEvent[0]= this.bufferedImageVector!.get(0);

                         as CapturedImageWorkerResultsEvent;
    
capturedImageWorkerResultsEvent[1]= this.bufferedImageVector!.get(1);

                         as CapturedImageWorkerResultsEvent;
    

                        if(this.imageComparatorConstraintsInterface!.isImageValid(capturedImageWorkerResultsEvent[0]!.getBufferedImage()) && this.imageComparatorConstraintsInterface!.isImageValid(capturedImageWorkerResultsEvent[1]!.getBufferedImage()))
                        
                                    {
                                    
    var imageComparisonResult: ImageComparisonResult = this.imageComparator!.compare(capturedImageWorkerResultsEvent[0]!.getBufferedImage(), capturedImageWorkerResultsEvent[1]!.getBufferedImage(), capturedImageWorkerResultsEvent[0]!.getFrame(), capturedImageWorkerResultsEvent[1]!.getFrame(), 0)!;
        
        
;
    

    var frame: Long = capturedImageWorkerResultsEvent[1]!.getFrame()!;
        
        
;
    

    var imageComparisonResultFrameCacheable: ImageComparisonResultFrameCacheable = new ImageComparisonResultFrameCacheable(imageComparisonResult, frame);
        
        
;
    
ImageComparisonResultCacheSingleton.getInstance()!.add(imageComparisonResultFrameCacheable);
    
this.fireEvent(new ImageComparisonResultsEvent(this, imageComparisonResult));
    
this.logUtil!.putF(new StringMaker().
                            append("Image Comparison Result: ")!.append(imageComparisonResult!.toString())!.append(" for frame: ")!.appendlong(frame)!.toString(), this, this.commonStrings!.RUN);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("An Image Was Not Valid: Image Worker Event Processing terminated", this, this.commonStrings!.RUN);
    

                        }
                            

                                    }
                                
this.bufferedImageVector!.remove(0);
    
index2++;
    

    var message: string = new StringMaker().
                            append("Frame: ")!.appendint(index2)!.append(CommonLabels.getInstance()!.ELAPSED)!.appendlong(timeHelper!.getElapsed())!.toString()!;
        
        
;
    
this.logUtil!.putF(message, this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

