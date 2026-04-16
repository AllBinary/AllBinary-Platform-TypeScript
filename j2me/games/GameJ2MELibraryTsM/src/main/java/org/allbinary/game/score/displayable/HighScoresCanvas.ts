
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
        



import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameCommandCanvas } from "../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { ColorFillBasePaintable } from "../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js";

    
import { ColorFillPaintableFactory } from "../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js";

    
import { HighScoreCommandsFactory } from "../../../../../org/allbinary/game/score/HighScoreCommandsFactory.js";

    
import { HighScores } from "../../../../../org/allbinary/game/score/HighScores.js";

    
import { HighScoresCanvasInputProcessor } from "../../../../../org/allbinary/game/score/HighScoresCanvasInputProcessor.js";

    
import { HighScoresCanvasInputProcessorFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresCanvasInputProcessorFactoryInterface.js";

    
import { HighScoresCanvasNoInputProcessorFactory } from "../../../../../org/allbinary/game/score/HighScoresCanvasNoInputProcessorFactory.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { HighScoresHelperBase } from "../../../../../org/allbinary/game/score/HighScoresHelperBase.js";

    
import { HighScoresPaintable } from "../../../../../org/allbinary/game/score/HighScoresPaintable.js";

    
import { HighScoresResultsListener } from "../../../../../org/allbinary/game/score/HighScoresResultsListener.js";

    
import { NoHighScoresFactory } from "../../../../../org/allbinary/game/score/NoHighScoresFactory.js";

    
import { NullHighScoresSingletonFactory } from "../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { SimpleTextPaintable } from "../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ARunnable } from "../../../../../org/allbinary/thread/ARunnable.js";

    
import { SecondaryThreadPool } from "../../../../../org/allbinary/thread/SecondaryThreadPool.js";

    

import { System } from "./System.js";

import { System } from "./System.js";

export class HighScoresCanvas extends GameCommandCanvas
                , HighScoresResultsListener {
        

    public static readonly NAME: string = "HighScoresCanvas";
        
        

    private paintable: Paintable = NullPaintable.getInstance()!;
        
        

    private readonly highScoreCommandsFactory: HighScoreCommandsFactory = HighScoreCommandsFactory.getInstance()!;
        
        

    private readonly waitPaintable: SimpleTextPaintable = new SimpleTextPaintable(commonStrings!.PLEASE_WAIT_FOR_SERVER, BasicColorFactory.getInstance()!.WHITE);
        
        

    private readonly highScoresPaintable: HighScoresPaintable

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface

    colorFillPaintable: ColorFillBasePaintable

    private readonly highScoresHelper: HighScoresHelperBase = new HighScoresHelperBase();
        
        

    private readonly gameInfo: GameInfo

    private readonly highScoresCanvasInputProcessor: HighScoresCanvasInputProcessor

    private currentCommand: Command = highScoreCommandsFactory!.HIGH_SCORE_COMMANDS[0]!;
        
        
public constructor (commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager, paintable: HighScoresPaintable, highScoresFactoryInterface: HighScoresFactoryInterface)                        

                            : this(commandListener, allBinaryGameLayerManager, allBinaryGameLayerManager!.getGameInfo(), paintable, highScoresFactoryInterface, new HighScoresCanvasNoInputProcessorFactory()){

            super();
                //var commandListener = commandListener
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var paintable = paintable
    //var highScoresFactoryInterface = highScoresFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager, gameInfo: GameInfo, paintable: HighScoresPaintable, highScoresFactoryInterface: HighScoresFactoryInterface, highScoresCanvasInputProcessorFactoryInterface: HighScoresCanvasInputProcessorFactoryInterface)                        

                            : super(commandListener, HighScoresCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor()){

            super();
                //var commandListener = commandListener
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var gameInfo = gameInfo
    //var paintable = paintable
    //var highScoresFactoryInterface = highScoresFactoryInterface
    //var highScoresCanvasInputProcessorFactoryInterface = highScoresCanvasInputProcessorFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
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
                            this.logUtil!.putF("Show HighScores that are already loaded", this, commonStrings!.CONSTRUCTOR);
    
this.updateCommand(this.currentCommand);
    
this.setPaintable(this.getHighScoresPaintable());
    

                        }
                            
SecondaryThreadPool.getInstance()!.runTask(new object: ARunnable()
                                {
                                
    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var isHTML: boolean = J2MEUtil.isHTML()!;
        
        
;
    

                        if(!isHTML)
                        
                                    {
                                    
        while(!hasPainted)
        {
}

hasPainted= false;
    

                                    }
                                

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
logUtil!.putF(stringMaker!.append("HighScoresCanvas - Request repaint to be sure: ")!.appendlong(System.currentTimeMillis())!.toString(), this, commonStrings!.RUN);
    
repaintBehavior!.onChangeRepaint(this@HighScoresCanvas);
    

                        if(!isHTML)
                        
                                    {
                                    
        while(!hasPainted)
        {
}


                                    }
                                
stringMaker!.delete(0, stringMaker!.length());
    
logUtil!.putF(stringMaker!.append("HighScoresCanvas - Now that the canvas has completed repaint go ahead and fetch the scores: ")!.appendlong(System.currentTimeMillis())!.toString(), this, commonStrings!.RUN);
    
executeUpdate();
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

}

                                }
                            );
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
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


    hasPainted: boolean = false;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
this.colorFillPaintable!.paint(graphics);
    
this.paintable.paint(graphics);
    

                        if(this.waitPaintable != this.paintable)
                        
                                    {
                                    this.highScoresCanvasInputProcessor!.paint(graphics);
    

                                    }
                                
super.paint(graphics);
    
hasPainted= true;
    
}


    public executeUpdate(){

        try {
            this.highScoresFactoryInterface!.fetchHighScores(this.getGameInfo(), this);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


    getHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresPaintable;
    
}


    public setHighScoresArray(highScoresArray: HighScores[]){
    //var highScoresArray = highScoresArray

        try {
            
                        if(highScoresArray != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append(commonStrings!.START)!.appendint(highScoresArray!.length)!.toString(), this, "setHighScoresArray");
    

                                    }
                                
                        else {
                            this.logUtil!.putF(commonStrings!.START, this, "setHighScoresArray");
    

                        }
                            
this.highScoresHelper!.setHighScoresArray(highScoresArray);
    
this.updateCommand(this.currentCommand);
    
this.setPaintable(this.getHighScoresPaintable());
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

}


                //@Throws(Error::class)
            
    public updateCommand(command: Command){
var command = command
this.logUtil!.putF(new StringMaker().
                            append(commonStrings!.START)!.append(this.stringUtil!.toString(command))!.toString(), this, commonStrings!.UPDATE);
    

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        
;
    

                        if(highScoreCommandsFactory!.isHighScoreCommand(command))
                        
                                    {
                                    
    var index: number = highScoreCommandsFactory!.getIndex(command)!;
        
        
;
    

    var nextIndex: number = index +1;
        
        
;
    

    var highScoresArray: HighScores[] = this.highScoresHelper!.getHighScoresArray()!;
        
        
;
    

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
    
this.addCommand(highScoreCommandsFactory!.HIGH_SCORE_COMMANDS[nextIndex]!);
    

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
                        return gameInfo;
    
}


    setPaintable(paintable: Paintable){
var paintable = paintable
this.paintable= paintable;
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


}
                
            

