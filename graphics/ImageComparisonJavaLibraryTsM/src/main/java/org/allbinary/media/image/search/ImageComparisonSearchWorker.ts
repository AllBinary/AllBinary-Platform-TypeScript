
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
        



import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { BasicEventHandler } from "../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { ImageComparisonResult } from "../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js";

    
import { ImageComparisonResultsEvent } from "../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsEvent.js";

    
import { ImageComparisonResultsListener } from "../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsListener.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class ImageComparisonSearchWorker extends BasicEventHandler
                , ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly imageComparisonInfoVector: Vector

    private index: number= 0

    private running: boolean= false

    private imageSearchConstraintsInterface: ImageComparisonSearchConstraintsInterface
public constructor (imageSearchConstraintsInterface: ImageComparisonSearchConstraintsInterface){

            super();
            var imageSearchConstraintsInterface = imageSearchConstraintsInterface
this.imageComparisonInfoVector= new Vector();
    
this.imageSearchConstraintsInterface= imageSearchConstraintsInterface;
    
}


    public onImageComparisonResultsEvent(imageComparisonResultsEvent: ImageComparisonResultsEvent){
var imageComparisonResultsEvent = imageComparisonResultsEvent
this.imageComparisonInfoVector!.add(imageComparisonResultsEvent!.getImageComparisonResult());
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
var allBinaryEventObject = allBinaryEventObject
this.onImageComparisonResultsEvent(allBinaryEventObject as ImageComparisonResultsEvent);
    
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


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        
;
    
timeHelper!.setStartTime();
    

    var imageComparisonInfo: ImageComparisonResult = this.imageComparisonInfoVector!.get(0);

                         as ImageComparisonResult;
        
        
;
    
this.logUtil!.putF(imageComparisonInfo!.toString(), this, this.commonStrings!.RUN);
    

    var latestBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[1]!;
        
        
;
    
this.imageComparisonInfoVector!.remove(imageComparisonInfo);
    
this.index++;
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

