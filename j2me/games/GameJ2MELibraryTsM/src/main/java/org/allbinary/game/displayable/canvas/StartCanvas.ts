
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
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
//not game specific package import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { IndexedAnimationBehavior } from '../../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
      const IndexedAnimationBehavior = globalThis.org.allbinary.animation.IndexedAnimationBehavior;

      
//not game specific package import { SpecialAnimation } from '../../../../../org/allbinary/animation/special/SpecialAnimation.js';
      const SpecialAnimation = globalThis.org.allbinary.animation.special.SpecialAnimation;

      
//not game specific package import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
      const GameAdStateFactory = globalThis.org.allbinary.business.advertisement.GameAdStateFactory;

      
//not game specific package import { BaseGameStatistics } from '../../../../../org/allbinary/canvas/BaseGameStatistics.js';
      const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;

      
//not game specific package import { CustomGameMenuUtil } from '../../../../../org/allbinary/canvas/CustomGameMenuUtil.js';
      const CustomGameMenuUtil = globalThis.org.allbinary.canvas.CustomGameMenuUtil;

      
//not game specific package import { FullScreenUtil } from '../../../../../org/allbinary/canvas/FullScreenUtil.js';
      const FullScreenUtil = globalThis.org.allbinary.canvas.FullScreenUtil;

      
//not game specific package import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
      const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;

      
//not game specific package import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
      const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;

      
//not game specific package import { GameAdState } from '../../../../../org/allbinary/game/GameAdState.js';
      const GameAdState = globalThis.org.allbinary.game.GameAdState;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { ChangedGameFeatureListener } from '../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
      const ChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.ChangedGameFeatureListener;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
      const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

      
//not game specific package import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
      const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

      
//not game specific package import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
      const BasicBuildGameInitializerFactory = globalThis.org.allbinary.game.init.BasicBuildGameInitializerFactory;

      
//not game specific package import { GameInitializationUtil } from '../../../../../org/allbinary/game/init/GameInitializationUtil.js';
      const GameInitializationUtil = globalThis.org.allbinary.game.init.GameInitializationUtil;

      
//not game specific package import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
      const GameInputStrings = globalThis.org.allbinary.game.input.GameInputStrings;

      
//not game specific package import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
      const DownGameKeyEventHandler = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandler;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
      const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;

      
//not game specific package import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
      const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
//not game specific package import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
      const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
      const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
//not game specific package import { DemoGameMidlet } from '../../../../../org/allbinary/game/midlet/DemoGameMidlet.js';
      const DemoGameMidlet = globalThis.org.allbinary.game.midlet.DemoGameMidlet;

      
//not game specific package import { HighScoreCommands } from '../../../../../org/allbinary/game/score/HighScoreCommands.js';
      const HighScoreCommands = globalThis.org.allbinary.game.score.HighScoreCommands;

      
//not game specific package import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
//not game specific package import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
      const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

      
//not game specific package import { HighScoresHelper } from '../../../../../org/allbinary/game/score/HighScoresHelper.js';
      const HighScoresHelper = globalThis.org.allbinary.game.score.HighScoresHelper;

      
//not game specific package import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
      const HighScoresPaintable = globalThis.org.allbinary.game.score.HighScoresPaintable;

      
//not game specific package import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
      const NullHighScoresSingletonFactory = globalThis.org.allbinary.game.score.NullHighScoresSingletonFactory;

      
//not game specific package import { GameState } from '../../../../../org/allbinary/game/state/GameState.js';
      const GameState = globalThis.org.allbinary.game.state.GameState;

      
//not game specific package import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
      const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { ResizableListenerHandler } from '../../../../../org/allbinary/graphics/ResizableListenerHandler.js';
      const ResizableListenerHandler = globalThis.org.allbinary.graphics.ResizableListenerHandler;

      
//not game specific package import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
      const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;

      
//not game specific package import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
      const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { MyCommandsFactory } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
//not game specific package import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
      const DisplayChangeEventHandler = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventHandler;

      
//not game specific package import { DisplayChangeEventListener } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
      const DisplayChangeEventListener = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventListener;

      
//not game specific package import { FormType } from '../../../../../org/allbinary/graphics/form/FormType.js';
      const FormType = globalThis.org.allbinary.graphics.form.FormType;

      
//not game specific package import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
      const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

      
//not game specific package import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
      const CurrentDisplayableFactory = globalThis.org.allbinary.graphics.opengles.CurrentDisplayableFactory;

      
