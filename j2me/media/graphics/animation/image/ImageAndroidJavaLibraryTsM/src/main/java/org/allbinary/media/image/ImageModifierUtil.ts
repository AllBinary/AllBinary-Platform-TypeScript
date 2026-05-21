
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


        
import { Paint } from '../../../../android/graphics/Paint.js';
      
import { PorterDuff } from '../../../../android/graphics/PorterDuff.js';
      
import { PorterDuffColorFilter } from '../../../../android/graphics/PorterDuffColorFilter.js';
      
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ImageModifierUtil
            extends Object
         {
        

    public static getInstanceOrCreate(): ImageModifierUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ImageModifierUtil();
    
}


    public readonly paint: Paint = new Paint(Paint.ANTI_ALIAS_FLAG);

    public setColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
this.paint.setColorFilter(new PorterDuffColorFilter(basicColor!.intValue(), PorterDuff.Mode.SRC_IN));
    
}


    public changeColor(unusedOriginalImage: Image, image: Image, imageIndex: number, basicColor: BasicColor){
this.paint.setColorFilter(new PorterDuffColorFilter(basicColor!.intValue(), PorterDuff.Mode.SRC_IN));
    
}


    public setAlpha(originalImage: Image, image: Image, imageIndex: number, alphaInt: number){

                        if(alphaInt != this.paint.getAlpha())
                        
                                    {
                                    this.paint.setAlpha(alphaInt);
    

                                    }
                                
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
                
            

