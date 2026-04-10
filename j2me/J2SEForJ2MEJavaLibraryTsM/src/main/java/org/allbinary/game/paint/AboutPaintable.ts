
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

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    

export class AboutPaintable extends Paintable {
        

    public static getInstance(info: string[], developers: string[]): AboutPaintable{
var info = info
var developers = developers



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AboutPaintable(info, developers);
    
}


    private readonly ABOUT: string = CanvasStrings.getInstance()!.ABOUT;
        
        

    private readonly info: string[]

    private readonly developers: string[]

    private readonly paintableArray: Paintable[] = 
                                                        [
                                                            this
                                                        ];
        
        
private constructor (info: string[], developers: string[]){

            super();
            var info = info
var developers = developers
this.info= info
this.developers= developers
}


    public getPaintableArrayInstance(): Paintable[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paintableArray;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        


    var halfWidth: number = DisplayInfoSingleton.getInstance()!.getLastHalfWidth()!;
        
        


    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        


    var font: Font = graphics.getFont()!;
        
        


    var beginWidth: number = (font.stringWidth(this.ABOUT) shr 1);
        
        

graphics.drawString(this.ABOUT, halfWidth -beginWidth, 2 *charHeight, anchor)

    var infoSize: number = this.info.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < infoSize; index++)
        {
beginWidth= (font.stringWidth(this.info[index]!) shr 1)
graphics.drawString(this.info[index]!, halfWidth -beginWidth, (4 +index) *charHeight, anchor)
}


    var size: number = this.developers.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
beginWidth= (font.stringWidth(this.developers[index]!) shr 1)
graphics.drawString(this.developers[index]!, halfWidth -beginWidth, (5 +infoSize +index) *charHeight, anchor)
}

}


}
                
            