//not game specific package import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
//not game specific package import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
//not game specific package import { OpenGLThreadUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js';
      const OpenGLThreadUtil = globalThis.org.allbinary.graphics.opengles.OpenGLThreadUtil;

      
//not game specific package import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
      const InitUpdatePaintable = globalThis.org.allbinary.graphics.paint.InitUpdatePaintable;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { StatePaintable } from '../../../../../org/allbinary/graphics/paint/StatePaintable.js';
      const StatePaintable = globalThis.org.allbinary.graphics.paint.StatePaintable;

      
//not game specific package import { StatePaintableFactory } from '../../../../../org/allbinary/graphics/paint/StatePaintableFactory.js';
      const StatePaintableFactory = globalThis.org.allbinary.graphics.paint.StatePaintableFactory;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
      const InApplicationPurchaseFactory = globalThis.org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory;

      
//not game specific package import { LockableFeature } from '../../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js';
      const LockableFeature = globalThis.org.allbinary.logic.system.security.licensing.LockableFeature;

      
//not game specific package import { LockableFeatureFactory } from '../../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
      const LockableFeatureFactory = globalThis.org.allbinary.logic.system.security.licensing.LockableFeatureFactory;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { AllBinaryMediaManager } from '../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
      const AllBinaryMediaManager = globalThis.org.allbinary.media.audio.AllBinaryMediaManager;

      
//not game specific package import { EarlySoundsFactory } from '../../../../../org/allbinary/media/audio/EarlySoundsFactory.js';
      const EarlySoundsFactory = globalThis.org.allbinary.media.audio.EarlySoundsFactory;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCanvasRunnableInterface } from './GameCanvasRunnableInterface.js';
import { MenuListener } from './MenuListener.js';
import { FormUtil } from './FormUtil.js';
import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
import { NullWaitGameRunnable } from './NullWaitGameRunnable.js';
import { GameRunnable } from './GameRunnable.js';
import { GameInputMappingCanvas } from './GameInputMappingCanvas.js';

export class StartCanvas extends RunnableCanvas implements GameCanvasRunnableInterface, MenuListener, DisplayChangeEventListener {
        

    private static readonly id: number = 0;

    private static readonly BOT_GAME_STATS: string = "Bot Game Statistics: ";

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    readonly features: Features = Features.getInstance()!;

    readonly openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;

    readonly myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;

    readonly gameStateFactory: GameStateFactory = GameStateFactory.getInstance()!;

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;

    readonly formUtil: FormUtil = FormUtil.getInstance()!;

    private basicGameDemoPaintable: StatePaintable = StatePaintableFactory.getInstance()!;

    private specialAnimationInterface: SpecialAnimation = SpecialAnimation.getInstance()!;

    paintedSpecialAnimationInterface: Animation = SpecialAnimation.getInstance()!;

    private readonly fullScreenUtil: FullScreenUtil = FullScreenUtil.getInstance()!;

    private readonly highScoresHelper: HighScoresHelper = new HighScoresHelper();

    private readonly realHighScoresPaintable: HighScoresPaintable = new HighScoresPaintable();

    private highScoresPaintable: Paintable = NullPaintable.getInstance()!;

    private state: number = 0;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(6000);

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface;

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;

    private menuForm: ScrollSelectionForm = ScrollSelectionForm.getNullScrollSelectionForm()!;

    private readonly gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory;

    private initialized: boolean= false;

    private defaultPaintableInterface: Paintable = NullPaintable.getInstance()!;

    private paintableInterface: PaintableInterface = NullPaintable.getInstance()!;

    private readonly overlayPaintable: InitUpdatePaintable;

    private tempWait: number = NullWaitGameRunnable.getInstance()!.WAIT;

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;

    gameRunnable: GameRunnable = NullWaitGameRunnable.getInstance()!;

