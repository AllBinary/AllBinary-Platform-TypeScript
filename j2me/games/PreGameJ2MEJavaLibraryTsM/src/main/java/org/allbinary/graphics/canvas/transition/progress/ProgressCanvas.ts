
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
        



import { CommandListener } from "../../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../../javax/microedition/lcdui/Graphics.js";

    
import { NullCanvas } from "../../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { Processor } from "../../../../../../org/allbinary/canvas/Processor.js";

    
import { RunnableCanvas } from "../../../../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { GameCommandsFactory } from "../../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { CustomGaugeItem } from "../../../../../../org/allbinary/graphics/form/item/CustomGaugeItem.js";

    
import { NullPaintable } from "../../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { PaintableInterface } from "../../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { PreLogUtil } from "../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryMidlet } from "../../../../../../org/allbinary/midlet/AllBinaryMidlet.js";

    
import { PathFindingThreadPool } from "../../../../../../org/allbinary/thread/PathFindingThreadPool.js";

    
import { ThreadPool } from "../../../../../../org/allbinary/thread/ThreadPool.js";

    

export class ProgressCanvas extends RunnableCanvas
                , PaintableInterface {
        

    hasPainted: boolean= false

    private readonly backgroundBasicColor: BasicColor

    public readonly GAUGE_PAINTABLE: Paintable = new object: Paintable()
                                {
                                
    public paint(graphics: Graphics){
var graphics = graphics
paint2(graphics);
    
}

                                }
                            ;
        
        

    allbinaryMidlet: AllBinaryMidlet = AllBinaryMidlet.NULL_ALLBINARY_MIDLET;
        
        

    private value: number= 0.0f

    private readonly maxValue: number = 100.0f;
        
        

    readonly gauge: CustomGaugeItem

    private readonly TEXT: string = commonStrings!.LOADING;
        
        

    private text: string = TEXT;
        
        

    private background: boolean = true;
        
        

    paintable: PaintableInterface = GAUGE_PAINTABLE;
        
        

    public inProgress: boolean = false;
        
        

    private readonly IN_GAME_PROCESSOR: Processor = new object: Processor()
                                {
                                
    var private readonly pathFindingThreadPool: ThreadPool = PathFindingThreadPool.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public process(){
pathFindingThreadPool!.runAPriorityTask();
    
}

                                }
                            ;
        
        

    public inGameProcessor: Processor = Processor.getInstance()!;
        
        
 constructor (){

            super();
            this.paintable= NullPaintable.getInstance();
    
this.backgroundBasicColor= BasicColorFactory.getInstance()!.WHITE;
    
this.gauge= CustomGaugeItem.NULL_GAUGE_ITEM;
    
}

 constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
                //var title = title
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor
this.backgroundBasicColor= backgroundBasicColor;
    
this.gauge= CustomGaugeItem(StringUtil.getInstance()!.EMPTY_STRING, maxValue.toInt(), 0, backgroundBasicColor, foregroundBasicColor);
    
}


    public init(gameMidlet: AllBinaryMidlet){
var gameMidlet = gameMidlet
this.allbinaryMidlet= gameMidlet;
    
}


                //@Throws(Error::class)
            
    public update(graphics: Graphics){
var graphics = graphics
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
}


    getMaxValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxValue;
    
}


    public start(){
logUtil!.put(commonStrings!.START, this, commonStrings!.START_METHOD_NAME);
    
this.setBackground(true);
    
this.gauge.setHeight(30);
    
this.gauge.setLabel(commonStrings!.PLEASE_WAIT);
    
this.setText(TEXT);
    
this.setValue(0);
    
this.inGameProcessor= Processor.getInstance();
    
this.paintable= GAUGE_PAINTABLE;
    
this.inProgress= true;
    
}


    private readonly backgroundLabel: string = "Background AI Game Loading...";
        
        

    private readonly START_BACKGROUND: string = "startBackground";
        
        

    public startBackground(background: boolean){
var background = background
logUtil!.put(commonStrings!.START, this, START_BACKGROUND);
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    
this.setBackground(background);
    
this.gauge.setHeight(myFont!.DEFAULT_CHAR_HEIGHT +2);
    
this.gauge.setLabel(backgroundLabel);
    
this.setText(TEXT);
    
this.setValue(0);
    
this.inGameProcessor= Processor.getInstance();
    
this.paintable= GAUGE_PAINTABLE;
    
}


    public endActual(){
this.allbinaryMidlet!.commandAction(GameCommandsFactory.getInstance()!.SHOW_GAME_CANVAS, NullCanvas.NULL_CANVAS);
    
this.inProgress= false;
    
this.inGame();
    
}


    public inGame(){
this.inGameProcessor= IN_GAME_PROCESSOR;
    
}


    public end(){
logUtil!.put(commonStrings!.START, this, commonStrings!.END_METHOD_NAME);
    
this.gauge.setValue(this.getMaxValue());
    
this.endActual();
    
this.paintable= NullPaintable.getInstance();
    
}


    public endFromInitialLazyLoadingComplete(){
this.gauge.setValue(this.getMaxValue());
    
this.inGameProcessor= IN_GAME_PROCESSOR;
    
}


    public endIfPaintedSinceStart(){
}


    readonly ADD_PORTION: string = "addPortion";
        
        

    readonly ADD_EARLY_PORTION: string = "addEarlyPortion";
        
        

    public addEarlyPortion(value: number, text: string, index: number){
var value = value
var text = text
var index = index
this.setText(StringMaker().
                            append(text)!.append(SmallIntegerSingletonFactory.getInstance()!.getInstance(index)!.toString())!.toString());
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    public addPortion(value: number, text: string, index: number){
var value = value
var text = text
var index = index
this.setText(StringMaker().
                            append(text)!.append(SmallIntegerSingletonFactory.getInstance()!.getInstance(index)!.toString())!.toString());
    
PreLogUtil.put(this.text, this, ADD_PORTION);
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    public addPortion(value: number, text: string){
var value = value
var text = text

                        if(this.text != text)
                        
                                    {
                                    PreLogUtil.put(text, this, ADD_PORTION);
    

                                    }
                                
this.setText(text);
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    setValue(value: number){
var value = value
this.value= value.toFloat();
    
this.gauge.setValue(value.toFloat());
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.paintable.paint(graphics);
    
}


    public paint2(graphics: Graphics){
var graphics = graphics

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    
graphics.setColor(backgroundBasicColor!.toInt());
    
graphics.fillRect(0, 0, displayInfoSingleton!.getLastWidth(), displayInfoSingleton!.getLastHeight());
    
gauge.paint(graphics, 0, 0);
    
hasPainted= true;
    
}


    public paintThreed(graphics: Graphics){
var graphics = graphics
}


    getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public setText(text: string){
var text = text
this.text= text;
    
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return text;
    
}


    setBackground(background: boolean){
var background = background
this.background= background;
    
}


    isBackground(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return background;
    
}


}
                
            

