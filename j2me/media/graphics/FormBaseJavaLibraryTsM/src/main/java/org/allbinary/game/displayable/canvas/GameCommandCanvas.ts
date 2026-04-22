
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { NullCommandListener } from "../../../../../javax/microedition/lcdui/NullCommandListener.js";

    
import { Processor } from "../../../../../org/allbinary/canvas/Processor.js";

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { InputFeatureFactory } from "../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js";

    
import { RepaintBehavior } from "../../../../../org/allbinary/game/displayable/RepaintBehavior.js";

    
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

    
import { PointFactory } from "../../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CanvasStrings } from "../../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyCanvas } from "../../../../../org/allbinary/graphics/displayable/MyCanvas.js";

    
import { DisplayChangeEvent } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js";

    
import { DisplayChangeEventHandler } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js";

    
import { DisplayChangeEventListener } from "../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js";

    
import { ScreenRepaintProcessorFactory } from "../../../../../org/allbinary/graphics/displayable/screen/ScreenRepaintProcessorFactory.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { CommandCurrentSelectionFormFactory } from "../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js";

    
import { FormPaintable } from "../../../../../org/allbinary/graphics/form/FormPaintable.js";

    
import { FormTypeFactory } from "../../../../../org/allbinary/graphics/form/FormTypeFactory.js";

    
import { PaintableForm } from "../../../../../org/allbinary/graphics/form/PaintableForm.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { ScrollSelectionFormNoneFactory } from "../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js";

    
import { CommandTextItemArrayFactory } from "../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { AllCommandsVisitor } from "../../../../../org/allbinary/graphics/form/item/validation/AllCommandsVisitor.js";

    
import { NullPaintable } from "../../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { BasicMotionGesturesHandler } from "../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { MenuListener } from "./MenuListener.js";

import { NoMenuInputProcessor } from "./NoMenuInputProcessor.js";

import { BasicMenuInputProcessor } from "./BasicMenuInputProcessor.js";

export class GameCommandCanvas extends MyCanvas implements MenuListener, DisplayChangeEventListener {
        

    private static readonly id: number = 0;
        
        

    private readonly repaintProcessor: Processor = ScreenRepaintProcessorFactory.getInstance()!.getInstance(this)!;
        
        

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;
        
        

    readonly foregroundBasicColor: BasicColor

    readonly backgroundBasicColor: BasicColor

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;
        
        

    private readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;
        
        

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;
        
        

    public readonly repaintBehavior: RepaintBehavior

    foregroundColor: number

    backgroundColor: number

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;
        
        

    private menuPaintable: Paintable = NullPaintable.getInstance()!;
        
        

    private menuForm: PaintableForm = PaintableForm.NULL_PAINTABLE_FORM;
        
        

    private isSingleKeyRepeatableProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS)!;
        
        
public constructor (cmdListener: CommandListener, name: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(name, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST);
                        //var cmdListener = cmdListener
    //var name = name
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.repaintBehavior= RepaintBehavior.getInstance();
    
this.foregroundBasicColor= foregroundBasicColor;
    
this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundColor= this.foregroundBasicColor!.toInt();
    
this.backgroundColor= this.backgroundBasicColor!.toInt();
    
this.initCommands(cmdListener);
    

                        if(cmdListener != NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    
        try {
            this.initMenu();
    
repaintProcessor!.process();
    

                //: 
} catch(e) 
            {



                            throw new RuntimeException()
}


                                    }
                                
}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
    //var displayChangeEvent = displayChangeEvent

        try {
            this.logUtil!.putF(commonStrings!.START, this, canvasStrings!.ON_DISPLAY_CHANGE_EVENT);
    

    var rectangle: Rectangle = this.createRectangle(this.menuForm!.size())!;
        
        
;
    
this.menuForm!.init(rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM);
    
this.update();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "onResize", e);
    
}

}


    public initCommands(cmdListener: CommandListener){
    //var cmdListener = cmdListener
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Error::class)
            
    initMenu(){

    var form: ScrollSelectionForm = this.createForm()!;
        
        
;
    
this.menuForm= form;
    

                        if(form != ScrollSelectionFormNoneFactory.getInstance())
                        
                                    {
                                    this.setMenuInputProcessor(new ImmediateCommandFormInputProcessor(new BasicArrayList(),  -1, this, form));
    
this.menuPaintable= new FormPaintable(form);
    

                                    }
                                
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Error::class)
            
    public createForm(): ScrollSelectionForm{

    var items: CustomItem[] = new CommandTextItemArrayFactory(new AllCommandsVisitor()).
                            getInstance(this.getCommandStack();

                         as Vector<any>, this.backgroundBasicColor, this.foregroundBasicColor)!;
        
        
;
    

    var rectangle: Rectangle = this.createRectangle(items.length)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM, 15, false, this.backgroundBasicColor, this.foregroundBasicColor);

                        ;
    
}


    public createRectangle(size: number): Rectangle{
    //var size = size

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var height: number = size *MyFont.getInstance()!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var startY: number = (displayInfo!.getLastHeight() *2 /3) -height;
        
        
;
    

    var rectangle: Rectangle = new Rectangle(PointFactory.getInstance()!.getInstance(30, startY), displayInfo!.getLastWidth() -30, startY);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public open(){
this.logUtil!.putF(commonStrings!.START, this, "open");
    
BasicMotionGesturesHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
DisplayChangeEventHandler.getInstance()!.addListener(this);
    
}


    public close(){
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CLOSE);
    
BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
DisplayChangeEventHandler.getInstance()!.removeListener(this);
    
}


                //@Throws(Error::class)
            
    public update(){
this.repaintProcessor!.process();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return id;
    
}


    public keyPressed(keyCode: number){
    //var keyCode = keyCode
this.keyPressed(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
    //var keyCode = keyCode
this.keyReleased(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
    //var keyCode = keyCode
this.keyRepeated(keyCode, 0);
    
}


    public keyPressed(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId
this.logUtil!.putF(new StringMaker().
                            append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)!.toString(), this, gameInputStrings!.KEY_PRESSED);
    
this.addGameKeyEvent(keyCode, 0, false);
    
}


    public keyReleased(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId
this.removeGameKeyEvent(keyCode, deviceId, false);
    
}


    public keyRepeated(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId

                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    this.addGameKeyEvent(keyCode, deviceId, true);
    

                                    }
                                
}


    addGameKeyEvent(keyCode: number, deviceId: number, repeated: boolean){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this, keyCode)!;
        
        
;
    

                        if(gameKey != this.gameKeyFactory!.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstance(this, gameKey)!;
        
        
;
    
this.downGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.downGameKeyEventHandler!.getInstance(deviceId)!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().
                            append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


    removeGameKeyEvent(keyCode: number, deviceId: number, repeated: boolean){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this, keyCode)!;
        
        
;
    

                        if(gameKey != this.gameKeyFactory!.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstance(this, gameKey)!;
        
        
;
    
this.upGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.upGameKeyEventHandler!.getInstance(deviceId)!.fireEvent(gameKeyEvent);
    

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


    public paint(graphics: Graphics){
    //var graphics = graphics
this.menuPaintable!.paint(graphics);
    
this.repaintBehavior!.repaint(this);
    
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
    //var menuInputProcessor = menuInputProcessor
this.menuInputProcessor= menuInputProcessor;
    
}


    getMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return menuInputProcessor;
    
}


}
                
            

