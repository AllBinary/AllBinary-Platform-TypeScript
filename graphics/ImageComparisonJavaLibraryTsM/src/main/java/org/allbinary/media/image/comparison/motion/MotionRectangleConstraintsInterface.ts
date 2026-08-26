
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
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Dimension } from './Dimension.js';
import { Rectangle } from './Rectangle.js';

export interface MotionRectangleConstraintsInterface {
        

    getMaxMotionRectangles(): number

    getMinDimension(): Dimension

    getMinArea(): number

    getMaxDimension(): Dimension

    isTooSmall(rectangle: Rectangle): boolean

    isAreaTooSmall(rectangle: Rectangle): boolean

    isTooBig(rectangle: Rectangle): boolean

                //@Throws(Exception.constructor)
            
    isValid(frame: Long, bufferedImage: BufferedImage, rectangle: Rectangle): boolean

}
                
            

