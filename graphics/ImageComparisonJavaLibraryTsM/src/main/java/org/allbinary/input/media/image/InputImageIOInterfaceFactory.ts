
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CapturedImageInputOutput } from '../../../../../org/allbinary/input/media/image/capture/CapturedImageInputOutput.js';
      //not GWT import const CapturedImageInputOutput = globalThis.org.allbinary.input.media.image.capture.CapturedImageInputOutput;

      
import { ComparisonImageInputOutput } from '../../../../../org/allbinary/media/image/comparison/ComparisonImageInputOutput.js';
      //not GWT import const ComparisonImageInputOutput = globalThis.org.allbinary.media.image.comparison.ComparisonImageInputOutput;

      
import { MotionRectanglesImageInputOutput } from '../../../../../org/allbinary/media/image/comparison/motion/MotionRectanglesImageInputOutput.js';
      //not GWT import const MotionRectanglesImageInputOutput = globalThis.org.allbinary.media.image.comparison.motion.MotionRectanglesImageInputOutput;

      
import { ImageIOInterface } from '../../../../../org/allbinary/media/image/io/ImageIOInterface.js';
      //not GWT import const ImageIOInterface = globalThis.org.allbinary.media.image.io.ImageIOInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputImageType } from './InputImageType.js';
//not GWT import const InputImageType = globalThis.org.allbinary.input.media.image.InputImageType;

                
export class InputImageIOInterfaceFactory
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(imageType: InputImageType): ImageIOInterface{

                        if(imageType == InputImageType.CAPTURE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CapturedImageInputOutput();
    

                                    }
                                
                             else 
                        if(imageType == InputImageType.COMPARISON)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ComparisonImageInputOutput();
    

                                    }
                                
                             else 
                        if(imageType == InputImageType.MOTION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new MotionRectanglesImageInputOutput();
    

                                    }
                                
                        else {
                            


                            throw new Exception("No ImageIOInterface for: " +imageType!.toString());
                    

                        }
                            
}


private constructor (){

            super();
        }


}



