
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
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { awt } from '../../../../../../java/awt.js';
//not GWT import const awt

import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ImageOutputData } from '../../../../../../org/allbinary/input/automation/ImageOutputData.js';
//not GWT import const ImageOutputData

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
//not GWT import const AutomaticCacheInterface

import { PoolInterface } from '../../../../../../org/allbinary/logic/util/cache/PoolInterface.js';
//not GWT import const PoolInterface

import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
//not GWT import const MediaDataFactory

import { ImagePersistanceUtil } from '../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
//not GWT import const ImagePersistanceUtil

import { BufferedImageCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js';
//not GWT import const BufferedImageCacheable

import { BufferedImageInfo } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfo.js';
//not GWT import const BufferedImageInfo

import { BufferedImageInfoFactory } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfoFactory.js';
//not GWT import const BufferedImageInfoFactory

import { BufferedImagePoolSingleton } from '../../../../../../org/allbinary/media/image/cache/BufferedImagePoolSingleton.js';
//not GWT import const BufferedImagePoolSingleton

import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
//not GWT import const ImageComparisonResult

import { ImageIOInterface } from '../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
//not GWT import const ImageIOInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllMotionRectanglesResultsCacheSingleton } from './AllMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const AllMotionRectanglesResultsCacheSingleton
import { MotionRectanglesResultsFrameCacheable } from './MotionRectanglesResultsFrameCacheable.js';
//not GWT import - same folder const MotionRectanglesResultsFrameCacheable
import { MotionRectangles } from './MotionRectangles.js';
//not GWT import - same folder const MotionRectangles
import { ConsolidatedMotionRectanglesResultsCacheSingleton } from './ConsolidatedMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const ConsolidatedMotionRectanglesResultsCacheSingleton
import { ConstrainedMotionRectanglesResultsCacheSingleton } from './ConstrainedMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const ConstrainedMotionRectanglesResultsCacheSingleton
import { Graphics } from './Graphics.js';
//not GWT import - same folder const Graphics
import { MotionRectangle } from './MotionRectangle.js';
//not GWT import - same folder const MotionRectangle
import { Rectangle } from './Rectangle.js';
//not GWT import - same folder const Rectangle
import { Color } from './Color.js';
//not GWT import - same folder const Color

export class MotionRectanglesImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly NUMBER_OF_IMAGES: number = 1;

public constructor (){

            super();
        }

save(...args: any[]): any {
   
    if (args.length === 1) return this.save$overload1(args[0]);
   
    if (args.length === 2) return this.save$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: save'); }
  
                //@Throws(Exception.constructor)
            
    public save$overload1(frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let motionRectanglesResultsFrameCacheable: MotionRectanglesResultsFrameCacheable = (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable;;
    

                        if(motionRectanglesResultsFrameCacheable != 
                                    null
                                )
                        
                                    {
                                    
    let motionRectangles: MotionRectangles = motionRectanglesResultsFrameCacheable!.getMotionRectangles()!;;
    
this.save(motionRectangles, frame);
    
motionRectanglesResultsFrameCacheable= (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable;
    
motionRectangles= motionRectanglesResultsFrameCacheable!.getMotionRectangles();
    
this.save(motionRectangles, frame);
    
motionRectanglesResultsFrameCacheable= (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable;
    
motionRectangles= motionRectanglesResultsFrameCacheable!.getMotionRectangles();
    
this.save(motionRectangles, frame);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Motion Rectangle Results for Frame: " +frame, this, commonStrings!.SAVE);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public save$overload2(motionRectangles: MotionRectangles, frame: Long){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append("_");
    
filePathStringBuffer!.append(motionRectangles!.getName());
    

    let filePathStringBuffer1: StringMaker = new StringMaker();;
    
filePathStringBuffer1!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer1!.append("_1");
    
filePathStringBuffer1!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePathStringBuffer2: StringMaker = new StringMaker();;
    
filePathStringBuffer2!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer2!.append("_2");
    
filePathStringBuffer2!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    let filePathStringBuffer3: StringMaker = new StringMaker();;
    
filePathStringBuffer3!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer3!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    
this.logUtil!.putF("Motion Image File Path 1: " +filePathStringBuffer1!.toString(), this, commonStrings!.SAVE);
    
this.logUtil!.putF("Motion Image File Path 2: " +filePathStringBuffer2!.toString(), this, commonStrings!.SAVE);
    
this.logUtil!.putF("Motion Image File Path 2: " +filePathStringBuffer3!.toString(), this, commonStrings!.SAVE);
    

    let bufferedImageCacheables: BufferedImageCacheable[] = new Array(this.NUMBER_OF_IMAGES);;
    

    let imageComparisonInfo: ImageComparisonResult = motionRectangles!.getImageComparisonResult()!;;
    

    let originalBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[0]!;;
    

    let bufferedImageInfo: BufferedImageInfo = BufferedImageInfoFactory.getInstance(imageComparisonInfo!.imageWidth, imageComparisonInfo!.imageHeight, originalBufferedImage!.getType())!;;
    

    let poolInterface: PoolInterface = BufferedImagePoolSingleton.getInstance()!;;
    




                        for (
    let index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageCacheables[index]= poolInterface!.remove(bufferedImageInfo) as BufferedImageCacheable;
    
}

bufferedImageCacheables[0]!.getBufferedImage()!.setData(imageComparisonInfo!.getBufferedImages()[1]!.getData());
    

                        if(this.NUMBER_OF_IMAGES > 1)
                        
                                    {
                                    bufferedImageCacheables[1]!.getBufferedImage()!.setData(imageComparisonInfo!.getBufferedImages()[1]!.getData());
    

                                    }
                                

    let bufferedImageGraphicsArray: Graphics[];;
    
bufferedImageGraphicsArray= new Array(this.NUMBER_OF_IMAGES);
    




                        for (
    let index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageGraphicsArray[index]= bufferedImageCacheables[index]!.getBufferedImage()!.getGraphics();
    
}


    let rectangelList: BasicArrayList = motionRectangles!.getVector()!;;
    

    let size: number = rectangelList!.size()!;;
    




                        for (
    let index2: number = 0;index2 < size; index2++)
        {

    let motionRectangle: MotionRectangle = rectangelList!.get(index2) as MotionRectangle;;
    

    let rectangle: Rectangle = motionRectangle!.getRectangle()!;;
    




                        for (
    let index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageGraphicsArray[index]!.setColor(Color.ORANGE);
    
bufferedImageGraphicsArray[index]!.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    
}

}


    let imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    

                        if(this.NUMBER_OF_IMAGES > 1)
                        
                                    {
                                    imagePersistanceUtil!.saveWithImageIO(filePathStringBuffer1!.toString(), bufferedImageCacheables[1]!.getBufferedImage());
    

                                    }
                                
imagePersistanceUtil!.saveWithImageIO(filePathStringBuffer2!.toString(), bufferedImageCacheables[0]!.getBufferedImage());
    

                        if(this.NUMBER_OF_IMAGES > 2)
                        
                                    {
                                    imagePersistanceUtil!.saveWithImageIO(filePathStringBuffer3!.toString(), bufferedImageCacheables[2]!.getBufferedImage());
    

                                    }
                                
}


}

