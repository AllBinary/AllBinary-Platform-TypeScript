
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
        
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command
import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics
import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
import { IndexedAnimationBehavior } from '../../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
//not GWT import const IndexedAnimationBehavior
import { SpecialAnimation } from '../../../../../org/allbinary/animation/special/SpecialAnimation.js';
//not GWT import const SpecialAnimation
import { GameAdStateFactory } from '../../../../../org/allbinary/business/advertisement/GameAdStateFactory.js';
//not GWT import const GameAdStateFactory
import { BaseGameStatistics } from '../../../../../org/allbinary/canvas/BaseGameStatistics.js';
//not GWT import const BaseGameStatistics
import { CustomGameMenuUtil } from '../../../../../org/allbinary/canvas/CustomGameMenuUtil.js';
//not GWT import const CustomGameMenuUtil
import { FullScreenUtil } from '../../../../../org/allbinary/canvas/FullScreenUtil.js';
//not GWT import const FullScreenUtil
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory
import { RunnableCanvas } from '../../../../../org/allbinary/canvas/RunnableCanvas.js';
//not GWT import const RunnableCanvas
import { GameAdState } from '../../../../../org/allbinary/game/GameAdState.js';
//not GWT import const GameAdState
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { ChangedGameFeatureListener } from '../../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
//not GWT import const ChangedGameFeatureListener
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const InputFeatureFactory
import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const MainFeatureFactory
import { BasicBuildGameInitializerFactory } from '../../../../../org/allbinary/game/init/BasicBuildGameInitializerFactory.js';
//not GWT import const BasicBuildGameInitializerFactory
import { GameInitializationUtil } from '../../../../../org/allbinary/game/init/GameInitializationUtil.js';
//not GWT import const GameInitializationUtil
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const GameInputStrings
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const PlatformInputMappingFactory
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
//not GWT import const DownGameKeyEventHandler
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
//not GWT import const UpGameKeyEventHandler
import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
//not GWT import const SWTUtil
import { DemoGameMidlet } from '../../../../../org/allbinary/game/midlet/DemoGameMidlet.js';
//not GWT import const DemoGameMidlet
import { HighScoreCommands } from '../../../../../org/allbinary/game/score/HighScoreCommands.js';
//not GWT import const HighScoreCommands
import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
//not GWT import const HighScores
import { HighScoresFactoryInterface } from '../../../../../org/allbinary/game/score/HighScoresFactoryInterface.js';
//not GWT import const HighScoresFactoryInterface
import { HighScoresHelper } from '../../../../../org/allbinary/game/score/HighScoresHelper.js';
//not GWT import const HighScoresHelper
import { HighScoresPaintable } from '../../../../../org/allbinary/game/score/HighScoresPaintable.js';
//not GWT import const HighScoresPaintable
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
//not GWT import const NullHighScoresSingletonFactory
import { GameState } from '../../../../../org/allbinary/game/state/GameState.js';
//not GWT import const GameState
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { ResizableListenerHandler } from '../../../../../org/allbinary/graphics/ResizableListenerHandler.js';
//not GWT import const ResizableListenerHandler
import { ProgressCanvas } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvas.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { MyCommandsFactory } from '../../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory
import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
//not GWT import const DisplayChangeEvent
import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventHandler
import { DisplayChangeEventListener } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
//not GWT import const DisplayChangeEventListener
import { FormType } from '../../../../../org/allbinary/graphics/form/FormType.js';
//not GWT import const FormType
import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
//not GWT import const FormTypeFactory
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm
import { CurrentDisplayableFactory } from '../../../../../org/allbinary/graphics/opengles/CurrentDisplayableFactory.js';
//not GWT import const CurrentDisplayableFactory
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil
import { OpenGLThreadUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLThreadUtil.js';
//not GWT import const OpenGLThreadUtil
import { InitUpdatePaintable } from '../../../../../org/allbinary/graphics/paint/InitUpdatePaintable.js';
//not GWT import const InitUpdatePaintable
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
import { PaintableInterface } from '../../../../../org/allbinary/graphics/paint/PaintableInterface.js';
//not GWT import const PaintableInterface
import { StatePaintable } from '../../../../../org/allbinary/graphics/paint/StatePaintable.js';
//not GWT import const StatePaintable
import { StatePaintableFactory } from '../../../../../org/allbinary/graphics/paint/StatePaintableFactory.js';
//not GWT import const StatePaintableFactory
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface
import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
//not GWT import const InApplicationPurchaseFactory
import { LockableFeature } from '../../../../../org/allbinary/logic/system/security/licensing/LockableFeature.js';
//not GWT import const LockableFeature
import { LockableFeatureFactory } from '../../../../../org/allbinary/logic/system/security/licensing/LockableFeatureFactory.js';
//not GWT import const LockableFeatureFactory
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { AllBinaryMediaManager } from '../../../../../org/allbinary/media/audio/AllBinaryMediaManager.js';
//not GWT import const AllBinaryMediaManager
import { EarlySoundsFactory } from '../../../../../org/allbinary/media/audio/EarlySoundsFactory.js';
//not GWT import const EarlySoundsFactory
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCanvasRunnableInterface } from './GameCanvasRunnableInterface.js';
//not GWT import - same folder const GameCanvasRunnableInterfaceimport { MenuListener } from './MenuListener.js';
//not GWT import - same folder const MenuListenerimport { FormUtil } from './FormUtil.js';
//not GWT import - same folder const FormUtilimport { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
//not GWT import - same folder const NoMenuInputProcessorimport { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
//not GWT import - same folder const BasicMenuInputProcessorimport { NullWaitGameRunnable } from './NullWaitGameRunnable.js';
//not GWT import - same folder const NullWaitGameRunnableimport { GameRunnable } from './GameRunnable.js';
//not GWT import - same folder const GameRunnableimport { GameInputMappingCanvas } from './GameInputMappingCanvas.js';
//not GWT import - same folder const GameInputMappingCanvas
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
            
    public setLoadStateHashtable(hashtable: ABHashtable<any, any>){
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "setLoadStateHashtable");
    
}


                //@Throws(Exception.constructor)
            
    public getLoadStateHashtable(): ABHashtable<any, any>{
this.logUtil!.putF("Trying to continue a demo lol - only continue a game canvas not the demo", this, "getLoadStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stdUtil!.NULL_TABLE;
    
}


                //@Throws(Exception.constructor)
            
    public getCurrentStateHashtable(): ABHashtable<any, any>{
this.logUtil!.putF("Trying to save the AI lol", this, "getCurrentStateHashtable");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stdUtil!.NULL_TABLE;
    
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



