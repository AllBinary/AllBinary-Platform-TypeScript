
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      const Image = globalThis.javax.microedition.lcdui.Image;

      
//not game specific package import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { PlaynMutableImage } from '../../../../org/microemu/device/playn/PlaynMutableImage.js';
      const PlaynMutableImage = globalThis.org.microemu.device.playn.PlaynMutableImage;

      
//not game specific package import { CanvasImage } from '../../../../playn/core/CanvasImage.js';
      const CanvasImage = globalThis.playn.core.CanvasImage;

      
//not game specific package import { CanvasSurface } from '../../../../playn/core/CanvasSurface.js';
      const CanvasSurface = globalThis.playn.core.CanvasSurface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageModifierUtil
            extends Object
         {
        

    private static readonly instance: ImageModifierUtil = new ImageModifierUtil();

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageModifierUtil.instance;
    
}


    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
}


    public setAlpha(originalImage: Image, image: Image, imageIndex: number, alphaInt: number){
}


    public getImageArray(originalImageArray: Image[]): Image[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return originalImageArray;
    
}


    public handleImage(imageArray: Image[], index: number, image: Image){
}


    public reset(){
}


}
                
            

