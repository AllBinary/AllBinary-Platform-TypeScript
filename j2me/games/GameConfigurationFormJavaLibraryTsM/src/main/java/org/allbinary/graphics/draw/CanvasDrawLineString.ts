
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

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DrawStringUtil } from "./DrawStringUtil.js";

export class CanvasDrawLineString
            extends Object
         {
        

    public static readonly NULL_CANVAS_DRAW_LINE_STRING: CanvasDrawLineString = new CanvasDrawLineString(0, 0);
        
        

    private x: number

    private y: number
public constructor (x: number, y: number){

            super();
        var x = x
var y = y
this.x= x;
    
this.y= y;
    
}


    private readonly drawStringUtil: DrawStringUtil = DrawStringUtil.getInstance()!;
        
        

    public paint(graphics: Graphics, string: string, line: number){
var graphics = graphics
var string = string
var line = line

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
drawStringUtil!.drawCenterString(graphics, string, 0, string.length, x, y +(line *myFont!.DEFAULT_CHAR_HEIGHT));
    
}


}
                
            

