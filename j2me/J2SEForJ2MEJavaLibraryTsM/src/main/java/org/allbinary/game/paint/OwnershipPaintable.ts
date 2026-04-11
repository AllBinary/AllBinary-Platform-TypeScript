
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

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class OwnershipPaintable extends Paintable {
        

    public static getInstance(): OwnershipPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OwnershipPaintable();
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly COPYRIGHT: string = "AllBinary Copyright (c) 2011";
        
        

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.WHITE;
        
        

    private color: number = basicColor!.toInt()!;
        
        
private constructor (){

            super();
            }


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics
graphics.setColor(color);
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var halfWidth: number = displayInfo!.getLastHalfWidth()!;
        
        
;
    

    var height: number = displayInfo!.getLastHeight()!;
        
        
;
    

    var font: Font = graphics.getFont()!;
        
        
;
    

    var beginWidth: number = (font.stringWidth(COPYRIGHT) shr 1);
        
        
;
    

    var COPYRIGHT_Y: number = 2 *myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
graphics.drawString(COPYRIGHT, halfWidth -beginWidth, height -COPYRIGHT_Y, anchor);
    
}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
color= basicColor!.toInt();
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

