
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
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { ImageOutputData } from '../../../../../../org/allbinary/input/automation/ImageOutputData.js';
      const ImageOutputData = globalThis.org.allbinary.input.automation.ImageOutputData;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { LongUtil } from '../../../../../../org/allbinary/logic/java/number/LongUtil.js';
      const LongUtil = globalThis.org.allbinary.logic.java.number.LongUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
      const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

      
//not game specific package import { PoolInterface } from '../../../../../../org/allbinary/logic/util/cache/PoolInterface.js';
      const PoolInterface = globalThis.org.allbinary.logic.util.cache.PoolInterface;

      
//not game specific package import { MediaDataFactory } from '../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js';
      const MediaDataFactory = globalThis.org.allbinary.logic.visual.media.MediaDataFactory;

      
//not game specific package import { ImagePersistanceUtil } from '../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js';
      const ImagePersistanceUtil = globalThis.org.allbinary.media.image.ImagePersistanceUtil;

      
//not game specific package import { BufferedImageCacheable } from '../../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js';
      const BufferedImageCacheable = globalThis.org.allbinary.media.image.cache.BufferedImageCacheable;

      
//not game specific package import { BufferedImageInfo } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfo.js';
      const BufferedImageInfo = globalThis.org.allbinary.media.image.cache.BufferedImageInfo;

      
//not game specific package import { BufferedImageInfoFactory } from '../../../../../../org/allbinary/media/image/cache/BufferedImageInfoFactory.js';
      const BufferedImageInfoFactory = globalThis.org.allbinary.media.image.cache.BufferedImageInfoFactory;

      
//not game specific package import { BufferedImagePoolSingleton } from '../../../../../../org/allbinary/media/image/cache/BufferedImagePoolSingleton.js';
      const BufferedImagePoolSingleton = globalThis.org.allbinary.media.image.cache.BufferedImagePoolSingleton;

      
//not game specific package import { ImageComparisonResult } from '../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js';
      const ImageComparisonResult = globalThis.org.allbinary.media.image.comparison.ImageComparisonResult;

      
//not game specific package import { ImageIOInterface } from '../../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
      const ImageIOInterface = globalThis.org.allbinary.media.image.io.ImageIOInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllMotionRectanglesResultsCacheSingleton } from './AllMotionRectanglesResultsCacheSingleton.js';
import { MotionRectanglesResultsFrameCacheable } from './MotionRectanglesResultsFrameCacheable.js';
import { MotionRectangles } from './MotionRectangles.js';
import { ConsolidatedMotionRectanglesResultsCacheSingleton } from './ConsolidatedMotionRectanglesResultsCacheSingleton.js';
import { ConstrainedMotionRectanglesResultsCacheSingleton } from './ConstrainedMotionRectanglesResultsCacheSingleton.js';
import { Graphics } from './Graphics.js';
import { MotionRectangle } from './MotionRectangle.js';
import { Rectangle } from './Rectangle.js';
import { Color } from './Color.js';

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


    var rectangelList: Vector = motionRectangles!.getVector()!;;
    

    var size: number = rectangelList!.length!;;
    




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
                
            

