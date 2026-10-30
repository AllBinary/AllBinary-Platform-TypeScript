
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
//not GWT import const Font

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil

import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil

import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor

import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

















                                        
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

    let openGLFeatureUtil: OpenGLFeatureUtil = OpenGLFeatureUtil.getInstance()!;;
    

    let font: Font = graphics.getFont()!;;
    
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
                            this.offsetY= 2 +(globalThis.Math.trunc(this.charHeight *2 /3));
    

                        }
                            

                                    }
                                

    let size: number = string.length!;;
    

    let aChar: string;;
    

    let offsetXArray: number[] = new Array(size);;
    




                        for (
    let index: number = size -1;index >= 0; index--)
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

    let size: number = string.length!;;
    

    let aChar: string;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
aChar= string[index];
    
graphics.drawChar(aChar, x +this.offsetXArray[index], y +(this.charHeight *index) +this.offsetY, anchor);
    
}

}


    public drawCenterString(graphics: Graphics, string: string, offset: number, length: number, x: number, y: number){

    let width: number = (graphics.getFont()!.substringWidth(string, offset, length)>>1);;
    

 try { graphics.drawSubstring(string, offset, length, x -width, y, this.anchor);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.put(new StringMaker().append("Exception: stringLength: ")!.appendint(string.length)!.append(" offset: ")!.appendint(offset)!.append(" currentLength: ")!.appendint(length)!.toString(), this, "drawCenterString");
    

 }
   }
 
}


    public drawCenterStrings(graphics: Graphics, stringArray: string[], maxWidth: number, x: number, y: number){

    let extraLines: number = 0;;
    




                        for (
    let index: number = 0;index < stringArray!.length; index++)
        {

    let string: string = stringArray[index]!;;
    

                        if(string != this.EMPTY_STRING)
                        
                                    {
                                    
    let width: number = graphics.getFont()!.stringWidth(string)!;;
    

    let minTotalLines: number = 1;;
    

                        if(width > maxWidth)
                        
                                    {
                                    minTotalLines= (globalThis.Math.trunc(width /maxWidth)) +1;
    

                                    }
                                

    let linePortion: number = string.length /minTotalLines;;
    

    let offset: number = 0;;
    

    let currentLength: number = linePortion;;
    

    let size: number = string.length!;;
    

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

