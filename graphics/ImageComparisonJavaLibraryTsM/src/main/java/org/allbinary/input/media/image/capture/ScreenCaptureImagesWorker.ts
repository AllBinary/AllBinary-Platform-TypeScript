
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
            import { Thread } from '../../../../../../java/lang/Thread.js';
        
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';
      //not GWT import const BufferedImageFrameCacheable = globalThis.org.allbinary.media.image.cache.BufferedImageFrameCacheable;

      
//not plain js import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CaptureWorkerInterface } from './CaptureWorkerInterface.js';
//not GWT import const  = globalThis.org.allbinary.input.media.image.capture.CaptureWorkerInterface;

                import { ScreenScavangerRobot } from './ScreenScavangerRobot.js';
//not GWT import const  = globalThis.org.allbinary.input.media.image.capture.ScreenScavangerRobot;

                import { ProcessingFrameIndexFactory } from './ProcessingFrameIndexFactory.js';
//not GWT import const  = globalThis.org.allbinary.input.media.image.capture.ProcessingFrameIndexFactory;

                import { CapturedBufferedImagesCacheSingleton } from './CapturedBufferedImagesCacheSingleton.js';
//not GWT import const  = globalThis.org.allbinary.input.media.image.capture.CapturedBufferedImagesCacheSingleton;

                import { CapturedImageWorkerResultsEvent } from './CapturedImageWorkerResultsEvent.js';
//not GWT import const  = globalThis.org.allbinary.input.media.image.capture.CapturedImageWorkerResultsEvent;

                
export class ScreenCaptureImagesWorker extends BasicEventHandler implements CaptureWorkerInterface {
        

    private static index: number;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false;

    private screenScavangerRobot: ScreenScavangerRobot;

public constructor (){

            super();
        screenScavangerRobot= new ScreenScavangerRobot();
    
ScreenCaptureImagesWorker.index= ProcessingFrameIndexFactory.next();
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.running;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
this.running= running;
    
}


                //@Throws(Exception.constructor)
            
    public setThread(thread: Thread){
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    

        while(isRunning())
        {
timeHelper!.setStartTimeTNT();
    

    var bufferedImage: BufferedImage = this.screenScavangerRobot!.getScreenAsBufferedImages()[0]!;;
    

    var frame: Long = new Long(index);;
    
ScreenCaptureImagesWorker.index++;
    
CapturedBufferedImagesCacheSingleton.getInstance()!.add(new BufferedImageFrameCacheable(bufferedImage, frame));
    

    var capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);;
    
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



