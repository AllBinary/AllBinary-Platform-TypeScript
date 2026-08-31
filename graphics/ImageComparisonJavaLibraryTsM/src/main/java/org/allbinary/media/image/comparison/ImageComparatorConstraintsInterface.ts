
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { awt } from '../../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Rectangle } from './Rectangle.js';
//not GWT import const  = globalThis.org.allbinary.media.image.comparison.Rectangle;

                import { Color } from './Color.js';
//not GWT import const  = globalThis.org.allbinary.media.image.comparison.Color;

                
export interface ImageComparatorConstraintsInterface {
        

    getMaxNonMatchingPixelDeltas(): number

    isCollisionWithAvoidRectangles(rectangle: Rectangle): boolean

    isCollisionWithAvoidRectangles(point: GPoint): boolean

    isColorAllowed(frame: number, point: GPoint, color: Color): boolean

                //@Throws(Exception.constructor)
            
    isImageValid(bufferedImage: BufferedImage): boolean

    isFrameAllowed(frame: number): boolean

}



