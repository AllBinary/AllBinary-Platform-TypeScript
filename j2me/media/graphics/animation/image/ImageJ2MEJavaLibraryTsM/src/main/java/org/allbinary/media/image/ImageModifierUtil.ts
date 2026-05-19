
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


        
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      

















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
                
            

