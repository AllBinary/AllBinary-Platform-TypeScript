
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
        



import { awt } from "../../../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../../../java/awt/image/BufferedImage.js";

    
import { GPoint } from "../../../../../../../org/allbinary/graphics/GPoint.js";

    
import { ImageComparatorConstraints } from "../../../../../../../org/allbinary/input/automation/module/ImageComparatorConstraints.js";

    

export class NoImageComparatorConstraints extends ImageComparatorConstraints {
        
public constructor ()                        

                            : super(1){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setMaxNonMatchingPixelDeltas(.MAX_VALUE())
}


    public isColorAllowed(frame: number, point: GPoint, color: Color): boolean{
var frame = frame
var point = point
var color = color



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isImageValid(bufferedImage: BufferedImage): boolean{
var bufferedImage = bufferedImage



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

