
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

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { BufferedImageFrameCacheable } from "../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class ScreenCaptureImagesWorker extends BasicEventHandler
                , CaptureWorkerInterface {
        

    private index: number

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private running: boolean= false

    private screenScavangerRobot: ScreenScavangerRobot
public constructor (){

            super();
            screenScavangerRobot= ScreenScavangerRobot()
index= ProcessingFrameIndexFactory.next()
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running
}


                @Throws(Exception::class)
            
    public setThread(thread: Thread){
var thread = thread
}


    public run(){

        try {
            put(this.commonStrings!.START, this, this.commonStrings!.RUN)
setRunning(true)

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        


        while(isRunning())
        {
setStartTime()

    var bufferedImage: BufferedImage = screenScavangerRobot!.getScreenAsBufferedImages()[0]!;
        
        


    var frame: Long = new index as Long;
        
        

index++
add(BufferedImageFrameCacheable(bufferedImage, frame))

    var capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);
        
        

fireEvent(capturedImageEvent)
put(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN)
setRunning(false)
}

put(this.commonStrings!.END, this, this.commonStrings!.RUN)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e)
}

}


}
                
            

