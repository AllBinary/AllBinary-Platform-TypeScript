
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
        



import { Enumeration } from "../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Displayable } from "../../../../javax/microedition/lcdui/Displayable.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { J2MEUtil } from "../../../../org/allbinary/J2MEUtil.js";

    
import { GameAdStateFactory } from "../../../../org/allbinary/business/advertisement/GameAdStateFactory.js";

    
import { FullScreenUtil } from "../../../../org/allbinary/canvas/FullScreenUtil.js";

    
import { GameStatisticsFactory } from "../../../../org/allbinary/canvas/GameStatisticsFactory.js";

    
import { DebugFactory } from "../../../../org/allbinary/debug/DebugFactory.js";

    
import { DebugInterface } from "../../../../org/allbinary/debug/DebugInterface.js";

    
import { GameAdState } from "../../../../org/allbinary/game/GameAdState.js";

    
import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { GameMode } from "../../../../org/allbinary/game/GameMode.js";

    
import { GameStrings } from "../../../../org/allbinary/game/GameStrings.js";

    
import { GameTypeFactory } from "../../../../org/allbinary/game/GameTypeFactory.js";

    
import { GameCommandsFactory } from "../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GameOptionsForm } from "../../../../org/allbinary/game/configuration/GameOptionsForm.js";

    
import { GameOptionsFormFactory } from "../../../../org/allbinary/game/configuration/GameOptionsFormFactory.js";

    
import { InGameFeatures } from "../../../../org/allbinary/game/configuration/InGameFeatures.js";

    
import { InGameOptionsForm } from "../../../../org/allbinary/game/configuration/InGameOptionsForm.js";

    
import { InGameOptionsFormFactory } from "../../../../org/allbinary/game/configuration/InGameOptionsFormFactory.js";

    
import { LoadGameForm } from "../../../../org/allbinary/game/configuration/LoadGameForm.js";

    
import { ChangedGameFeatureListener } from "../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { GameFeatureEventHandler } from "../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFormUtil } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js";

    
import { MainFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { GamePersistanceSingleton } from "../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js";

    
import { KeyValuePersistance } from "../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js";

    
import { AllBinaryGameCanvas } from "../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { BasicPaintablesCanvas } from "../../../../org/allbinary/game/displayable/canvas/BasicPaintablesCanvas.js";

    
import { DemoCanvas } from "../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js";

    
import { GameCanvasRunnableInterface } from "../../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js";

    
import { GameEventHandlerUtil } from "../../../../org/allbinary/game/displayable/canvas/GameEventHandlerUtil.js";

    
import { GameInputMappingCanvas } from "../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js";

    
import { GameInputMappingInstructionsCanvas } from "../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js";

    
import { MenuListener } from "../../../../org/allbinary/game/displayable/canvas/MenuListener.js";

    
import { NullGameCanvasRunnable } from "../../../../org/allbinary/game/displayable/canvas/NullGameCanvasRunnable.js";

    
import { TextNotificationUtil } from "../../../../org/allbinary/game/input/TextNotificationUtil.js";

    
import { AllBinaryGameLayerManager } from "../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { GameNotificationEventHandler } from "../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js";

    
import { HelpPaintable } from "../../../../org/allbinary/game/paint/help/HelpPaintable.js";

    
import { HighScoreCommands } from "../../../../org/allbinary/game/score/HighScoreCommands.js";

    
import { HighScoreCommandsFactory } from "../../../../org/allbinary/game/score/HighScoreCommandsFactory.js";

    
import { HighScoreTextBox } from "../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js";

    
import { HighScoreUtil } from "../../../../org/allbinary/game/score/displayable/HighScoreUtil.js";

    
import { HighScoresCanvas } from "../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js";

    
import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    
import { ResizableListenerHandler } from "../../../../org/allbinary/graphics/ResizableListenerHandler.js";

    
import { ProgressCanvas } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { ColorChangeEventHandler } from "../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js";

    
import { CanvasStrings } from "../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { MyCanvas } from "../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { MyCommandsFactory } from "../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { AboutCommandProcessor } from "../../../../org/allbinary/graphics/displayable/screen/AboutCommandProcessor.js";

    
import { AboutPaintableFactory } from "../../../../org/allbinary/graphics/displayable/screen/AboutPaintableFactory.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { WebCommandProcessor } from "../../../../org/allbinary/graphics/displayable/screen/WebCommandProcessor.js";

    
import { AllBinarySensorManager } from "../../../../org/allbinary/input/AllBinarySensorManager.js";

    
import { VirtualKeyboardEventHandler } from "../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js";

    
import { BasicMotionGesturesHandler } from "../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { ClientInformationFactory } from "../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js";

    
import { InApplicationPurchaseFactory } from "../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js";

    
import { LockableFeature } from "../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js";

    
import { LockableFeatureFactory } from "../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { AllBinaryMediaManager } from "../../../../org/allbinary/media/audio/AllBinaryMediaManager.js";

    
import { MidletStrings } from "../../../../org/allbinary/midlet/MidletStrings.js";

    
import { ProgressMidlet } from "../../../../org/allbinary/midlet/ProgressMidlet.js";

    
import { NullThread } from "../../../../org/allbinary/thread/NullThread.js";

    
import { ThreadFactoryUtil } from "../../../../org/allbinary/thread/ThreadFactoryUtil.js";

    
import { ThreadUtil } from "../../../../org/allbinary/thread/ThreadUtil.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

import { GameMidletStateFactory } from "./GameMidletStateFactory.js";

import { GameMidletEventHandler } from "./GameMidletEventHandler.js";

import { GameMidletEventHandler } from "./GameMidletEventHandler.js";

import { DemoGameMidletStateFactory } from "./DemoGameMidletStateFactory.js";

export class GameMidlet extends ProgressMidlet
                , CommandListener {
        

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    readonly features: Features = Features.getInstance()!;
        
        

    readonly midletStrings: MidletStrings = MidletStrings.getInstance()!;
        
        

    readonly myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;
        
        

    readonly gameStrings: GameStrings = GameStrings.getInstance()!;
        
        

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;
        
        

    private readonly DISPLAYABLE: string = " Displayable: ";
        
        

    private readonly COMMAND_NAME: string = "command Name/Label: ";
        
        

    private readonly NO_COMMAND: string = "No Command";
        
        

    private readonly NO_DISPLAYABLE: string = "No Displayable";
        
        

    private readonly COMMAND_ACTION: string = new StringMaker().
                            append("GameMidlet::")!.append(midletStrings!.COMMAND_ACTION)!.toString()!;
        
        

    private readonly PAUSE_APP_BACKGROUND: string = "pauseAppBackground";
        
        

    private readonly UN_PAUSE_APP_BACKGROUND: string = "unPauseAppBackground";
        
        

    private readonly aboutCommandProcessor: AboutCommandProcessor = AboutCommandProcessor.getInstance()!;
        
        

    private readonly webCommandProcessor: WebCommandProcessor = WebCommandProcessor.getInstance()!;
        
        

    private readonly gameMidletStateFactory: GameMidletStateFactory = GameMidletStateFactory.getInstance()!;
        
        

    readonly gameStartTimeHelper: TimeDelayHelper = new TimeDelayHelper(240);
        
        

    private readonly fullScreenUtil: FullScreenUtil = FullScreenUtil.getInstance()!;
        
        

    private readonly debugInterface: DebugInterface

    private allbinaryGameCanvasRunnableInterface: GameCanvasRunnableInterface = NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;
        
        

    private thread: Thread = NullThread.NULL_THREAD;
        
        

    private loadGameForm: CommandForm

    private isFullScreen: boolean= false

    private resized: boolean= false
public constructor (clientInformationFactory: ClientInformationFactory)                        

                            : super(clientInformationFactory){

            super();
                //var clientInformationFactory = clientInformationFactory


                            //For kotlin this is before the body of the constructor.
                    
SmallIntegerSingletonFactory.getInstance()!.init(0x291, 6);
    
loadGameForm= CommandForm.NULL_COMMAND_FORM;
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.init(this);
    
GameFeatureEventHandler.getInstance()!.addListener(ChangedGameFeatureListener.getInstance());
    
GamePersistanceSingleton.getInstance()!.clear();
    
this.debugInterface= DebugFactory.getInstance();
    
this.init();
    
}


    init(){
}


                //@Throws(Error::class)
            
    setDemo(){



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createGame(){



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    mediaShutdown(){



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


    public stopAll(){
}


    pauseApp(){
this.pauseAppBackground(true);
    

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        
;
    
gameAdState!.getAdvertisements()!.stopAll();
    
}


    pauseAppBackground(background: boolean){
    //var background = background
this.logUtil!.putF(commonStrings!.START, this, PAUSE_APP_BACKGROUND);
    

                        if(allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    allbinaryGameCanvasRunnableInterface!.pause();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("<<<<<< Null", this, PAUSE_APP_BACKGROUND);
    

                        }
                            
AllBinarySensorManager.getInstance()!.shutdown();
    
}


    unPauseApp(){
this.unPauseAppBackground(true);
    

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        
;
    
gameAdState!.getAdvertisements()!.startAll();
    
}


    unPauseAppBackground(background: boolean){
var background = background
this.logUtil!.putF(commonStrings!.START, this, UN_PAUSE_APP_BACKGROUND);
    
AllBinarySensorManager.getInstance()!.init();
    

    var gameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
        
        
;
    

                        if(gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    gameCanvasRunnableInterface!.unPause();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("<<<<<< Null", this, UN_PAUSE_APP_BACKGROUND);
    

                        }
                            
}


    destroyApp(unconditional: boolean, isProgress: boolean){
var unconditional = unconditional
var isProgress = isProgress

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

                        if(isProgress)
                        
                                    {
                                    progressCanvas!.start();
    
this.commandAction(myCommandsFactory!.SET_DISPLAYABLE, progressCanvas);
    

                                    }
                                
this.destroyApp(unconditional);
    

                        if(isProgress)
                        
                                    {
                                    progressCanvas!.end();
    

                                    }
                                
}


    destroyApp(unconditional: boolean){
var unconditional = unconditional

    var METHOD_NAME: string = "GameMidlet::destroyApp";
        
        
;
    

        try {
            PreLogUtil.put(GameStatisticsFactory.getInstance()!.toString(), this, METHOD_NAME);
    

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        
;
    
gameAdState!.getAdvertisements()!.stopAll();
    

                        if(!this.isDestroyed();

                        )
                        
                                    {
                                    this.stopGameCanvasRunnableInterface();
    
this.setGameCanvasRunnableInterface(NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE);
    
this.mediaShutdown();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Midlet Managment Error: Midlet Should Only Be Destroyed Once", this, METHOD_NAME);
    

                        }
                            
super.destroyApp(true);
    
PreLogUtil.put(commonStrings!.END, this, METHOD_NAME);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, METHOD_NAME, e);
    
}

this.logUtil!.putF(commonStrings!.END, this, METHOD_NAME);
    
}


    startApp(){

        try {
            
    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        
;
    
gameAdState!.getAdvertisements()!.startAll();
    

    var START_APP: string = "startApp";
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, START_APP);
    

    var gameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
        
        
;
    

                        if(gameCanvasRunnableInterface == NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    gameMidletStateFactory!.setCurrentGameState(GameState.NO_GAME_STATE);
    
this.setDemo();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("GameCanvasRunnableInterface is available", this, START_APP);
    

                        if(gameCanvasRunnableInterface == this.getCurrentDisplayable())
                        
                                    {
                                    this.unPauseAppBackground(false);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("GameCanvasRunnableInterface is not current displayable", this, START_APP);
    

                        }
                            

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "startApp", e);
    
destroyApp(false);
    
notifyDestroyed();
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public commandAction(command: Command, displayable: Displayable){
    //var command = command
    //var displayable = displayable

        try {
            
    var displayableAsString: string = NO_DISPLAYABLE;
        
        
;
    

                        if(displayable != 
                                    null
                                )
                        
                                    {
                                    displayableAsString= displayable.toString();
    

                                    }
                                

    var label: string = NO_COMMAND;
        
        
;
    

                        if(command != 
                                    null
                                )
                        
                                    {
                                    label= command.getLabel();
    

                                    }
                                
PreLogUtil.put(new StringMaker().
                            append(COMMAND_NAME)!.append(label)!.append(DISPLAYABLE)!.append(displayableAsString)!.toString(), this, this.COMMAND_ACTION);
    

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        
;
    

                        if(command == gameCommandsFactory!.SHOW_GAME_CANVAS)
                        
                                    {
                                    
                        if(this.getDisplay()!.getCurrent() != this.allbinaryGameCanvasRunnableInterface && this.allbinaryGameCanvasRunnableInterface!.getType() != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE.getType())
                        
                                    {
                                    this.setDisplay(this.allbinaryGameCanvasRunnableInterface as Displayable);
    

                                    }
                                
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS)
                        
                                    {
                                    
    var menuListener: MenuListener = displayable as MenuListener;
        
        
;
    
menuListener!.close();
    
this.setDisplay(this.allbinaryGameCanvasRunnableInterface as Displayable);
    
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.EXIT_COMMAND)
                        
                                    {
                                    
                        if(GameMidletEventHandler.getInstance()!.getEventListenerInterfaceListP()!.size() == 0)
                        
                                    {
                                    this.exit(true);
    

                                    }
                                
GameMidletEventHandler.getInstance()!.fireEvent(new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance()!.NONE));
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.EXIT_WITHOUT_PROGRESS_COMMAND)
                        
                                    {
                                    this.exit(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.START_COMMAND || command == gameCommandsFactory!.RESTART_COMMAND || command == gameCommandsFactory!.CONTINUE_COMMAND)
                        
                                    {
                                    
                        if(gameMidletStateFactory!.getCurrentGameState() != GameState.PLAYING_GAME_STATE || command == gameCommandsFactory!.RESTART_COMMAND)
                        
                                    {
                                    
                        if(this.gameStartTimeHelper!.isTime())
                        
                                    {
                                    
                        if(command == gameCommandsFactory!.START_COMMAND && this.isDemoLoading())
                        
                                    {
                                    this.logUtil!.putF("Trying to Start Game Before Loading Complete", this, midletStrings!.COMMAND_ACTION);
    

                                    }
                                
                        else {
                            this.startedBefore= true;
    
this.createGame();
    
gameMidletStateFactory!.setCurrentGameState(GameState.PLAYING_GAME_STATE);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Starting Game Too Often", this, midletStrings!.COMMAND_ACTION);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Already in playing state", this, COMMAND_ACTION);
    

                        }
                            

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.BUY_COMMAND)
                        
                                    {
                                    
    var inApplicationPurchaseFactory: InApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance()!;
        
        
;
    

    var list: BasicArrayList = LockableFeatureFactory.getInstance()!.getList()!;
        
        
;
    

    var lockableFeature: LockableFeature = list.get(0);

                         as LockableFeature;
        
        
;
    

                        if(list.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(lockableFeature);

                        )
                        
                                    {
                                    inApplicationPurchaseFactory!.purchase(lockableFeature);
    

                                    }
                                
                        else {
                            TextNotificationUtil.getInstance()!.fireSuccess("Already Purchased");
    

                        }
                            

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.QUIT_COMMAND)
                        
                                    {
                                    
                        if(this.gameStartTimeHelper!.isTime())
                        
                                    {
                                    
                        if(displayable is HighScoreTextBox)
                        
                                    {
                                    
    var menuListener: MenuListener = displayable as MenuListener;
        
        
;
    
menuListener!.close();
    

                                    }
                                
this.stopGameCanvasRunnableInterface();
    
gameMidletStateFactory!.setCurrentGameState(GameState.NO_GAME_STATE);
    
this.setDemo();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == myCommandsFactory!.RESUME_COMMAND)
                        
                                    {
                                    this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == myCommandsFactory!.PAUSE_COMMAND)
                        
                                    {
                                    this.pauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == myCommandsFactory!.SET_DISPLAYABLE)
                        
                                    {
                                    this.pauseAppBackground(false);
    
this.setDisplay(displayable);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.SET_MENU_DISPLAYABLE)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var menuListener: MenuListener = displayable as MenuListener;
        
        
;
    
menuListener!.open();
    
this.setDisplay(displayable);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.START_TRACE)
                        
                                    {
                                    this.debugInterface!.start();
    

    var gameCanvas: AllBinaryGameCanvas = this.allbinaryGameCanvasRunnableInterface as AllBinaryGameCanvas;
        
        
;
    
gameCanvas!.addCommand(gameCommandsFactory!.STOP_TRACE);
    
gameCanvas!.removeCommand(gameCommandsFactory!.START_TRACE);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.STOP_TRACE)
                        
                                    {
                                    this.pauseAppBackground(false);
    
this.debugInterface!.stop();
    
this.unPauseAppBackground(false);
    

    var gameCanvas: AllBinaryGameCanvas = this.allbinaryGameCanvasRunnableInterface as AllBinaryGameCanvas;
        
        
;
    
gameCanvas!.addCommand(gameCommandsFactory!.START_TRACE);
    
gameCanvas!.removeCommand(gameCommandsFactory!.STOP_TRACE);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DEFAULT_OPTIONS)
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;
        
        
;
    

                        if(tempDisplayable is GameOptionsForm)
                        
                                    {
                                    GameFeatureFormUtil.getInstance()!.setDefault(tempDisplayable as CommandForm);
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == GameInputMappingInstructionsCanvas.DISPLAY)
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;
        
        
;
    

                        if(tempDisplayable is GameInputMappingCanvas)
                        
                                    {
                                    
    var gameInputMappingCanvas: GameInputMappingCanvas = tempDisplayable as GameInputMappingCanvas;
        
        
;
    
gameInputMappingCanvas!.update();
    

                                    }
                                
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getInputMappingInstructionsCanvas());
    

                                    }
                                
                             else 
                        if(HighScoreCommandsFactory.getInstance()!.isHighScoreCommand(command))
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;
        
        
;
    

                        if(tempDisplayable is HighScoresCanvas)
                        
                                    {
                                    
    var highScoresCanvas: HighScoresCanvas = tempDisplayable as HighScoresCanvas;
        
        
;
    
highScoresCanvas!.updateCommand(command);
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == HighScoreCommands.getInstance()!.DISPLAY)
                        
                                    {
                                    this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.createHighScoresCanvas());
    

                                    }
                                
                             else 
                        if(command == GameInputMappingInstructionsCanvas.CLOSE)
                        
                                    {
                                    
    var menuListener: MenuListener = displayable as MenuListener;
        
        
;
    
menuListener!.close();
    
this.commandAction(GameInputMappingCanvas.DISPLAY, NullCanvas.NULL_CANVAS);
    

                                    }
                                
                             else 
                        if(command == GameInputMappingCanvas.DISPLAY)
                        
                                    {
                                    
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    this.pauseAppBackground(false);
    

                                    }
                                
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getInputMappingCanvas());
    

                                    }
                                
                             else 
                        if(command == GameInputMappingCanvas.DEFAULT)
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;
        
        
;
    

                        if(tempDisplayable is GameInputMappingCanvas)
                        
                                    {
                                    
    var gameInputMappingCanvas: GameInputMappingCanvas = tempDisplayable as GameInputMappingCanvas;
        
        
;
    
gameInputMappingCanvas!.setDefault();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == InGameOptionsForm.DISPLAY)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    
progressCanvas!.addPortion(50, "In Game Options");
    

    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;
        
        
;
    

    var inGameOptionsFormFactory: InGameOptionsFormFactory = InGameOptionsFormFactory.getInstance()!;
        
        
;
    
inGameOptionsFormFactory!.init(this, new InGameFeatures(), "Options In Game", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor());
    

    var inGameOptionsForm: CommandForm = inGameOptionsFormFactory!.get()!;
        
        
;
    
inGameOptionsForm!.setItemStateListener(this.allbinaryGameCanvasRunnableInterface);
    
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, inGameOptionsForm);
    

                                    }
                                
                             else 
                        if(command == InGameOptionsForm.DEFAULT)
                        
                                    {
                                    
    var inGameOptionsForm: InGameOptionsForm = InGameOptionsFormFactory.getInstance()!.get();

                         as InGameOptionsForm;
        
        
;
    
GameFeatureFormUtil.getInstance()!.setDefault(inGameOptionsForm);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DISPLAY_OPTIONS)
                        
                                    {
                                    AllBinaryMediaManager.setMuted(true);
    
this.stopAll();
    

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    
isFullScreen= features.isFeature(mainFeatureFactory!.FULL_SCREEN);
    
ResizableListenerHandler.getInstance()!.fireEvent(true);
    
this.setResized(false);
    
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getGameOptionsForm());
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.CLOSE_OPTIONS)
                        
                                    {
                                    ResizableListenerHandler.getInstance()!.fireEvent(false);
    
this.commandAction(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS, displayable);
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Close isFullScreen/change: ");
    
stringBuffer!.appendboolean(isFullScreen);
    
stringBuffer!.appendboolean(fullScreenUtil!.isScreenChange(isFullScreen));
    
stringBuffer!.append(" isResized: ");
    
stringBuffer!.appendboolean(this.isResized());
    
PreLogUtil.put(stringBuffer!.toString(), this, COMMAND_ACTION);
    

                        if(this.isResized() || fullScreenUtil!.isScreenChange(isFullScreen))
                        
                                    {
                                    this.updateFullScreen();
    

                                    }
                                
AllBinaryMediaManager.setMuted(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DISPLAY_LOAD_FORM)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;
        
        
;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation);
    

                        if(this.getLoadGameForm() == CommandForm.NULL_COMMAND_FORM)
                        
                                    {
                                    
    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;
        
        
;
    
this.setLoadGameForm(new LoadGameForm(this, "Load Game", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor()));
    

                                    }
                                
                        else {
                            this.getLoadGameForm()!.update();
    

                        }
                            
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getLoadGameForm());
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.LOAD_FILE)
                        
                                    {
                                    
    var index: number = this.getLoadGameForm()!.getSelectedId()!;
        
        
;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;
        
        
;
    
this.setStartStateHashtable(keyValuePersistance!.get(index));
    

    var menuListener: MenuListener = this.getLoadGameForm()!;
        
        
;
    
menuListener!.close();
    
PreLogUtil.put(BasicMotionGesturesHandler.getInstance()!.toString(), this, COMMAND_ACTION);
    
this.commandAction(gameCommandsFactory!.START_COMMAND, NullCanvas.NULL_CANVAS);
    
PreLogUtil.put(BasicMotionGesturesHandler.getInstance()!.toString(), this, COMMAND_ACTION);
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DELETE_FILE)
                        
                                    {
                                    
    var index: number = this.getLoadGameForm()!.getSelectedText()!;
        
        
;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;
        
        
;
    
keyValuePersistance!.delete(abeClientInformation, index);
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation, 1);
    
