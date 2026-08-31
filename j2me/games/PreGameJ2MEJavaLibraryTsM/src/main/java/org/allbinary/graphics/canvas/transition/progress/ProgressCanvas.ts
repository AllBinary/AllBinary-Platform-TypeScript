
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } from '../../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { NullCanvas } from '../../../../../../javax/microedition/lcdui/NullCanvas.js';
      //not GWT import const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
import { NullCommandListener } from '../../../../../../javax/microedition/lcdui/NullCommandListener.js';
      //not GWT import const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
      //not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
import { RunnableCanvas } from '../../../../../../org/allbinary/canvas/RunnableCanvas.js';
      //not GWT import const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
import { GameCommandsFactory } from '../../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      //not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { CanvasStrings } from '../../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      //not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { ABCustomGaugeItem } from '../../../../../../org/allbinary/graphics/form/item/ABCustomGaugeItem.js';
      //not GWT import const ABCustomGaugeItem = globalThis.org.allbinary.graphics.form.item.ABCustomGaugeItem;

      
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { PaintableInterface } from '../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not plain js import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AllBinaryMidlet } from '../../../../../../org/allbinary/midlet/AllBinaryMidlet.js';
      //not GWT import const AllBinaryMidlet = globalThis.org.allbinary.midlet.AllBinaryMidlet;

      
import { PathFindingThreadPool } from '../../../../../../org/allbinary/thread/PathFindingThreadPool.js';
      //not GWT import const PathFindingThreadPool = globalThis.org.allbinary.thread.PathFindingThreadPool;

      
import { ThreadPool } from '../../../../../../org/allbinary/thread/ThreadPool.js';
      //not GWT import const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //import { ProgressPaintable } from './ProgressPaintable.js';

export class ProgressCanvas extends RunnableCanvas implements PaintableInterface, UpdateMyFontInterface {
        

    hasPainted: boolean= false;

    private readonly backgroundBasicColor: BasicColor;

//inner= member=true isStatic=
ProgressPaintable = class extends Paintable {
        

    readonly progressCanvas: ProgressCanvas;

 constructor (progressCanvas: ProgressCanvas){

            super();
        this.progressCanvas= progressCanvas;
    
}


    public paint(graphics: Graphics){
this.progressCanvas!.paint2(graphics);
    
}


}


    public readonly GAUGE_PAINTABLE: Paintable = new this.ProgressPaintable(this);

    private readonly maxValue: number = 100.0;

    readonly gauge: ABCustomGaugeItem;

    private readonly TEXT: string = this.commonStrings!.LOADING;

    private readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    allbinaryMidlet: AllBinaryMidlet = AllBinaryMidlet.getNullInstance()!;

    private value: number= 0.0;

    private text: string = this.TEXT;

    private background: boolean = true;

    paintable: PaintableInterface = this.GAUGE_PAINTABLE;

    public inProgress: boolean = false;

    private readonly IN_GAME_PROCESSOR: Processor = new class extends Processor
                                {
                                
    private readonly pathFindingThreadPool: ThreadPool = PathFindingThreadPool.getInstance()!;
                //@Throws(Exception.constructor)
            
    public process(){
this.pathFindingThreadPool!.runAPriorityTask();
    
}

                                }
                            ;

    public inGameProcessor: Processor = Processor.getInstance()!;

 constructor (title: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(NullCommandListener.NULL_COMMAND_LISTENER, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST, false);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.backgroundBasicColor= backgroundBasicColor;
    
this.gauge= new ABCustomGaugeItem(StringUtil.getInstance()!.EMPTY_STRING, Math.round(this.maxValue), 0, backgroundBasicColor, foregroundBasicColor);
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.gauge.setHeight(font.getHeight() +2);
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public init(gameMidlet: AllBinaryMidlet){
this.allbinaryMidlet= gameMidlet;
    
}


                //@Throws(Exception.constructor)
            
    public update(graphics: Graphics){
}


    public initCommands(cmdListener: CommandListener){
}


    getMaxValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxValue;
    
}


    public start(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.START_METHOD_NAME);
    
this.setBackground(true);
    
this.gauge.setHeight(30);
    
this.gauge.setLabel(this.commonStrings!.PLEASE_WAIT);
    
this.setText(this.TEXT);
    
this.setValue(0);
    
this.inGameProcessor= Processor.getInstance();
    
this.paintable= this.GAUGE_PAINTABLE;
    
this.inProgress= true;
    
}


    private readonly backgroundLabel: string = "Background AI Game Loading...";

    private readonly START_BACKGROUND: string = "startBackground";

    public startBackground(background: boolean){
this.logUtil!.putF(this.commonStrings!.START, this, this.START_BACKGROUND);
    
this.setBackground(background);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
this.gauge.setLabel(this.backgroundLabel);
    
this.setText(this.TEXT);
    
this.setValue(0);
    
this.inGameProcessor= Processor.getInstance();
    
this.paintable= this.GAUGE_PAINTABLE;
    
}


    public endActual(){
this.allbinaryMidlet!.commandAction(GameCommandsFactory.getInstance()!.SHOW_GAME_CANVAS, NullCanvas.NULL_CANVAS);
    
this.inProgress= false;
    
this.inGame();
    
}


    public inGame(){
this.inGameProcessor= this.IN_GAME_PROCESSOR;
    
}


    public end(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.END_METHOD_NAME);
    
this.gauge.setValue(this.getMaxValue());
    
this.endActual();
    
this.paintable= NullPaintable.getInstance();
    
}


    public endFromInitialLazyLoadingComplete(){
this.gauge.setValue(this.getMaxValue());
    
this.inGameProcessor= this.IN_GAME_PROCESSOR;
    
}


    public endIfPaintedSinceStart(){
}


    readonly ADD_PORTION: string = "addPortion";

    readonly ADD_EARLY_PORTION: string = "addEarlyPortion";

    public addEarlyPortion(value: number, text: string, index: number){
this.setText(new StringMaker().append(text)!.append(SmallIntegerSingletonFactory.getInstance()!.getAt(index)!.toString())!.toString());
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    public addPortion(value: number, text: string, index: number){
this.setText(new StringMaker().append(text)!.append(SmallIntegerSingletonFactory.getInstance()!.getAt(index)!.toString())!.toString());
    
PreLogUtil.put(this.text, this, this.ADD_PORTION);
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    public addNormalPortion(value: number, text: string){

                        if(this.text != text)
                        
                                    {
                                    PreLogUtil.put(text, this, this.ADD_PORTION);
    

                                    }
                                
this.setText(text);
    
this.gauge.setValue(this.gauge.getValue() +this.getMaxValue() /value);
    
}


    setValue(value: number){
this.value= value;
    
this.gauge.setValue(value);
    
}


    public paint(graphics: Graphics){
this.paintable.paint(graphics);
    
}


    public paint2(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
graphics.setColor(this.backgroundBasicColor!.intValue());
    
graphics.fillRect(0, 0, this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight());
    
this.gauge.paintXY(graphics, 0, 0);
    
this.hasPainted= true;
    
}


    public paintThreed(graphics: Graphics){
}


    getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public setText(text: string){
this.text= text;
    
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.text;
    
}


    setBackground(background: boolean){
this.background= background;
    
}


    isBackground(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.background;
    
}


}



