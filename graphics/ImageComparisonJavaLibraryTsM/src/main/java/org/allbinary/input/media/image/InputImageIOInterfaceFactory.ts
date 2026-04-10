
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
        



import { CapturedImageInputOutput } from "../../../../../org/allbinary/input/media/image/capture/CapturedImageInputOutput.js";

    
import { ComparisonImageInputOutput } from "../../../../../org/allbinary/media/image/comparison/ComparisonImageInputOutput.js";

    
import { MotionRectanglesImageInputOutput } from "../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesImageInputOutput.js";

    
import { ImageIOInterface } from "../../../../../org/allbinary/media/image/io/ImageIOInterface.js";

    

export class InputImageIOInterfaceFactory
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static getInstance(imageType: InputImageType): ImageIOInterface{
var imageType = imageType

    
                        if(imageType == InputImageType.CAPTURE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CapturedImageInputOutput();
    

                                    }
                                
                             else 
    
                        if(imageType == InputImageType.COMPARISON)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ComparisonImageInputOutput();
    

                                    }
                                
                             else 
    
                        if(imageType == InputImageType.MOTION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MotionRectanglesImageInputOutput();
    

                                    }
                                
                        else {
                            


                            throw Exception("No ImageIOInterface for: " +imageType!.toString())

                        }
                            
}

private constructor (){

            super();
            }


}
                
            

