
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

    
import { AndroidUtil } from "../../../../org/allbinary/AndroidUtil.js";

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { Anchor } from "../../../../org/allbinary/graphics/Anchor.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { OpenGLFeatureUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

import {  } from "./.js";

export class DrawStringUtil
            extends Object
         {
        

    private static readonly instance: DrawStringUtil = new DrawStringUtil();
        
        

    public static getInstance(): DrawStringUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public paintVerticle(graphics: Graphics, string: string, x: number, y: number, anchor: number){
    //var graphics = graphics
    //var string = string
    //var x = x
    //var y = y
    //var anchor = anchor

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var openGLFeatureUtil: OpenGLFeatureUtil = OpenGLFeatureUtil.getInstance()!;
        
        
;
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var offsetY: number = 0;
        
        
;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    charHeight += 1;
    

                                    }
                                
                             else 
                        if(openGLFeatureUtil!.isAnyThreed())
                        
                                    {
                                    charHeight += 2;
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
                                    }
                                
                        else {
                            offsetY= 2 +(charHeight *2 /3);
    

                        }
                            

                                    }
                                

    var size: number = string.length!;
        
        
;
    

    var offsetX: number = 0;
        
        
;
    

    var aChar: string
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
aChar= string[index];
    

                        if(openGLFeatureUtil!.isAnyThreed())
                        
                                    {
                                    offsetX= myFont!.charWidth(aChar) /2;
    

                                    }
                                
graphics.drawChar(aChar, x +offsetX, y +(charHeight *index) +offsetY, anchor);
    
}

}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public drawCenterString(graphics: Graphics, string: string, offset: number, length: number, x: number, y: number){
    //var graphics = graphics
    //var string = string
    //var offset = offset
var length = length
var x = x
var y = y

    var width: number = (graphics.getFont()!.substringWidth(string, offset, length) shr 1);
        
        
;
    

        try {
            graphics.drawSubstring(string, offset, length, x -width, y, anchor);
    

                //: 
} catch(e) 
            {
PreLogUtil.put(new StringMaker().
                            append("Exception: stringLength: ")!.appendint(string.length)!.append(" offset: ")!.appendint(offset)!.append(" currentLength: ")!.appendint(length)!.toString(), this, "drawCenterString");
    
}

}


    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public drawCenterStrings(graphics: Graphics, stringArray: string[], maxWidth: number, x: number, y: number){
    //var graphics = graphics
    //var stringArray = stringArray
    //var maxWidth = maxWidth
    //var x = x
    //var y = y

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var extraLines: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < stringArray!.length; index++)
        {

    var string: string = stringArray[index]!;
        
        
;
    

                        if(string != EMPTY_STRING)
                        
                                    {
                                    
    var width: number = graphics.getFont()!.stringWidth(string)!;
        
        
;
    

    var minTotalLines: number = 1;
        
        
;
    

                        if(width > maxWidth)
                        
                                    {
                                    minTotalLines= (width /maxWidth) +1;
    

                                    }
                                

    var linePortion: number = string.length /minTotalLines;
        
        
;
    

    var offset: number = 0;
        
        
;
    

    var currentLength: number = linePortion;
        
        
;
    

    var size: number = string.length!;
        
        
;
    

        while(offset < size)
        {

                        if(offset +currentLength > size)
                        
                                    {
                                    currentLength= size -offset;
    

                                    }
                                

                        if(offset +currentLength != size)
                        
                                    {
                                    
        while(currentLength > 0 && stringArray[index]![offset +currentLength] != ' ')
        {
currentLength--;
    
}


                        if(currentLength <= 4)
                        
                                    {
                                    currentLength= linePortion;
    

                                    }
                                

                                    }
                                
this.drawCenterString(graphics, string, offset, currentLength, x, y +((index +extraLines++) *charHeight));
    
offset= offset +currentLength;
    
currentLength= linePortion;
    
}

extraLines--;
    

                                    }
                                
}

}


}
                
            

