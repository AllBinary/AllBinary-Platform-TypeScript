
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { ChoiceGroup } from "../../../../../javax/microedition/lcdui/ChoiceGroup.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { NullCommandListener } from "../../../../../javax/microedition/lcdui/NullCommandListener.js";

    
import { AndroidUtil } from "../../../../../org/allbinary/AndroidUtil.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { GameAdStateFactory } from "../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js";

    
import { BaseGameStatistics } from "../../../../../org/allbinary/canvas/BaseGameStatistics.js";

    
import { GameStatisticsFactory } from "../../../../../org/allbinary/canvas/GameStatisticsFactory.js";

    
import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    
import { RunnableCanvas } from "../../../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { DebugFactory } from "../../../../../org/allbinary/debug/DebugFactory.js";

    
import { NoDebug } from "../../../../../org/allbinary/debug/NoDebug.js";

    
import { GameAdState } from "../../../../../org/allbinary/game/GameAdState.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { GameStrings } from "../../../../../org/allbinary/game/GameStrings.js";

    
import { GameTypeFactory } from "../../../../../org/allbinary/game/GameTypeFactory.js";

    
import { Intermission } from "../../../../../org/allbinary/game/Intermission.js";

    
import { IntermissionCompositeInterface } from "../../../../../org/allbinary/game/IntermissionCompositeInterface.js";

    
import { IntermissionEnableListenerInterface } from "../../../../../org/allbinary/game/IntermissionEnableListenerInterface.js";

    
import { IntermissionInterface } from "../../../../../org/allbinary/game/IntermissionInterface.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { InGameFeatures } from "../../../../../org/allbinary/game/configuration/InGameFeatures.js";

    
import { InGameOptionsForm } from "../../../../../org/allbinary/game/configuration/InGameOptionsForm.js";

    
import { ChangedGameFeatureListener } from "../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { GameInitializedEvent } from "../../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js";

    
import { GameInitializedEventHandler } from "../../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { GameFeatureUtil } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureUtil.js";

    
import { InputFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { MainFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { SensorFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js";

    
import { TouchFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js";

    
import { GameLevelDisplayChangeEventListenersFactory } from "../../../../../org/allbinary/game/displayable/GameLevelDisplayChangeEventListenersFactory.js";

    
import { BasicBuildGameInitializerFactory } from "../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js";

    
import { GameInitializationUtil } from "../../../../../org/allbinary/game/init/GameInitializationUtil.js";

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { InputProcessor } from "../../../../../org/allbinary/game/input/InputProcessor.js";

    
import { NoPlayerGameInput } from "../../../../../org/allbinary/game/input/NoPlayerGameInput.js";

    
import { PlayerGameInput } from "../../../../../org/allbinary/game/input/PlayerGameInput.js";

    
import { GameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { SWTUtil } from "../../../../../org/allbinary/game/layer/SWTUtil.js";

    
import { ColorFillBasePaintable } from "../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js";

    
import { ColorFillPaintableFactory } from "../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js";

    
import { ResourceLoadingLevel } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevel.js";

    
import { ResourceLoadingLevelFactory } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { HighScore } from "../../../../../org/allbinary/game/score/HighScore.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { HighScoresHelperBase } from "../../../../../org/allbinary/game/score/HighScoresHelperBase.js";

    
import { HighScoresPaintable } from "../../../../../org/allbinary/game/score/HighScoresPaintable.js";

    
import { NoHighScoresFactory } from "../../../../../org/allbinary/game/score/NoHighScoresFactory.js";

    
import { NullHighScoresSingletonFactory } from "../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js";

    
import { HighScoreTextBox } from "../../../../../org/allbinary/game/score/displayable/HighScoreTextBox.js";

    
import { GameState } from "../../../../../org/allbinary/game/state/GameState.js";

    
import { GameStateFactory } from "../../../../../org/allbinary/game/state/GameStateFactory.js";

    
import { GraphicsStrings } from "../../../../../org/allbinary/graphics/GraphicsStrings.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { ScreenCapture } from "../../../../../org/allbinary/graphics/ScreenCapture.js";

    
import { ScreenCaptureFactory } from "../../../../../org/allbinary/graphics/ScreenCaptureFactory.js";

    
import { ProgressCanvas } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { CanvasStrings } from "../../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { GameTickDisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/GameTickDisplayInfoSingleton.js";

    
import { MyCommandsFactory } from "../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { DisplayChangeEvent } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { DisplayChangeEventHandler } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { DisplayChangeEventListener } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js";

    
import { CommandCurrentSelectionFormFactory } from "../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js";

    
import { FormPaintable } from "../../../../../org/allbinary/graphics/form/FormPaintable.js";

    
import { FormType } from "../../../../../org/allbinary/graphics/form/FormType.js";

    
import { FormTypeFactory } from "../../../../../org/allbinary/graphics/form/FormTypeFactory.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { ScrollSelectionFormNoneFactory } from "../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js";

    
import { CommandTextItemArrayFactory } from "../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CurrentDisplayableFactory } from "../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLFeatureUtil } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { OpenGLThreadUtil } from "../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js";

    
import { InitUpdatePaintable } from "../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js";

    
import { NullInitUpdatePaintable } from "../../../../../org/allbinary/graphics/paint/NullInitUpdatePaintable.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { PaintableInterface } from "../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { OpenGLImageSpecificFactory } from "../../../../../org/allbinary/image/opengles/OpenGLImageSpecificFactory.js";

    
import { SensorGameUpdateProcessor } from "../../../../../org/allbinary/input/gyro/SensorGameUpdateProcessor.js";

    
import { SingleSensorGameUpdateProcessor } from "../../../../../org/allbinary/input/gyro/SingleSensorGameUpdateProcessor.js";

    
import { BaseTouchInput } from "../../../../../org/allbinary/input/motion/button/BaseTouchInput.js";

    
import { NoButtonsTouchInputFactory } from "../../../../../org/allbinary/input/motion/button/NoButtonsTouchInputFactory.js";

    
import { TouchButtonFactory } from "../../../../../org/allbinary/input/motion/button/TouchButtonFactory.js";

    
import { TouchButtonsPaintableFactory } from "../../../../../org/allbinary/input/motion/button/TouchButtonsPaintableFactory.js";

    
import { TouchScreenFactory } from "../../../../../org/allbinary/input/motion/button/TouchScreenFactory.js";

    
import { BasicMotionGesturesHandler } from "../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { OperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { AllBinaryMediaManager } from "../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js";

    
import { PlayerQueue } from "../../../../../org/allbinary/media/audio/PlayerQueue.js";

    
import { PrimaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { SelectSound } from "../../../../../org/allbinary/media/audio/SelectSound.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { SecondaryThreadPool } from "../../../../../org/allbinary/thread/SecondaryThreadPool.js";

    
import { GameTickTimeDelayHelper } from "../../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class AllBinaryGameCanvas extends RunnableCanvas
                , AllBinaryGameCanvasInterface
                , GameCanvasRunnableInterface
                , MenuListener
                , IntermissionCompositeInterface
                , IntermissionEnableListenerInterface
                , PopupMenuInterface
                , DisplayChangeEventListener {
        

    private static readonly id: number = 0;
        
        

    public static readonly SHOW_END_RESULT_GAME_STATE: GameState = GameStateFactory.getInstance("SHOW_END_RESULT_GAME_STATE")!;
        
        

    public static readonly SHOW_HIGH_SCORE_GAME_STATE: GameState = GameStateFactory.getInstance("SHOW_HIGH_SCORE_GAME_STATE")!;
        
        

    public static readonly TYPE: number = 2;
        
        

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    readonly touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;
        
        

    readonly openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        

    readonly touchButtonFactory: TouchButtonFactory = TouchButtonFactory.getInstance()!;
        
        

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;
        
        

    readonly gameStrings: GameStrings = GameStrings.getInstance()!;
        
        

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        

    private readonly gameTickDisplayInfoSingleton: GameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance()!;
        
        

    public readonly gameRunnable: GameCanvasRunnable = new GameCanvasRunnable(this);
        
        

    public readonly gamePauseRunnable: GameCanvasPauseRunnable = new GameCanvasPauseRunnable(this);
        
        

    gameSpecificPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private readonly sensorGameUpdateProcessor: SensorGameUpdateProcessor = new SingleSensorGameUpdateProcessor();
        
        

    endGameInfo: EndGameInfo = new EndGameInfo();
        
        

    private readonly startIntermissionInterface: IntermissionInterface = new Intermission();
        
        

    private readonly endLevelIntermissionInterface: IntermissionInterface = new Intermission();
        
        

    gameLayerManager: AllBinaryGameLayerManager = AllBinaryGameLayerManager.NULL_ALLBINARY_LAYER_MANAGER;
        
        

    private gameState: GameState = GameState.NO_GAME_STATE;
        
        

    private gameOver: boolean= false

    private initialized: boolean= false

    private readonly gameStateTimeHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    readonly highScoresHelper: HighScoresHelperBase

    private highScoreSubmitted: boolean= false

    private readonly realHighScoresPaintable: HighScoresPaintable = new HighScoresPaintable();
        
        

    private highScoresPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private localPlayerGameInputList: BasicArrayList = new BasicArrayList();
        
        

    private isCheating: boolean= false

    private hashtable: Hashtable<Any, Any> = this.nullUtil!.NULL_TABLE;
        
        

    private isSingleKeyRepeatableProcessing: boolean= false

    private gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory = BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY;
        
        

    private touchButtonsPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    touchPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private cheatProcessor: PlayerGameInput = NoPlayerGameInput.getInstance()!;
        
        

    private gameInputProcessor: Processor = Processor.getInstance()!;
        
        

    private endGameProcessor: Processor = Processor.getInstance()!;
        
        

    private realEndGameProcessor: Processor = Processor.getInstance()!;
        
        

    private startIntermissionProcessor: Processor = Processor.getInstance()!;
        
        

    private realStartIntermissionProcessor: Processor = Processor.getInstance()!;
        
        

    private endGamePaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private endGameStatePaintable: Paintable = NullPaintable.getInstance()!;
        
        

    nonBotPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private intermissionPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private startIntermissionPaintable: InitUpdatePaintable = NullInitUpdatePaintable.getInstance()!;
        
        

    private mainStateProcessor: Processor = Processor.getInstance()!;
        
        

    private processGameProcessor: Processor = Processor.getInstance()!;
        
        

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface

    private startLevel: number= 0

    private mainMenuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;
        
        

    private popupMenuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;
        
        

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;
        
        

    private menuForm: ScrollSelectionForm = ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM;
        
        

    private formPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private openMenuPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private menuPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private currentTouchInputFactory: BaseTouchInput = NoButtonsTouchInputFactory.getInstance()!;
        
        

    colorFillPaintable: ColorFillBasePaintable = ColorFillPaintableFactory.getInstance()!.getInstance(basicColorFactory!.BLACK, true)!;
        
        

    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;
        
        

    private readonly primaryPlayerQueue: PlayerQueue = PrimaryPlayerQueueFactory.getInstance()!;
        
        

    private readonly secondaryPlayerQueue: PlayerQueue = SecondaryPlayerQueueFactory.getInstance()!;
        
        

    readonly BUILD_GAME: string = "buildGame";
        
        

    readonly gameTypeFactory: GameTypeFactory = GameTypeFactory.getInstance()!;
        
        

    readonly screenCapture: ScreenCapture = ScreenCaptureFactory.getInstance()!;
        
        

    private readonly basicMotionGesturesHandler: BasicMotionGesturesHandler = BasicMotionGesturesHandler.getInstance()!;
        
        

    private readonly gameKeyEventHandler: GameKeyEventHandler = GameKeyEventHandler.getInstance()!;
        
        

    private readonly gameBehavior: DemoGameBehavior

    private readonly menuBehavior: BaseMenuBehavior

    private progressPaintable: PaintableInterface = ProgressCanvasFactory.getLazyInstance()!;
        
        
public constructor (commandListener: CommandListener, gameLayerManager: AllBinaryGameLayerManager, highScoresFactoryInterface: HighScoresFactoryInterface, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, buffered: boolean)                        

                            : super(commandListener, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST){

            super();
                //var commandListener = commandListener
    //var gameLayerManager = gameLayerManager
    //var highScoresFactoryInterface = highScoresFactoryInterface
    //var gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface
    //var buffered = buffered


                            //For kotlin this is before the body of the constructor.
                    
this.highScoresHelper= highScoresFactoryInterface!.createHighScoresHelper()
this.gameInitializationInterfaceFactoryInterface= gameInitializationInterfaceFactoryInterface
this.init(gameLayerManager, buffered)
this.highScoresFactoryInterface= highScoresFactoryInterface

    
                        if(this.gameLayerManager!.getGameInfo()!.getGameType() == gameTypeFactory!.BOT)
                        
                                    {
                                    this.gameBehavior= DemoGameBehavior.getInstance()
this.menuBehavior= BaseMenuBehavior.getInstance()

                                    }
                                
                        else {
                            this.gameBehavior= BaseGameBehavior.getInstance()
this.menuBehavior= this.getInGameMenuBehavior()

                        }
                            
this.initSpecialPaint()
this.initPopupMenu()
this.initMenu()
addListener(this)
}

public constructor (gameLayerManager: AllBinaryGameLayerManager){

            super();
                //var gameLayerManager = gameLayerManager
this.highScoresHelper= NoHighScoresFactory.getInstance()!.createHighScoresHelper()

    
                        if(this.gameLayerManager!.getGameInfo()!.getGameType() == gameTypeFactory!.BOT)
                        
                                    {
                                    this.gameBehavior= DemoGameBehavior.getInstance()
this.menuBehavior= BaseMenuBehavior.getInstance()

                                    }
                                
                        else {
                            this.gameBehavior= BaseGameBehavior.getInstance()
this.menuBehavior= this.getInGameMenuBehavior()

                        }
                            
this.gameLayerManager= gameLayerManager
this.highScoresFactoryInterface= NoHighScoresFactory.getInstance()
}

public constructor (){

            super();
            this.highScoresHelper= NoHighScoresFactory.getInstance()!.createHighScoresHelper()
this.gameBehavior= DemoGameBehavior.getInstance()
this.menuBehavior= BaseMenuBehavior.getInstance()
this.highScoresFactoryInterface= NoHighScoresFactory.getInstance()
}


    public getInGameMenuBehavior(): BaseMenuBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InGameMenuBehavior.getInstance();
    
}


    public setCurrentThread(){

    
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    setCurrentThreadFake()

                                    }
                                
                        else {
                            setCurrentThread()

                        }
                            
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
    //var displayChangeEvent = displayChangeEvent

        try {
            onDisplayChangeEvent(this, displayChangeEvent)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e)
}

}


                @Throws(Exception::class)
            
    public updateMenu(displayChangeEvent: DisplayChangeEvent){
    //var displayChangeEvent = displayChangeEvent

    var formUtil: FormUtil = FormUtil.getInstance()!;
        
        


    var popupMenuRectangle: Rectangle = formUtil!.createPopupMenuRectangle()!;
        
        


    var basicPopupMenuPaintable: BasicPopupMenuPaintable = (this.getOpenMenuPaintable() as BasicPopupMenuPaintable);
        
        

init(popupMenuRectangle)

    
                        if(this.getPopupMenuInputProcessor() != NoMenuInputProcessor.getInstance())
                        
                                    {
                                    
    var popupMenuInputProcessor: PopupMenuInputProcessor = (this.getPopupMenuInputProcessor() as PopupMenuInputProcessor);
        
        

init(popupMenuRectangle)

                                    }
                                

    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        


    var rectangle: Rectangle = formUtil!.createFormRectangle()!;
        
        

init(rectangle, formType)

    
                        if(this.currentTouchInputFactory != NoButtonsTouchInputFactory.getInstance())
                        
                                    {
                                    toggle(this.isPaused(), this.currentTouchInputFactory!.getList())

                                    }
                                
}


                @Throws(Exception::class)
            
    public processSleep(){
processSleep()

    
                        if(AllBinaryMediaManager.update())
                        
                                    {
                                    
    
                        if(!primaryPlayerQueue!.process())
                        
                                    {
                                    process()

                                    }
                                

                                    }
                                

    
                        if(this.menuInputProcessor!.processInput() !=  -1)
                        
                                    {
                                    process()

                                    }
                                
}


                @Throws(Exception::class)
            
    initPopupMenu(){

    var features: Features = Features.getInstance()!;
        
        


    var popupMenuRectangle: Rectangle = FormUtil.getInstance()!.createPopupMenuRectangle()!;
        
        


    
                        if(features.isFeature(touchFeatureFactory!.TOUCH_ENABLED))
                        
                                    {
                                    this.setOpenMenuPaintable(BasicPopupMenuPaintable(popupMenuRectangle, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()))
this.setPopupMenuInputProcessor(PopupMenuInputProcessor(BasicArrayList(),  -1, this, popupMenuRectangle))

                                    }
                                
}


    initMenu(){

        try {
            initMenu(this)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "initMenu", e)
}

}


                @Throws(Exception::class)
            
    initMenu2(){
this.closeMenu()

    var formUtil: FormUtil = FormUtil.getInstance()!;
        
        


    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        


    var gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance()!;
        
        


    var commandTextItemArrayFactory: CommandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory()!;
        
        


    var items: CustomItem[] = commandTextItemArrayFactory!.getInstance(this.getCommandStack() as Vector<Any>, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())!;
        
        


    var rectangle: Rectangle = formUtil!.createFormRectangle()!;
        
        

this.setMenuForm(CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, formType, 25, false, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor()))

    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;
        
        


    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(touchFeatureFactory!.TOUCH_ENABLED))
                        
                                    {
                                    this.mainMenuInputProcessor= PopupCommandFormInputProcessor(BasicArrayList(),  -1, this, scrollSelectionForm, this.getPopupMenuInputProcessor() as PopupMenuInputProcessor)

                                    }
                                
                        else {
                            
                        }
                            
this.setMenuInputProcessor(this.getPopupMenuInputProcessor())

    
                        if(scrollSelectionForm != ScrollSelectionFormNoneFactory.getInstance())
                        
                                    {
                                    this.setFormPaintable(FormPaintable(scrollSelectionForm))

                                    }
                                
                        else {
                            
                        }
                            
this.closeMenu()
}


    public updateMenu(){

        try {
            updateMenu(this)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "initMenu", e)
}

}


                @Throws(Exception::class)
            
    public updateMenu2(){

    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;
        
        

deleteAll()

    var gameLimitedCommandTextItemArrayFactory: GameLimitedCommandTextItemArrayFactory = GameLimitedCommandTextItemArrayFactory.getInstance()!;
        
        


    var commandTextItemArrayFactory: CommandTextItemArrayFactory = gameLimitedCommandTextItemArrayFactory!.getCommandTextItemArrayFactory()!;
        
        


    var items: CustomItem[] = commandTextItemArrayFactory!.getInstance(this.getCommandStack() as Vector<Any>, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor())!;
        
        


    var size: number = items.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
append(items[index]!)
}


    var formUtil: FormUtil = FormUtil.getInstance()!;
        
        


    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        


    var rectangle: Rectangle = formUtil!.createFormRectangle()!;
        
        

