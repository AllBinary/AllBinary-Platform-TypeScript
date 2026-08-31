
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
        
import { Vector } from '../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
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
import { AllMotionRectangles } from './AllMotionRectangles.js';
import { AllMotionRectanglesResultsCacheSingleton } from './AllMotionRectanglesResultsCacheSingleton.js';
import { MotionRectanglesResultsFrameCacheable } from './MotionRectanglesResultsFrameCacheable.js';
import { ConsolidateMotionRectangles } from './ConsolidateMotionRectangles.js';
import { ConsolidatedMotionRectanglesResultsCacheSingleton } from './ConsolidatedMotionRectanglesResultsCacheSingleton.js';
import { ConstrainedMotionRectangles } from './ConstrainedMotionRectangles.js';
import { ConstrainedMotionRectanglesResultsCacheSingleton } from './ConstrainedMotionRectanglesResultsCacheSingleton.js';
import { MotionRectanglesResultsEvent } from './MotionRectanglesResultsEvent.js';
import { MotionRectangles } from './MotionRectangles.js';

export class MotionRectanglesWorker extends BasicEventHandler implements ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageComparisonInfoVector: Vector = new Vector();

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



