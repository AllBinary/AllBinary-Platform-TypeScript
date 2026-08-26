
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Enumeration } from '../../../../java/util/Enumeration.js';
      const Enumeration = globalThis.java.util.Enumeration;

      
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Displayable } from '../../../../javax/microedition/lcdui/Displayable.js';
      const Displayable = globalThis.javax.microedition.lcdui.Displayable;

      
//not game specific package import { NullCanvas } from '../../../../javax/microedition/lcdui/NullCanvas.js';
      const NullCanvas = globalThis.javax.microedition.lcdui.NullCanvas;

      
//not game specific package import { MIDletStateChangeException } from '../../../../javax/microedition/midlet/MIDletStateChangeException.js';
      const MIDletStateChangeException = globalThis.javax.microedition.midlet.MIDletStateChangeException;

      
//not game specific package import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { GameAdStateFactory } from '../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
      const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
//not game specific package import { FullScreenUtil } from '../../../../org/allbinary/canvas/FullScreenUtil.js';
      const FullScreenUtil = globalThis.org.allbinary.canvas.FullScreenUtil;

      
//not game specific package import { GameStatisticsFactory } from '../../../../org/allbinary/canvas/GameStatisticsFactory.js';
      const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;

      
//not game specific package import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
      const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;

      
//not game specific package import { DebugInterface } from '../../../../org/allbinary/debug/DebugInterface.js';
      const DebugInterface = globalThis.org.allbinary.debug.DebugInterface;

      
//not game specific package import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
      const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
//not game specific package import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { GameMode } from '../../../../org/allbinary/game/GameMode.js';
      const GameMode = globalThis.org.allbinary.game.GameMode;

      
//not game specific package import { GameStrings } from '../../../../org/allbinary/game/GameStrings.js';
      const GameStrings = globalThis.org.allbinary.game.GameStrings;

      
//not game specific package import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
      const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;

      
//not game specific package import { PlayerTypesFactory } from '../../../../org/allbinary/game/PlayerTypesFactory.js';
      const PlayerTypesFactory = globalThis.org.allbinary.game.PlayerTypesFactory;

      
//not game specific package import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { GameOptionsForm } from '../../../../org/allbinary/game/configuration/GameOptionsForm.js';
      const GameOptionsForm = globalThis.org.allbinary.game.configuration.GameOptionsForm;

      
//not game specific package import { GameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/GameOptionsFormFactory.js';
      const GameOptionsFormFactory = globalThis.org.allbinary.game.configuration.GameOptionsFormFactory;

      
//not game specific package import { InGameFeatures } from '../../../../org/allbinary/game/configuration/InGameFeatures.js';
      const InGameFeatures = globalThis.org.allbinary.game.configuration.InGameFeatures;

      
//not game specific package import { InGameOptionsForm } from '../../../../org/allbinary/game/configuration/InGameOptionsForm.js';
      const InGameOptionsForm = globalThis.org.allbinary.game.configuration.InGameOptionsForm;

      
//not game specific package import { InGameOptionsFormFactory } from '../../../../org/allbinary/game/configuration/InGameOptionsFormFactory.js';
      const InGameOptionsFormFactory = globalThis.org.allbinary.game.configuration.InGameOptionsFormFactory;

      
//not game specific package import { LoadGameForm } from '../../../../org/allbinary/game/configuration/LoadGameForm.js';
      const LoadGameForm = globalThis.org.allbinary.game.configuration.LoadGameForm;

      
//not game specific package import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
//not game specific package import { GameFeatureEventHandler } from '../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
      const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
      const GameFeatureFormUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureFormUtil;

      
//not game specific package import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { GamePersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js';
      const GamePersistanceSingleton = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceSingleton;

      
//not game specific package import { KeyValuePersistance } from '../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js';
      const KeyValuePersistance = globalThis.org.allbinary.game.configuration.persistance.KeyValuePersistance;

      
//not game specific package import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not game specific package import { BasicPaintablesCanvas } from '../../../../org/allbinary/game/displayable/canvas/BasicPaintablesCanvas.js';
      const BasicPaintablesCanvas = globalThis.org.allbinary.game.displayable.canvas.BasicPaintablesCanvas;

      
//not game specific package import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
      const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;

      
//not game specific package import { GameCanvasRunnableInterface } from '../../../../org/allbinary/game/displayable/canvas/GameCanvasRunnableInterface.js';
      const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;

      
//not game specific package import { GameEventHandlerUtil } from '../../../../org/allbinary/game/displayable/canvas/GameEventHandlerUtil.js';
      const GameEventHandlerUtil = globalThis.org.allbinary.game.displayable.canvas.GameEventHandlerUtil;

      
//not game specific package import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
      const GameInputMappingCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingCanvas;

      
//not game specific package import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
      const GameInputMappingInstructionsCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;

      
//not game specific package import { MenuListener } from '../../../../org/allbinary/game/displayable/canvas/MenuListener.js';
      const MenuListener = globalThis.org.allbinary.game.displayable.canvas.MenuListener;

      
//not game specific package import { NullGameCanvasRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullGameCanvasRunnable.js';
      const NullGameCanvasRunnable = globalThis.org.allbinary.game.displayable.canvas.NullGameCanvasRunnable;

      
