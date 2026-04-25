
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HelpPaintable extends Paintable {
        

    readonly title: string

    inputInfo: string[] = StringUtil.getInstance()!.getArrayInstance()!;
        
        

    basicColor: BasicColor
public constructor (title: string, backgroundBasicColor: BasicColor, basicColor: BasicColor){

            super();
            //var title = title
    //var backgroundBasicColor = backgroundBasicColor
    //var basicColor = basicColor
this.title= title;
    
this.basicColor= basicColor;
    
}


    public setInputInfoP(inputInfo: string[]){
    //var inputInfo = inputInfo
this.inputInfo= inputInfo;
    
}


    public getHeight(): number{

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myFont!.DEFAULT_CHAR_HEIGHT *(this.inputInfo!.length +2);
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var halfWidth: number = DisplayInfoSingleton.getInstance()!.getLastHalfWidth()!;
        
        
;
    

    var beginWidth: number = (graphics.getFont()!.stringWidth(this.title)>>1);
        
        
;
    
graphics.setColor(this.basicColor!.toInt());
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
graphics.drawString(this.title, halfWidth -beginWidth, charHeight, anchor);
    

    var size: number = this.inputInfo!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
beginWidth= (graphics.getFont()!.stringWidth(this.inputInfo[index]!)>>1);
    
graphics.drawString(this.inputInfo[index]!, halfWidth -beginWidth, (index +3) *charHeight, anchor);
    
}

}


}
                
            

