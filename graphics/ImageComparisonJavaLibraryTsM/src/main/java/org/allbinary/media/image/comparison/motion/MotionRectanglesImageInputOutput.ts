
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
        



import { awt } from "../../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../../java/awt/image/BufferedImage.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { ImageOutputData } from "../../../../../../org/allbinary/input/automation/ImageOutputData.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LongUtil } from "../../../../../../org/allbinary/logic/java/number/LongUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { PoolInterface } from "../../../../../../org/allbinary/logic/util/cache/PoolInterface.js";

    
import { MediaDataFactory } from "../../../../../../org/allbinary/logic/visual/media/MediaDataFactory.js";

    
import { ImagePersistanceUtil } from "../../../../../../org/allbinary/media/image/ImagePersistanceUtil.js";

    
import { BufferedImageCacheable } from "../../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js";

    
import { BufferedImageInfo } from "../../../../../../org/allbinary/media/image/cache/BufferedImageInfo.js";

    
import { BufferedImageInfoFactory } from "../../../../../../org/allbinary/media/image/cache/BufferedImageInfoFactory.js";

    
import { BufferedImagePoolSingleton } from "../../../../../../org/allbinary/media/image/cache/BufferedImagePoolSingleton.js";

    
import { ImageComparisonResult } from "../../../../../../org/allbinary/media/image/comparison/ImageComparisonResult.js";

    
import { ImageIOInterface } from "../../../../../../org/allbinary/media/image/io/ImageIOInterface.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class MotionRectanglesImageInputOutput
            extends Object
        
                , ImageIOInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly NUMBER_OF_IMAGES: number = 1;
        
        
public constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public save(frame: Long){
var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var motionRectanglesResultsFrameCacheable: MotionRectanglesResultsFrameCacheable = 
                                    (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable;
        
        


    
                        if(motionRectanglesResultsFrameCacheable != 
                                    null
                                )
                        
                                    {
                                    
    var motionRectangles: MotionRectangles = motionRectanglesResultsFrameCacheable!.getMotionRectangles()!;
        
        

this.save(motionRectangles, frame)
motionRectanglesResultsFrameCacheable= 
                                    (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable
motionRectangles= motionRectanglesResultsFrameCacheable!.getMotionRectangles()
this.save(motionRectangles, frame)
motionRectanglesResultsFrameCacheable= 
                                    (getInstance as AutomaticCacheInterface).get(frame) as MotionRectanglesResultsFrameCacheable
motionRectangles= motionRectanglesResultsFrameCacheable!.getMotionRectangles()
this.save(motionRectangles, frame)

                                    }
                                
                        else {
                            put("No Motion Rectangle Results for Frame: " +frame, this, commonStrings!.SAVE)

                        }
                            
}


                @Throws(Exception::class)
            
    public save(motionRectangles: MotionRectangles, frame: Long){
var motionRectangles = motionRectangles
var frame = frame

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var filePathStringBuffer: StringMaker = new StringMaker();
        
        

append(ImageOutputData.SAVE_PATH)
append(LongUtil.fillIn(frame.toString()))
append("_")
append(motionRectangles!.getName())

    var filePathStringBuffer1: StringMaker = new StringMaker();
        
        

append(filePathStringBuffer!.toString())
append("_1")
append(MediaDataFactory.getInstance()!.JPG.getExtension())

    var filePathStringBuffer2: StringMaker = new StringMaker();
        
        

append(filePathStringBuffer!.toString())
append("_2")
append(MediaDataFactory.getInstance()!.JPG.getExtension())

    var filePathStringBuffer3: StringMaker = new StringMaker();
        
        

append(filePathStringBuffer!.toString())
append(MediaDataFactory.getInstance()!.JPG.getExtension())
put("Motion Image File Path 1: " +filePathStringBuffer1!.toString(), this, commonStrings!.SAVE)
put("Motion Image File Path 2: " +filePathStringBuffer2!.toString(), this, commonStrings!.SAVE)
put("Motion Image File Path 2: " +filePathStringBuffer3!.toString(), this, commonStrings!.SAVE)

    var bufferedImageCacheables: BufferedImageCacheable[] = new Array(NUMBER_OF_IMAGES);
        
        


    var imageComparisonInfo: ImageComparisonResult = motionRectangles!.getImageComparisonResult()!;
        
        


    var originalBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[0]!;
        
        


    var bufferedImageInfo: BufferedImageInfo = BufferedImageInfoFactory.getInstance(imageComparisonInfo!.imageWidth, imageComparisonInfo!.imageHeight, originalBufferedImage!.getType())!;
        
        


    var poolInterface: PoolInterface = BufferedImagePoolSingleton.getInstance()!;
        
        





                        for (
    var index: number = 0;
        
        
index < NUMBER_OF_IMAGES; index++)
        {
bufferedImageCacheables[index]= poolInterface!.remove(bufferedImageInfo) as BufferedImageCacheable
}

setData(imageComparisonInfo!.getBufferedImages()[1]!.getData())

    
                        if(NUMBER_OF_IMAGES > 1)
                        
                                    {
                                    setData(imageComparisonInfo!.getBufferedImages()[1]!.getData())

                                    }
                                

    var bufferedImageGraphicsArray: Graphics[]

bufferedImageGraphicsArray= new Array(NUMBER_OF_IMAGES)




                        for (
    var index: number = 0;
        
        
index < NUMBER_OF_IMAGES; index++)
        {
bufferedImageGraphicsArray[index]= bufferedImageCacheables[index]!.getBufferedImage()!.getGraphics()
}


    var rectangelList: Vector = motionRectangles!.getVector()!;
        
        


    var size: number = rectangelList!.length!;
        
        





                        for (
    var index2: number = 0;
        
        
index2 < size; index2++)
        {

    var motionRectangle: MotionRectangle = rectangelList!.get(index2) as MotionRectangle;
        
        


    var rectangle: Rectangle = motionRectangle!.getRectangle()!;
        
        





                        for (
    var index: number = 0;
        
        
index < NUMBER_OF_IMAGES; index++)
        {
setColor(Color.ORANGE)
drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
}

}


    var imagePersistanceUtil: ImagePersistanceUtil = ImagePersistanceUtil.getInstance()!;
        
        


    
                        if(NUMBER_OF_IMAGES > 1)
                        
                                    {
                                    saveWithImageIO(filePathStringBuffer1!.toString(), bufferedImageCacheables[1]!.getBufferedImage())

                                    }
                                
saveWithImageIO(filePathStringBuffer2!.toString(), bufferedImageCacheables[0]!.getBufferedImage())

    
                        if(NUMBER_OF_IMAGES > 2)
                        
                                    {
                                    saveWithImageIO(filePathStringBuffer3!.toString(), bufferedImageCacheables[2]!.getBufferedImage())

                                    }
                                
}


}
                
            

