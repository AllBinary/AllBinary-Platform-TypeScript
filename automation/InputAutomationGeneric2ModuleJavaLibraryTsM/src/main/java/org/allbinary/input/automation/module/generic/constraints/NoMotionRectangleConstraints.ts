
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

        


            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
import { awt } from '../../../../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { BufferedImage } from '../../../../../../../java/awt/image/BufferedImage.js';
      //not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
import { MotionRectangleConstraints } from '../../../../../../../org/allbinary/input/automation/module/MotionRectangleConstraints.js';
      //not GWT import const MotionRectangleConstraints = globalThis.org.allbinary.input.automation.module.MotionRectangleConstraints;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Dimension } from './Dimension.js';
//not GWT import const Dimension = globalThis.org.allbinary.input.automation.module.generic.constraints.Dimension;

                import { Rectangle } from './Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.input.automation.module.generic.constraints.Rectangle;

                
export class NoMotionRectangleConstraints extends MotionRectangleConstraints {
        

public constructor (){

            super();
        this.setMinDimension(new Dimension(0, 0));
    
this.setMinArea(0);
    
this.setMaxDimension(new Dimension(Integer.MAX_VALUE, Integer.MAX_VALUE));
    
this.setMaxMotionRectangles(.MAX_VALUE());
    
}


    public isValid(frame: Long, bufferedImage: BufferedImage, rectangle: Rectangle): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}



