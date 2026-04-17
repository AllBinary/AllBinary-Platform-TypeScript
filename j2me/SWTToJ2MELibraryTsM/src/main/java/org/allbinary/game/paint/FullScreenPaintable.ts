
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FullScreenPaintable extends Paintable {
        

    public static getInstance(): FullScreenPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new FullScreenPaintable();
    
}


    private readonly FULLSCREEN_TEXT: string = "F11 - Toggle Fullscreen";
        
        
private constructor (){

            super();
            }


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var halfWidth: number = displayInfo!.getLastHalfWidth()!;
        
        
;
    

    var height: number = displayInfo!.getLastHeight()!;
        
        
;
    

    var font: Font = graphics.getFont()!;
        
        
;
    

    var beginWidth: number = (font.stringWidth(this.FULLSCREEN_TEXT) shr 1);
        
        
;
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var Y: number = 4 *myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
graphics.drawString(this.FULLSCREEN_TEXT, halfWidth -beginWidth, height -Y, anchor);
    
}


}
                
            

