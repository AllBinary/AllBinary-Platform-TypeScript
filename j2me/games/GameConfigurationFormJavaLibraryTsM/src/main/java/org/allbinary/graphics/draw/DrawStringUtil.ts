
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      //not GWT import const Font = globalThis.javax.microedition.lcdui.Font;

      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
      //not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;

      
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      //not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DrawStringUtil
            extends Object
         {
        

    private static readonly instance: DrawStringUtil = new DrawStringUtil();

    public static getInstance(): DrawStringUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DrawStringUtil.instance;
    
}


    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private anchor: number = Anchor.TOP_LEFT;

    public drawCenterString(graphics: Graphics, string: string, offset: number, length: number, x: number, y: number){

    var width: number = (graphics.getFont()!.substringWidth(string, offset, length)>>1);;
    

        try {
            graphics.drawSubstring(string, offset, length, x -width, y, this.anchor);
    

                //: 
} catch(e) 
            {
PreLogUtil.put(new StringMaker().append("Exception: stringLength: ")!.appendint(string.length)!.append(" offset: ")!.appendint(offset)!.append(" currentLength: ")!.appendint(length)!.toString(), this, "drawCenterString");
    
}

}


    public drawCenterStrings(graphics: Graphics, stringArray: string[], maxWidth: number, charHeight: number, x: number, y: number){

    var extraLines: number = 0;;
    




                        for (
    var index: number = 0;index < stringArray!.length; index++)
        {

    var string: string = stringArray[index]!;;
    

                        if(string != this.EMPTY_STRING)
                        
                                    {
                                    
    var width: number = graphics.getFont()!.stringWidth(string)!;;
    

    var minTotalLines: number = 1;;
    

                        if(width > maxWidth)
                        
                                    {
                                    minTotalLines= (width /maxWidth) +1;
    

                                    }
                                

    var linePortion: number = string.length /minTotalLines;;
    

    var offset: number = 0;;
    

    var currentLength: number = linePortion;;
    

    var size: number = string.length!;;
    

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



