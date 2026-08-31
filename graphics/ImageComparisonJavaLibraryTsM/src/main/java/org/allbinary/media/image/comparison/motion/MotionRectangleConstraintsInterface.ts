
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
        
import { awt } from '../../../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Dimension } from './Dimension.js';
//not GWT import const  = globalThis.org.allbinary.media.image.comparison.motion.Dimension;

                import { Rectangle } from './Rectangle.js';
//not GWT import const  = globalThis.org.allbinary.media.image.comparison.motion.Rectangle;

                
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



