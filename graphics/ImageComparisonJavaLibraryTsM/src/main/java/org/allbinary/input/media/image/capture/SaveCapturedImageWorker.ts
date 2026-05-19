
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
        
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      
import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      
import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      
import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CapturedImageWorkerResultsListener } from './CapturedImageWorkerResultsListener.js';
import { CapturedImageWorkerResultsEvent } from './CapturedImageWorkerResultsEvent.js';
import { CapturedImageInputOutput } from './CapturedImageInputOutput.js';

export class SaveCapturedImageWorker extends BasicEventHandler implements CapturedImageWorkerResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false

    private capturedImageWorkerResultsEventVector: Vector = new Vector();
public constructor (){

            super();
        }

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.running;
    
}

//@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
this.running= running;
    
}


    public onCaptureEvent(capturedImageEvent: CapturedImageWorkerResultsEvent){
this.capturedImageWorkerResultsEventVector!.add(capturedImageEvent);
    
this.run();
    
}


    public onEvent(allBinaryEventObject: AllBinaryEventObject){
this.onCaptureEvent(allBinaryEventObject as CapturedImageWorkerResultsEvent);
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
;
    
timeHelper!.setStartTimeTNT();
    

    var capturedImageWorkerResultsEvent: CapturedImageWorkerResultsEvent = (this.capturedImageWorkerResultsEventVector!.get(0) as CapturedImageWorkerResultsEvent);
;
    

    var screenBufferedImage: BufferedImage = capturedImageWorkerResultsEvent!.getBufferedImage()!;
;
    
new CapturedImageInputOutput().
                            save(screenBufferedImage, capturedImageWorkerResultsEvent!.getFrame());
    
this.capturedImageWorkerResultsEventVector!.remove(capturedImageWorkerResultsEvent);
    
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
                
            

