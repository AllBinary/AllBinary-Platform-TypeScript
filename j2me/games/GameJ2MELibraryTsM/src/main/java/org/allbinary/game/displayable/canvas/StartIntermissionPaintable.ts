
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { FontDebugFactory } from '../../../../../org/allbinary/graphics/font/FontDebugFactory.js';
      const FontDebugFactory = globalThis.org.allbinary.graphics.font.FontDebugFactory;

      
//not game specific package import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class StartIntermissionPaintable extends InitUpdatePaintable implements UpdateMyFontInterface {
        

    readonly fontDebugFactory: FontDebugFactory = FontDebugFactory.getInstance()!;

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    readonly gameCanvas: AllBinaryGameCanvas;

    readonly stringArray: string[];

    readonly fontSize: number;

    readonly font: Font;

    public readonly lastWidth: number[];

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;

    private color: number;

    lineYOffsetArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    private hasChanged: boolean = true;

    private anchor: number = Anchor.TOP_LEFT;

    fontHeightP: number= 0;

public constructor (gameCanvas: AllBinaryGameCanvas, stringArray: string[], basicColor: BasicColor, font: Font){

            super();
        this.gameCanvas= gameCanvas;
    
this.stringArray= stringArray;
    
this.lastWidth= new Array(this.stringArray!.length);
    
this.setBasicColorP(basicColor);
    
this.color= basicColor!.intValue();
    
this.fontSize= font.getSize();
    
this.font= font;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.fontHeightP= font.getHeight();
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var existingFont: Font = graphics.getFont()!;;
    
this.fontDebugFactory!.setFont(this.font, graphics);
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
this.basicSetColorUtil!.setBasicColorP3(graphics, this.basicColor, this.color);
    

    var beginWidth: number= 0;;
    




                        for (
    var index: number = this.lineYOffsetArray!.length -1;index >= 0; index--)
        {

                        if(this.hasChanged)
                        
                                    {
                                    this.lastWidth[index]= (graphics.getFont()!.stringWidth(this.stringArray[index]!)>>1);
    

                                    }
                                
beginWidth= this.lastWidth[index]!;
    
graphics.drawString(this.stringArray[index]!, displayInfo!.getLastHalfWidth() -beginWidth, displayInfo!.getLastHalfHeight() -this.lineYOffsetArray[index], this.anchor);
    
}

this.hasChanged= false;
    
this.fontDebugFactory!.setFont(existingFont, graphics);
    
}


    private readonly BEGIN_LEVEL: string = "Begin Level ";

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    public update(){

    var level: number = this.gameCanvas!.getLayerManager()!.getGameInfo()!.getCurrentLevel()!;;
    
this.stringArray[0]= new StringMaker().append(this.BEGIN_LEVEL)!.appendint(level)!.toString();
    




                        for (
    var index: number = this.stringArray!.length -1;index >= 1; index--)
        {
this.stringArray[index]= this.EMPTY_STRING;
    
}

}


    public setBasicColorP(basicColor: BasicColor){
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColor;
    
}


}



