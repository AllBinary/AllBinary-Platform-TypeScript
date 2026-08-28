
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
      const NullCommandListener = globalThis.javax.microedition.lcdui.NullCommandListener;

      
//not game specific package import { Processor } from '../../../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
      const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

      
//not game specific package import { RepaintBehavior } from '../../../../../org/allbinary/game/displayable/RepaintBehavior.js';
      const RepaintBehavior = globalThis.org.allbinary.game.displayable.RepaintBehavior;

      
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

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { MyCanvas } from '../../../../../org/allbinary/graphics/displayable/MyCanvas.js';
      const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;

      
//not game specific package import { DisplayChangeEvent } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
      const DisplayChangeEvent = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEvent;

      
//not game specific package import { DisplayChangeEventHandler } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
      const DisplayChangeEventHandler = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventHandler;

      
//not game specific package import { DisplayChangeEventListener } from '../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventListener.js';
      const DisplayChangeEventListener = globalThis.org.allbinary.graphics.displayable.event.DisplayChangeEventListener;

      
//not game specific package import { ScreenRepaintProcessorFactory } from '../../../../../org/allbinary/graphics/displayable/screen/ScreenRepaintProcessorFactory.js';
      const ScreenRepaintProcessorFactory = globalThis.org.allbinary.graphics.displayable.screen.ScreenRepaintProcessorFactory;

      
//not game specific package import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
//not game specific package import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
//not game specific package import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
//not game specific package import { CommandCurrentSelectionFormFactory } from '../../../../../org/allbinary/graphics/form/CommandCurrentSelectionFormFactory.js';
      const CommandCurrentSelectionFormFactory = globalThis.org.allbinary.graphics.form.CommandCurrentSelectionFormFactory;

      
//not game specific package import { FormPaintable } from '../../../../../org/allbinary/graphics/form/FormPaintable.js';
      const FormPaintable = globalThis.org.allbinary.graphics.form.FormPaintable;

      
//not game specific package import { FormTypeFactory } from '../../../../../org/allbinary/graphics/form/FormTypeFactory.js';
      const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;

      
//not game specific package import { PaintableForm } from '../../../../../org/allbinary/graphics/form/PaintableForm.js';
      const PaintableForm = globalThis.org.allbinary.graphics.form.PaintableForm;

      
//not game specific package import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { ScrollSelectionFormNoneFactory } from '../../../../../org/allbinary/graphics/form/ScrollSelectionFormNoneFactory.js';
      const ScrollSelectionFormNoneFactory = globalThis.org.allbinary.graphics.form.ScrollSelectionFormNoneFactory;

      
//not game specific package import { CommandTextItemArrayFactory } from '../../../../../org/allbinary/graphics/form/item/CommandTextItemArrayFactory.js';
      const CommandTextItemArrayFactory = globalThis.org.allbinary.graphics.form.item.CommandTextItemArrayFactory;

      
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { AllCommandsVisitor } from '../../../../../org/allbinary/graphics/form/item/validation/AllCommandsVisitor.js';
      const AllCommandsVisitor = globalThis.org.allbinary.graphics.form.item.validation.AllCommandsVisitor;

      
//not game specific package import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
      const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
//not game specific package import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
      const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MenuListener } from './MenuListener.js';
import { NoMenuInputProcessor } from './NoMenuInputProcessor.js';
import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
import { ImmediateCommandFormInputProcessor } from './ImmediateCommandFormInputProcessor.js';

export class GameCommandCanvas extends MyCanvas implements MenuListener, DisplayChangeEventListener, UpdateMyFontInterface {
        

    private static readonly id: number = 0;

    private readonly repaintProcessor: Processor = ScreenRepaintProcessorFactory.getInstance()!.create(this)!;

    readonly gameInputStrings: GameInputStrings = GameInputStrings.getInstance()!;

    readonly foregroundBasicColor: BasicColor;

    readonly backgroundBasicColor: BasicColor;

    readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;

    readonly gameKeyFactory: GameKeyFactory = GameKeyFactory.getInstance()!;

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;

    public readonly repaintBehavior: RepaintBehavior;

    readonly updateMyFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    myFontProcessor: MyFontProcessor = this.updateMyFontProcessor;

    foregroundColor: number;

    backgroundColor: number;

    private menuInputProcessor: BasicMenuInputProcessor = NoMenuInputProcessor.getInstance()!;

    private menuPaintable: Paintable = NullPaintable.getInstance()!;

    private menuForm: PaintableForm = PaintableForm.getNullPaintableForm()!;

    private isSingleKeyRepeatableProcessing: boolean = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.SINGLE_KEY_REPEAT_PRESS)!;

    fontHeight: number = 0;

