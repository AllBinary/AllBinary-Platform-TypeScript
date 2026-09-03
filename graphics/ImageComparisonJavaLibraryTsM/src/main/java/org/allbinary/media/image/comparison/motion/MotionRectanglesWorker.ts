
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
        
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      //not GWT import const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

      
import { ImageComparisonResultsEvent } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsEvent.js';
      //not GWT import const ImageComparisonResultsEvent = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsEvent;

      
import { ImageComparisonResultsListener } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsListener.js';
      //not GWT import const ImageComparisonResultsListener = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsListener;

      
//not plain js import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectangleConstraintsInterface } from './MotionRectangleConstraintsInterface.js';
//not GWT import const MotionRectangleConstraintsInterface = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangleConstraintsInterface;

                import { AllMotionRectangles } from './AllMotionRectangles.js';
//not GWT import const AllMotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.AllMotionRectangles;

                import { AllMotionRectanglesResultsCacheSingleton } from './AllMotionRectanglesResultsCacheSingleton.js';
//not GWT import const AllMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.AllMotionRectanglesResultsCacheSingleton;

                import { MotionRectanglesResultsFrameCacheable } from './MotionRectanglesResultsFrameCacheable.js';
//not GWT import const MotionRectanglesResultsFrameCacheable = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesResultsFrameCacheable;

                import { ConsolidateMotionRectangles } from './ConsolidateMotionRectangles.js';
//not GWT import const ConsolidateMotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.ConsolidateMotionRectangles;

                import { ConsolidatedMotionRectanglesResultsCacheSingleton } from './ConsolidatedMotionRectanglesResultsCacheSingleton.js';
//not GWT import const ConsolidatedMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.ConsolidatedMotionRectanglesResultsCacheSingleton;

                import { ConstrainedMotionRectangles } from './ConstrainedMotionRectangles.js';
//not GWT import const ConstrainedMotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.ConstrainedMotionRectangles;

                import { ConstrainedMotionRectanglesResultsCacheSingleton } from './ConstrainedMotionRectanglesResultsCacheSingleton.js';
//not GWT import const ConstrainedMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.ConstrainedMotionRectanglesResultsCacheSingleton;

                import { MotionRectanglesResultsEvent } from './MotionRectanglesResultsEvent.js';
//not GWT import const MotionRectanglesResultsEvent = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesResultsEvent;

                import { MotionRectangles } from './MotionRectangles.js';
//not GWT import const MotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangles;

                
export class MotionRectanglesWorker extends BasicEventHandler implements ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageComparisonInfoVector: BasicArrayList = new BasicArrayListD();

    private readonly motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface;

    private index: number= 0;

    private running: boolean= false;

public constructor (motionRectangleConstraintsInterface: MotionRectangleConstraintsInterface){

            super();
        this.motionRectangleConstraintsInterface= motionRectangleConstraintsInterface;
    
}


    public onImageComparisonResultsEvent(imageComparisonResultsEvent: ImageComparisonResultsEvent){
this.imageComparisonInfoVector!.add(imageComparisonResultsEvent);
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
this.onImageComparisonResultsEvent(allBinaryEventObject as ImageComparisonResultsEvent);
    
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


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    
timeHelper!.setStartTimeTNT();
    

    var imageComparisonResultsEvent: ImageComparisonResultsEvent = this.imageComparisonInfoVector!.get(0) as ImageComparisonResultsEvent;;
    

    var imageComparisonInfo: ImageComparisonResult = imageComparisonResultsEvent!.getImageComparisonResult() as ImageComparisonResult;;
    
this.logUtil!.putF(imageComparisonInfo!.toString(), this, this.commonStrings!.RUN);
    

    var allMotionRectangles: AllMotionRectangles = new AllMotionRectangles(imageComparisonInfo);;
    
AllMotionRectanglesResultsCacheSingleton.getInstance()!.add(new MotionRectanglesResultsFrameCacheable(allMotionRectangles, imageComparisonInfo!.getFrameTwo()));
    

    var consolidatedMotionRectangles: ConsolidateMotionRectangles = new ConsolidateMotionRectangles(allMotionRectangles);;
    
ConsolidatedMotionRectanglesResultsCacheSingleton.getInstance()!.add(new MotionRectanglesResultsFrameCacheable(consolidatedMotionRectangles, imageComparisonInfo!.getFrameTwo()));
    

    var constrainedMotionRectangles: ConstrainedMotionRectangles = new ConstrainedMotionRectangles(this.motionRectangleConstraintsInterface, consolidatedMotionRectangles);;
    
constrainedMotionRectangles!.applyMotionRectangleConstraints(consolidatedMotionRectangles);
    
ConstrainedMotionRectanglesResultsCacheSingleton.getInstance()!.add(new MotionRectanglesResultsFrameCacheable(constrainedMotionRectangles, imageComparisonInfo!.getFrameTwo()));
    
this.fireEvent(new MotionRectanglesResultsEvent(this, imageComparisonInfo!.getFrameTwo(), constrainedMotionRectangles as MotionRectangles));
    
this.imageComparisonInfoVector!.remove(imageComparisonResultsEvent);
    
this.index++;
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}



