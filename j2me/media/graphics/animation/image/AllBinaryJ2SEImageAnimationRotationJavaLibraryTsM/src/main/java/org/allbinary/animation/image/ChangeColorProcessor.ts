
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

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
      const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ModifierBaseProcessor } from './ModifierBaseProcessor.js';

export class ChangeColorProcessor extends ModifierBaseProcessor {
        

    private static readonly instanceC: ChangeColorProcessor = new ChangeColorProcessor();

    public static getInstance(): ChangeColorProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ChangeColorProcessor.instanceC;
    
}


    public updateColor(imageModifierUtil: ImageModifierUtil, originalImage: Image, imageToShow: Image, index: number, basicColor: BasicColor){
imageModifierUtil!.changeColor(originalImage, imageToShow, index, basicColor);
    
}


}



