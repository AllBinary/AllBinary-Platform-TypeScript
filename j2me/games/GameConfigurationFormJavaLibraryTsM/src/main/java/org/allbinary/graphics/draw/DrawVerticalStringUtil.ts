
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
      
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
      
import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DrawVerticalStringUtil
            extends Object
         {
        

    private static readonly instance: DrawVerticalStringUtil = new DrawVerticalStringUtil();

    public static getInstance(): DrawVerticalStringUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DrawVerticalStringUtil.instance;
    
}


    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private anchor: number = Anchor.TOP_LEFT;

    private charHeight: number= 0;

    private offsetY: number= 0;

    private offsetXArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    public updateMeasurement(graphics: Graphics, string: string){

    var openGLFeatureUtil: OpenGLFeatureUtil = OpenGLFeatureUtil.getInstance()!;;
    

    var font: Font = graphics.getFont()!;;
    
this.charHeight= font.getHeight();
    
this.offsetY= 0;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    this.charHeight += 1;
    

                                    }
                                
                             else 
                        if(openGLFeatureUtil!.isAnyThreed())
                        
                                    {
                                    this.charHeight += 2;
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.offsetY= 2 +(this.charHeight *2 /3);
    

                        }
                            

                                    }
                                

    var size: number = string.length!;;
    

    var aChar: string;;
    

    var offsetXArray: number[] = new Array(size);;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
aChar= string[index];
    

                        if(openGLFeatureUtil!.isAnyThreed())
                        
                                    {
                                    offsetXArray[index]= font.charWidth(aChar) /2;
    

                                    }
                                
}

this.offsetXArray= offsetXArray;
    
}


    public paintVerticle(graphics: Graphics, string: string, x: number, y: number, anchor: number){

    var size: number = string.length!;;
    

    var aChar: string;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
aChar= string[index];
    
graphics.drawChar(aChar, x +this.offsetXArray[index], y +(this.charHeight *index) +this.offsetY, anchor);
    
}

}


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


    public drawCenterStrings(graphics: Graphics, stringArray: string[], maxWidth: number, x: number, y: number){

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
                                
this.drawCenterString(graphics, string, offset, currentLength, x, y +((index +extraLines++) *this.charHeight));
    
offset= offset +currentLength;
    
currentLength= linePortion;
    
}

extraLines--;
    

                                    }
                                
}

}


}
                
            

