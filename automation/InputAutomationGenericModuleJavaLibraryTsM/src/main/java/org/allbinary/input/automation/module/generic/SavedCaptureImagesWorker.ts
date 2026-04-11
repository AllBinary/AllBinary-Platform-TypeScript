
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
        



import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { File } from "../../../../../../java/io/File.js";

    
import { ImageIO } from "../../../../../../javax/imageio/ImageIO.js";

    
import { SavedCaptureGenericProfileDataWorkerType } from "../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/SavedCaptureGenericProfileDataWorkerType.js";

    
import { CaptureWorkerInterface } from "../../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js";

    
import { CapturedBufferedImagesCacheSingleton } from "../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js";

    
import { CapturedImageWorkerResultsEvent } from "../../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsEvent.js";

    
import { ProcessingFrameIndexFactory } from "../../../../../../org/allbinary/input/media/image/capture/ProcessingFrameIndexFactory.js";

    
import { ScreenScavangerRobot } from "../../../../../../org/allbinary/input/media/image/capture/ScreenScavangerRobot.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LongUtil } from "../../../../../../org/allbinary/logic/java/number/LongUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicEventHandler } from "../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js";

    
import { MediaDataFactory } from "../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js";

    
import { BufferedImageFrameCacheable } from "../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class SavedCaptureImagesWorker extends BasicEventHandler
                , CaptureWorkerInterface {
        

    private index: number

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private running: boolean= false

    private screenScavangerRobot: ScreenScavangerRobot

    private savedCaptureGenericProfileDataWorkerType: SavedCaptureGenericProfileDataWorkerType
public constructor (savedCaptureGenericProfileDataWorkerType: SavedCaptureGenericProfileDataWorkerType){

            super();
            var savedCaptureGenericProfileDataWorkerType = savedCaptureGenericProfileDataWorkerType
this.savedCaptureGenericProfileDataWorkerType= savedCaptureGenericProfileDataWorkerType;
    
this.screenScavangerRobot= new ScreenScavangerRobot();
    
index= ProcessingFrameIndexFactory.next();
    
}


                //@Throws(Error::class)
            
    public setThread(thread: Thread){
var thread = thread
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
            logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        
;
    

        while(this.isRunning())
        {
timeHelper!.setStartTime();
    

    var frame: Long = index as Long;
        
        
;
    

    var filePathStringBuffer: StringMaker = new StringMaker();
        
        
;
    
filePathStringBuffer!.append(this.savedCaptureGenericProfileDataWorkerType!.getPath());
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath: string = filePathStringBuffer!.toString()!;
        
        
;
    
logUtil!.put("Loading Image File Path: " +filePath, this, this.commonStrings!.RUN);
    

    var file: File = new File(filePath);
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    
    var bufferedImage: BufferedImage = ImageIO.read(file)!;
        
        
;
    
index++;
    
CapturedBufferedImagesCacheSingleton.getInstance()!.add(new BufferedImageFrameCacheable(bufferedImage, frame));
    

    var capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);
        
        
;
    
this.fireEvent(capturedImageEvent);
    

                                    }
                                
                        else {
                            logUtil!.put("Could Not Load File: " +filePath, this, this.commonStrings!.RUN);
    

                        }
                            
logUtil!.put(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
}

logUtil!.put(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

