
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

    

interface MotionRectangleConstraintsInterface {
        

    getMaxMotionRectangles(): number

    getMinDimension(): Dimension

    getMinArea(): number

    getMaxDimension(): Dimension

    isTooSmall(rectangle: Rectangle): boolean

    isAreaTooSmall(rectangle: Rectangle): boolean

    isTooBig(rectangle: Rectangle): boolean

                @Throws(Exception::class)
            
    isValid(frame: Long, bufferedImage: BufferedImage, rectangle: Rectangle): boolean

}
                
            

