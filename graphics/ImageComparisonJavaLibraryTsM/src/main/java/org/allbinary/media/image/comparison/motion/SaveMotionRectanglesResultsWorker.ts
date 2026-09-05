
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionRectanglesResultsListener } from './MotionRectanglesResultsListener.js';
//not GWT import - same folder const MotionRectanglesResultsListener = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesResultsListener;

                import { MotionRectanglesResultsEvent } from './MotionRectanglesResultsEvent.js';
//not GWT import - same folder const MotionRectanglesResultsEvent = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesResultsEvent;

                import { MotionRectangles } from './MotionRectangles.js';
//not GWT import - same folder const MotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangles;

                import { MotionRectanglesImageInputOutput } from './MotionRectanglesImageInputOutput.js';
//not GWT import - same folder const MotionRectanglesImageInputOutput = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesImageInputOutput;

                
export class SaveMotionRectanglesResultsWorker
            extends Object
         implements MotionRectanglesResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false;

    private motionRectanglesVector: BasicArrayList;

public constructor (){

            super();
        this.motionRectanglesVector= new BasicArrayListD();
    
}


    public getMotionRectanglesVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionRectanglesVector;
    
}


    public onMotionRectanglesImageComparisonResultsEvent(motionRectanglesResultsEvent: MotionRectanglesResultsEvent){
this.getMotionRectanglesVector()!.add(motionRectanglesResultsEvent);
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
this.onMotionRectanglesImageComparisonResultsEvent(allBinaryEventObject as MotionRectanglesResultsEvent);
    
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
    

    var motionRectanglesResultsEvent: MotionRectanglesResultsEvent = this.getMotionRectanglesVector()!.get(0) as MotionRectanglesResultsEvent;;
    

    var motionRectangles: MotionRectangles = motionRectanglesResultsEvent!.getMotionRectangles()!;;
    
new MotionRectanglesImageInputOutput().save(motionRectangles, motionRectanglesResultsEvent!.getFrame());
    
this.getMotionRectanglesVector()!.remove(motionRectangles);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}



