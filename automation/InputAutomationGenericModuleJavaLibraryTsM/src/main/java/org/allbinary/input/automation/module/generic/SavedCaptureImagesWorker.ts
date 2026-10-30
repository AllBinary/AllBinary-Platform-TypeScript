
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
        
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { ImageIO } from '../../../../../../javax/imageio/ImageIO.js';
//not GWT import const ImageIO

import { SavedCaptureGenericProfileDataWorkerType } from '../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/SavedCaptureGenericProfileDataWorkerType.js';
//not GWT import const SavedCaptureGenericProfileDataWorkerType

import { CaptureWorkerInterface } from '../../../../../../org/allbinary/input/media/image/capture/CaptureWorkerInterface.js';
//not GWT import const CaptureWorkerInterface

import { CapturedBufferedImagesCacheSingleton } from '../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js';
//not GWT import const CapturedBufferedImagesCacheSingleton

import { CapturedImageWorkerResultsEvent } from '../../../../../../org/allbinary/input/media/image/capture/CapturedImageWorkerResultsEvent.js';
//not GWT import const CapturedImageWorkerResultsEvent

import { ProcessingFrameIndexFactory } from '../../../../../../org/allbinary/input/media/image/capture/ProcessingFrameIndexFactory.js';
//not GWT import const ProcessingFrameIndexFactory

import { ScreenScavangerRobot } from '../../../../../../org/allbinary/input/media/image/capture/ScreenScavangerRobot.js';
//not GWT import const ScreenScavangerRobot

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { BasicEventHandler } from '../../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler

import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
//not GWT import const MediaDataFactory

import { BufferedImageFrameCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js';
//not GWT import const BufferedImageFrameCacheable

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

















                                        
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

 try { this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    let timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);;
    

        while(this.isRunning())
        {
timeHelper!.setStartTimeTNT();
    

    let frame: Long = new Long(index);;
    

    let filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(this.savedCaptureGenericProfileDataWorkerType!.getPath());
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePath: string = filePathStringBuffer!.toString()!;;
    
this.logUtil!.putF("Loading Image File Path: " +filePath, this, this.commonStrings!.RUN);
    

    let file: File = new File(filePath);;
    

                        if(file.isFile())
                        
                                    {
                                    
    let bufferedImage: BufferedImage = ImageIO.read(file)!;;
    
SavedCaptureImagesWorker.index++;
    
CapturedBufferedImagesCacheSingleton.getInstance()!.add(new BufferedImageFrameCacheable(bufferedImage, frame));
    

    let capturedImageEvent: CapturedImageWorkerResultsEvent = new CapturedImageWorkerResultsEvent(this, frame, bufferedImage);;
    
this.fireEvent(capturedImageEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Could Not Load File: " +filePath, this, this.commonStrings!.RUN);
    

                        }
                            
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsedTNT(), this, this.commonStrings!.RUN);
    
this.setRunning(false);
    
}

this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    

 }
   }
 
}


}

