
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { CommandListener } from '../../../../../../javax/microedition/lcdui/CommandListener.js';
      
import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
      
import { NullCanvas } from '../../../../../../javax/microedition/lcdui/NullCanvas.js';
      
import { NullCommandListener } from '../../../../../../javax/microedition/lcdui/NullCommandListener.js';
      
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
      
import { RunnableCanvas } from '../../../../../../org/allbinary/canvas/RunnableCanvas.js';
      
import { GameCommandsFactory } from '../../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { CanvasStrings } from '../../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { ABCustomGaugeItem } from '../../../../../../org/allbinary/graphics/form/item/ABCustomGaugeItem.js';
      
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      
import { Paintable } from '../../../../../../org/allbinary/graphics/paint/Paintable.js';
      
import { PaintableInterface } from '../../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      
import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { AllBinaryMidlet } from '../../../../../../org/allbinary/midlet/AllBinaryMidlet.js';
      
import { PathFindingThreadPool } from '../../../../../../org/allbinary/thread/PathFindingThreadPool.js';
      
import { ThreadPool } from '../../../../../../org/allbinary/thread/ThreadPool.js';
      
















                                        
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

    allbinaryMidlet: AllBinaryMidlet = AllBinaryMidlet.NULL_ALLBINARY_MIDLET;

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
                
            