init(rectangle, formType)
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public pause(){
pause(this)
this.closeMenu()
pause()
toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance())
gc()
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public unPause(){
put(commonStrings!.START, this, gameStrings!.UNPAUSE)
this.closeMenu()
gc()
unPause()
toggle(this.isPaused(), BasicArrayListUtil.getInstance()!.getImmutableInstance())
unPause(this)
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


                @Throws(Exception::class)
            
    public popupMenu(){
popupMenu(this)
}


                @Throws(Exception::class)
            
    public popupMenu2(){
add(SelectSound.getInstance())
this.setMenuPaintable(this.getFormPaintable())
this.setMenuInputProcessor(this.mainMenuInputProcessor)
addListener(this.mainMenuInputProcessor)
addListener(this.mainMenuInputProcessor)
}


                @Throws(Exception::class)
            
    public toggleMenu(){
put(commonStrings!.START, this, this.gameStrings!.TOGGLE_MENU)

    
                        if(this.getMenuPaintable() == this.getOpenMenuPaintable())
                        
                                    {
                                    this.pause()
this.updateMenu()
this.popupMenu()

                                    }
                                
                             else 
    
                        if(this.getMenuPaintable() == this.getFormPaintable())
                        
                                    {
                                    add(SelectSound.getInstance())
this.unPause()

                                    }
                                
}


    public closeMenu(){
closeMenu(this)
}


    public closeMenu2(){
this.setMenuPaintable(this.getOpenMenuPaintable())
removeListener(this.mainMenuInputProcessor)
removeListener(this.mainMenuInputProcessor)
this.setMenuInputProcessor(this.getPopupMenuInputProcessor())
}


    public open(){
addListener(this.menuInputProcessor)
addListener(this.menuInputProcessor)
}


    public close(){
removeListener(this.menuInputProcessor)
removeListener(this.menuInputProcessor)
clear()
clear()
}


                @Throws(Exception::class)
            
    processorInit(){
this.setMainStateProcessor(Processor.getInstance())
this.setProcessGameProcessor(GameProcessor(this))
}


    initSpecialPaint(){
initSpecialPaint(this)
}


                @Throws(Exception::class)
            
    init(gameLayerManager: AllBinaryGameLayerManager, buffered: boolean){
var gameLayerManager = gameLayerManager
var buffered = buffered
setStartTime()
this.setHighScoreSubmitted(false)
this.setLayerManager(gameLayerManager)

    
                        if(!buffered)
                        
                                    {
                                    
    var BUFF_MESSAGE: string = "XXX Not Buffering Causes Concurrency Issues XXX";
        
        

put(BUFF_MESSAGE, this, commonStrings!.CONSTRUCTOR)

                                    }
                                
                        else {
                            


                            throw Exception("Buffering is disabled")

                        }
                            
this.setGameInputProcessor(Processor.getInstance())

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(GameFeatureFactory.getInstance()!.CHEATING))
                        
                                    {
                                    this.isCheating= true
this.cheatProcessor= CheatGameInputProcessor(this)
addListener(this.cheatProcessor)

                                    }
                                
                        else {
                            this.isCheating= false
this.cheatProcessor= NoPlayerGameInput.getInstance()

                        }
                            
this.realEndGameProcessor= EndGameProcessor(this)
this.setEndGameProcessor(Processor.getInstance())
this.realStartIntermissionProcessor= StartIntermissionProcessor(this)
this.startIntermissionProcessor= Processor.getInstance()
this.setEndGameStatePaintable(EndGamePaintable(this))
this.setEndGamePaintable(NullPaintable.getInstance())
this.setIntermissionPaintable(NullPaintable.getInstance())
setListener(this)
}


    public notifyIntermission(enable: boolean){
var enable = enable

    
                        if(enable)
                        
                                    {
                                    this.startIntermissionProcessor= this.realStartIntermissionProcessor

                                    }
                                
                        else {
                            this.startIntermissionProcessor= Processor.getInstance()

                        }
                            

    
                        if(enable)
                        
                                    {
                                    this.setIntermissionPaintable(this.getStartIntermissionPaintable())

                                    }
                                
                        else {
                            this.setIntermissionPaintable(NullPaintable.getInstance())

                        }
                            
}


                @Throws(Exception::class)
            
    public mediaInit(){
log(commonStrings!.NOT_IMPLEMENTED, this)
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    initConfigurable(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

addPortion(50, "Setting Configurables")
initGame(abeClientInformation, this, gameInitializationInterfaceFactoryInterface)

    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        


    var changedGameFeatureListener: ChangedGameFeatureListener = ChangedGameFeatureListener.getInstance()!;
        
        


    
                        if(changedGameFeatureListener!.isChanged(gameFeatureFactory!.SOUND))
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;
        
        

put(StringMaker().
                            append("Sound Changing To: ")!.appendboolean(features.isFeature(gameFeatureFactory!.SOUND))!.toString(), this, "initConfigurable")
this.mediaInit()
remove(gameFeatureFactory!.SOUND)

                                    }
                                

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;
        
        


    
                        if(changedGameFeatureListener!.isChanged(sensorFeatureFactory!.ORIENTATION_SENSORS) || changedGameFeatureListener!.isChanged(sensorFeatureFactory!.NO_ORIENTATION) || changedGameFeatureListener!.isChanged(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    remove(sensorFeatureFactory!.NO_ORIENTATION)
remove(sensorFeatureFactory!.ORIENTATION_SENSORS)
remove(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS)

                                    }
                                

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        

this.loadResources(resourceLoadingLevelFactory!.LOAD_GAME)
}


                @Throws(Exception::class)
            
    init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.initConfigurable(abeClientInformation)
this.processorInit()
process(this.gameLayerManager)
sendNotifications(this.gameLayerManager)
this.initTouch()
}


                @Throws(Exception::class)
            
    initTouch(){

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;
        
        


    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        

setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_TOUCH)
fireEvent(gameInitializedEvent)
defaultList()
this.updateTouch()
this.postInitTouch()
}


                @Throws(Exception::class)
            
    public updateCurrentTouchInputFactory(nextTouchInput: BaseTouchInput){
    //var nextTouchInput = nextTouchInput

    
                        if(nextTouchInput != this.currentTouchInputFactory)
                        
                                    {
                                    this.currentTouchInputFactory= nextTouchInput
put(this.currentTouchInputFactory!.toString(), this, this.gameInputStrings!.UDPATE_CURRENT_TOUCH_INPUT_FACTORY)
toggle(this.isPaused(), this.currentTouchInputFactory!.getList())

                                    }
                                
}


                @Throws(Exception::class)
            
    updateTouch(){
updateTouch(this)
}


                @Throws(Exception::class)
            
    updateTouch2(){

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    
    
                        if(this.gameLayerManager!.getGameInfo()!.getCurrentLevel() -getStartLevel() == 1)
                        
                                    {
                                    this.setTouchPaintableP(NullPaintable.getInstance())

                                    }
                                

                                    }
                                
}


                @Throws(Exception::class)
            
    postInitTouch(){
this.setTouchButtonsPaintable(TouchButtonsPaintableFactory.getInstance(this.gameLayerManager!.getForegroundBasicColor()))
this.updateScreenButtonPaintable()
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands()
this.addCommands()
this.setCommandListener(cmdListener)
}


    public addCommands(){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        


    var myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;
        
        


    
                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    this.addCommand(gameCommandsFactory!.START_TRACE)

                                    }
                                
