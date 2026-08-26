
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
        



//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AlphaBaseProcessor } from './AlphaBaseProcessor.js';

export class AlphaProcessor extends AlphaBaseProcessor {
        

    private static readonly instanceC: AlphaProcessor = new AlphaProcessor();

    public static getInstance(): AlphaProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AlphaProcessor.instanceC;
    
}


    public setAlpha(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, alpha: number){
imageModifierUtil!.setAlpha3(imageToShow, alpha);
    
}


}
                
            

