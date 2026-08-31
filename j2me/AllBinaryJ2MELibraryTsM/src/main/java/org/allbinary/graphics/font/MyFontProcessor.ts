
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyFontProcessor
            extends Object
         {
        

    public static defaultCharWidth(font: Font): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return font.charWidth('C');;
    
}


    public static defaultStringWidth(font: Font, size: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MyFontProcessor.defaultCharWidth(font) *size;
    
}


    private static readonly instance: MyFontProcessor = new MyFontProcessor();

    public static getInstance(): MyFontProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public process(graphics: Graphics){
}


}



