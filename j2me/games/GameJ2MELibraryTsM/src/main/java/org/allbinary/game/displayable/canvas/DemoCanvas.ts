
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
        



            import Vector from "@ohos.util.Vector";
        
            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { IndexedAnimationBehavior } from "../../../../../org/allbinary/animation/IndexedAnimationBehavior.js";

    
import { SpecialAnimation } from "../../../../../org/allbinary/animation/special/SpecialAnimation.js";

    
import { GameAdStateFactory } from "../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js";

    
import { BaseGameStatistics } from "../../../../../org/allbinary/canvas/BaseGameStatistics.js";

    
import { CustomGameMenuUtil } from "../../../../../org/allbinary/canvas/CustomGameMenuUtil.js";

    
import { FullScreenUtil } from "../../../../../org/allbinary/canvas/FullScreenUtil.js";

    
import { GameStatisticsFactory } from "../../../../../org/allbinary/canvas/GameStatisticsFactory.js";

    
import { RunnableCanvas } from "../../../../../org/allbinary/canvas/RunnableCanvas.js";

    
import { GameAdState } from "../../../../../org/allbinary/game/GameAdState.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { ChangedGameFeatureListener } from "../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { InputFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { MainFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js";

    
import { BasicBuildGameInitializerFactory } from "../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js";

    
import { GameInitializationUtil } from "../../../../../org/allbinary/game/init/GameInitializationUtil.js";

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { PlatformInputMappingFactory } from "../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { DownGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { GameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js";

    
import { UpGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js";

    
import { InputToGameKeyMapping } from "../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { SWTUtil } from "../../../../../org/allbinary/game/layer/SWTUtil.js";

    
import { DemoGameMidlet } from "../../../../../org/allbinary/game/midlet/DemoGameMidlet.js";

    
import { HighScoreCommands } from "../../../../../org/allbinary/game/score/HighScoreCommands.js";

    
import { HighScores } from "../../../../../org/allbinary/game/score/HighScores.js";

    
import { HighScoresFactoryInterface } from "../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js";

    
import { HighScoresHelper } from "../../../../../org/allbinary/game/score/HighScoresHelper.js";

    
import { HighScoresHelperBase } from "../../../../../org/allbinary/game/score/HighScoresHelperBase.js";

    
import { HighScoresPaintable } from "../../../../../org/allbinary/game/score/HighScoresPaintable.js";

    
import { NullHighScoresSingletonFactory } from "../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js";

    
import { GameState } from "../../../../../org/allbinary/game/state/GameState.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { ResizableListenerHandler } from "../../../../../org/allbinary/graphics/ResizableListenerHandler.js";

    
import { ProgressCanvas } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js";

    
import { ProgressCanvasFactory } from "../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyCommandsFactory } from "../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { DisplayChangeEvent } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { DisplayChangeEventHandler } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { DisplayChangeEventListener } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js";

    
import { FullScreenPaintableFactory } from "../../../../../org/allbinary/graphics/displayable/screen/FullScreenPaintableFactory.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { CommandCurrentSelectionFormFactory } from "../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js";

    
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

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { PaintableInterface } from "../../../../../org/allbinary/graphics/paint/PaintableInterface.js";

    
import { StatePaintable } from "../../../../../org/allbinary/graphics/paint/StatePaintable.js";

    
import { StatePaintableFactory } from "../../../../../org/allbinary/graphics/paint/StatePaintableFactory.js";

    
import { BasicMotionGesturesHandler } from "../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { OperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { InApplicationPurchaseFactory } from "../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js";

    
import { LockableFeature } from "../../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js";

    
import { LockableFeatureFactory } from "../../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { AllBinaryMediaManager } from "../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js";

    
import { EarlySoundsFactory } from "../../../../../org/allbinary/media/audio/EarlySoundsFactory.js";

    
import { PrimaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js";

    
import { SecondaryPlayerQueueFactory } from "../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { NullThread } from "../../../../../org/allbinary/thread/NullThread.js";

    
import { ThreadFactoryUtil } from "../../../../../org/allbinary/thread/ThreadFactoryUtil.js";

    
import { ThreadUtil } from "../../../../../org/allbinary/thread/ThreadUtil.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DemoCanvas extends RunnableCanvas
                , GameCanvasRunnableInterface
                , MenuListener
                , DisplayChangeEventListener
                , DemoPaintableInterface {
        

    private static readonly id: number = 0;
        
        

    private static readonly BOT_GAME_STATS: string = "Bot Game Statistics: ";
        
        

    public static readonly TYPE: number = 3;
        
        

    readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        

    readonly myCommandsFactory: MyCommandsFactory = MyCommandsFactory.getInstance()!;
        
        

    readonly gameAdStateFactory: GameAdStateFactory = GameAdStateFactory.getInstance()!;
        
        

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    private readonly threadFactoryUtil: ThreadFactoryUtil = ThreadFactoryUtil.getInstance()!;
        
        

    fullscreenPaintable: Paintable = FullScreenPaintableFactory.getInstance()!.paintable;
        
        

    private basicGameDemoPaintable: StatePaintable = StatePaintableFactory.getInstance()!;
        
        

    private specialAnimationInterface: SpecialAnimation = SpecialAnimation.getInstance()!;
        
        

    private paintedSpecialAnimationInterface: Animation = SpecialAnimation.getInstance()!;
        
        

    private readonly fullScreenUtil: FullScreenUtil = FullScreenUtil.getInstance()!;
        
        

    private gameCanvas: AllBinaryGameCanvas = NullGameCanvas.getInstance()!;
        
        

    private readonly highScoresHelper: HighScoresHelperBase = new HighScoresHelper();
        
        

    private readonly realHighScoresPaintable: HighScoresPaintable = new HighScoresPaintable();
        
        

    private highScoresPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private state: number = 0;
        
        

    private canvasThread: Thread = NullThread.NULL_THREAD;
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(6000);
        
        

    private basicColor: BasicColor = basicColorFactory!.RED;
        
        

    readonly abeClientInformation: AbeClientInformationInterface

    private readonly highScoresFactoryInterface: HighScoresFactoryInterface

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;
        
        

    private menuForm: ScrollSelectionForm = ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM;
        
        

    private readonly gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory

    private initialized: boolean= false

    private readonly demoGameRunnable: DemoGameStartupRunnable

    private defaultPaintableInterface: Paintable = NullPaintable.getInstance()!;
        
        

    private paintableInterface: PaintableInterface = NullPaintable.getInstance()!;
        
        

    private readonly overlayPaintable: InitUpdatePaintable

    private readonly progressPaintable: PaintableInterface = ProgressCanvasFactory.getLazyInstance()!;
        
        

    private tempWait: number = NullWaitGameRunnable.getInstance()!.WAIT;
        
        

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;
        
        

    gameRunnable: GameRunnable = NullWaitGameRunnable.getInstance()!;
        
        
public constructor (abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, highScoresFactoryInterface: HighScoresFactoryInterface, paintable: Paintable, overlayPaintable: InitUpdatePaintable, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory, isContinue: boolean)                        

                            : super(commandListener, CurrentDisplayableFactory.getInstance()!.DEFAULT_CHILD_NAME_LIST){

            super();
                //var abeClientInformation = abeClientInformation
    //var commandListener = commandListener
    //var highScoresFactoryInterface = highScoresFactoryInterface
    //var paintable = paintable
    //var overlayPaintable = overlayPaintable
    //var gameInitializationInterfaceFactoryInterface = gameInitializationInterfaceFactoryInterface
    //var isContinue = isContinue


                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
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
                                

                        if(ChangedGameFeatureListener.getInstance()!.isChanged(GameFeatureFactory.getInstance()!.SOUND))
                        
                                    {
                                    this.mediaInit();
    

                                    }
                                
this.demoGameRunnable= new DemoGameStartupRunnable(this);
    
DisplayChangeEventHandler.getInstance()!.addListener(this);
    
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
var displayChangeEvent = displayChangeEvent

        try {
            this.logUtil!.putF(new StringMaker().
                            append(commonLabels!.START_LABEL)!.append(displayInfoSingleton!.toString())!.append(MyFont.getInstance()!.toString())!.toString(), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT);
    

    var scrollSelectionForm: ScrollSelectionForm = this.getMenuForm()!;
        
        
;
    

                        if(scrollSelectionForm != 
                                    null
                                )
                        
                                    {
                                    
    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        
;
    

    var rectangle: Rectangle = FormUtil.getInstance()!.createFormRectangle()!;
        
        
;
    
scrollSelectionForm!.init(rectangle, formType);
    

                                    }
                                
this.overlayPaintable!.init();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

}


    getCustomCommands(): any[]{

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        
;
    

                        if(J2MEUtil.isHTML())
                        
                                    {
                                    
    var commandArray: any[] = 
                                                        [
                                                            gameCommandsFactory!.START_COMMAND,HighScoreCommands.getInstance()!.DISPLAY,GameInputMappingCanvas.DISPLAY,gameCommandsFactory!.DISPLAY_ABOUT
                                                        ];
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandArray;
    

                                    }
                                
                        else {
                            
    var commandList: BasicArrayList = new BasicArrayList();
        
        
;
    
commandList!.add(gameCommandsFactory!.START_COMMAND);
    

    var inApplicationPurchaseFactory: InApplicationPurchaseFactory = InApplicationPurchaseFactory.getInstance()!;
        
        
;
    

                        if(inApplicationPurchaseFactory!.isEnabled())
                        
                                    {
                                    
    var list: BasicArrayList = LockableFeatureFactory.getInstance()!.getList()!;
        
        
;
    

                        if(list.size() > 0 && !inApplicationPurchaseFactory!.isPurchased(list.get(0);

                         as LockableFeature);

                        )
                        
                                    {
                                    commandList!.add(gameCommandsFactory!.BUY_COMMAND);
    

                                    }
                                

                                    }
                                
commandList!.add(HighScoreCommands.getInstance()!.DISPLAY);
    

        try {
            
    var isOverScan: boolean = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()!;
        
        
;
    

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
    

    var commandArray: any[] = commandList!.toArray()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return commandArray;
    

                        }
                            
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands();
    

    var commandArray: any[] = getCustomCommands()!;
        
        
;
    

    var size: number = commandArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.addCommand(commandArray[index]! as Command);
    
}

CustomGameMenuUtil.add(this);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Error::class)
            
    public initPostPaint(){
}


                //@Throws(Error::class)
            
    public mediaInit(){
AllBinaryMediaManager.init(EarlySoundsFactory.getInstance());
    
}


    public itemStateChanged(item: Item){
var item = item
ForcedLogUtil.log(commonStrings!.NOT_IMPLEMENTED, this);
    
}


                //@Throws(Error::class)
            
    initMenu(){
this.close();
    

    var commandTextItemArrayFactory: CommandTextItemArrayFactory = DemoLimitedCommandTextItemArrayFactory.getInstance()!.getCommandTextItemArrayFactory()!;
        
        
;
    

    var items: CustomItem[] = commandTextItemArrayFactory!.getInstance(this.getCommandStack();

                         as Vector<any>, basicColorFactory!.BLACK, basicColorFactory!.WHITE)!;
        
        
;
    

    var formType: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        
;
    

    var rectangle: Rectangle = FormUtil.getInstance()!.createFormRectangle()!;
        
        
;
    
PreLogUtil.put(new StringMaker().
                            append(commonLabels!.START_LABEL)!.append(displayInfoSingleton!.toString())!.toString(), this, "initMenu");
    

    var scrollSelectionForm: ScrollSelectionForm = CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, formType, 15, true, basicColorFactory!.BLACK, basicColorFactory!.WHITE)!;
        
        
;
    
this.setMenuForm(scrollSelectionForm);
    

    var formType2: FormType = FormTypeFactory.getInstance()!.getFormType()!;
        
        
;
    

    var rectangle2: Rectangle = FormUtil.getInstance()!.createFormRectangle()!;
        
        
;
    
scrollSelectionForm!.init(rectangle2, formType2);
    

                        if(this.getMenuForm() != ScrollSelectionFormNoneFactory.getInstance())
                        
                                    {
                                    this.setMenuInputProcessor(new CommandFormInputProcessor(new BasicArrayList(),  -1, this, this.getMenuForm()));
    

                                    }
                                
this.open();
    
}


    public open(){
BasicMotionGesturesHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
}


    public close(){
BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public keyPressed(keyCode: number){
var keyCode = keyCode
this.keyPressed(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
var keyCode = keyCode
this.keyReleased(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
var keyCode = keyCode
this.keyRepeated(keyCode, 0);
    
}


    public keyPressed(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
this.addGameKeyEvent(keyCode, false);
    
}


    public keyReleased(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
this.removeGameKeyEvent(keyCode, false);
    
}


    private isSingleKeyRepeatableProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS)!;
        
        

    public keyRepeated(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId

                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    this.addGameKeyEvent(keyCode, true);
    

                                    }
                                
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    private lastKeyNotMapped: number =  -1;
        
        

    addGameKeyEvent(keyCode: number, repeated: boolean){
var keyCode = keyCode
var repeated = repeated

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this, keyCode)!;
        
        
;
    

                        if(gameKey != NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(this, gameKey)!;
        
        
;
    
DownGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            
                        if(lastKeyNotMapped != keyCode)
                        
                                    {
                                    lastKeyNotMapped= keyCode;
    
this.logUtil!.putF(new StringMaker().
                            append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


    removeGameKeyEvent(keyCode: number, repeated: boolean){
var keyCode = keyCode
var repeated = repeated

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this, keyCode)!;
        
        
;
    

                        if(gameKey != NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(this, gameKey)!;
        
        
;
    
UpGameKeyEventHandler.getInstance()!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().
                            append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.REMOVE_KEY_EVENT);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.REMOVE_KEY_EVENT, e);
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public pause(){
this.close();
    
this.setPaused(true);
    
this.gameRunnable= NullWaitGameRunnable.getInstance();
    
this.gameCanvas!.pause();
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public unPause(){
this.open();
    
this.gameCanvas!.unPause();
    
this.gameRunnable= this.gameCanvas!.gameRunnable;
    
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
this.logUtil!.putF(new StringMaker().
                            append(commonStrings!.NOT_IMPLEMENTED)!.append(" since not a game")!.toString(), this, "isGameOver");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public setLoadStateHashtable(hashtable: Hashtable<any, any>){
var hashtable = hashtable
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "setLoadStateHashtable");
    
}


                //@Throws(Error::class)
            
    public getLoadStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "getLoadStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nullUtil!.NULL_TABLE;
    
}


                //@Throws(Error::class)
            
    public getCurrentStateHashtable(): Hashtable<any, any>{
this.logUtil!.putF("Trying to save the AI lol", this, "getCurrentStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nullUtil!.NULL_TABLE;
    
}


    public setHighScoreSubmitted(isNotUsed: boolean){
var isNotUsed = isNotUsed
}


    public paint(graphics: Graphics){
    //var graphics = graphics
this.paintableInterface!.paint(graphics);
    
this.paintedSpecialAnimationInterface!.paint(graphics, 0, 0);
    
this.highScoresPaintable!.paint(graphics);
    
this.getBasicGameDemoPaintable()!.paint(graphics);
    
this.overlayPaintable!.paint(graphics);
    
this.fullscreenPaintable!.paint(graphics);
    
this.progressPaintable!.paint(graphics);
    
}


    public paintThreed(graphics: Graphics){
    //var graphics = graphics
this.paintableInterface!.paintThreed(graphics);
    
this.paintedSpecialAnimationInterface!.paintThreed(graphics, 0, 0, 0);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setGameOver(){
this.logUtil!.putF("Not Implemented since not a game", this, "setGameOver");
    
}


    demoStateChange(){

    var newState: number = this.state +1;
        
        
;
    

                        if(newState > 2)
                        
                                    {
                                    newState= 0;
    

                                    }
                                
                             else 
                        if(newState == 2)
                        
                                    {
                                    
                        if(!this.highScoresHelper!.isAnyHighScores();

                        )
                        
                                    {
                                    newState= 0;
    

                                    }
                                
                        else {
                            
    var highScores: HighScores = this.highScoresHelper!.getNextHighScores()!;
        
        
;
    

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
    
this.setState();
    
}


    private readonly SET_STATE: string = "setState";
        
        

    setState(){
PreLogUtil.put(SmallIntegerSingletonFactory.getInstance()!.createInstance(this.state)!.toString(), this, SET_STATE);
    
this.getBasicGameDemoPaintable()!.setState(this.state);
    

                        if(this.state == 0)
                        
                                    {
                                    this.highScoresPaintable= NullPaintable.getInstance();
    
this.paintedSpecialAnimationInterface= this.getSpecialAnimationInterface();
    

                        if(!this.demoGameRunnable!.isRunning();

                         && gameCanvas!.isInitialized())
                        
                                    {
                                    this.getSpecialAnimationInterface()!.reset();
    

                                    }
                                

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
                                

    var gameAdState: GameAdState = gameAdStateFactory!.getCurrentInstance()!;
        
        
;
    
gameAdState!.processPageAdState();
    
}


                //@Throws(Error::class)
            
    getNextRandom(): number{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createGameLayerManager(randomValue: number): AllBinaryGameLayerManager{
var randomValue = randomValue



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    createRunnable(randomLevel: number): GameCanvasRunnableInterface{
var randomLevel = randomLevel



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    create(){
PreLogUtil.put(commonStrings!.START, this, "create");
    
this.highScoresPaintable= NullPaintable.getInstance();
    

    var randomLevel: number = this.getNextRandom()!;
        
        
;
    
this.gameCanvas= this.createRunnable(randomLevel);

                         as AllBinaryGameCanvas;
    
this.basicColor= this.gameCanvas!.getLayerManager()!.getForegroundBasicColor();
    
this.getRealHighScoresPaintable()!.setBasicColorP(this.basicColor);
    
this.gameCanvas!.setGameCanvasStartListener(this);
    

    var gameInfo: GameInfo = this.gameCanvas!.getLayerManager()!.getGameInfo()!;
        
        
;
    
this.getHighScoresFactoryInterface()!.fetchHighScores(gameInfo, this.highScoresHelper);
    
}


                //@Throws(Error::class)
            
    start(){

    var gameCanvas: AllBinaryGameCanvas = this.gameCanvas;
        
        
;
    
PreLogUtil.put(new StringMaker().
                            append("Game Thread in DemoCanvas: ")!.append(this.stringUtil!.toString(gameCanvas))!.toString(), this, commonStrings!.START);
    
this.canvasThread= threadFactoryUtil!.getInstance(gameCanvas);
    
this.gameCanvas!.setThread(canvasThread);
    
this.threadFactoryUtil!.start(this.canvasThread);
    

                        if(this.getWait() == NullWaitGameRunnable.getInstance()!.WAIT)
                        
                                    {
                                    this.setWait(this.getTempWait());
    

                                    }
                                
}


    public preDemoProcess(){

                        if(!gameCanvas!.isInitialized();

                         || gameCanvas!.getTitle() == NullGameCanvas.NO_GAME)
                        
                                    {
                                    
                        if(AllBinaryMediaManager.update())
                        
                                    {
                                    
                        if(!PrimaryPlayerQueueFactory.getInstance()!.process();

                        )
                        
                                    {
                                    SecondaryPlayerQueueFactory.getInstance()!.process();
    

                                    }
                                

                                    }
                                

                                    }
                                
this.overlayPaintable!.update();
    
}


                //@Throws(Error::class)
            
    public process(){
super.process();
    
this.getMenuInputProcessor()!.processInput();
    
this.preDemoProcess();
    

                        if(this.state == 0)
                        
                                    {
                                    
    var indexedAnimationBehavior: IndexedAnimationBehavior = (this.getSpecialAnimationInterface()!.getAnimationBehavior();

                         as IndexedAnimationBehavior);
        
        
;
    

                        if(indexedAnimationBehavior!.loopIndex < 1)
                        
                                    {
                                    timeDelayHelper!.setStartTime();
    

                                    }
                                

    var demoGameMidlet: DemoGameMidlet = this.getCustomCommandListener();

                         as DemoGameMidlet;
        
        
;
    

                        if(this.gameCanvas != NullGameCanvas.getInstance() && this.gameCanvas!.isGameOver())
                        
                                    {
                                    this.stopGameDemo();
    

    var randomLevel: number = this.getNextRandom()!;
        
        
;
    

    var gameInfo: GameInfo = this.gameCanvas!.getLayerManager()!.getGameInfo()!;
        
        
;
    
gameInfo!.setCurrentLevel(randomLevel);
    
this.gameCanvas!.setGameOver(false);
    
this.start();
    

                                    }
                                
                             else 
                        if(this.gameCanvas == NullGameCanvas.getInstance() && demoGameMidlet!.isReady())
                        
                                    {
                                    
                        if(!demoGameRunnable!.isRunning();

                        )
                        
                                    {
                                    this.startDemoGame();
    
demoGameRunnable!.setRunning(true);
    

    var thread: Thread = threadFactoryUtil!.getInstance(demoGameRunnable)!;
        
        
;
    
demoGameRunnable!.setThread(thread);
    
threadFactoryUtil!.start(thread);
    

                                    }
                                

                                    }
                                

                                    }
                                
}


                //@Throws(Error::class)
            
    startDemoGame(){
DemoCanvasProgressUtil.showProgress(this);
    
}


                //@Throws(Error::class)
            
    stopGameDemo(){

                        if(this.gameCanvas != NullGameCanvas.getInstance())
                        
                                    {
                                    this.logUtil!.putF("Set Running False", this, "stopGameDemo");
    
this.gameCanvas!.setRunning(false);
    

                                    }
                                
ThreadUtil.getInstance()!.join(this.canvasThread);
    
}


    public showGamePaintable(){

    var METHOD_NAME: string = "showGamePaintable";
        
        
;
    
PreLogUtil.put(commonStrings!.START, this, METHOD_NAME);
    

    var isDefault: boolean = J2MEUtil.isHTML()!;
        
        
;
    

                        if(this.gameCanvas != NullGameCanvas.getInstance() && (this.gameCanvas!.isRunning() || isDefault || SWTUtil.isSWT) && !(this.gameCanvas!.getType() == NullGameCanvas.TYPE))
                        
                                    {
                                    this.gameRunnable= this.gameCanvas!.gameRunnable;
    
PreLogUtil.put("Showing Game", this, METHOD_NAME);
    
this.setPaintableInterface(this.gameCanvas);
    

                                    }
                                
                        else {
                            this.gameRunnable= NullWaitGameRunnable.getInstance();
    
PreLogUtil.put("Not Showing Game", this, METHOD_NAME);
    
this.setPaintableInterface(this.getDefaultPaintableInterface());
    

                        }
                            
}


    isReadyForStateChange(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return !this.demoGameRunnable!.isRunning();

                         && gameCanvas!.isInitialized();
    
}


                //@Throws(Error::class)
            
    processGame(){
this.gameRunnable!.run();
    

                        if(!this.specialAnimationInterface!.isComplete();

                         && this.isReadyForStateChange())
                        
                                    {
                                    this.specialAnimationInterface!.nextFrame();
    

                                    }
                                

                        if(timeDelayHelper!.isTime() && this.isReadyForStateChange())
                        
                                    {
                                    this.demoStateChange();
    

                                    }
                                
                        else {
                            this.process();
    

                        }
                            
}


    public run(){
this.logUtil!.putF(commonStrings!.START_RUNNABLE, this, commonStrings!.RUN);
    

        try {
            
    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    
progressCanvas!.addPortion(50, "Demo Thread");
    
this.setCurrentThread();
    
this.setRunning(true);
    

                        if(features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    progressCanvas!.end();
    

                                    }
                                
                        else {
                            progressCanvas!.addPortion(50, "Demo Thread Running");
    

                        }
                            
fullScreenUtil!.init(this, this.getCustomCommandListener());
    
this.initMenu();
    
this.initPostPaint();
    
this.setState();
    

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    
        while(gameCanvas == NullGameCanvas.getInstance() || !gameCanvas!.isInitialized();

                        )
        {
this.loopTimeHelper!.setStartTime();
    
this.processGame();
    
this.processLoopSleep();
    
}


    var demoGameRunnable: DemoGameRunnable = new DemoGameRunnable(this);
        
        
;
    

    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        
;
    
currentDisplayableFactory!.setRunnable(demoGameRunnable);
    
currentDisplayableFactory!.setMyCanvas(this);
    
OpenGLThreadUtil.getInstance()!.onResume();
    

                                    }
                                

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD) || J2MEUtil.isHTML())
                        
                                    {
                                    
    var demoGameRunnable: DemoGameRunnable = new DemoGameRunnable(this);
        
        
;
    

    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        
;
    
currentDisplayableFactory!.setRunnable(demoGameRunnable);
    
currentDisplayableFactory!.setMyCanvas(this);
    

                                    }
                                
                        else {
                            
        while(this.isRunning())
        {
this.run3();
    
}

this.end();
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
}

this.logUtil!.putF(commonStrings!.END_RUNNABLE, this, commonStrings!.RUN);
    
}


                //@Throws(Error::class)
            
    public run3(){
this.loopTimeHelper!.setStartTime();
    
this.processGame();
    
this.processLoopSleep();
    
}


    public setRunning(running: boolean){
var running = running
super.setRunning(running);
    

        try {
            
    var features: Features = Features.getInstance()!;
        
        
;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    

                        if(running)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        if((features.isDefault(openGLFeatureFactory!.OPENGL) || J2MEUtil.isHTML()) || SWTUtil.isSWT)
                        
                                    {
                                    
    var currentDisplayableFactory: CurrentDisplayableFactory = CurrentDisplayableFactory.getInstance()!;
        
        
;
    
currentDisplayableFactory!.clearRunnable();
    
this.end();
    

                                    }
                                

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, SET_RUNNING, e);
    
}

}


    private readonly baseGameStatistics: BaseGameStatistics = GameStatisticsFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public end(){

    var progressCanvas: ProgressCanvas = ProgressCanvasFactory.getInstance()!;
        
        
;
    

    var features: Features = Features.getInstance()!;
        
        
;
    
baseGameStatistics!.add(new StringMaker().
                            append(BOT_GAME_STATS)!.append(baseGameStatistics!.toString())!.append(CommonSeps.getInstance()!.NEW_LINE)!.toString());
    
baseGameStatistics!.init();
    

                        if(features.isFeature(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND))
                        
                                    {
                                    progressCanvas!.start();
    

                                    }
                                
this.logUtil!.putF("Demo End", this, commonStrings!.RUN);
    
this.close();
    
DisplayChangeEventHandler.getInstance()!.removeListener(this);
    
this.stopGameDemo();
    
}


    public setGameState(gameState: GameState){
var gameState = gameState
}


    public getGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameState.PLAYING_GAME_STATE;
    
}


    public getGameCanvasRunnableInterface(): AllBinaryGameCanvas{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameCanvas;
    
}


    public isDemoLoading(): boolean{

    var gameCanvas: AllBinaryGameCanvas = this.gameCanvas;
        
        
;
    

                        if(gameCanvas == NullGameCanvas.getInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if(gameCanvas!.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    getState(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return state;
    
}


    setState(state: number){
var state = state
this.state= state;
    
}


    public isHighScoreSubmitted(): boolean{
this.logUtil!.putF("Wow the AI got a high score!", this, "isHighScoreSubmitted");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getRealHighScoresPaintable(): HighScoresPaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return realHighScoresPaintable;
    
}


    setSpecialAnimationInterface(specialAnimationInterface: SpecialAnimation){
var specialAnimationInterface = specialAnimationInterface
specialAnimationInterface!.setFrame(0);
    
this.specialAnimationInterface= specialAnimationInterface;
    
}


    getSpecialAnimationInterface(): SpecialAnimation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return specialAnimationInterface;
    
}


    setPaintableInterface(paintableInterface: PaintableInterface){
var paintableInterface = paintableInterface
this.paintableInterface= paintableInterface;
    
}


    getPaintableInterface(): PaintableInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return paintableInterface;
    
}


    setDefaultPaintableInterface(defaultPaintableInterface: Paintable){
var defaultPaintableInterface = defaultPaintableInterface
this.defaultPaintableInterface= defaultPaintableInterface;
    
}


    getDefaultPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultPaintableInterface;
    
}


    public getHighScoresFactoryInterface(): HighScoresFactoryInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScoresFactoryInterface;
    
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
var menuInputProcessor = menuInputProcessor
this.menuInputProcessor= menuInputProcessor;
    
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
var menuForm = menuForm
this.menuForm= menuForm;
    
}


    public isInitialized(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return initialized;
    
}


    getOverlayPaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return overlayPaintable;
    
}


    setBasicGameDemoPaintable(basicGameDemoPaintable: StatePaintable){
var basicGameDemoPaintable = basicGameDemoPaintable
this.basicGameDemoPaintable= basicGameDemoPaintable;
    
}


    getBasicGameDemoPaintable(): StatePaintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicGameDemoPaintable;
    
}


    public setTempWait(tempWait: number){
var tempWait = tempWait
this.tempWait= tempWait;
    
}


    public getTempWait(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tempWait;
    
}


    public isSingleThread(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OpenGLFeatureUtil.getInstance()!.isAnyThreed() || SWTUtil.isSWT;
    
}


    public isRunningInAnotherThread(): boolean{

    var features: Features = Features.getInstance()!;
        
        
;
    

    var openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;
        
        
;
    

                        if(features.isDefault(openGLFeatureFactory!.OPENGL_AS_GAME_THREAD))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRunning();

                        ;
    

                        }
                            
}


    public getGameInitializationInterfaceFactoryInterface(): BasicBuildGameInitializerFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameInitializationInterfaceFactoryInterface;
    
}


    public getType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TYPE;
    
}


}
                
            

