
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
        



import { awt } from "../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../java/awt/image/BufferedImage.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Rectangle } from "./Rectangle.js";

import { Color } from "./Color.js";

export interface ImageComparatorConstraintsInterface {
        

    getMaxNonMatchingPixelDeltas(): number

    isCollisionWithAvoidRectangles(rectangle: Rectangle): boolean

    isCollisionWithAvoidRectangles(point: GPoint): boolean

    isColorAllowed(frame: number, point: GPoint, color: Color): boolean

                //@Throws(Error::class)
            
    isImageValid(bufferedImage: BufferedImage): boolean

    isFrameAllowed(frame: number): boolean

}
                
            

