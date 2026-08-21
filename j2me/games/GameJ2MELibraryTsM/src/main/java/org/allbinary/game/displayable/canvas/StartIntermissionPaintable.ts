
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
        



import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { FontDebugFactory } from '../../../../../org/allbinary/graphics/font/FontDebugFactory.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
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
                
            

