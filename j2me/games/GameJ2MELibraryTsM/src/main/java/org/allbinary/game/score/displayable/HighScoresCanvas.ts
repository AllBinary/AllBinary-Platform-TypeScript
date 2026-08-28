
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { GameCommandCanvas } from '../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js';
      const GameCommandCanvas = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
      const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
//not game specific package import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
      const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
//not game specific package import { HighScoreCommandsFactory } from '../../../../../org/allbinary/game/score/HighScoreCommandsFactory.js';
      const HighScoreCommandsFactory = globalThis.org.allbinary.game.score.HighScoreCommandsFactory;

      
//not game specific package import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
//not game specific package import { HighScoresCanvasInputProcessor } from '../../../../../org/allbinary/game/score/HighScoresCanvasInputProcessor.js';
      const HighScoresCanvasInputProcessor = globalThis.org.allbinary.game.score.HighScoresCanvasInputProcessor;

      
//not game specific package import { HighScoresCanvasInputProcessorFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresCanvasInputProcessorFactoryInterface.js';
      const HighScoresCanvasInputProcessorFactoryInterface = globalThis.org.allbinary.game.score.HighScoresCanvasInputProcessorFactoryInterface;

      
//not game specific package import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
//not game specific package import { HighScoresHelperBase } from '../../../../../org/allbinary/game/score/HighScoresHelperBase.js';
      const HighScoresHelperBase = globalThis.org.allbinary.game.score.HighScoresHelperBase;

      
//not game specific package import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
      const HighScoresPaintable = globalThis.org.allbinary.game.score.HighScoresPaintable;

      
//not game specific package import { HighScoresResultsListener } from '../../../../../org/allbinary/game/score/HighScoresResultsListener.js';
      const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

      
//not game specific package import { NoHighScoresFactory } from '../../../../../org/allbinary/game/score/NoHighScoresFactory.js';
      const NoHighScoresFactory = globalThis.org.allbinary.game.score.NoHighScoresFactory;

      
//not game specific package import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
      const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
      const SimpleTextPaintable = globalThis.org.allbinary.graphics.paint.SimpleTextPaintable;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
      const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