public constructor (cmdListener: CommandListener, name: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(name, CanvasStrings.getInstance()!.EMPTY_CHILD_NAME_LIST);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.repaintBehavior= RepaintBehavior.getInstance();
    
this.foregroundBasicColor= foregroundBasicColor;
    
this.backgroundBasicColor= backgroundBasicColor;
    
this.foregroundColor= this.foregroundBasicColor!.intValue();
    
this.backgroundColor= this.backgroundBasicColor!.intValue();
    
this.initCommands(cmdListener);
    

                        if(cmdListener != NullCommandListener.NULL_COMMAND_LISTENER)
                        
                                    {
                                    
        try {
            this.initMenu();
    
this.repaintProcessor!.process();
    

                //: 
} catch(e) 
            {



                            throw new RuntimeException();
                    
}


                                    }
                                
}


    public updateMeasurement(graphics: Graphics){

        try {
            
    var font: Font = graphics.getFont()!;;
    
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(this.canvasStrings!.FD_WIDTH)!.appendint(MyFontProcessor.defaultCharWidth(font))!.append(this.canvasStrings!.FD_HEIGHT)!.appendint(font.getHeight())!.toString(), this, this.canvasStrings!.UPDATE_MEASUREMENT);
    
this.fontHeight= font.getHeight();
    

    var rectangle: Rectangle = this.createRectangle(this.menuForm!.size())!;;
    
this.menuForm!.init(rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM);
    
this.update();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT, e);
    
}

this.myFontProcessor= MyFontProcessor.getInstance();
    
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent){
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.append(DisplayInfoSingleton.getInstance()!.toString())!.toString(), this, this.canvasStrings!.ON_DISPLAY_CHANGE_EVENT);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    initMenu(){

    var form: ScrollSelectionForm = this.createForm()!;;
    
this.menuForm= form;
    

                        if(form != ScrollSelectionFormNoneFactory.getInstance())
                        
                                    {
                                    this.setMenuInputProcessor(new ImmediateCommandFormInputProcessor(new BasicArrayListD(),  -1, this, form));
    
this.menuPaintable= new FormPaintable(form);
    

                                    }
                                
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Exception.constructor)
            
    public createForm(): ScrollSelectionForm{

    var items: ABCustomItem[] = new CommandTextItemArrayFactory(new AllCommandsVisitor()).getInstance(this.getCommandStack() as Vector<any>, this.backgroundBasicColor, this.foregroundBasicColor)!;;
    

    var rectangle: Rectangle = this.createRectangle(items.length)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CommandCurrentSelectionFormFactory.getInstance(StringUtil.getInstance()!.EMPTY_STRING, items, rectangle, FormTypeFactory.getInstance()!.VERTICAL_CENTER_FORM, 15, false, this.backgroundBasicColor, this.foregroundBasicColor);;
    
}


    public createRectangle(size: number): Rectangle{

    var height: number = size *this.fontHeight;;
    

    var startY: number = (this.displayInfo!.getLastHeight() *2 /3) -height;;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

    var rectangle: Rectangle = new Rectangle(pointFactory!.createXY(30, startY), this.displayInfo!.getLastWidth() -30, startY);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rectangle;
    
}


    public open(){
this.logUtil!.putF(this.commonStrings!.START, this, "open");
    
BasicMotionGesturesHandler.getInstance()!.addListenerInterface(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.addListener(this.getMenuInputProcessor());
    
DisplayChangeEventHandler.getInstance()!.addListenerInterface(this);
    
}


    public close(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLOSE);
    
BasicMotionGesturesHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
GameKeyEventHandler.getInstance()!.removeListener(this.getMenuInputProcessor());
    
DisplayChangeEventHandler.getInstance()!.removeListener(this);
    
}


                //@Throws(Exception.constructor)
            
    public update(){
this.repaintProcessor!.process();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameCommandCanvas.id;
    
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
this.logUtil!.putF(new StringMaker().append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.KEY_PRESSED);
    
this.addGameKeyEvent(keyCode, 0, false);
    
}


    public keyReleasedByDevice(keyCode: number, deviceId: number){
this.removeGameKeyEvent(keyCode, deviceId, false);
    
}


    public keyRepeatedByDevice(keyCode: number, deviceId: number){

                        if(this.isSingleKeyRepeatableProcessing)
                        
                                    {
                                    this.addGameKeyEvent(keyCode, deviceId, true);
    

                                    }
                                
}


    addGameKeyEvent(keyCode: number, deviceId: number, repeated: boolean){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode)!;;
    

                        if(gameKey != this.gameKeyFactory!.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey)!;;
    
this.downGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.downGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent);
    

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


    removeGameKeyEvent(keyCode: number, deviceId: number, repeated: boolean){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode)!;;
    

                        if(gameKey != this.gameKeyFactory!.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey)!;;
    
this.upGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent);
    

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


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
this.menuPaintable!.paint(graphics);
    
this.repaintBehavior!.repaint(this);
    
}


    setMenuInputProcessor(menuInputProcessor: BasicMenuInputProcessor){
this.menuInputProcessor= menuInputProcessor;
    
}


    getMenuInputProcessor(): BasicMenuInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuInputProcessor;
    
}


}



