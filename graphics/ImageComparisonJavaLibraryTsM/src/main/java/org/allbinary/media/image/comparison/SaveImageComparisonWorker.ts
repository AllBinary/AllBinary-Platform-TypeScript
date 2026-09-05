
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageComparisonResultsListener } from './ImageComparisonResultsListener.js';
//not GWT import - same folder const ImageComparisonResultsListener = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsListener;

                import { ImageComparisonResultsEvent } from './ImageComparisonResultsEvent.js';
//not GWT import - same folder const ImageComparisonResultsEvent = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsEvent;

                import { ImageComparisonResult } from './ImageComparisonResult.js';
//not GWT import - same folder const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

                import { ComparisonImageInputOutput } from './ComparisonImageInputOutput.js';
//not GWT import - same folder const ComparisonImageInputOutput = globalThis.org.allbinary.media.image.comparison.ComparisonImageInputOutput;

                
export class SaveImageComparisonWorker
            extends Object
         implements ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false;

    private readonly imageComparisonInfoVector: BasicArrayList = new BasicArrayListD();

public constructor (){

            super();
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
    

    var imageComparisonInfo: ImageComparisonResult = imageComparisonResultsEvent!.getImageComparisonResult()!;;
    
this.logUtil!.putF(imageComparisonInfo!.toString(), this, this.commonStrings!.RUN);
    
new ComparisonImageInputOutput().save(imageComparisonInfo, imageComparisonInfo!.getFrameTwo());
    
this.imageComparisonInfoVector!.remove(imageComparisonInfo);
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}



