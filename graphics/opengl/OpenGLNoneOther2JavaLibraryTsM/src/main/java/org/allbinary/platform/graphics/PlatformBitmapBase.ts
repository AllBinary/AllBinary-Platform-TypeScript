
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
        
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;

      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PlatformBitmapBase
            extends Object
         {
        

    public static readonly NULL_PLATFORM_BITMAP_BASE: PlatformBitmapBase = new PlatformBitmapBase();

    public alpha: number = 255;

    public basicColor: BasicColor = BasicColorFactory.getInstance()!.NULL_COLOR;

    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public getImage(): Image{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullImage.NULL_IMAGE;
    
}


}



