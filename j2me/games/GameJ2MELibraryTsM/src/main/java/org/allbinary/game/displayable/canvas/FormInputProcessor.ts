
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyEventSourceInterface } from '../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
//not game specific package import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      const Input = globalThis.org.allbinary.game.input.Input;

      
//not game specific package import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not game specific package import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
      const InputProcessor = globalThis.org.allbinary.game.input.InputProcessor;

      
//not game specific package import { PlatformKeyFactory } from '../../../../../org/allbinary/game/input/PlatformKeyFactory.js';
      const PlatformKeyFactory = globalThis.org.allbinary.game.input.PlatformKeyFactory;

      
//not game specific package import { DownKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js';
      const DownKeyEventHandler = globalThis.org.allbinary.game.input.event.DownKeyEventHandler;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
      const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class FormInputProcessor extends InputProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    private readonly downKeyEventHandler: DownKeyEventHandler = DownKeyEventHandler.getInstance()!;

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;

    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;

    private readonly platformKeyFactory: PlatformKeyFactory = PlatformKeyFactory.getInstance()!;

    private readonly allBinaryGameCanvas: AllBinaryGameCanvas;

public constructor (allBinaryGameCanvas: AllBinaryGameCanvas){

            super();
        this.allBinaryGameCanvas= allBinaryGameCanvas;
    
}


    public keyPressedByDevice(keyCode: number, deviceId: number){

        try {
            PreLogUtil.put(new StringMaker().append(this.inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)!.toString(), this, this.gameInputStrings!.KEY_PRESSED);
    

    var input: Input = this.inputFactory!.getInstanceById(keyCode)!;;
    

    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this.allBinaryGameCanvas, input)!;;
    
this.downKeyEventHandler!.fireEventForGameKeyEvent(gameKeyEvent);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


    public keyReleasedByDevice(canvas: Canvas, keyCode: number, deviceId: number){

        try {
            
    var input: Input = this.inputFactory!.getInstanceById(keyCode)!;;
    

                        if(this.platformKeyFactory!.isEnter(input))
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(this.inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)!.toString(), this, this.gameInputStrings!.KEY_RELEASED);
    

    var gameKey: GameKey = GameKeyFactory.getInstance()!.KEY_NUM0;;
    

    var gameKeyEventSourceInterface: GameKeyEventSourceInterface = canvas as unknown as GameKeyEventSourceInterface;;
    

    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(gameKeyEventSourceInterface, gameKey)!;;
    
this.upGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


}



