
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      
















                                        
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
                
            

