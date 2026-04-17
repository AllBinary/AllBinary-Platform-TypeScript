
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { ColorCacheFactory } from "../../../../../org/allbinary/graphics/color/ColorCacheFactory.js";

    
import { ColorCacheable } from "../../../../../org/allbinary/graphics/color/ColorCacheable.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AutomaticCacheInterface } from "../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { PixelDeltaFactory } from "../../../../../org/allbinary/media/image/comparison/pixel/PixelDeltaFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ImageComparatorConstraintsInterface } from "./ImageComparatorConstraintsInterface.js";

import { Math } from "./Math.js";

import { ImageComparisonResult } from "./ImageComparisonResult.js";

export class ImageComparator
            extends Object
         {
        

    private readonly imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface
public constructor (imageComparatorConstraintsInterface: ImageComparatorConstraintsInterface){

            super();
                //var imageComparatorConstraintsInterface = imageComparatorConstraintsInterface
this.imageComparatorConstraintsInterface= imageComparatorConstraintsInterface;
    
}


                //@Throws(Error::class)
            
    process(imageComparisonInfo: ImageComparisonResult, point: GPoint){
    //var imageComparisonInfo = imageComparisonInfo
    //var point = point

    var isCollsionWithAvoidRectangles: boolean = this.imageComparatorConstraintsInterface!.isCollisionWithAvoidRectangles(point)!;
        
        
;
    

                        if(!isCollsionWithAvoidRectangles)
                        
                                    {
                                    
    var rgb1: number = imageComparisonInfo!.getBufferedImages()[0]!.getRGB(point.getX(), point.getY())!;
        
        
;
    

    var rgb2: number = imageComparisonInfo!.getBufferedImages()[1]!.getRGB(point.getX(), point.getY())!;
        
        
;
    

    var automaticCacheInterface: AutomaticCacheInterface = ColorCacheFactory.getInstance()!;
        
        
;
    

    var colorInteger: Integer = Integer(Integer.valueOf(rgb1))!;
        
        
;
    

    var colorCacheable: ColorCacheable = automaticCacheInterface!.get(colorInteger);

                         as ColorCacheable;
        
        
;
    

    var color: Color = colorCacheable!.getColor()!;
        
        
;
    

    var colorInteger2: Integer = Integer(Integer.valueOf(rgb2))!;
        
        
;
    

    var colorCacheable2: ColorCacheable = automaticCacheInterface!.get(colorInteger);

                         as ColorCacheable;
        
        
;
    

    var color2: Color = colorCacheable!.getColor()!;
        
        
;
    

                        if(this.imageComparatorConstraintsInterface!.isColorAllowed(0, point, color) || this.imageComparatorConstraintsInterface!.isColorAllowed(1, point, color2))
                        
                                    {
                                    
                        if(Math.abs(rgb1 -rgb2) <= imageComparisonInfo!.getTolerance())
                        
                                    {
                                    imageComparisonInfo!.pixelsThatMatch++;
    

                                    }
                                
                        else {
                            imageComparisonInfo!.add(PixelDeltaFactory.getInstance(point.getX(), point.getY(), rgb1, rgb2));
    

                        }
                            

                                    }
                                

                                    }
                                
                        else {
                            imageComparisonInfo!.pixelsIgnored++;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public compare(bufferedImage1: BufferedImage, bufferedImage2: BufferedImage, frameOne: Long, frameTwo: Long, tolerance: number): ImageComparisonResult{
    //var bufferedImage1 = bufferedImage1
    //var bufferedImage2 = bufferedImage2
    //var frameOne = frameOne
    //var frameTwo = frameTwo
    //var tolerance = tolerance



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.compare(bufferedImage1, bufferedImage2, frameOne, frameTwo, tolerance, StringUtil.getInstance()!.EMPTY_STRING);

                        ;
    
}


                //@Throws(Error::class)
            
    public compare(bufferedImage1: BufferedImage, bufferedImage2: BufferedImage, frameOne: Long, frameTwo: Long, tolerance: number, name: string): ImageComparisonResult{
    //var bufferedImage1 = bufferedImage1
    //var bufferedImage2 = bufferedImage2
    //var frameOne = frameOne
    //var frameTwo = frameTwo
    //var tolerance = tolerance
    //var name = name

                        if(bufferedImage1 == 
                                    null
                                 || bufferedImage2 == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Input images must not be null.")

                                    }
                                

    var imageComparisonInfo: ImageComparisonResult = new ImageComparisonResult(name, bufferedImage1, bufferedImage2, frameOne, frameTwo, tolerance);
        
        
;
    




                        for (
    var indexY: number = 0;
        
        
indexY < imageComparisonInfo!.imageHeight; indexY++)
        {




                        for (
    var indexX: number = 0;
        
        
indexX < imageComparisonInfo!.imageWidth; indexX++)
        {
this.process(imageComparisonInfo, PointFactory.getInstance()!.getInstance(indexX, indexY));
    

                        if(imageComparisonInfo!.getNonMatchingPixelVector()!.size() > this.imageComparatorConstraintsInterface!.getMaxNonMatchingPixelDeltas())
                        
                                    {
                                    break;

                    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageComparisonInfo;
    
}


}
                
            

