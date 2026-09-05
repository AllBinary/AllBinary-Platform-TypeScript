
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
//not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
//not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { ImageOutputData } from '../../../../../../org/allbinary/input/automation/ImageOutputData.js';
//not GWT import const ImageOutputData = globalThis.org.allbinary.input.automation.ImageOutputData;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil = globalThis.org.allbinary.logic.java.number.LongUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
//not GWT import const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

      
import { PoolInterface } from '../../../../../../org/allbinary/logic/util/cache/PoolInterface.js';
//not GWT import const PoolInterface = globalThis.org.allbinary.logic.util.cache.PoolInterface;

      
import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
//not GWT import const MediaDataFactory = globalThis.org.allbinary.logic.visual.media.MediaDataFactory;

      
import { ImagePersistanceUtil } from '../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
//not GWT import const ImagePersistanceUtil = globalThis.org.allbinary.media.image.ImagePersistanceUtil;

      
import { BufferedImageCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js';
//not GWT import const BufferedImageCacheable = globalThis.org.allbinary.media.image.cache.BufferedImageCacheable;

      
import { BufferedImageInfo } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfo.js';
//not GWT import const BufferedImageInfo = globalThis.org.allbinary.media.image.cache.BufferedImageInfo;

      
import { BufferedImageInfoFactory } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfoFactory.js';
//not GWT import const BufferedImageInfoFactory = globalThis.org.allbinary.media.image.cache.BufferedImageInfoFactory;

      
import { BufferedImagePoolSingleton } from '../../../../../../org/allbinary/media/image/cache/BufferedImagePoolSingleton.js';
//not GWT import const BufferedImagePoolSingleton = globalThis.org.allbinary.media.image.cache.BufferedImagePoolSingleton;

      
import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
//not GWT import const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

      
import { ImageIOInterface } from '../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
//not GWT import const ImageIOInterface = globalThis.org.allbinary.media.image.io.ImageIOInterface;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllMotionRectanglesResultsCacheSingleton } from './AllMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const AllMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.AllMotionRectanglesResultsCacheSingleton;

                import { MotionRectanglesResultsFrameCacheable } from './MotionRectanglesResultsFrameCacheable.js';
//not GWT import - same folder const MotionRectanglesResultsFrameCacheable = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesResultsFrameCacheable;

                import { MotionRectangles } from './MotionRectangles.js';
//not GWT import - same folder const MotionRectangles = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangles;

                import { ConsolidatedMotionRectanglesResultsCacheSingleton } from './ConsolidatedMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const ConsolidatedMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.ConsolidatedMotionRectanglesResultsCacheSingleton;

                import { ConstrainedMotionRectanglesResultsCacheSingleton } from './ConstrainedMotionRectanglesResultsCacheSingleton.js';
//not GWT import - same folder const ConstrainedMotionRectanglesResultsCacheSingleton = globalThis.org.allbinary.media.image.comparison.motion.ConstrainedMotionRectanglesResultsCacheSingleton;

                import { Graphics } from './Graphics.js';
//not GWT import - same folder const Graphics = globalThis.org.allbinary.media.image.comparison.motion.Graphics;

                import { MotionRectangle } from './MotionRectangle.js';
//not GWT import - same folder const MotionRectangle = globalThis.org.allbinary.media.image.comparison.motion.MotionRectangle;

                import { Rectangle } from './Rectangle.js';
//not GWT import - same folder const Rectangle = globalThis.org.allbinary.media.image.comparison.motion.Rectangle;

                import { Color } from './Color.js';
//not GWT import - same folder const Color = globalThis.org.allbinary.media.image.comparison.motion.Color;

                
export class MotionRectanglesImageInputOutput
            extends Object
         implements ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly NUMBER_OF_IMAGES: number = 1;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public save(frame: Long){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var motionRectanglesResultsFrameCacheable: MotionRectanglesResultsFrameCacheable = (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable;;
    

                        if(motionRectanglesResultsFrameCacheable != 
                                    null
                                )
                        
                                    {
                                    
    var motionRectangles: MotionRectangles = motionRectanglesResultsFrameCacheable!.getMotionRectangles()!;;
    
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
            
    public save(motionRectangles: MotionRectangles, frame: Long){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()));
    
filePathStringBuffer!.append("_");
    
filePathStringBuffer!.append(motionRectangles!.getName());
    

    var filePathStringBuffer1: StringMaker = new StringMaker();;
    
filePathStringBuffer1!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer1!.append("_1");
    
filePathStringBuffer1!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePathStringBuffer2: StringMaker = new StringMaker();;
    
filePathStringBuffer2!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer2!.append("_2");
    
filePathStringBuffer2!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    

    var filePathStringBuffer3: StringMaker = new StringMaker();;
    
filePathStringBuffer3!.append(filePathStringBuffer!.toString());
    
filePathStringBuffer3!.append(MediaDataFactory.getInstance()!.JPG.getExtension());
    
this.logUtil!.putF("Motion Image File Path 1: " +filePathStringBuffer1!.toString(), this, commonStrings!.SAVE);
    
this.logUtil!.putF("Motion Image File Path 2: " +filePathStringBuffer2!.toString(), this, commonStrings!.SAVE);
    
this.logUtil!.putF("Motion Image File Path 2: " +filePathStringBuffer3!.toString(), this, commonStrings!.SAVE);
    

    var bufferedImageCacheables: BufferedImageCacheable[] = new Array(this.NUMBER_OF_IMAGES);;
    

    var imageComparisonInfo: ImageComparisonResult = motionRectangles!.getImageComparisonResult()!;;
    

    var originalBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[0]!;;
    

    var bufferedImageInfo: BufferedImageInfo = BufferedImageInfoFactory.getInstance(imageComparisonInfo!.imageWidth, imageComparisonInfo!.imageHeight, originalBufferedImage!.getType())!;;
    

    var poolInterface: PoolInterface = BufferedImagePoolSingleton.getInstance()!;;
    




                        for (
    var index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageCacheables[index]= poolInterface!.remove(bufferedImageInfo) as BufferedImageCacheable;
    
}

bufferedImageCacheables[0]!.getBufferedImage()!.setData(imageComparisonInfo!.getBufferedImages()[1]!.getData());
    

                        if(this.NUMBER_OF_IMAGES > 1)
                        
                                    {
                                    bufferedImageCacheables[1]!.getBufferedImage()!.setData(imageComparisonInfo!.getBufferedImages()[1]!.getData());
    

                                    }
                                

    var bufferedImageGraphicsArray: Graphics[];;
    
bufferedImageGraphicsArray= new Array(this.NUMBER_OF_IMAGES);
    




                        for (
    var index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageGraphicsArray[index]= bufferedImageCacheables[index]!.getBufferedImage()!.getGraphics();
    
}


    var rectangelList: BasicArrayList = motionRectangles!.getVector()!;;
    

    var size: number = rectangelList!.size()!;;
    




                        for (
    var index2: number = 0;index2 < size; index2++)
        {

    var motionRectangle: MotionRectangle = rectangelList!.get(index2) as MotionRectangle;;
    

    var rectangle: Rectangle = motionRectangle!.getRectangle()!;;
    




                        for (
    var index: number = 0;index < this.NUMBER_OF_IMAGES; index++)
        {
bufferedImageGraphicsArray[index]!.setColor(Color.ORANGE);
    
bufferedImageGraphicsArray[index]!.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    
}

}


    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;;
    

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



