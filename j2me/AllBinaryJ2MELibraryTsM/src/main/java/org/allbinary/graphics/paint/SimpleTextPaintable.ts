
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Paintable } from "./Paintable.js";

export class SimpleTextPaintable extends Paintable {
        

    private text: string

    private basicColor: BasicColor
public constructor (text: string, basicColor: BasicColor){

            super();
                //var text = text
    //var basicColor = basicColor
this.text= text;
    
this.basicColor= basicColor;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    private readonly displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var width: number = this.displayInfoSingleton!.getLast()[this.displayInfoSingleton!.WIDTH]!;
        
        
;
    

    var topScoresWidth: number = (graphics.getFont()!.stringWidth(this.text) shr 1);
        
        
;
    
graphics.setColor(this.getBasicColorP()!.toInt());
    
graphics.drawString(this.text, (width shr 1) -topScoresWidth, myFont!.DEFAULT_CHAR_HEIGHT *3, anchor);
    
}


    public setBasicColorP(basicColor: BasicColor){
    //var basicColor = basicColor
this.basicColor= basicColor;
    
}


    getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


    public setText(text: string){
    //var text = text
this.text= text;
    
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return text;
    
}


}
                
            

