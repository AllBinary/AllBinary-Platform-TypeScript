
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
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
            import { Thread } from '../../../../../../java/lang/Thread.js';
        
//not game specific package import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { File } from '../../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { ImageIO } from '../../../../../../javax/imageio/ImageIO.js';
      const ImageIO = globalThis.javax.imageio.ImageIO;

      
//not game specific package import { SavedCaptureGenericProfileDataWorkerType } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/SavedCaptureGenericProfileDataWorkerType.js';
      const SavedCaptureGenericProfileDataWorkerType = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.SavedCaptureGenericProfileDataWorkerType;

      
//not game specific package import { CaptureWorkerInterface } from '../../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js';
      const CaptureWorkerInterface = globalThis.org.allbinary.input.media.image.capture.CaptureWorkerInterface;

      
//not game specific package import { CapturedBufferedImagesCacheSingleton } from '../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
      const CapturedBufferedImagesCacheSingleton = globalThis.org.allbinary.input.media.image.capture.CapturedBufferedImagesCacheSingleton;

      
//not game specific package import { CapturedImageWorkerResultsEvent } from '../../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsEvent.js';
      const CapturedImageWorkerResultsEvent = globalThis.org.allbinary.input.media.image.capture.CapturedImageWorkerResultsEvent;

      
//not game specific package import { ProcessingFrameIndexFactory } from '../../../../../../org/allbinary/input/media/image/capture/ProcessingFrameIndexFactory.js';
      const ProcessingFrameIndexFactory = globalThis.org.allbinary.input.media.image.capture.ProcessingFrameIndexFactory;

      
//not game specific package import { ScreenScavangerRobot } from '../../../../../../org/allbinary/input/media/image/capture/ScreenScavangerRobot.js';
      const ScreenScavangerRobot = globalThis.org.allbinary.input.media.image.capture.ScreenScavangerRobot;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
      const LongUtil = globalThis.org.allbinary.logic.java.number.LongUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
      const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;

      
//not game specific package import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
      const MediaDataFactory = globalThis.org.allbinary.logic.visual.media.MediaDataFactory;

      
//not game specific package import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';
      const BufferedImageFrameCacheable = globalThis.org.allbinary.media.image.cache.BufferedImageFrameCacheable;

      
//not game specific package import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SavedCaptureImagesWorker extends BasicEventHandler implements CaptureWorkerInterface {
        

    private static index: number;

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private running: boolean= false;

    private screenScavangerRobot: ScreenScavangerRobot;

    private savedCaptureGenericProfileDataWorkerType: SavedCaptureGenericProfileDataWorkerType;

public constructor (savedCaptureGenericProfileDataWorkerType: SavedCaptureGenericProfileDataWorkerType){

            super();
        this.savedCaptureGenericProfileDataWorkerType= savedCaptureGenericProfileDataWorkerType;
    
this.screenScavangerRobot= new ScreenScavangerRobot();
    
SavedCaptureImagesWorker.index= ProcessingFrameIndexFactory.next();
    
}


                //@Throws(Exception.constructor)
            
    public setThread(thread: Thread){
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
    

        while(this.isRunning())
        {
timeHelper!.setStartTimeTNT();
    

    var frame: Long = new Long(index);;
    

    var filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(this.savedCaptureGenericProfileDataWorkerType!.getPath());
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePath: string = filePathStringBuffer!.toString()!;;
    
this.logUtil!.putF("Loading Image File Path: " +filePath, this, this.commonStrings!.RUN);
    

    var file: File = new File(filePath);;
    

                        if(file.isFile())
                        
                                    {
                                    
    var bufferedImage: BufferedImage = ImageIO.read(file)!;;
    
SavedCaptureImagesWorker.index++;
    
CapturedBufferedImagesCacheSingleton.getInstance()!.add(new BufferedImageFrameCacheable(bufferedImage, frame));
    

    var capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);;
    
this.fireEvent(capturedImageEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Could Not Load File: " +filePath, this, this.commonStrings!.RUN);
    

                        }
                            
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
}

this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