this.getLoadGameForm()!.update();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.SAVE)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;
        
        
;
    
this.pauseAppBackground(false);
    
keyValuePersistance!.save(abeClientInformation, this.getCurrentStateHashtable());
    
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == HighScoreUtil.SUBMIT_TEXTBOX_COMMAND)
                        
                                    {
                                    this.logUtil!.putF("Submitted Score", this, COMMAND_ACTION);
    

                        if(displayable is HighScoreTextBox)
                        
                                    {
                                    
    var menuListener: HighScoreTextBox = displayable as HighScoreTextBox;
        
        
;
    
menuListener!.submitted= true;
    

                                    }
                                
this.allbinaryGameCanvasRunnableInterface!.setHighScoreSubmitted(true);
    
this.commandAction(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS, displayable);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DISPLAY_ABOUT)
                        
                                    {
                                    this.aboutCommandProcessor!.process(this, gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getAboutCanvas());
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.OPEN_WEB_URL)
                        
                                    {
                                    this.webCommandProcessor!.process(this, gameCommandsFactory!.OPEN_WEB_URL, NullCanvas.NULL_CANVAS);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.TOGGLE_KEYBOARD)
                        
                                    {
                                    
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;
        
        
;
    
virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.SHOW_EVENT);
    

                                    }
                                
                             else 
                        if(command.getLabel()!.compareTo(gameCommandsFactory!.TOGGLE_FULLSCREEN.getLabel()) == 0)
                        
                                    {
                                    
    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    

    var isFullScreen: boolean = features.isFeature(mainFeatureFactory!.FULL_SCREEN)!;
        
        
;
    

                        if(isFullScreen)
                        
                                    {
                                    features.removeDefault(mainFeatureFactory!.FULL_SCREEN);
    

                                    }
                                
                        else {
                            features.addDefault(mainFeatureFactory!.FULL_SCREEN);
    

                        }
                            
this.updateFullScreen();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, midletStrings!.COMMAND_ACTION, e);
    

                        if(command != GameCommandsFactory.getInstance()!.EXIT_COMMAND)
                        
                                    {
                                    this.exit(false);
    

                                    }
                                
}

}


    updateFullScreen(){

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;
        
        
;
    

    var isFullScreen: boolean = features.isFeature(mainFeatureFactory!.FULL_SCREEN)!;
        
        
;
    

    var displayable: Displayable = this.getDisplay()!.getCurrent()!;
        
        
;
    

                        if(displayable is Canvas)
                        
                                    {
                                    
    var canvas: Canvas = displayable as Canvas;
        
        
;
    
canvas.setFullScreenMode(isFullScreen);
    

                                    }
                                
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    getInputMappingInstructionsCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameInputMappingInstructionsCanvas(this, this.createGameLayerManager());
    
}


                //@Throws(Error::class)
            
    getInputMappingCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameInputMappingCanvas(abeClientInformation, this, this.createGameLayerManager(), this.getHelpPaintable());
    
}


                //@Throws(Error::class)
            
    getAboutCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicPaintablesCanvas(this, CanvasStrings.getInstance()!.ABOUT, this.createGameLayerManager(), AboutPaintableFactory.getInstance()!.paintableArray);
    
}


                //@Throws(Error::class)
            
    getHelpPaintable(): HelpPaintable{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createHighScoresCanvas(): HighScoresCanvas{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public startGameCanvasRunnableInterface(){

    var threadFactoryUtil: ThreadFactoryUtil = ThreadFactoryUtil.getInstance()!;
        
        
;
    
thread= threadFactoryUtil!.getInstance(this.allbinaryGameCanvasRunnableInterface);
    
this.logUtil!.putF(new StringMaker().
                            append("Thread Priority: ")!.appendint(thread.getPriority())!.toString(), this, "startGameCanvasRunnableInterface");
    
this.allbinaryGameCanvasRunnableInterface!.setThread(thread);
    
threadFactoryUtil!.start(thread);
    
}


                //@Throws(Error::class)
            
    stopGameCanvasRunnableInterface(){
this.logUtil!.putF(commonStrings!.START, this, gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
GameNotificationEventHandler.getInstance()!.removeAllListeners();
    
ColorChangeEventHandler.getInstance()!.removeAllListeners();
    
GameEventHandlerUtil.removeAllListeners();
    

    var gameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;
        
        
;
    

                        if(gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    this.logUtil!.putF("Set Running False", this, gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
gameCanvasRunnableInterface!.setRunning(false);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("StopGame - Could Not Stop", this, gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    

                        }
                            
ThreadUtil.getInstance()!.join(this.thread);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

                        if(features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL))
                        
                                    {
                                    progressCanvas!.addPortion(50, "Stopped Game Runnable");
    

                                    }
                                
                        else {
                            progressCanvas!.addPortion(50, "Stopped Main Runnable");
    

                        }
                            
this.logUtil!.putF(commonStrings!.END, this, gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
}


    public getGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allbinaryGameCanvasRunnableInterface;
    
}


    public setGameCanvasRunnableInterface(gameCanvasRunnableInterface: GameCanvasRunnableInterface){
    //var gameCanvasRunnableInterface = gameCanvasRunnableInterface
this.allbinaryGameCanvasRunnableInterface= gameCanvasRunnableInterface;
    
}


    createGameLayerManager(): AllBinaryGameLayerManager{

    var gameInfo: GameInfo = new GameInfo(GameTypeFactory.getInstance()!.SINGLE_PLAYER, GameMode.SERVER, 1, 1);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryGameLayerManager(basicColorFactory!.BLACK, basicColorFactory!.WHITE, gameInfo);
    
}


    getGameOptionsForm(): CommandForm{

    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameOptionsFormFactory.getInstance()!.init(this, "Game Options", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor());

                        ;
    
}


                //@Throws(Error::class)
            
    public save(){
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.SAVE);
    

    var hashtable: Hashtable<any, any> = this.getCurrentStateHashtable()!;
        
        
;
    
GamePersistanceSingleton.getInstance()!.save(abeClientInformation, hashtable);
    
}


                //@Throws(Error::class)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF(commonStrings!.START, this, "getCurrentStateHashtable");
    

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
;
    

                        if(allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    
    var currentHashtable: Hashtable<any, any> = this.allbinaryGameCanvasRunnableInterface!.getCurrentStateHashtable()!;
        
        
;
    

    var enumeration: Enumeration<any?> = currentHashtable!.keys()!;
        
        
;
    

    var key: any
;
    

        while(enumeration.hasMoreElements())
        {
key= enumeration.nextElement()!;
    
hashtable.put(key, currentHashtable!.get(key as Object));
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public setLoadGameForm(loadGameForm: LoadGameForm){
    //var loadGameForm = loadGameForm
this.loadGameForm= loadGameForm;
    
}


    public getLoadGameForm(): LoadGameForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return loadGameForm as LoadGameForm;
    
}


    public setResized(resized: boolean){
    //var resized = resized
this.resized= resized;
    
}


    public isResized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resized;
    
}


    private startedBefore: boolean = false;
        
        

    public isDemoLoading(): boolean{

                        if(startedBefore)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var displayable: Displayable = this.getDisplay()!.getCurrent()!;
        
        
;
    

                        if(displayable is DemoCanvas)
                        
                                    {
                                    
    var demoCanvas: DemoCanvas = displayable as DemoCanvas;
        
        
;
    

                        if(demoCanvas!.isDemoLoading())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