this.addCommand(gameCommandsFactory!.RESTART_COMMAND)
this.addCommand(myCommandsFactory!.PAUSE_COMMAND)
this.addCommand(gameCommandsFactory!.QUIT_COMMAND)

    var isOverScan: boolean = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()!;
        
        


    var features: Features = Features.getInstance()!;
        
        


    
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(SWTUtil.isSWT)
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(!isOverScan)
                        
                                    {
                                    
    
                        if(TouchScreenFactory.getInstance()!.isTouch() && InGameFeatures().
                            isAny())
                        
                                    {
                                    this.addCommand(InGameOptionsForm.DISPLAY)

                                    }
                                
this.addCommand(gameCommandsFactory!.SAVE)
this.addCommand(gameCommandsFactory!.DISPLAY_LOAD_FORM)

                                    }
                                
}


    public itemStateChanged(item: Item){
var item = item

        try {
            
    var itemLabel: string = item.getLabel()!;
        
        

put(StringMaker().
                            append(commonLabels!.ITEM_LABEL)!.append(itemLabel)!.toString(), this, "itemStateChanged")

    
                        if(item is ChoiceGroup)
                        
                                    {
                                    
    var gameFeatureUtil: GameFeatureUtil = GameFeatureUtil.getInstance()!;
        
        


    
                        if(gameFeatureUtil!.isExclusive(itemLabel))
                        
                                    {
                                    updateExclusive(item as ChoiceGroup)

                                    }
                                
                        else {
                            updateMultiple(item as ChoiceGroup)

                        }
                            

                                    }
                                
process(this.gameLayerManager)
this.updateTouch()
this.updateScreenButtonPaintable()
sendNotifications(this.gameLayerManager)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "itemStateChanged", e)
}

}


                @Throws(Exception::class)
            
    public updateScreenButtonPaintable(){
updateScreenButtonPaintable(this)
}


    public updateScreenButtonPaintable2(){

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isFeature(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(this.getTouchButtonsPaintable())
this.setStartLevel(this.gameLayerManager!.getGameInfo()!.getCurrentLevel())

                                    }
                                
                             else 
    
                        if(features.isFeature(touchFeatureFactory!.SHOW_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(this.getTouchButtonsPaintable())

                                    }
                                
                             else 
    
                        if(features.isFeature(touchFeatureFactory!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    this.setTouchPaintableP(NullPaintable.getInstance())

                                    }
                                
                        else {
                            this.setTouchPaintableP(NullPaintable.getInstance())

                        }
                            
}


    public getLayerManager(): AllBinaryGameLayerManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameLayerManager;
    
}


    public setLayerManager(layerManager: AllBinaryGameLayerManager){
var layerManager = layerManager
this.gameLayerManager= layerManager
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isGameOver(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameOver;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setGameOver(gameOver: boolean){
var gameOver = gameOver
this.gameOver= gameOver
}


                @Throws(Exception::class)
            
    public setGameOver(){
put(commonStrings!.START, this, this.gameStrings!.SET_GAME_OVER)
this.setGameOver(true)
removePauseCommand()
this.setGameState(SHOW_END_RESULT_GAME_STATE)
this.setEndGamePaintable(getEndGameStatePaintable())
}


    public isHighScoreSubmitted(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoreSubmitted;
    
}


                @Throws(Exception::class)
            
    public setHighScoreSubmitted(highScoreSubmitted: boolean){
var highScoreSubmitted = highScoreSubmitted
this.highScoreSubmitted= highScoreSubmitted

    
                        if(highScoreSubmitted)
                        
                                    {
                                    setSelectedHighScores(NullHighScoresSingletonFactory.getInstance())

                                    }
                                
put(StringMaker().
                            append("isHighScoreSubmitted: ")!.appendboolean(highScoreSubmitted)!.toString(), this, "setHighScoreSubmitted")
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameState;
    
}


                @Throws(Exception::class)
            
    public setGameState(gameState: GameState){
    //var gameState = gameState
put(StringMaker().
                            append(this.gameStrings!.GAME_STATE)!.append(this.stringUtil!.toString(gameState))!.toString(), this, this.gameStrings!.SET_GAME_STATE)
this.gameState= gameState
setStartTime()
this.updateEndGameProcessor()
this.updateGameKeyEventProcessor()
setGameState(this)
}


                @Throws(Exception::class)
            
    public setGameState(){

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        

processAdState(this.gameState, this.gameLayerManager!.getGameInfo()!.getGameType())

    
                        if(this.gameState != GameState.PLAYING_GAME_STATE)
                        
                                    {
                                    processPageAdState()

                                    }
                                
}


    updateGameKeyEventProcessor(){

    
                        if(this.getGameState() != GameState.PLAYING_GAME_STATE || this.isCheating)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        }
                            
}


    removeAllGameKeyInputListenersOnBuild(){
this.removeAllGameKeyInputListeners()
}


    removeAllGameKeyInputListeners(){
removeAllGameKeyInputListeners(this)
}


    removeAllGameKeyInputListeners2(){
put("Remove PlayerInput Listeners", this, "removeAllGameKeyInputListeners")




                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;
        
        
index >= 0; index--)
        {

    var playerGameInput: PlayerGameInput = this.localPlayerGameInputList!.get(index) as PlayerGameInput;
        
        

this.removeKeyInputListener(playerGameInput)
removeNonAIInputGameKeyEvents()
}

}


    public removeKeyInputListener(playerGameInput: PlayerGameInput){
    //var playerGameInput = playerGameInput
removeListener(playerGameInput)
}


                @Throws(Exception::class)
            
    updateEndGameProcessor(){
updateEndGameProcessor(this)
}


                @Throws(Exception::class)
            
    updateEndGameProcessor2(){

    
                        if(this.getGameState() == SHOW_END_RESULT_GAME_STATE || this.getGameState() == SHOW_HIGH_SCORE_GAME_STATE)
                        
                                    {
                                    this.setEndGameProcessor(this.realEndGameProcessor)

                                    }
                                
                        else {
                            this.setEndGameProcessor(Processor.getInstance())

                        }
                            
}


                @Throws(Exception::class)
            
    public buildGame(isPortion: boolean){
    //var isPortion = isPortion
}


                @Throws(Exception::class)
            
    cleanupGame(){
put(commonStrings!.START, this, this.commonStrings!.CLEANUP)

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

addPortion(10, "Cleaning Up")
clear()
clear()
clear()
}


                @Throws(Exception::class)
            
    public loadResources(resourceLoadingLevel: ResourceLoadingLevel){
    //var resourceLoadingLevel = resourceLoadingLevel

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;
        
        

setResourceLoadingLevel(resourceLoadingLevel)
fireEvent(gameInitializedEvent)
}


                @Throws(Exception::class)
            
    public loadResources(level: number){
    //var level = level

    var gameInitializedEvent: GameInitializedEvent = GameInitializationUtil.getInstance()!.EVENT;
        
        

setLevel(level)
fireEvent(gameInitializedEvent)
}


                @Throws(Exception::class)
            
    public updateColor(){
}


                @Throws(Exception::class)
            
    public buildGame(portion: number){
    //var portion = portion
endRecording()
startRecording()

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        


    var features: Features = Features.getInstance()!;
        
        

addPortion(portion, "Generic Build")
this.removeAllGameKeyInputListenersOnBuild()
this.updateTouch()
addPortion(portion, "High Scores")
fetchHighScores(this.gameLayerManager!.getGameInfo(), this.highScoresHelper)
this.setHighScoresPaintable(NullPaintable.getInstance())
addPortion(portion, "Finishing.")
update(this.getLayerManager()!.getGameInfo(), this)
this.isSingleKeyRepeatableProcessing= features.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS)
this.setGameOver(false)
addPortion(portion, "Finishing..")
this.updateColor()
update()

    
                        if(!this.isRunningInAnotherThread())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
addPortion(portion, "Finishing...")

    
                        if(this.isMainCanvas() || !this.isInitialized())
                        
                                    {
                                    
    
                        if(features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    
    
                        if(this.getCustomCommandListener() != 
                                    null
                                )
                        
                                    {
                                    end()

                                    }
                                

                                    }
                                
                        else {
                            end()

                        }
                            
this.setInitialized(true)

                                    }
                                

    
                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    put("Show Game Paintable in DemoCanvas Thread", this, BUILD_GAME)
showGamePaintable()

                                    }
                                
                        else {
                            put("No GameCanvasStartListener", this, BUILD_GAME)

                        }
                            
