
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
        



            import Vector from "@ohos.util.Vector";
        
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { PoolInterface } from "../../../../../org/allbinary/logic/util/cache/PoolInterface.js";

    
import { BufferedImageCacheable } from "../../../../../org/allbinary/media/image/cache/BufferedImageCacheable.js";

    
import { BufferedImageInfo } from "../../../../../org/allbinary/media/image/cache/BufferedImageInfo.js";

    
import { BufferedImageInfoFactory } from "../../../../../org/allbinary/media/image/cache/BufferedImageInfoFactory.js";

    
import { BufferedImagePoolSingleton } from "../../../../../org/allbinary/media/image/cache/BufferedImagePoolSingleton.js";

    
import { PixelDelta } from "../../../../../org/allbinary/media/image/comparison/pixel/PixelDelta.js";

    

export class ChangedPixelsUtil
            extends Object
         {
        

    private static readonly START_X: number = 0;
        
        

    private static readonly START_Y: number = 0;
        
        

    private static readonly OFFSET: number = 0;
        
        

    private static readonly SCAN_SIZE: number = 0;
        
        

    private static readonly CLEAR_INT_ARRAY: number[] = new Array(1800 *1600);
        
        

                //@Throws(Error::class)
            
    public static generateBufferedImageChacheables(imageComparisonInfo: ImageComparisonResult): BufferedImageCacheable[]{
var imageComparisonInfo = imageComparisonInfo

    var bufferedImageCacheables: BufferedImageCacheable[]
;
    

    var originalBufferedImage: BufferedImage = imageComparisonInfo!.getBufferedImages()[0]!;
        
        
;
    
bufferedImageCacheables= new Array(2);
    

    var bufferedImageInfo: BufferedImageInfo = BufferedImageInfoFactory.getInstance(imageComparisonInfo!.imageWidth, imageComparisonInfo!.imageHeight, originalBufferedImage!.getType())!;
        
        
;
    

    var poolInterface: PoolInterface = BufferedImagePoolSingleton.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < bufferedImageCacheables!.length; index++)
        {

    var bufferedImageCacheable: BufferedImageCacheable = poolInterface!.remove(bufferedImageInfo);

                         as BufferedImageCacheable;
        
        
;
    
bufferedImageCacheables[index]= bufferedImageCacheable;
    
bufferedImageCacheables[index]!.getBufferedImage()!.setRGB(START_X, START_Y, bufferedImageInfo!.getWidth(), bufferedImageInfo!.getHeight(), CLEAR_INT_ARRAY, OFFSET, SCAN_SIZE);
    
}


    var vector: Vector = imageComparisonInfo!.getNonMatchingPixelVector()!;
        
        
;
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var pixelDelta: PixelDelta = vector.get(index);

                         as PixelDelta;
        
        
;
    

                        if(pixelDelta!.getColorDelta() == 
                                    null
                                )
                        
                                    {
                                    System.out.print("ColorDelta");
    
System.exit(0);
    

                                    }
                                
bufferedImageCacheables[0]!.getBufferedImage()!.setRGB(pixelDelta!.getPoint()!.getX(), pixelDelta!.getPoint()!.getY(), pixelDelta!.getColorDelta()!.getRgb1());
    
bufferedImageCacheables[1]!.getBufferedImage()!.setRGB(pixelDelta!.getPoint()!.getX(), pixelDelta!.getPoint()!.getY(), pixelDelta!.getColorDelta()!.getRgb2());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageCacheables;
    
}

private constructor (){

            super();
            }


}
                
            

