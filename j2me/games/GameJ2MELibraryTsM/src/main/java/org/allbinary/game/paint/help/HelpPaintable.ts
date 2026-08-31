
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
        



import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HelpPaintable extends Paintable implements UpdateMyFontInterface {
        

    readonly displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;

    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    anchor: number = Anchor.TOP_LEFT;

    readonly title: string;

    inputInfo: string[] = StringUtil.getInstance()!.getArrayInstance()!;

    basicColor: BasicColor;

    titleBeginWidth: number= 0;

    private beginWidthArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    private charHeight: number= 0;

public constructor (title: string, backgroundBasicColor: BasicColor, basicColor: BasicColor){

            super();
        this.title= title;
    
this.basicColor= basicColor;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.titleBeginWidth= (font.stringWidth(this.title)>>1);
    
this.charHeight= font.getHeight();
    

    var size: number = this.inputInfo!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.beginWidthArray[index]= (font.stringWidth(this.inputInfo[index]!)>>1);
    
}

this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public setInputInfoP(inputInfo: string[]){
this.inputInfo= inputInfo;
    
this.beginWidthArray= new Array(this.inputInfo!.length);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    
graphics.setColor(this.basicColor!.intValue());
    
graphics.drawString(this.title, halfWidth -this.titleBeginWidth, this.charHeight, this.anchor);
    

    var size: number = this.inputInfo!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
graphics.drawString(this.inputInfo[index]!, halfWidth -this.beginWidthArray[index], (index +3) *this.charHeight, this.anchor);
    
}

}


}