setBasicColorP(this.gameLayerManager!.getBackgroundBasicColor())
buildGame(this)
}


    public buildGame2(){
put(StringMaker().
                            append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUTS)!.appendint(this.localPlayerGameInputList!.size())!.toString(), this, BUILD_GAME)

    var playerGameInput: PlayerGameInput





                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;
        
        
index >= 0; index--)
        {
playerGameInput= this.localPlayerGameInputList!.get(index) as PlayerGameInput
put(StringMaker().
                            append(this.gameInputStrings!.ENABLE_PLAYER_GAME_INPUT)!.append(playerGameInput!.toString())!.toString(), this, BUILD_GAME)
removeNonAIInputGameKeyEvents()
this.addKeyInputListener(playerGameInput)
}

}


    public addKeyInputListener(playerGameInput: PlayerGameInput){
    //var playerGameInput = playerGameInput
addListener(playerGameInput, playerGameInput!.getPlayerInputId())
}


    private gameCanvasStartListener: DemoPaintableInterface = NullDemoPaintable.NULL_DEMO_PAINTABLE;
        
        

    public setGameCanvasStartListener(gameCanvasStartListener: DemoPaintableInterface){
var gameCanvasStartListener = gameCanvasStartListener
this.gameCanvasStartListener= gameCanvasStartListener
}


                @Throws(Exception::class)
            
    public loadState(){
put(commonStrings!.START, this, commonStrings!.LOAD)

    var hashtable: Hashtable<Any, Any> = getLoadStateHashtable()!;
        
        


    
                        if(hashtable != 
                                    null
                                 && hashtable.length > 0)
                        
                                    {
                                    
    var levelAsString: string = hashtable.get(GameInfo.LEVEL_NAME as Object) as String;
        
        


    var level: number = Integer.valueOf(levelAsString)!.toInt()!;
        
        


    var gameInfo: GameInfo = this.gameLayerManager!.getGameInfo()!;
        
        

setCurrentLevel(level)

                                    }
                                
}


                @Throws(Exception::class)
            
    public getLoadStateHashtable(): Hashtable<Any, Any>{
put(StringMaker().
                            append(commonLabels!.START_LABEL)!.append(this.stringUtil!.toString(this.hashtable))!.toString(), this, "getLoadStateHashtable")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


    public setLoadStateHashtable(hashtable: Hashtable<Any, Any>){
    //var hashtable = hashtable
put(StringMaker().
                            append(commonLabels!.START_LABEL)!.append(this.stringUtil!.toString(hashtable))!.toString(), this, "setLoadStateHashtable")
this.hashtable= hashtable
}


    public getCurrentStateHashtable(): Hashtable<Any, Any>{

    var hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        


    var level: number = this.gameLayerManager!.getGameInfo()!.getCurrentLevel()!;
        
        

put(GameInfo.LEVEL_NAME.toString(), level.toString())
put(StringMaker().
                            append("End: ")!.append(this.stringUtil!.toString(hashtable))!.toString(), this, "getCurrentStateHashtable")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    public paintGameOver(graphics: Graphics){
var graphics = graphics
log(commonStrings!.NOT_IMPLEMENTED, this)
}


    public draw(graphics: Graphics){
var graphics = graphics
paint(graphics)
setBasicColorP(graphics, this.gameLayerManager!.getForegroundBasicColor())
paint(graphics)
}


    public clear(graphics: Graphics){
    //var graphics = graphics
paint(graphics)
}


    public paint(graphics: Graphics){
    //var graphics = graphics
nextRefresh()
this.draw(graphics)
paint(graphics)
paint(graphics)
}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics
}


                @Throws(Exception::class)
            
    public processEndLevelIntermissionGameState(){
}


    public nonBotPaint(graphics: Graphics){
var graphics = graphics
paint(graphics)
paint(graphics)
this.paintIntermission(graphics)
paint(graphics)
}


    public paintIntermission(graphics: Graphics){
var graphics = graphics
}


    private readonly rawGameInputProcessor: InputProcessor = new GameCanvasInputProcessor(this);
        
        

    private readonly rawInputProcessor: InputProcessor = new FormInputProcessor(this);
        
        

    private inputProcessor: InputProcessor = getRawGameInputProcessor()!;
        
        

    public keyPressed(keyCode: number){
var keyCode = keyCode
this.keyPressed(keyCode, 0)
}


    public keyReleased(keyCode: number){
var keyCode = keyCode
this.keyReleased(keyCode, 0)
}


    public keyRepeated(keyCode: number){
var keyCode = keyCode
this.keyRepeated(keyCode, 0)
}


    public keyPressed(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
keyPressed(keyCode, deviceId)
}


    public keyRepeated(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId

    
                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    keyPressed(keyCode, deviceId)

                                    }
                                
}


    public keyReleased(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId
keyReleased(this, keyCode, deviceId)
}


                @Throws(Exception::class)
            
    public handleRawKey(keyCode: number, deviceId: number, repeated: boolean){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated
}


    endProgress(isProgress: boolean): number{
var isProgress = isProgress

    var portion: number = 30;
        
        


    
                        if(isProgress && this.isMainCanvas())
                        
                                    {
                                    
    var myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;
        
        


    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

start()
commandAction(myCommandsFactory!.SET_DISPLAYABLE, progressCanvas)
portion= 4

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return portion;
    
}


                @Throws(Exception::class)
            
    processPlayingGame(){
update()
update()
process()
process()
process()
}


                @Throws(Exception::class)
            
    threadInit(){
}


                @Throws(Exception::class)
            
    processGame(){
process()

    
                        if(AllBinaryMediaManager.update())
                        
                                    {
                                    
    
                        if(!primaryPlayerQueue!.process())
                        
                                    {
                                    process()

                                    }
                                

                                    }
                                
process()
processInput()
process()
nextFrame()
}


    public notifyDonePainting(){

        
        //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.
        synchronized(this) 

        //mutex.withLock
        {
notifyObject(this)
}

}


    private readonly YIELD_SLEEP: number = 100;
        
        

                @Throws(Exception::class)
            
    public shouldWait(){

    var features: Features = Features.getInstance()!;
        
        


    
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
                                    }
                                
                             else 
    
                        if(features.isFeature(openGLFeatureFactory!.OPENGL_2D))
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    
    var openGLImageSpecificFactory: OpenGLImageSpecificFactory = OpenGLImageSpecificFactory.getInstance()!;
        
        


        while(openGLImageSpecificFactory!.updating)
        {
sleep(YIELD_SLEEP)
}


                                    }
                                

                        }
                            
}


    public run(){

        try {
            put(commonStrings!.START_RUNNABLE, this, commonStrings!.RUN)

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

addPortion(50, "Game Thread")
this.setCurrentThread()
this.setRunning(true)

    
                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    sleep(YIELD_SLEEP)

                                    }
                                
this.shouldWait()
this.threadInit()

    
                        if(this.getCustomCommandListener() == NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    sleep(YIELD_SLEEP)

                                    }
                                
this.open()

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        

init()
setGameIsReady(true)
run(this)
put(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e)
}

}


                @Throws(Exception::class)
            
    public run2(){

    var features: Features = Features.getInstance()!;
        
        


    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML())
                        
                                    {
                                    
    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    put(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD.getName(), this, commonStrings!.RUN)

                                    }
                                

    
                        if(J2MEUtil.isHTML())
                        
                                    {
                                    put(GraphicsStrings.getInstance()!.HTML, this, commonStrings!.RUN)

                                    }
                                

    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        

