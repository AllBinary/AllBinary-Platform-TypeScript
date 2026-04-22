
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

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { ImageModifierUtil } from "../../../../org/allbinary/media/image/ImageModifierUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ModifierBaseProcessor
            extends Object
         {
        

    private static readonly instance: ModifierBaseProcessor = new ModifierBaseProcessor();
        
        

    public static getInstance(): ModifierBaseProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public update(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, index: number, basicColor: BasicColor){
    //var imageModifierUtil = imageModifierUtil
    //var originalImage = originalImage
    //var imageToShow = imageToShow
    //var index = index
    //var basicColor = basicColor
}


    public update(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, index: number, alpha: number){
    //var imageModifierUtil = imageModifierUtil
    //var originalImage = originalImage
    //var imageToShow = imageToShow
    //var index = index
    //var alpha = alpha
}


}
                
            

