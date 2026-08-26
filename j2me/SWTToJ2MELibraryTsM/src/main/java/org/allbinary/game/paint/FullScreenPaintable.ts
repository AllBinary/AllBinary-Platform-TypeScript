
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //SwtToJ2ME
export class FullScreenPaintable extends Paintable implements UpdateMyFontInterface {
        

    public static getInstance(): FullScreenPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new FullScreenPaintable();
    
}


    private readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private readonly FULLSCREEN_TEXT: string = "F11 - Toggle Fullscreen";

    private anchor: number = Anchor.TOP_LEFT;

    private Y: number= 0;

    private beginWidth: number= 0;

private constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.Y= 4 *font.getHeight();
    
this.beginWidth= (font.stringWidth(this.FULLSCREEN_TEXT)>>1);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    

    var height: number = this.displayInfo!.getLastHeight()!;;
    
graphics.drawString(this.FULLSCREEN_TEXT, halfWidth -this.beginWidth, height -this.Y, this.anchor);
    
}


}
                
            

