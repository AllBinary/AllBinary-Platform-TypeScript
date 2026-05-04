
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
            import { Thread } from '../../../../../../java/lang/Thread.js';
        
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';

    
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';

    
import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';

    
import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';

    
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';

    
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CaptureWorkerInterface } from './CaptureWorkerInterface.js';
import { ScreenScavangerRobot } from './ScreenScavangerRobot.js';
import { ProcessingFrameIndexFactory } from './ProcessingFrameIndexFactory.js';
import { CapturedBufferedImagesCacheSingleton } from './CapturedBufferedImagesCacheSingleton.js';
import { CapturedImageWorkerResultsEvent } from './CapturedImageWorkerResultsEvent.js';

export class ScreenCaptureImagesWorker extends BasicEventHandler implements CaptureWorkerInterface {
        

    private static index: number

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false

    private screenScavangerRobot: ScreenScavangerRobot
public constructor (){

            super();
        screenScavangerRobot= new ScreenScavangerRobot();
    
index= ProcessingFrameIndexFactory.next();
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.running;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running;
    
}


                //@Throws(Exception.constructor)
            
    public setThread(thread: Thread){
var thread = thread
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
;
    

        while(isRunning())
        {
timeHelper!.setStartTimeTNT();
    

    var bufferedImage: BufferedImage = this.screenScavangerRobot!.getScreenAsBufferedImages()[0]!;
;
    

    var frame: number = index;
;
    
ScreenCaptureImagesWorker.index++;
    
CapturedBufferedImagesCacheSingleton.getInstance()!.add(new BufferedImageFrameCacheable(bufferedImage, frame));
    

    var capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);
;
    
fireEvent(capturedImageEvent);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
}

this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

