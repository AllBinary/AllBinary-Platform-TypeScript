
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageRotationUtil
            extends Object
         {
        

    private static readonly instance: ImageRotationUtil = new ImageRotationUtil();
        
        

    public static getInstance(): ImageRotationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    private anchor: number = Anchor.TOP_LEFT;
        
        

                //@Throws(Error::class)
            
    public createRotatedImage(originalImage: Image, rotationInDegrees: number): Image{
    //var originalImage = originalImage
    //var rotationInDegrees = rotationInDegrees



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImage;
    
}


}
                
            