//not game specific package import { TextNotificationUtil } from '../../../../org/allbinary/game/input/TextNotificationUtil.js';
      const TextNotificationUtil = globalThis.org.allbinary.game.input.TextNotificationUtil;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { GameNotificationEventHandler } from '../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
      const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;

      
//not game specific package import { HelpPaintable } from '../../../../org/allbinary/game/paint/help/HelpPaintable.js';
      const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;

      
//not game specific package import { HighScoreCommands } from '../../../../org/allbinary/game/score/HighScoreCommands.js';
      const HighScoreCommands = globalThis.org.allbinary.game.score.HighScoreCommands;

      
//not game specific package import { HighScoreCommandsFactory } from '../../../../org/allbinary/game/score/HighScoreCommandsFactory.js';
      const HighScoreCommandsFactory = globalThis.org.allbinary.game.score.HighScoreCommandsFactory;

      
//not game specific package import { HighScoreTextBox } from '../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js';
      const HighScoreTextBox = globalThis.org.allbinary.game.score.displayable.HighScoreTextBox;

      
//not game specific package import { HighScoreUtil } from '../../../../org/allbinary/game/score/displayable/HighScoreUtil.js';
      const HighScoreUtil = globalThis.org.allbinary.game.score.displayable.HighScoreUtil;

      
//not game specific package import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
      const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;

      
//not game specific package import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
      const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
//not game specific package import { ResizableListenerHandler } from '../../../../org/allbinary/graphics/ResizableListenerHandler.js';
      const ResizableListenerHandler = globalThis.org.allbinary.graphics.ResizableListenerHandler;

      
//not game specific package import { ProgressCanvas } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { ColorChangeEventHandler } from '../../../../org/allbinary/graphics/color/ColorChangeEventHandler.js';
      const ColorChangeEventHandler = globalThis.org.allbinary.graphics.color.ColorChangeEventHandler;

      
//not game specific package import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not game specific package import { AboutCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/AboutCommandProcessor.js';
      const AboutCommandProcessor = globalThis.org.allbinary.graphics.displayable.screen.AboutCommandProcessor;

      
//not game specific package import { AboutPaintableFactory } from '../../../../org/allbinary/graphics/displayable/screen/AboutPaintableFactory.js';
      const AboutPaintableFactory = globalThis.org.allbinary.graphics.displayable.screen.AboutPaintableFactory;

      
//not game specific package import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
//not game specific package import { WebCommandProcessor } from '../../../../org/allbinary/graphics/displayable/screen/WebCommandProcessor.js';
      const WebCommandProcessor = globalThis.org.allbinary.graphics.displayable.screen.WebCommandProcessor;

      
//not game specific package import { AllBinarySensorManager } from '../../../../org/allbinary/input/AllBinarySensorManager.js';
      const AllBinarySensorManager = globalThis.org.allbinary.input.AllBinarySensorManager;

      
//not game specific package import { VirtualKeyboardEventHandler } from '../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
      const VirtualKeyboardEventHandler = globalThis.org.allbinary.input.event.VirtualKeyboardEventHandler;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { ClientInformationFactory } from '../../../../org/allbinary/logic/system/security/licensing/ClientInformationFactory.js';
      const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;

      
//not game specific package import { InApplicationPurchaseFactory } from '../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
      const InApplicationPurchaseFactory = globalThis.org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory;

      
//not game specific package import { LockableFeature } from '../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js';
      const LockableFeature = globalThis.org.allbinary.logic.system.security.licensing.LockableFeature;

      
//not game specific package import { LockableFeatureFactory } from '../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
      const LockableFeatureFactory = globalThis.org.allbinary.logic.system.security.licensing.LockableFeatureFactory;

      
//not game specific package import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { AllBinaryMediaManager } from '../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
      const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

      
//not game specific package import { MidletStrings } from '../../../../org/allbinary/midlet/MidletStrings.js';
      const MidletStrings = globalThis.org.allbinary.midlet.MidletStrings;

      
//not game specific package import { ProgressMidlet } from '../../../../org/allbinary/midlet/ProgressMidlet.js';
      const ProgressMidlet = globalThis.org.allbinary.midlet.ProgressMidlet;

      
//not game specific package import { NullThread } from '../../../../org/allbinary/thread/NullThread.js';
      const NullThread = globalThis.org.allbinary.thread.NullThread;

      
//not game specific package import { ThreadFactoryUtil } from '../../../../org/allbinary/thread/ThreadFactoryUtil.js';
      const ThreadFactoryUtil = globalThis.org.allbinary.thread.ThreadFactoryUtil;

      
//not game specific package import { ThreadUtil } from '../../../../org/allbinary/thread/ThreadUtil.js';
      const ThreadUtil = globalThis.org.allbinary.thread.ThreadUtil;

      
//not game specific package import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { EnumerationUtil } from '../../../../org/allbinary/util/EnumerationUtil.js';
      const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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
                                    this.logUtil!.putF("Set Running False", this, this.gameStrings!.STOP_GAME_CANVAS_RUNNABLE_INTERFACE);
    
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
                
            

