
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
        
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { Vector } from '../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      //not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
import { ImageComparisonResult } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      //not GWT import const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

      
import { ImageComparisonResultsEvent } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsEvent.js';
      //not GWT import const ImageComparisonResultsEvent = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsEvent;

      
import { ImageComparisonResultsListener } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsListener.js';
      //not GWT import const ImageComparisonResultsListener = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsListener;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageComparisonSearchConstraintsInterface } from './ImageComparisonSearchConstraintsInterface.js';
//not GWT import const  = globalThis.org.allbinary.media.image.search.ImageComparisonSearchConstraintsInterface;

                
export class ImageComparisonSearchWorker extends BasicEventHandler implements ImageComparisonResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly imageComparisonInfoVector: Vector;

    private index: number= 0;

    private running: boolean= false;

    private imageSearchConstraintsInterface: ImageComparisonSearchConstraintsInterface;

public constructor (imageSearchConstraintsInterface: ImageComparisonSearchConstraintsInterface){

            super();
        this.imageComparisonInfoVector= new Vector();
    
this.imageSearchConstraintsInterface= imageSearchConstraintsInterface;
    
}


    public onImageComparisonResultsEvent(imageComparisonResultsEvent: ImageComparisonResultsEvent){
this.imageComparisonInfoVector!.add(imageComparisonResultsEvent!.getImageComparisonResult());
    
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
    

    var imageComparisonInfo: ImageComparisonResult = this.imageComparisonInfoVector!.get(0) as ImageComparisonResult;;
    
this.logUtil!.putF(imageComparisonInfo!.toString(), this, this.commonStrings!.RUN);
    

    var latestBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[1]!;;
    
this.imageComparisonInfoVector!.remove(imageComparisonInfo);
    
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