setRunnable(gameRunnable)
setDisplayable(this)
onResume()

                                    }
                                
                             else 
    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS))
                        
                                    {
                                    put(openGLFeatureFactory!.OPENGL_AND_GAME_HAVE_DIFFERENT_THREADS.getName(), this, commonStrings!.RUN)
onResume()

        while(this.isRunning())
        {
this.run3()
}

this.end()

                                    }
                                
                        else {
                            put("this thread", this, commonStrings!.RUN)

        while(this.isRunning())
        {
this.run3()
}

this.end()

                        }
                            
}


                @Throws(Exception::class)
            
    public run3(){
setStartTime(gameTickTimeDelayHelper!.setStartTime())
update()
this.processGame()
this.processLoopSleep()
}


    public setRunning(running: boolean){
var running = running
setRunning(running)

        try {
            
    var features: Features = Features.getInstance()!;
        
        


    
                        if(running)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL) || SWTUtil.isSWT)
                        
                                    {
                                    
    
                        if(this.gameLayerManager!.getGameInfo()!.getGameType() != gameTypeFactory!.BOT)
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        

clearRunnable()

                                    }
                                
this.end()

                                    }
                                

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, SET_RUNNING, e)
}

}


                @Throws(Exception::class)
            
    public end(){
endRecording()
add(StringMaker().
                            append(baseGameStatistics!.toString())!.append(CommonSeps.getInstance()!.NEW_LINE)!.toString())
init()
removeListener(this.cheatProcessor)
this.close()
this.removeAllGameKeyInputListeners()
this.endGameThread()
}


                @Throws(Exception::class)
            
    public endGameThread(){
removeListener(this)
clear()

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        

notPlayingAdState()
}


    public createHighScore(score: number): HighScore{
var score = score

    var gameInfo: GameInfo = this.gameLayerManager!.getGameInfo()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HighScore(0, "NONE", GameInfo(gameInfo!.getGameType(), gameInfo!.getGameMode(), 0, 0), score);
    
}


                @Throws(Exception::class)
            
    public setHighScore(abeClientInformation: AbeClientInformationInterface, name: string, score: number, autoSubmit: boolean, isLast: boolean){
    //var abeClientInformation = abeClientInformation
    //var name = name
    //var score = score
    //var autoSubmit = autoSubmit
    //var isLast = isLast
setHighScore(abeClientInformation, this, name, score, autoSubmit, isLast)
}


                @Throws(Exception::class)
            
    public setHighScore2(abeClientInformation: AbeClientInformationInterface, name: string, score: number, autoSubmit: boolean, isLast: boolean){
    //var abeClientInformation = abeClientInformation
    //var name = name
    //var score = score
    //var autoSubmit = autoSubmit
    //var isLast = isLast

    var highScore: HighScore = this.createHighScore(score)!;
        
        


    var textBox: HighScoreTextBox = new HighScoreTextBox(this.highScoresFactoryInterface, highScoresHelper, abeClientInformation, this.gameLayerManager!.getGameInfo(), this.getCustomCommandListener(), name, highScore, this.gameLayerManager!.getBackgroundBasicColor(), this.gameLayerManager!.getForegroundBasicColor());
        
        


    
                        if(isLast)
                        
                                    {
                                    commandAction(GameCommandsFactory.getInstance()!.SET_MENU_DISPLAYABLE, textBox)

                                    }
                                

    
                        if(autoSubmit)
                        
                                    {
                                    
class SaveHighScoreRunnable
            extends Object
        
                , Runnable {
        

    private readonly progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        

    public run(){

        try {
            
    
                        if(isLast)
                        
                                    {
                                    submit()

                                    }
                                
                        else {
                            saveHighScore()

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "run", e)
end()
}

}


}
                
            
runTask(SaveHighScoreRunnable())

                                    }
                                
}


    getGameStateTimeHelper(): TimeDelayHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameStateTimeHelper;
    
}


    setInitialized(initialized: boolean){
var initialized = initialized
this.initialized= initialized
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public setProgressPaintable(paintable: PaintableInterface){
    //var paintable = paintable
this.progressPaintable= paintable
}


    public getStartIntermissionInterface(): IntermissionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.startIntermissionInterface;
    
}


    public getEndLevelIntermissionInterface(): IntermissionInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endLevelIntermissionInterface;
    
}


    setTouchPaintableP(paintable: Paintable){
var paintable = paintable
this.touchPaintable= paintable
}


    public getTouchPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return touchPaintable;
    
}


    setEndGamePaintable(endGamePaintable: Paintable){
var endGamePaintable = endGamePaintable
this.endGamePaintable= endGamePaintable
}


    public getEndGamePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGamePaintable;
    
}


    setIntermissionPaintable(intermissionPaintable: Paintable){
var intermissionPaintable = intermissionPaintable
this.intermissionPaintable= intermissionPaintable
}


    public getIntermissionPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return intermissionPaintable;
    
}


    public getEndGameInfoP(): EndGameInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGameInfo;
    
}


    public setHighScoresPaintable(highScoresPaintable: Paintable){
    //var highScoresPaintable = highScoresPaintable
this.highScoresPaintable= highScoresPaintable
}


    public getHighScoresPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresPaintable;
    
}


    getRealHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return realHighScoresPaintable;
    
}


    clearPlayerGameInputList(){

    var playerGameInput: PlayerGameInput





                        for (
    var index: number = this.localPlayerGameInputList!.size() -1;
        
        
index >= 0; index--)
        {
playerGameInput= this.localPlayerGameInputList!.get(index) as PlayerGameInput
removeListener(playerGameInput)
}

clear()
}


    addPlayerGameInput(playerGameInput: PlayerGameInput){
    //var playerGameInput = playerGameInput
add(playerGameInput)
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
    //var menuInputProcessor = menuInputProcessor
this.menuInputProcessor= menuInputProcessor
}


    getMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return menuInputProcessor;
    
}


    public getMenuForm(): ScrollSelectionForm{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return menuForm;
    
}


    public setMenuForm(menuForm: ScrollSelectionForm){
    //var menuForm = menuForm
this.menuForm= menuForm
}


    public getStartLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startLevel;
    
}


    public setStartLevel(startLevel: number){
    //var startLevel = startLevel
this.startLevel= startLevel
}


    setTouchButtonsPaintable(touchButtonsPaintable: Paintable){
    //var touchButtonsPaintable = touchButtonsPaintable
this.touchButtonsPaintable= touchButtonsPaintable
}


    getTouchButtonsPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return touchButtonsPaintable;
    
}


    public setGameInputProcessor(gameInputProcessor: Processor){
    //var gameInputProcessor = gameInputProcessor
this.gameInputProcessor= gameInputProcessor
}


    getGameInputProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInputProcessor;
    
}


    setEndGameProcessor(endGameProcessor: Processor){
    //var endGameProcessor = endGameProcessor
this.endGameProcessor= endGameProcessor
}


    getEndGameProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGameProcessor;
    
}


    setEndGameStatePaintable(endGameStatePaintable: Paintable){
    //var endGameStatePaintable = endGameStatePaintable
this.endGameStatePaintable= endGameStatePaintable
}


    getEndGameStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return endGameStatePaintable;
    
}


    setNonBotPaintableP(nonBotPaintable: Paintable){
    //var nonBotPaintable = nonBotPaintable
this.nonBotPaintable= nonBotPaintable
}


    getNonBotPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return nonBotPaintable;
    
}


    setStartIntermissionPaintable(startIntermissionPaintable: InitUpdatePaintable){
    //var startIntermissionPaintable = startIntermissionPaintable
this.startIntermissionPaintable= startIntermissionPaintable
}


    getStartIntermissionPaintable(): InitUpdatePaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return startIntermissionPaintable;
    
}


    public setMainStateProcessor(mainStateProcessor: Processor){
    //var mainStateProcessor = mainStateProcessor
this.mainStateProcessor= mainStateProcessor
}


    getMainStateProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mainStateProcessor;
    
}


    setProcessGameProcessor(processGameProcessor: Processor){
    //var processGameProcessor = processGameProcessor
this.processGameProcessor= processGameProcessor
}


    public getProcessGameProcessor(): Processor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return processGameProcessor;
    
}


    setOpenMenuPaintable(openMenuPaintable: Paintable){
    //var openMenuPaintable = openMenuPaintable
this.openMenuPaintable= openMenuPaintable
}


    getOpenMenuPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return openMenuPaintable;
    
}


    setPopupMenuInputProcessor(popupMenuInputProcessor: BasicMenuInputProcessor){
    //var popupMenuInputProcessor = popupMenuInputProcessor
this.popupMenuInputProcessor= popupMenuInputProcessor
}


    getPopupMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return popupMenuInputProcessor;
    
}


    public getSensorGameUpdateProcessor(): SensorGameUpdateProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return sensorGameUpdateProcessor;
    
}


    public getRawGameInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rawGameInputProcessor;
    
}


    public getRawInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rawInputProcessor;
    
}


    public setInputProcessor(inputProcessor: InputProcessor){
    //var inputProcessor = inputProcessor
this.inputProcessor= inputProcessor
}


    getInputProcessor(): InputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputProcessor;
    
}


    setMenuPaintable(menuPaintable: Paintable){
    //var menuPaintable = menuPaintable
this.menuPaintable= menuPaintable
}


    getMenuPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return menuPaintable;
    
}


    setFormPaintable(formPaintable: Paintable){
    //var formPaintable = formPaintable
this.formPaintable= formPaintable
}


    getFormPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return formPaintable;
    
}


    public setGameSpecificPaintableP(gameSpecificPaintable: Paintable){
    //var gameSpecificPaintable = gameSpecificPaintable
this.gameSpecificPaintable= gameSpecificPaintable
}


    getGameSpecificPaintableP(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameSpecificPaintable;
    
}


    public isSingleThread(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed() || SWTUtil.isSWT;
    
}


    public isRunningInAnotherThread(): boolean{

    var features: Features = Features.getInstance()!;
        
        


    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        


    
                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRunning();
    

                        }
                            
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TYPE;
    
}


}
                
            

