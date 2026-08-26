
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
        
//not game specific package import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not game specific package import { ImageComparisonResult } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

      
//not game specific package import { ImageComparisonResultsEvent } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsEvent.js';
      const ImageComparisonResultsEvent = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsEvent;

      
//not game specific package import { ImageComparisonResultsListener } from '../../../../../org/allbinary/media/image/comparison/ImageComparisonResultsListener.js';
      const ImageComparisonResultsListener = globalThis.org.allbinary.media.image.comparison.ImageComparisonResultsListener;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageComparisonSearchConstraintsInterface } from './ImageComparisonSearchConstraintsInterface.js';

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
                
            

