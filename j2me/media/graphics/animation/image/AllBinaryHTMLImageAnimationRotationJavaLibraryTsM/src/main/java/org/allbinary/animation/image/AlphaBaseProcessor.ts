
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AlphaBaseProcessor
            extends Object
         {
        

    private static readonly instance: AlphaBaseProcessor = new AlphaBaseProcessor();
        
        

    public static getInstance(): AlphaBaseProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public setAlpha(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, alpha: number){
    //var imageModifierUtil = imageModifierUtil
    //var originalImage = originalImage
    //var imageToShow = imageToShow
    //var alpha = alpha
}


}
                
            

