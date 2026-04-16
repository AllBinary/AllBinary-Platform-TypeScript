
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class SaveMotionRectanglesResultsWorker
            extends Object
        
                , MotionRectanglesResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private running: boolean= false

    private motionRectanglesVector: Vector
public constructor (){

            super();
            this.motionRectanglesVector= new Vector();
    
}


    public getMotionRectanglesVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.motionRectanglesVector;
    
}


    public onMotionRectanglesImageComparisonResultsEvent(motionRectanglesResultsEvent: MotionRectanglesResultsEvent){
var motionRectanglesResultsEvent = motionRectanglesResultsEvent
this.getMotionRectanglesVector()!.add(motionRectanglesResultsEvent);
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
var allBinaryEventObject = allBinaryEventObject
this.onMotionRectanglesImageComparisonResultsEvent(allBinaryEventObject as MotionRectanglesResultsEvent);
    
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
    

    var motionRectanglesResultsEvent: MotionRectanglesResultsEvent = this.getMotionRectanglesVector()!.get(0);

                         as MotionRectanglesResultsEvent;
        
        
;
    

    var motionRectangles: MotionRectangles = motionRectanglesResultsEvent!.getMotionRectangles()!;
        
        
;
    
new MotionRectanglesImageInputOutput().
                            save(motionRectangles, motionRectanglesResultsEvent!.getFrame());
    
this.getMotionRectanglesVector()!.remove(motionRectangles);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

