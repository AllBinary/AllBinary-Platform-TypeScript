
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
        



import { CaptureWorkerInterface } from "../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ImageComparisonWorker } from "../../../../../org/allbinary/media/image/comparison/ImageComparisonWorker.js";

    
import { MotionRectanglesWorker } from "../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesWorker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { RunnableInterface } from "../../../../../org/allbinary/thread/RunnableInterface.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class AbstractInputAutomationWorker
            extends Object
        
                , RunnableInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private index: number= 0

    private running: boolean= false

    private inputAutomationActionInterface: InputAutomationActionInterface

    private captureWorkerInterface: CaptureWorkerInterface

    private imageComparisonWorker: ImageComparisonWorker

    private motionRectanglesWorker: MotionRectanglesWorker

    private captureThread: Thread
public constructor (inputAutomationActionInterface: InputAutomationActionInterface){

            super();
            var inputAutomationActionInterface = inputAutomationActionInterface
}


                @Throws(Exception::class)
            
    public setThread(thread: Thread){
var thread = thread
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

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    isAnyDataWorkerRunning(): boolean{

    
                        if(captureThread != 
                                    null
                                 && (captureThread!.isAlive() || this.getCaptureWorker()!.isRunning() || this.getMotionRectanglesWorker()!.isRunning() || this.getImageComparisonWorker()!.isRunning()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    startDataWorkers(){

    
                        if(!isAnyDataWorkerRunning())
                        
                                    {
                                    captureThread= Thread(this.getCaptureWorker())
put("Starting CaptureWorkers - Need more images - Thread State: " +captureThread!.getState()!.toString(), this, "startCaptureWorkers")
start()

                                    }
                                
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    waitForDataWorkers(){

        while(isAnyDataWorkerRunning())
        {
put("Waiting", this, this.commonStrings!.RUN)
sleep(250)
}

}


                @Throws(Exception::class)
            
    stopDataWorkers(){
setRunning(false)
}


                @Throws(Exception::class)
            
    public process(){



                            throw RuntimeException()
}


    public run(){

        try {
            put(this.commonStrings!.START, this, this.commonStrings!.RUN)
this.setRunning(true)

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        


        while(this.isRunning())
        {
setStartTime()
this.process()
this.index++
put(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed() +" Index: " +this.index, this, this.commonStrings!.RUN)
}

this.stopDataWorkers()
this.waitForDataWorkers()
put(this.commonStrings!.END, this, this.commonStrings!.RUN)
} catch(e: Exception)
            {
put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e)
}

}


    public getInputAutomationActionInterface(): InputAutomationActionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputAutomationActionInterface;
    
}


    public setInputAutomationActionInterface(inputAutomationActionInterface: InputAutomationActionInterface){
var inputAutomationActionInterface = inputAutomationActionInterface
this.inputAutomationActionInterface= inputAutomationActionInterface
}


    getCaptureWorker(): CaptureWorkerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return captureWorkerInterface;
    
}


    setCaptureWorker(captureWorkerInterface: CaptureWorkerInterface){
var captureWorkerInterface = captureWorkerInterface
this.captureWorkerInterface= captureWorkerInterface
}


    getImageComparisonWorker(): ImageComparisonWorker{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageComparisonWorker;
    
}


    setImageComparisonWorker(imageComparisonWorker: ImageComparisonWorker){
var imageComparisonWorker = imageComparisonWorker
this.imageComparisonWorker= imageComparisonWorker
}


    getMotionRectanglesWorker(): MotionRectanglesWorker{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectanglesWorker;
    
}


    setMotionRectanglesWorker(motionRectanglesWorker: MotionRectanglesWorker){
var motionRectanglesWorker = motionRectanglesWorker
this.motionRectanglesWorker= motionRectanglesWorker
}


}
                
            

