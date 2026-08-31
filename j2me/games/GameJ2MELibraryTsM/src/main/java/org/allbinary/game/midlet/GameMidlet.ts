
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Enumeration } from '../../../../java/util/Enumeration.js';
      //not GWT import const Enumeration = globalThis.java.util.Enumeration;

      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      //not GWT import const Command = globalThis.javax.microedition.lcdui.Command;

      
import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      //not GWT import const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
import { Displayable } from '../../../../javax/microedition/lcdui/Displayable.js';
      //not GWT import const Displayable = globalThis.javax.microedition.lcdui.Displayable;

      
import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
      //not GWT import const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
import { MIDletStateChangeException } from '../../../../javax/microedition/midlet/MIDletStateChangeException.js';
      //not GWT import const MIDletStateChangeException = globalThis.javax.microedition.midlet.MIDletStateChangeException;

      
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
import { GameAdStateFactory } from '../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
      //not GWT import const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
import { FullScreenUtil } from '../../../../org/allbinary/canvas/FullScreenUtil.js';
      //not GWT import const FullScreenUtil = globalThis.org.allbinary.canvas.FullScreenUtil;

      
import { GameStatisticsFactory } from '../../../../org/allbinary/canvas/GameStatisticsFactory.js';
      //not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;

      
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
      //not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;

      
import { DebugInterface } from '../../../../org/allbinary/debug/DebugInterface.js';
      //not GWT import const DebugInterface = globalThis.org.allbinary.debug.DebugInterface;

      
import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
      //not GWT import const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      //not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
import { GameMode } from '../../../../org/allbinary/game/GameMode.js';
      //not GWT import const GameMode = globalThis.org.allbinary.game.GameMode;

      
import { GameStrings } from '../../../../org/allbinary/game/GameStrings.js';
      //not GWT import const GameStrings = globalThis.org.allbinary.game.GameStrings;

      
import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
      //not GWT import const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
import { PlayerTypesFactory } from '../../../../org/allbinary/game/PlayerTypesFactory.js';
      //not GWT import const PlayerTypesFactory = globalThis.org.allbinary.game.PlayerTypesFactory;

      
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      //not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { GameOptionsForm } from '../../../../org/allbinary/game/configuration/GameOptionsForm.js';
      //not GWT import const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;

      
import { GameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/GameOptionsFormFactory.js';
      //not GWT import const GameOptionsFormFactory = globalThis.org.allbinary.game.configuration.GameOptionsFormFactory;

      
import { InGameFeatures } from '../../../../org/allbinary/game/configuration/InGameFeatures.js';
      //not GWT import const InGameFeatures = globalThis.org.allbinary.game.configuration.InGameFeatures;

      
import { InGameOptionsForm } from '../../../../org/allbinary/game/configuration/InGameOptionsForm.js';
      //not GWT import const InGameOptionsForm = globalThis.org.allbinary.game.configuration.InGameOptionsForm;

      
import { InGameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/InGameOptionsFormFactory.js';
      //not GWT import const InGameOptionsFormFactory = globalThis.org.allbinary.game.configuration.InGameOptionsFormFactory;

      
import { LoadGameForm } from '../../../../org/allbinary/game/configuration/LoadGameForm.js';
      //not GWT import const LoadGameForm = globalThis.org.allbinary.game.configuration.LoadGameForm;

      
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      //not GWT import const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
import { GameFeatureEventHandler } from '../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
      //not GWT import const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
      //not GWT import const GameFeatureFormUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureFormUtil;

      
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      //not GWT import const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
import { GamePersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js';
      //not GWT import const GamePersistanceSingleton = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceSingleton;

      
import { KeyValuePersistance } from '../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js';
      //not GWT import const KeyValuePersistance = globalThis.org.allbinary.game.configuration.persistance.KeyValuePersistance;

      
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
import { BasicPaintablesCanvas } from '../../../../org/allbinary/game/displayable/canvas/BasicPaintablesCanvas.js';
      //not GWT import const BasicPaintablesCanvas = globalThis.org.allbinary.game.displayable.canvas.BasicPaintablesCanvas;

      
import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      //not GWT import const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
import { GameCanvasRunnableInterface } from '../../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
      //not GWT import const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

      
import { GameEventHandlerUtil } from '../../../../org/allbinary/game/displayable/canvas/GameEventHandlerUtil.js';
      //not GWT import const GameEventHandlerUtil = globalThis.org.allbinary.game.displayable.canvas.GameEventHandlerUtil;

      
import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
      //not GWT import const GameInputMappingCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingCanvas;

      
import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
      //not GWT import const GameInputMappingInstructionsCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;

      
import { MenuListener } from '../../../../org/allbinary/game/displayable/canvas/MenuListener.js';
      //not GWT import const MenuListener = globalThis.org.allbinary.game.displayable.canvas.MenuListener;

      
import { NullGameCanvasRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullGameCanvasRunnable.js';
      //not GWT import const NullGameCanvasRunnable = globalThis.org.allbinary.game.displayable.canvas.NullGameCanvasRunnable;

      
import { TextNotificationUtil } from '../../../../org/allbinary/game/input/TextNotificationUtil.js';
      //not GWT import const TextNotificationUtil = globalThis.org.allbinary.game.input.TextNotificationUtil;

      
import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      //not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
import { HelpPaintable } from '../../../../org/allbinary/game/paint/help/HelpPaintable.js';
      //not GWT import const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;

      
import { HighScoreCommands } from '../../../../org/allbinary/game/score/HighScoreCommands.js';
      //not GWT import const HighScoreCommands = globalThis.org.allbinary.game.score.HighScoreCommands;

      
import { HighScoreCommandsFactory } from '../../../../org/allbinary/game/score/HighScoreCommandsFactory.js';
      //not GWT import const HighScoreCommandsFactory = globalThis.org.allbinary.game.score.HighScoreCommandsFactory;

      
import { HighScoreTextBox } from '../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js';
      //not GWT import const HighScoreTextBox = globalThis.org.allbinary.game.score.displayable.HighScoreTextBox;

      
import { HighScoreUtil } from '../../../../org/allbinary/game/score/displayable/HighScoreUtil.js';
      //not GWT import const HighScoreUtil = globalThis.org.allbinary.game.score.displayable.HighScoreUtil;

      
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      //not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
      //not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
import { ResizableListenerHandler } from '../../../../org/allbinary/graphics/ResizableListenerHandler.js';
      //not GWT import const ResizableListenerHandler = globalThis.org.allbinary.graphics.ResizableListenerHandler;

      
import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      //not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      //not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
      //not GWT import const ColorChangeEventHandler = globalThis.org.allbinary.graphics.color.ColorChangeEventHandler;

      
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      //not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      //not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      //not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
import { AboutCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/AboutCommandProcessor.js';
      //not GWT import const AboutCommandProcessor = globalThis.org.allbinary.graphics.displayable.screen.AboutCommandProcessor;

      
import { AboutPaintableFactory } from '../../../../org/allbinary/graphics/displayable/screen/AboutPaintableFactory.js';
      //not GWT import const AboutPaintableFactory = globalThis.org.allbinary.graphics.displayable.screen.AboutPaintableFactory;

      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      //not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
import { WebCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/WebCommandProcessor.js';
      //not GWT import const WebCommandProcessor = globalThis.org.allbinary.graphics.displayable.screen.WebCommandProcessor;

      
import { AllBinarySensorManager } from '../../../../org/allbinary/input/AllBinarySensorManager.js';
      //not GWT import const AllBinarySensorManager = globalThis.org.allbinary.input.AllBinarySensorManager;

      
import { VirtualKeyboardEventHandler } from '../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      //not GWT import const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
import { BasicMotionGesturesHandler } from '../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      //not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { ClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      //not GWT import const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
import { InApplicationPurchaseFactory } from '../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
      //not GWT import const InApplicationPurchaseFactory = globalThis.org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory;

      
import { LockableFeature } from '../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js';
      //not GWT import const LockableFeature = globalThis.org.allbinary.logic.system.security.licensing.LockableFeature;

      
import { LockableFeatureFactory } from '../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
      //not GWT import const LockableFeatureFactory = globalThis.org.allbinary.logic.system.security.licensing.LockableFeatureFactory;

      
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      //not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
import { AllBinaryMediaManager } from '../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
      //not GWT import const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

      
import { MidletStrings } from '../../../../org/allbinary/midlet/MidletStrings.js';
      //not GWT import const MidletStrings = globalThis.org.allbinary.midlet.MidletStrings;

      
import { ProgressMidlet } from '../../../../org/allbinary/midlet/ProgressMidlet.js';
      //not GWT import const ProgressMidlet = globalThis.org.allbinary.midlet.ProgressMidlet;

      
import { NullThread } from '../../../../org/allbinary/thread/NullThread.js';
      //not GWT import const NullThread = globalThis.org.allbinary.thread.NullThread;

      
import { ThreadFactoryUtil } from '../../../../org/allbinary/thread/ThreadFactoryUtil.js';
      //not GWT import const ThreadFactoryUtil = globalThis.org.allbinary.thread.ThreadFactoryUtil;

      
import { ThreadUtil } from '../../../../org/allbinary/thread/ThreadUtil.js';
      //not GWT import const ThreadUtil = globalThis.org.allbinary.thread.ThreadUtil;

      
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { EnumerationUtil } from '../../../../org/allbinary/util/EnumerationUtil.js';
      const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameMidletStateFactory } from './GameMidletStateFactory.js';
import { GameMidletEventHandler } from './GameMidletEventHandler.js';
import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';

export class GameMidlet extends ProgressMidlet implements CommandListener {
        

    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    readonly features: Features = Features.getInstance()!;

    readonly midletStrings: MidletStrings = MidletStrings.getInstance()!;

    readonly myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;

    readonly gameStrings: GameStrings = GameStrings.getInstance()!;

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;

    readonly gameStateFactory: GameStateFactory = GameStateFactory.getInstance()!;

    readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly DISPLAYABLE: string = " Displayable: ";

    private readonly COMMAND_NAME: string = "command Name/Label: ";

    private readonly NO_COMMAND: string = "No Command";

    private readonly NO_DISPLAYABLE: string = "No Displayable";

    private readonly COMMAND_ACTION: string = new StringMaker().append("GameMidlet::")!.append(this.midletStrings!.COMMAND_ACTION)!.toString()!;

    private readonly PAUSE_APP_BACKGROUND: string = "pauseAppBackground";

    private readonly UN_PAUSE_APP_BACKGROUND: string = "unPauseAppBackground";

    private readonly aboutCommandProcessor: AboutCommandProcessor = AboutCommandProcessor.getInstance()!;

    private readonly webCommandProcessor: WebCommandProcessor = WebCommandProcessor.getInstance()!;

    private readonly gameMidletStateFactory: GameMidletStateFactory = GameMidletStateFactory.getInstance()!;

    readonly gameStartTimeHelper: TimeDelayHelper = new TimeDelayHelper(240);

    private readonly fullScreenUtil: FullScreenUtil = FullScreenUtil.getInstance()!;

    private readonly debugInterface: DebugInterface;

    private allbinaryGameCanvasRunnableInterface: GameCanvasRunnableInterface = NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;

    private thread: Thread = NullThread.NULL_THREAD;

    private loadGameForm: CommandForm;

    private isFullScreen: boolean= false;

    private resized: boolean= false;

public constructor (clientInformationFactory: ClientInformationFactory){
            super(clientInformationFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
SmallIntegerSingletonFactory.getInstance()!.initWithRange(0x291, 6);
    
this.loadGameForm= CommandForm.getNullCommandForm();
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.init(this);
    
GameFeatureEventHandler.getInstance()!.addListenerInterface(ChangedGameFeatureListener.getInstance());
    
GamePersistanceSingleton.getInstance()!.clear();
    
this.debugInterface= DebugFactory.getInstance();
    
this.init();
    
}


    init(){
}


                //@Throws(Exception.constructor)
            
    setDemo(){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createGame(){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    mediaShutdown(){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public stopAll(){
}


    pauseApp(){
this.pauseAppBackground(true);
    

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.getAdvertisements()!.stopAll();
    
}


    pauseAppBackground(background: boolean){
this.logUtil!.putF(this.commonStrings!.START, this, this.PAUSE_APP_BACKGROUND);
    

                        if(this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    this.allbinaryGameCanvasRunnableInterface!.pause();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("<<<<<< Null", this, this.PAUSE_APP_BACKGROUND);
    

                        }
                            
AllBinarySensorManager.getInstance()!.shutdown();
    
}


    unPauseApp(){
this.unPauseAppBackground(true);
    

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.getAdvertisements()!.startAll();
    
}


    unPauseAppBackground(background: boolean){
this.logUtil!.putF(this.commonStrings!.START, this, this.UN_PAUSE_APP_BACKGROUND);
    
AllBinarySensorManager.getInstance()!.init();
    

    var gameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;;
    

                        if(gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    gameCanvasRunnableInterface!.unPause();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("<<<<<< Null", this, this.UN_PAUSE_APP_BACKGROUND);
    

                        }
                            
}


    destroyAppInRunnable(unconditional: boolean, isProgress: boolean){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

                        if(isProgress)
                        
                                    {
                                    progressCanvas!.start();
    
this.commandAction(this.myCommandsFactory!.SET_DISPLAYABLE, progressCanvas);
    

                                    }
                                
this.destroyApp(unconditional);
    

                        if(isProgress)
                        
                                    {
                                    progressCanvas!.end();
    

                                    }
                                
}


    destroyApp(unconditional: boolean){

    var METHOD_NAME: string = "GameMidlet::destroyApp";;
    

        try {
            PreLogUtil.put(GameStatisticsFactory.getInstance()!.toString(), this, METHOD_NAME);
    

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.getAdvertisements()!.stopAll();
    

                        if(!this.isDestroyed())
                        
                                    {
                                    this.stopGameCanvasRunnableInterface();
    
this.setGameCanvasRunnableInterface(NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE);
    
this.mediaShutdown();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Midlet Managment Error: Midlet Should Only Be Destroyed Once", this, METHOD_NAME);
    

                        }
                            
super.destroyApp(true);
    
PreLogUtil.put(this.commonStrings!.END, this, METHOD_NAME);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, METHOD_NAME, e);
    
}

this.logUtil!.putF(this.commonStrings!.END, this, METHOD_NAME);
    
}


                //@Throws(MIDletStateChangeException.constructor)
            
    startApp(){

        try {
            
    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.getAdvertisements()!.startAll();
    

    var START_APP: string = "startApp";;
    
this.logUtil!.putF(this.commonStrings!.START, this, START_APP);
    

    var gameCanvasRunnableInterface: any = this.allbinaryGameCanvasRunnableInterface;;
    

                        if(gameCanvasRunnableInterface == NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.NO_GAME_STATE);
    
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
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "startApp", e);
    
this.destroyApp(false);
    
this.notifyDestroyed();
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public commandAction(command: Command, displayable: Displayable){

        try {
            
    var displayableAsString: string = this.NO_DISPLAYABLE;;
    

                        if(displayable != 
                                    null
                                )
                        
                                    {
                                    displayableAsString= displayable.toString();
    

                                    }
                                

    var label: string = this.NO_COMMAND;;
    

                        if(command != 
                                    null
                                )
                        
                                    {
                                    label= command.getLabel();
    

                                    }
                                
PreLogUtil.put(new StringMaker().append(this.COMMAND_NAME)!.append(label)!.append(this.DISPLAYABLE)!.append(displayableAsString)!.toString(), this, this.COMMAND_ACTION);
    

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

    var allbinaryGameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;;
    

    var gameCanvasRunnableInterface: any = allbinaryGameCanvasRunnableInterface;;
    

                        if(command == gameCommandsFactory!.SHOW_GAME_CANVAS)
                        
                                    {
                                    
                        if(this.getDisplay()!.getCurrent() != gameCanvasRunnableInterface && allbinaryGameCanvasRunnableInterface!.getType() != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE.getType())
                        
                                    {
                                    this.setDisplay(gameCanvasRunnableInterface as Displayable);
    

                                    }
                                
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS)
                        
                                    {
                                    
    var menuListener: MenuListener = displayable as unknown as MenuListener;;
    
menuListener!.close();
    
this.setDisplay(gameCanvasRunnableInterface as Displayable);
    
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.EXIT_COMMAND)
                        
                                    {
                                    
                        if(GameMidletEventHandler.getInstance()!.getEventListenerInterfaceListP()!.size() == 0)
                        
                                    {
                                    this.exitProgress(true);
    

                                    }
                                
GameMidletEventHandler.getInstance()!.fireEvent(new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance()!.NONE));
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.EXIT_WITHOUT_PROGRESS_COMMAND)
                        
                                    {
                                    this.exitProgress(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.START_COMMAND || command == gameCommandsFactory!.RESTART_COMMAND || command == gameCommandsFactory!.CONTINUE_COMMAND)
                        
                                    {
                                    
                        if(this.gameMidletStateFactory!.getCurrentGameState() != this.gameStateFactory!.PLAYING_GAME_STATE || command == gameCommandsFactory!.RESTART_COMMAND)
                        
                                    {
                                    
                        if(this.gameStartTimeHelper!.isTimeTNT())
                        
                                    {
                                    
                        if(command == gameCommandsFactory!.START_COMMAND && this.isDemoLoading())
                        
                                    {
                                    this.logUtil!.putF("Trying to Start Game Before Loading Complete", this, this.midletStrings!.COMMAND_ACTION);
    

                                    }
                                
                        else {
                            this.startedBefore= true;
    
this.createGame();
    
this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.PLAYING_GAME_STATE);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Starting Game Too Often", this, this.midletStrings!.COMMAND_ACTION);
    

                        }
                            

                                    }
                                
                        else {
                            this.logUtil!.putF("Already in playing state", this, this.COMMAND_ACTION);
    

                        }
                            

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.BUY_COMMAND)
                        
                                    {
                                    
    var inApplicationPurchaseFactory: InApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance()!;;
    

    var list: BasicArrayList = LockableFeatureFactory.getInstance()!.getList()!;;
    

    var lockableFeature: LockableFeature = list.get(0) as LockableFeature;;
    

                        if(list.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(lockableFeature))
                        
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
                                    
                        if(this.gameStartTimeHelper!.isTimeTNT())
                        
                                    {
                                    
                        if(displayable instanceof HighScoreTextBox)
                        
                                    {
                                    
    var menuListener: MenuListener = displayable as unknown as MenuListener;;
    
menuListener!.close();
    

                                    }
                                
this.stopGameCanvasRunnableInterface();
    
this.gameMidletStateFactory!.setCurrentGameState(this.gameStateFactory!.NO_GAME_STATE);
    
this.setDemo();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == this.myCommandsFactory!.RESUME_COMMAND)
                        
                                    {
                                    this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == this.myCommandsFactory!.PAUSE_COMMAND)
                        
                                    {
                                    this.pauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == this.myCommandsFactory!.SET_DISPLAYABLE)
                        
                                    {
                                    this.pauseAppBackground(false);
    
this.setDisplay(displayable);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.SET_MENU_DISPLAYABLE)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var menuListener: MenuListener = displayable as unknown as MenuListener;;
    
menuListener!.open();
    
this.setDisplay(displayable);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.START_TRACE)
                        
                                    {
                                    this.debugInterface!.start();
    

    var gameCanvas: AllBinaryGameCanvas = allbinaryGameCanvasRunnableInterface as AllBinaryGameCanvas;;
    
gameCanvas!.addCommand(gameCommandsFactory!.STOP_TRACE);
    
gameCanvas!.removeCommand(gameCommandsFactory!.START_TRACE);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.STOP_TRACE)
                        
                                    {
                                    this.pauseAppBackground(false);
    
this.debugInterface!.stop();
    
this.unPauseAppBackground(false);
    

    var gameCanvas: AllBinaryGameCanvas = allbinaryGameCanvasRunnableInterface as AllBinaryGameCanvas;;
    
gameCanvas!.addCommand(gameCommandsFactory!.START_TRACE);
    
gameCanvas!.removeCommand(gameCommandsFactory!.STOP_TRACE);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DEFAULT_OPTIONS)
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;;
    

                        if(tempDisplayable instanceof GameOptionsForm)
                        
                                    {
                                    GameFeatureFormUtil.getInstance()!.setDefault(tempDisplayable as CommandForm);
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == GameInputMappingInstructionsCanvas.DISPLAY)
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;;
    

                        if(tempDisplayable instanceof GameInputMappingCanvas)
                        
                                    {
                                    
    var gameInputMappingCanvas: GameInputMappingCanvas = tempDisplayable as GameInputMappingCanvas;;
    
gameInputMappingCanvas!.update();
    

                                    }
                                
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getInputMappingInstructionsCanvas());
    

                                    }
                                
                             else 
                        if(HighScoreCommandsFactory.getInstance()!.isHighScoreCommand(command))
                        
                                    {
                                    
    var tempDisplayable: Displayable = displayable;;
    

                        if(tempDisplayable instanceof HighScoresCanvas)
                        
                                    {
                                    
    var highScoresCanvas: HighScoresCanvas = tempDisplayable as HighScoresCanvas;;
    
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
                                    
    var menuListener: MenuListener = displayable as unknown as MenuListener;;
    
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
                                    
    var tempDisplayable: Displayable = displayable;;
    

                        if(tempDisplayable instanceof GameInputMappingCanvas)
                        
                                    {
                                    
    var gameInputMappingCanvas: GameInputMappingCanvas = tempDisplayable as GameInputMappingCanvas;;
    
gameInputMappingCanvas!.setDefault();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == InGameOptionsForm.DISPLAY)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(50, "In Game Options");
    

    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;;
    

    var inGameOptionsFormFactory: InGameOptionsFormFactory = InGameOptionsFormFactory.getInstance()!;;
    
inGameOptionsFormFactory!.init(this, new InGameFeatures(), "Options In Game", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor());
    

    var inGameOptionsForm: CommandForm = inGameOptionsFormFactory!.get()!;;
    
inGameOptionsForm!.setItemStateListener(allbinaryGameCanvasRunnableInterface);
    
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, inGameOptionsForm);
    

                                    }
                                
                             else 
                        if(command == InGameOptionsForm.DEFAULT)
                        
                                    {
                                    
    var inGameOptionsForm: InGameOptionsForm = InGameOptionsFormFactory.getInstance()!.get() as InGameOptionsForm;;
    
GameFeatureFormUtil.getInstance()!.setDefault(inGameOptionsForm);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DISPLAY_OPTIONS)
                        
                                    {
                                    AllBinaryMediaManager.setMuted(true);
    
this.stopAll();
    

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    
this.isFullScreen= this.features.isFeature(mainFeatureFactory!.FULL_SCREEN);
    
ResizableListenerHandler.getInstance()!.fireEvent(true);
    
this.setResized(false);
    
this.commandAction(gameCommandsFactory!.SET_MENU_DISPLAYABLE, this.getGameOptionsForm());
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.CLOSE_OPTIONS)
                        
                                    {
                                    ResizableListenerHandler.getInstance()!.fireEvent(false);
    
this.commandAction(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS, displayable);
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Close isFullScreen/change: ");
    
stringBuffer!.appendboolean(this.isFullScreen);
    
stringBuffer!.appendboolean(this.fullScreenUtil!.isScreenChange(this.isFullScreen));
    
stringBuffer!.append(" isResized: ");
    
stringBuffer!.appendboolean(this.isResized());
    
PreLogUtil.put(stringBuffer!.toString(), this, this.COMMAND_ACTION);
    

                        if(this.isResized() || this.fullScreenUtil!.isScreenChange(this.isFullScreen))
                        
                                    {
                                    this.updateFullScreen();
    

                                    }
                                
AllBinaryMediaManager.setMuted(false);
    

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DISPLAY_LOAD_FORM)
                        
                                    {
                                    this.pauseAppBackground(false);
    

    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(this.abeClientInformation);
    

                        if(this.getLoadGameForm() == CommandForm.getNullCommandForm())
                        
                                    {
                                    
    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;;
    
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
                                    
    var loadGameForm: LoadGameForm = this.getLoadGameForm() as LoadGameForm;;
    

    var index: number = loadGameForm!.getSelectedId()!;;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;;
    
this.setStartStateHashtable(keyValuePersistance!.get(index));
    

    var menuListener: MenuListener = this.getLoadGameForm()!;;
    
menuListener!.close();
    
PreLogUtil.put(BasicMotionGesturesHandler.getInstance()!.toString(), this, this.COMMAND_ACTION);
    
this.commandAction(gameCommandsFactory!.START_COMMAND, NullCanvas.NULL_CANVAS);
    
PreLogUtil.put(BasicMotionGesturesHandler.getInstance()!.toString(), this, this.COMMAND_ACTION);
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.DELETE_FILE)
                        
                                    {
                                    
    var loadGameForm: LoadGameForm = this.getLoadGameForm() as LoadGameForm;;
    

    var index: number = loadGameForm!.getSelectedText()!;;
    

                        if(index !=  -1)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;;
    
keyValuePersistance!.delete(this.abeClientInformation, index);
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAllSize(this.abeClientInformation, 1);
    
this.getLoadGameForm()!.update();
    

                                    }
                                

                                    }
                                
                             else 
                        if(command == gameCommandsFactory!.SAVE)
                        
                                    {
                                    
    var keyValuePersistance: KeyValuePersistance = GamePersistanceSingleton.getInstance()!;;
    
this.pauseAppBackground(false);
    
keyValuePersistance!.save(this.abeClientInformation, this.getCurrentStateHashtable());
    
this.unPauseAppBackground(false);
    

                                    }
                                
                             else 
                        if(command == HighScoreUtil.SUBMIT_TEXTBOX_COMMAND)
                        
                                    {
                                    this.logUtil!.putF("Submitted Score", this, this.COMMAND_ACTION);
    

                        if(displayable instanceof HighScoreTextBox)
                        
                                    {
                                    
    var highScoreTextBox: HighScoreTextBox = displayable as unknown as HighScoreTextBox;;
    
highScoreTextBox!.submitted= true;
    

                                    }
                                
allbinaryGameCanvasRunnableInterface!.setHighScoreSubmitted(true);
    
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
                                    
    var virtualKeyboardEventHandler: VirtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance()!;;
    
virtualKeyboardEventHandler!.fireEvent(virtualKeyboardEventHandler!.SHOW_EVENT);
    

                                    }
                                
                             else 
                        if(this.tsUtil!.compareTo(command.getLabel(), gameCommandsFactory!.TOGGLE_FULLSCREEN.getLabel()) == 0)
                        
                                    {
                                    
    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    

    var isFullScreen: boolean = this.features.isFeature(mainFeatureFactory!.FULL_SCREEN)!;;
    

                        if(isFullScreen)
                        
                                    {
                                    this.features.removeDefault(mainFeatureFactory!.FULL_SCREEN);
    

                                    }
                                
                        else {
                            this.features.addDefault(mainFeatureFactory!.FULL_SCREEN);
    

                        }
                            
this.updateFullScreen();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.midletStrings!.COMMAND_ACTION, e);
    

                        if(command != GameCommandsFactory.getInstance()!.EXIT_COMMAND)
                        
                                    {
                                    this.exitProgress(false);
    

                                    }
                                
}

}


    updateFullScreen(){

    var mainFeatureFactory: MainFeatureFactory = MainFeatureFactory.getInstance()!;;
    

    var isFullScreen: boolean = this.features.isFeature(mainFeatureFactory!.FULL_SCREEN)!;;
    

    var displayable: Displayable = this.getDisplay()!.getCurrent()!;;
    

                        if(displayable instanceof Canvas)
                        
                                    {
                                    
    var canvas: Canvas = displayable as unknown as Canvas;;
    
canvas.setFullScreenMode(isFullScreen);
    

                                    }
                                
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    getInputMappingInstructionsCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameInputMappingInstructionsCanvas(this, this.createGameLayerManager());
    
}


                //@Throws(Exception.constructor)
            
    getInputMappingCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameInputMappingCanvas(this.abeClientInformation, this, this.createGameLayerManager(), this.getHelpPaintable());
    
}


                //@Throws(Exception.constructor)
            
    getAboutCanvas(): MyCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicPaintablesCanvas(this, CanvasStrings.getInstance()!.ABOUT, this.createGameLayerManager(), AboutPaintableFactory.getInstance()!.paintableArray);
    
}


                //@Throws(Exception.constructor)
            
    getHelpPaintable(): HelpPaintable{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createHighScoresCanvas(): HighScoresCanvas{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public startGameCanvasRunnableInterface(){

    var threadFactoryUtil: ThreadFactoryUtil = ThreadFactoryUtil.getInstance()!;;
    
this.thread= threadFactoryUtil!.getInstanceGameCanvasRunnable(this.allbinaryGameCanvasRunnableInterface);
    
this.logUtil!.putF(new StringMaker().append("Thread Priority: ")!.appendint(this.thread.getPriority())!.toString(), this, "startGameCanvasRunnableInterface");
    
this.allbinaryGameCanvasRunnableInterface!.setThread(this.thread);
    
threadFactoryUtil!.start(this.thread);
    
}


                //@Throws(Exception.constructor)
            
    stopGameCanvasRunnableInterface(){
this.logUtil!.putF(this.commonStrings!.START, this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
GameNotificationEventHandler.getInstance()!.removeAllListeners();
    
ColorChangeEventHandler.getInstance()!.removeAllListeners();
    
GameEventHandlerUtil.removeAllListeners();
    

    var gameCanvasRunnableInterface: GameCanvasRunnableInterface = this.allbinaryGameCanvasRunnableInterface;;
    

                        if(gameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    this.logUtil!.putF("Set Running False: " +gameCanvasRunnableInterface, this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
gameCanvasRunnableInterface!.setRunning(false);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("StopGame - Could Not Stop", this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    

                        }
                            
ThreadUtil.getInstance()!.join(this.thread);
    

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    

                        if(this.features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL))
                        
                                    {
                                    progressCanvas!.addNormalPortion(50, "Stopped Game Runnable");
    

                                    }
                                
                        else {
                            progressCanvas!.addNormalPortion(50, "Stopped Main Runnable");
    

                        }
                            
this.logUtil!.putF(this.commonStrings!.END, this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
}


    public getGameCanvasRunnableInterface(): GameCanvasRunnableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryGameCanvasRunnableInterface;
    
}


    public setGameCanvasRunnableInterface(gameCanvasRunnableInterface: GameCanvasRunnableInterface){
this.allbinaryGameCanvasRunnableInterface= gameCanvasRunnableInterface;
    
}


    createGameLayerManager(): AllBinaryGameLayerManager{

    var gameInfo: GameInfo = new GameInfo(GameTypeFactory.getInstance()!.SINGLE_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, 1, 1);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AllBinaryGameLayerManager(this.basicColorFactory!.BLACK, this.basicColorFactory!.WHITE, gameInfo);
    
}


    getGameOptionsForm(): CommandForm{

    var layerManager: AllBinaryGameLayerManager = this.createGameLayerManager()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameOptionsFormFactory.getInstance()!.init(this, "Game Options", layerManager!.getBackgroundBasicColor(), layerManager!.getForegroundBasicColor());;
    
}


                //@Throws(Exception.constructor)
            
    public save(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.SAVE);
    

    var hashtable: Hashtable<any, any> = this.getCurrentStateHashtable()!;;
    
GamePersistanceSingleton.getInstance()!.save(this.abeClientInformation, hashtable);
    
}


                //@Throws(Exception.constructor)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF(this.commonStrings!.START, this, "getCurrentStateHashtable");
    

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();;
    

                        if(this.allbinaryGameCanvasRunnableInterface != NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE)
                        
                                    {
                                    
    var currentHashtable: Hashtable<any, any> = this.allbinaryGameCanvasRunnableInterface!.getCurrentStateHashtable()!;;
    

    var enumeration: Enumeration<any> = currentHashtable!.keys()!;;
    

    var key: any;;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
key= this.enumerationUtil!.nextElement(enumeration)!;
    
hashtable.put(key, currentHashtable!.get(key));
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public setLoadGameForm(loadGameForm: LoadGameForm){
this.loadGameForm= loadGameForm;
    
}


    public getLoadGameForm(): CommandForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.loadGameForm;
    
}


    public setResized(resized: boolean){
this.resized= resized;
    
}


    public isResized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.resized;
    
}


    private startedBefore: boolean = false;

    public isDemoLoading(): boolean{

                        if(this.startedBefore)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var displayable: Displayable = this.getDisplay()!.getCurrent()!;;
    

                        if(displayable instanceof DemoCanvas)
                        
                                    {
                                    
    var demoCanvas: DemoCanvas = displayable as unknown as DemoCanvas;;
    

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



