
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
        



import { Font } from "../../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { FontDebugFactory } from "../../../../../org/allbinary/graphics/font/FontDebugFactory.js";

    
import { InitUpdatePaintable } from "../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryGameCanvas } from "./AllBinaryGameCanvas.js";

export class StartIntermissionPaintable extends InitUpdatePaintable {
        

    readonly fontDebugFactory: FontDebugFactory = FontDebugFactory.getInstance()!;
        
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    gameCanvas: AllBinaryGameCanvas

    readonly stringArray: string[]

    private basicColor: BasicColor = BasicColorFactory.getInstance()!.BLACK;
        
        

    private color: number

    private readonly lineArray: number[]

    readonly fontSize: number

    readonly font: Font

    private hasChanged: boolean = true;
        
        

    public readonly lastWidth: number[]
public constructor (gameCanvas: AllBinaryGameCanvas, stringArray: string[], lineArray: number[], basicColor: BasicColor){
            this(gameCanvas, stringArray, lineArray, basicColor, Font.getDefaultFont());
                        //var gameCanvas = gameCanvas
    //var stringArray = stringArray
    //var lineArray = lineArray
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (gameCanvas: AllBinaryGameCanvas, stringArray: string[], lineArray: number[], basicColor: BasicColor, font: Font){

            super();
            //var gameCanvas = gameCanvas
    //var stringArray = stringArray
    //var lineArray = lineArray
    //var basicColor = basicColor
    //var font = font
this.gameCanvas= gameCanvas;
    
this.stringArray= stringArray;
    
this.lastWidth= new Array(this.stringArray!.length);
    
this.setBasicColorP(basicColor);
    
this.color= basicColor!.toInt();
    
this.lineArray= lineArray;
    
this.fontSize= font.getSize();
    
this.font= font;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var existingFont: Font = graphics.getFont()!;
        
        
;
    
this.fontDebugFactory!.setFont(this.font, graphics);
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
basicSetColorUtil!.setBasicColorP3(graphics, this.basicColor, this.color);
    

    var beginWidth: number= 0
;
    




                        for (
    var index: number = this.stringArray!.length -1;
        
        
index >= 0; index--)
        {

                        if(this.hasChanged)
                        
                                    {
                                    this.lastWidth[index]= (graphics.getFont()!.stringWidth(this.stringArray[index]!)>>1);
    

                                    }
                                
beginWidth= this.lastWidth[index]!;
    
graphics.drawString(this.stringArray[index]!, displayInfo!.getLastHalfWidth() -beginWidth, displayInfo!.getLastHalfHeight() -lineArray[index], anchor);
    
}

this.hasChanged= false;
    
this.fontDebugFactory!.setFont(existingFont, graphics);
    
}


    private readonly BEGIN_LEVEL: string = "Begin Level ";
        
        

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public update(){

    var level: number = this.gameCanvas!.getLayerManager()!.getGameInfo()!.getCurrentLevel()!;
        
        
;
    
this.stringArray[0]= new StringMaker().
                            append(this.BEGIN_LEVEL)!.appendint(level)!.toString();
    




                        for (
    var index: number = this.stringArray!.length -1;
        
        
index >= 1; index--)
        {
this.stringArray[index]= this.EMPTY_STRING;
    
}

}


    public setBasicColorP(basicColor: BasicColor){
var basicColor = basicColor
this.basicColor= basicColor;
    
}


    public getBasicColorP(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

