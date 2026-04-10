
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

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class SaveImageComparisonWorker
            extends Object
        
                , ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private running: boolean= false

    private readonly imageComparisonInfoVector: Vector = new Vector();
        
        
public constructor (){

            super();
            }


    public onImageComparisonResultsEvent(imageComparisonResultsEvent: ImageComparisonResultsEvent){
    //var imageComparisonResultsEvent = imageComparisonResultsEvent
this.imageComparisonInfoVector!.add(imageComparisonResultsEvent)
this.this.run()
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
    //var allBinaryEventObject = allBinaryEventObject
this.this.onImageComparisonResultsEvent(allBinaryEventObject as ImageComparisonResultsEvent)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
    //var running = running
this.running= running
}


    public run(){

        try {
            logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.RUN)
this.this.setRunning(true)

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        

timeHelper!.setStartTime()

    var imageComparisonResultsEvent: ImageComparisonResultsEvent = this.imageComparisonInfoVector!.get(0) as ImageComparisonResultsEvent;
        
        


    var imageComparisonInfo: ImageComparisonResult = imageComparisonResultsEvent!.getImageComparisonResult()!;
        
        

logUtil!.put(imageComparisonInfo!.toString(), this, this.commonStrings!.RUN)
ComparisonImageInputOutput().
                            save(imageComparisonInfo, imageComparisonInfo!.getFrameTwo())
this.imageComparisonInfoVector!.remove(imageComparisonInfo)
logUtil!.put(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN)
logUtil!.put(this.commonStrings!.END, this, this.commonStrings!.RUN)
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e)
}

}


}
                
            