//not game specific package import { SecondaryThreadPool } from '../../../../../org/allbinary/thread/SecondaryThreadPool.js';
      const SecondaryThreadPool = globalThis.org.allbinary.thread.SecondaryThreadPool;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScoresCanvas extends GameCommandCanvas implements HighScoresResultsListener {
        

    public static readonly NAME: string = "HighScoresCanvas";

    private paintable: Paintable = NullPaintable.getInstance()!;

    private readonly highScoreCommandsFactory: HighScoreCommandsFactory = HighScoreCommandsFactory.getInstance()!;

    private readonly waitPaintable: SimpleTextPaintable = new SimpleTextPaintable(this.commonStrings!.PLEASE_WAIT_FOR_SERVER, BasicColorFactory.getInstance()!.WHITE);

    private readonly highScoresPaintable: HighScoresPaintable;

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface;

    colorFillPaintable: ColorFillBasePaintable;

    private readonly highScoresHelper: HighScoresHelperBase = new HighScoresHelperBase();

    private readonly gameInfo: GameInfo;

    private readonly highScoresCanvasInputProcessor: HighScoresCanvasInputProcessor;

    private currentCommand: Command = this.highScoreCommandsFactory!.HIGH_SCORE_COMMANDS[0]!;

    private hasPainted: boolean = false;

public constructor (commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager, gameInfo: GameInfo, paintable: HighScoresPaintable, highScoresFactoryInterface: HighScoresFactoryInterface, highScoresCanvasInputProcessorFactoryInterface: HighScoresCanvasInputProcessorFactoryInterface){
            super(commandListener, HighScoresCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.highScoresPaintable= paintable;
    
this.highScoresFactoryInterface= highScoresFactoryInterface;
    
this.highScoresCanvasInputProcessor= highScoresCanvasInputProcessorFactoryInterface!.getInstance(this);
    
this.gameInfo= gameInfo;
    
this.waitPaintable!.setBasicColorP(allBinaryGameLayerManager!.getForegroundBasicColor());
    
this.getHighScoresPaintable()!.setBasicColorP(allBinaryGameLayerManager!.getForegroundBasicColor());
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    

                        if(this.highScoresHelper!.getHighScoresArray() == NoHighScoresFactory.getInstance()!.NO_HIGH_SCORES)
                        
                                    {
                                    this.setPaintable(this.waitPaintable);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Show HighScores that are already loaded", this, this.commonStrings!.CONSTRUCTOR);
    
this.updateCommand(this.currentCommand);
    
this.setPaintable(this.getHighScoresPaintable());
    

                        }
                            

//inner=true member= isStatic=
class HighScoreRunnable extends ARunnable {
        

    readonly highScoresCanvas: HighScoresCanvas;

 constructor (highScoresCanvas: HighScoresCanvas){

            super();
        this.highScoresCanvas= highScoresCanvas;
    
}


    public run(){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var highScoresCanvas: HighScoresCanvas = this.highScoresCanvas;;
    

        try {
            
    var isHTML: boolean = J2MEUtil.isHTML()!;;
    

                        if(!isHTML)
                        
                                    {
                                    
        while(!highScoresCanvas!.hasPainted)
        {
}

highScoresCanvas!.hasPainted= false;
    

                                    }
                                

    var stringMaker: StringMaker = new StringMaker();;
    
logUtil!.putF(stringMaker!.append("HighScoresCanvas - Request repaint to be sure: ")!.appendlong(Date.now())!.toString(), this, commonStrings!.RUN);
    
highScoresCanvas!.repaintBehavior!.onChangeRepaint(highScoresCanvas);
    

                        if(!isHTML)
                        
                                    {
                                    
        while(!highScoresCanvas!.hasPainted)
        {
}


                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
logUtil!.putF(stringMaker!.append("HighScoresCanvas - Now that the canvas has completed repaint go ahead and fetch the scores: ")!.appendlong(Date.now())!.toString(), this, commonStrings!.RUN);
    
highScoresCanvas!.executeUpdate();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}


}



                    //Otherwise - statement - EmptyStmt

SecondaryThreadPool.getInstance()!.runTask(new HighScoreRunnable(this));
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


    public open(){
super.open();
    
this.highScoresCanvasInputProcessor!.open();
    
}


    public close(){
super.close();
    
this.highScoresCanvasInputProcessor!.close();
    
}


    public paint(graphics: Graphics){
this.colorFillPaintable!.paint(graphics);
    
this.paintable.paint(graphics);
    

                        if(this.waitPaintable != this.paintable)
                        
                                    {
                                    this.highScoresCanvasInputProcessor!.paint(graphics);
    

                                    }
                                
super.paint(graphics);
    
this.hasPainted= true;
    
}


    public executeUpdate(){

        try {
            this.highScoresFactoryInterface!.fetchHighScores(this.getGameInfo(), this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


    getHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresPaintable;
    
}


    public setHighScoresArray(highScoresArray: HighScores[]){

        try {
            
                        if(highScoresArray != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.appendint(highScoresArray!.length)!.toString(), this, "setHighScoresArray");
    

                                    }
                                
                        else {
                            this.logUtil!.putF(this.commonStrings!.START, this, "setHighScoresArray");
    

                        }
                            
this.highScoresHelper!.setHighScoresArray(highScoresArray);
    
this.updateCommand(this.currentCommand);
    
this.setPaintable(this.getHighScoresPaintable());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public updateCommand(command: Command){
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(this.stringUtil!.toString(command))!.toString(), this, this.commonStrings!.UPDATE);
    

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

                        if(this.highScoreCommandsFactory!.isHighScoreCommand(command))
                        
                                    {
                                    
    var index: number = this.highScoreCommandsFactory!.getIndex(command)!;;
    

    var nextIndex: number = index +1;;
    

    var highScoresArray: HighScores[] = this.highScoresHelper!.getHighScoresArray()!;;
    

                        if(nextIndex >= highScoresArray!.length)
                        
                                    {
                                    nextIndex= 0;
    

                                    }
                                

                        if(highScoresArray!.length > 0)
                        
                                    {
                                    this.getHighScoresPaintable()!.setHighScores(highScoresArray[index]!);
    

                                    }
                                
                        else {
                            this.getHighScoresPaintable()!.setHighScores(NullHighScoresSingletonFactory.getInstance());
    

                        }
                            

                        if(index != nextIndex)
                        
                                    {
                                    this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(this.highScoreCommandsFactory!.HIGH_SCORE_COMMANDS[nextIndex]!);
    

                                    }
                                

                                    }
                                
this.currentCommand= command;
    
this.close();
    
super.initMenu();
    
this.open();
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


    public getGameInfo(): GameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInfo;
    
}


    setPaintable(paintable: Paintable){
this.paintable= paintable;
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


}



