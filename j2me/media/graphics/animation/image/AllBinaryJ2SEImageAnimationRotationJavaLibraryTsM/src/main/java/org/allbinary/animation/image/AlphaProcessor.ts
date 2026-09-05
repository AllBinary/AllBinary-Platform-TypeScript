
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

        


//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
//not plain js import { ImageModifierUtil } 
const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifierBaseProcessor } from './ModifierBaseProcessor.js';
//not GWT import - same folder const ModifierBaseProcessor = globalThis.org.allbinary.animation.image.ModifierBaseProcessor;

                
export class AlphaProcessor extends ModifierBaseProcessor {
        

    private static readonly instanceC: AlphaProcessor = new AlphaProcessor();

    public static getInstance(): AlphaProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AlphaProcessor.instanceC;
    
}


    public updateAlpha(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, index: number, alpha: number){
imageModifierUtil!.setAlpha(originalImage, imageToShow, index, alpha);
    
}


}