    private progressPaintable: PaintableInterface = ProgressCanvasFactory.getLazyInstance()!;

public constructor (abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, highScoresFactoryInterface: HighScoresFactoryInterface, paintable: Paintable, overlayPaintable: InitUpdatePaintable, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, isContinue: boolean){
            super(commandListener, CurrentDisplayableFactory.getInstance()!.DEFAULT_CHILD_NAME_LIST, true);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setWait(NullWaitGameRunnable.getInstance()!.WAIT);
    
this.gameInitializationInterfaceFactoryInterface= gameInitializationInterfaceFactoryInterface;
    
GameInitializationUtil.getInstance()!.initDemo(abeClientInformation, this, gameInitializationInterfaceFactoryInterface);
    
ResizableListenerHandler.getInstance()!.fireEvent(false);
    
this.overlayPaintable= overlayPaintable;
    
this.highScoresFactoryInterface= highScoresFactoryInterface;
    
this.setDefaultPaintableInterface(paintable);
    
this.setPaintableInterface(this.getDefaultPaintableInterface());
    

                        if(isContinue)
                        
                                    {
                                    this.addCommand(GameCommandsFactory.getInstance()!.CONTINUE_COMMAND);
    

                                    }
                                

                        if(ChangedGameFeatureListener.getInstance()!.isChangedFeature(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    this.mediaInit();
    

                                    }
                                
DisplayChangeEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){

        try {
            
    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;;
    

                        if(scrollSelectionForm != 
                                    null
                                )
                        
                                    {
                                    
    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;;
    

    var rectangle: Rectangle = this.formUtil!.createFormRectangle()!;;
    
scrollSelectionForm!.init(rectangle, formType);
    

                                    }
                                
this.overlayPaintable!.init();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


    getCustomCommands(): any[]{

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
    var commandArray: any[] = 
                                                        [
                                                            gameCommandsFactory!.START_COMMAND,HighScoreCommands.getInstance()!.DISPLAY,GameInputMappingCanvas.DISPLAY,gameCommandsFactory!.DISPLAY_ABOUT
                                                        ];;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandArray;
    

                                    }
                                
                        else {
                            
    var commandList: BasicArrayList = new BasicArrayListD();;
    
commandList!.add(gameCommandsFactory!.START_COMMAND);
    

    var inApplicationPurchaseFactory: InApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance()!;;
    

                        if(inApplicationPurchaseFactory!.isEnabled())
                        
                                    {
                                    
    var list: BasicArrayList = LockableFeatureFactory.getInstance()!.getList()!;;
    

                        if(list.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(list.get(0) as LockableFeature))
                        
                                    {
                                    commandList!.add(gameCommandsFactory!.BUY_COMMAND);
    

                                    }
                                

                                    }
                                
commandList!.add(HighScoreCommands.getInstance()!.DISPLAY);
    

        try {
            
    var isOverScan: boolean = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()!;;
    

                        if(SWTUtil.isSWT)
                        
                                    {
                                    commandList!.add(GameInputMappingCanvas.DISPLAY);
    

                                    }
                                
                             else 
                        if(!isOverScan)
                        
                                    {
                                    commandList!.add(gameCommandsFactory!.DISPLAY_OPTIONS);
    
commandList!.add(gameCommandsFactory!.DISPLAY_LOAD_FORM);
    
commandList!.add(GameInputMappingCanvas.DISPLAY);
    

                                    }
                                

                //: 
} catch(e) 
            {
}

commandList!.add(gameCommandsFactory!.DISPLAY_ABOUT);
    

    var commandArray: any[] = commandList!.toArray()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandArray;
    

                        }
                            
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    

    var commandArray: any[] = this.getCustomCommands()!;;
    

    var size: number = commandArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.addCommand(commandArray[index]! as Command);
    
}

CustomGameMenuUtil.add(this);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    public initPostPaint(){
}


                //@Throws(Exception.constructor)
            
    public mediaInit(){
AllBinaryMediaManager.init(EarlySoundsFactory.getInstance());
    
}


    public itemStateChanged(item: Item){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this);
    
}


                //@Throws(Exception.constructor)
            
    initMenu(){
this.close();
    
this.open();
    
}


    public open(){
BasicMotionGesturesHandler.getInstance()!.addListenerInterface(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
}


    public close(){
BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StartCanvas.id;
    
}


    public keyPressed(keyCode: number){
this.keyPressedByDevice(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
this.keyReleasedByDevice(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
this.keyRepeatedByDevice(keyCode, 0);
    
}


    public keyPressedByDevice(keyCode: number, deviceId: number){
this.addGameKeyEvent(keyCode, false);
    
}


    public keyReleasedByDevice(keyCode: number, deviceId: number){
this.removeGameKeyEvent(keyCode, false);
    
}


    private isSingleKeyRepeatableProcessing: boolean = this.features.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS)!;

    public keyRepeatedByDevice(keyCode: number, deviceId: number){

                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    this.addGameKeyEvent(keyCode, true);
    

                                    }
                                
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    addGameKeyEvent(keyCode: number, repeated: boolean){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode)!;;
    

                        if(gameKey != this.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey)!;;
    
DownGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


    removeGameKeyEvent(keyCode: number, repeated: boolean){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode)!;;
    

                        if(gameKey != this.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey)!;;
    
UpGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.REMOVE_KEY_EVENT);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.REMOVE_KEY_EVENT, e);
    
}

}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public pause(){
this.close();
    
this.setPaused(true);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public unPause(){
this.open();
    
this.setPaused(false);
    
}


    public isPausable(): boolean{

                        if(CurrentDisplayableFactory.getInstance()!.getUsedRunnable() == NullWaitGameRunnable.getInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isGameOver(): boolean{
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.NOT_IMPLEMENTED)!.append(" since not a game")!.toString(), this, "isGameOver");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public setLoadStateHashtable(hashtable: Hashtable<any, any>){
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "setLoadStateHashtable");
    
}


                //@Throws(Exception.constructor)
            
    public getLoadStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "getLoadStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nullUtil!.NULL_TABLE;
    
}


                //@Throws(Exception.constructor)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF("Trying to save the AI lol", this, "getCurrentStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nullUtil!.NULL_TABLE;
    
}


    public setHighScoreSubmitted(isNotUsed: boolean){
}


    public paint(graphics: Graphics){
this.paintableInterface!.paint(graphics);
    
this.paintedSpecialAnimationInterface!.paintXY(graphics, 0, 0);
    
this.highScoresPaintable!.paint(graphics);
    
this.getBasicGameDemoPaintable()!.paint(graphics);
    
this.overlayPaintable!.paint(graphics);
    
this.progressPaintable!.paint(graphics);
    
}


    public paintThreed(graphics: Graphics){
this.paintableInterface!.paintThreed(graphics);
    
this.paintedSpecialAnimationInterface!.paintThreedXYZ(graphics, 0, 0, 0);
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public processGameOver(){
this.logUtil!.putF("Not Implemented since not a game", this, "setGameOver");
    
}


    demoStateChange(){

    var newState: number = this.state +1;;
    

                        if(newState > 2)
                        
                                    {
                                    newState= 0;
    

                                    }
                                
                             else 
                        if(newState == 2)
                        
                                    {
                                    
                        if(!this.highScoresHelper!.isAnyHighScores())
                        
                                    {
                                    newState= 0;
    

                                    }
                                
                        else {
                            
    var highScores: HighScores = this.highScoresHelper!.getNextHighScores()!;;
    

                        if(highScores == NullHighScoresSingletonFactory.getInstance())
                        
                                    {
                                    newState= 0;
    

                                    }
                                
                        else {
                            this.getRealHighScoresPaintable()!.setHighScores(highScores);
    

                        }
                            

                        }
                            

                                    }
                                
this.setState(newState);
    
this.updateDemoState();
    
}


    private readonly SET_STATE: string = "setState";

    updateDemoState(){
PreLogUtil.put(SmallIntegerSingletonFactory.getInstance()!.createInstance(this.state)!.toString(), this, this.SET_STATE);
    
this.getBasicGameDemoPaintable()!.setState(this.state);
    

                        if(this.state == 0)
                        
                                    {
                                    this.highScoresPaintable= NullPaintable.getInstance();
    
this.paintedSpecialAnimationInterface= this.getSpecialAnimationInterface();
    
this.getSpecialAnimationInterface()!.reset();
    

                                    }
                                
                             else 
                        if(this.state == 1)
                        
                                    {
                                    this.paintedSpecialAnimationInterface= SpecialAnimation.getInstance();
    

                                    }
                                
                             else 
                        if(this.state == 2)
                        
                                    {
                                    this.highScoresPaintable= this.getRealHighScoresPaintable();
    

                                    }
                                

    var gameAdState: GameAdState = this.gameAdStateFactory!.getCurrentInstance()!;;
    
gameAdState!.processPageAdState();
    
}


                //@Throws(Exception.constructor)
            
    getNextRandom(): number{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createGameLayerManager(randomValue: number): AllBinaryGameLayerManager{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createRunnable(randomLevel: number): GameCanvasRunnableInterface{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    createCanvas(){
this.highScoresPaintable= NullPaintable.getInstance();
    

    var randomLevel: number = this.getNextRandom()!;;
    
}


                //@Throws(Exception.constructor)
            
    start(){
}


    public preDemoProcess(){
this.overlayPaintable!.update();
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.getMenuInputProcessor()!.processInputList();
    
this.preDemoProcess();
    

                        if(this.state == 0)
                        
                                    {
                                    
    var indexedAnimationBehavior: IndexedAnimationBehavior = this.getSpecialAnimationInterface()!.getAnimationBehavior() as IndexedAnimationBehavior;;
    

                        if(indexedAnimationBehavior!.loopIndex < 1)
                        
                                    {
                                    this.timeDelayHelper!.setStartTimeTNT();
    

                                    }
                                

    var demoGameMidlet: DemoGameMidlet = this.getCustomCommandListener() as DemoGameMidlet;;
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    startDemoGame(){
}


                //@Throws(Exception.constructor)
            
    processGame(){
this.gameRunnable!.run();
    
this.specialAnimationInterface!.nextFrame();
    
this.process();
    
}


    public run(){
this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN);
    

        try {
            
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
progressCanvas!.addNormalPortion(50, "Demo Thread");
    
this.setCurrentThread();
    
this.setRunning(true);
    

                        if(this.features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    progressCanvas!.end();
    

                                    }
                                
                        else {
                            progressCanvas!.addNormalPortion(50, "Demo Thread Running");
    

                        }
                            
this.fullScreenUtil!.initOnRun(this, this.getCustomCommandListener());
    
this.initMenu();
    
this.initPostPaint();
    
this.updateDemoState();
    

                        if(this.features.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    OpenGLThreadUtil.getInstance()!.onResume();
    

                                    }
                                

                        if(this.features.isDefault(this.openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
        while(this.isRunning())
        {
this.loopTimeHelper!.setStartTimeTNT();
    
this.processGame();
    
this.processLoopSleep();
    
}

this.end();
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN);
    
}


    public setRunning(running: boolean){
super.setRunning(running);
    

        try {
            
                        if((this.features.isDefault(this.openGLFeatureFactory!.OPENGL) || J2MEUtil.isHTML()) && !running)
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;;
    
currentDisplayableFactory!.clearRunnable();
    
this.end();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.SET_RUNNING, e);
    
}

}


    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;

                //@Throws(Exception.constructor)
            
    public end(){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;;
    
this.baseGameStatistics!.add(new StringMaker().append(StartCanvas.BOT_GAME_STATS)!.append(this.baseGameStatistics!.toString())!.append(CommonSeps.getInstance()!.NEW_LINE)!.toString());
    
this.baseGameStatistics!.init();
    

                        if(this.features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    progressCanvas!.start();
    

                                    }
                                
this.logUtil!.putF("Demo End", this, this.commonStrings!.RUN);
    
this.close();
    
DisplayChangeEventHandler.getInstance()!.removeListener(this);
    
}


    public setGameState(gameState: GameState){
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameStateFactory!.PLAYING_GAME_STATE;
    
}


    getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.state;
    
}


    setState(state: number){
this.state= state;
    
}


    public isHighScoreSubmitted(): boolean{
this.logUtil!.putF("Wow the AI got a high score!", this, "isHighScoreSubmitted");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getRealHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.realHighScoresPaintable;
    
}


    setSpecialAnimationInterface(specialAnimationInterface: SpecialAnimation){
specialAnimationInterface!.setFrame(0);
    
this.specialAnimationInterface= specialAnimationInterface;
    
}


    getSpecialAnimationInterface(): SpecialAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specialAnimationInterface;
    
}


    setPaintableInterface(paintableInterface: PaintableInterface){
this.paintableInterface= paintableInterface;
    
}


    getPaintableInterface(): PaintableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paintableInterface;
    
}


    setDefaultPaintableInterface(defaultPaintableInterface: Paintable){
this.defaultPaintableInterface= defaultPaintableInterface;
    
}


    getDefaultPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultPaintableInterface;
    
}


    public getHighScoresFactoryInterface(): HighScoresFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresFactoryInterface;
    
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
this.menuInputProcessor= menuInputProcessor;
    
}


    getMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuInputProcessor;
    
}


    public getMenuForm(): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuForm;
    
}


    public setMenuForm(menuForm: ScrollSelectionForm){
this.menuForm= menuForm;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.initialized;
    
}


    getOverlayPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.overlayPaintable;
    
}


    setBasicGameDemoPaintable(basicGameDemoPaintable: StatePaintable){
this.basicGameDemoPaintable= basicGameDemoPaintable;
    
}


    getBasicGameDemoPaintable(): StatePaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicGameDemoPaintable;
    
}


    public setTempWait(tempWait: number){
this.tempWait= tempWait;
    
}


    public getTempWait(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tempWait;
    
}


    public isSingleThread(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed() || SWTUtil.isSWT;
    
}


    public isRunningInAnotherThread(): boolean{

    var features: Features = Features.getInstance()!;;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRunning();;
    

                        }
                            
}


    public getGameInitializationInterfaceFactoryInterface(): BasicBuildGameInitializerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameInitializationInterfaceFactoryInterface;
    
}


}



