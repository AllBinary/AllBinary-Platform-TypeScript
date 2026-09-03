
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { CapturedImageWorkerResultsEvent } from '../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsEvent.js';
      //not GWT import const CapturedImageWorkerResultsEvent = globalThis.org.allbinary.input.media.image.capture.CapturedImageWorkerResultsEvent;

      
import { CapturedImageWorkerResultsListener } from '../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsListener.js';
      //not GWT import const CapturedImageWorkerResultsListener = globalThis.org.allbinary.input.media.image.capture.CapturedImageWorkerResultsListener;

      
//not plain js import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageComparatorConstraintsInterface } from './ImageComparatorConstraintsInterface.js';
//not GWT import const ImageComparatorConstraintsInterface = globalThis.org.allbinary.media.image.comparison.ImageComparatorConstraintsInterface;

                import { ImageComparator } from './ImageComparator.js';
//not GWT import const ImageComparator = globalThis.org.allbinary.media.image.comparison.ImageComparator;

                import { ImageComparisonResult } from './ImageComparisonResult.js';
//not GWT import const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

                import { ImageComparisonResultFrameCacheable } from './ImageComparisonResultFrameCacheable.js';
//not GWT import const ImageComparisonResultFrameCacheable = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultFrameCacheable;

                import { ImageComparisonResultCacheSingleton } from './ImageComparisonResultCacheSingleton.js';
//not GWT import const ImageComparisonResultCacheSingleton = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultCacheSingleton;

                import { ImageComparisonResultsEvent } from './ImageComparisonResultsEvent.js';
//not GWT import const ImageComparisonResultsEvent = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsEvent;

                
export class ImageComparisonWorker extends BasicEventHandler implements CapturedImageWorkerResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly bufferedImageVector: BasicArrayList = new BasicArrayListD();

    private readonly imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface;

    private readonly imageComparator: ImageComparator;

    private running: boolean= false;

    private index2: number= 0;

public constructor (imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface){

            super();
        this.imageComparatorConstraintsInterface= imageComparatorConstraintsInterface;
    
this.imageComparator= new ImageComparator(imageComparatorConstraintsInterface);
    
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

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onCaptureEvent(capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent){
this.bufferedImageVector!.add(capturedImageWorkerResultsEvent);
    

                        if(this.bufferedImageVector!.size() > 1)
                        
                                    {
                                    this.run();
    

                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public onEvent(allBinaryEventObject: AllBinaryEventObject){
this.onCaptureEvent(allBinaryEventObject as CapturedImageWorkerResultsEvent);
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    
timeHelper!.setStartTimeTNT();
    

                        if(this.imageComparatorConstraintsInterface!.isFrameAllowed(this.index2))
                        
                                    {
                                    
    var capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent[] = new Array(2);;
    
capturedImageWorkerResultsEvent[0]= this.bufferedImageVector!.get(0) as CapturedImageWorkerResultsEvent;
    
capturedImageWorkerResultsEvent[1]= this.bufferedImageVector!.get(1) as CapturedImageWorkerResultsEvent;
    

                        if(this.imageComparatorConstraintsInterface!.isImageValid(capturedImageWorkerResultsEvent[0]!.getBufferedImage()) && this.imageComparatorConstraintsInterface!.isImageValid(capturedImageWorkerResultsEvent[1]!.getBufferedImage()))
                        
                                    {
                                    
    var imageComparisonResult: ImageComparisonResult = this.imageComparator!.compare(capturedImageWorkerResultsEvent[0]!.getBufferedImage(), capturedImageWorkerResultsEvent[1]!.getBufferedImage(), capturedImageWorkerResultsEvent[0]!.getFrame(), capturedImageWorkerResultsEvent[1]!.getFrame(), 0)!;;
    

    var frame: Long = capturedImageWorkerResultsEvent[1]!.getFrame()!;;
    

    var imageComparisonResultFrameCacheable: ImageComparisonResultFrameCacheable = new ImageComparisonResultFrameCacheable(imageComparisonResult, frame);;
    
ImageComparisonResultCacheSingleton.getInstance()!.add(imageComparisonResultFrameCacheable);
    
this.fireEvent(new ImageComparisonResultsEvent(this, imageComparisonResult));
    
this.logUtil!.putF(new StringMaker().append("Image Comparison Result: ")!.append(imageComparisonResult!.toString())!.append(" for frame: ")!.appendlong(frame)!.toString(), this, this.commonStrings!.RUN);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("An Image Was Not Valid: Image Worker Event Processing terminated", this, this.commonStrings!.RUN);
    

                        }
                            

                                    }
                                
this.bufferedImageVector!.remove(0);
    
this.index2++;
    

    var message: string = new StringMaker().append("Frame: ")!.appendint(this.index2)!.append(CommonLabels.getInstance()!.ELAPSED)!.appendlong(timeHelper!.getElapsedTNT())!.toString()!;;
    
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



