
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
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

      
//not game specific package import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
      const InputProcessor = globalThis.org.allbinary.game.input.InputProcessor;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
      const DownGameKeyEventHandler = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandler;

      
//not game specific package import { DownKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js';
      const DownKeyEventHandler = globalThis.org.allbinary.game.input.event.DownKeyEventHandler;

      
//not game specific package import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
      const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
//not game specific package import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
      const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';

export class GameCanvasInputProcessor extends InputProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly allBinaryGameCanvas: AllBinaryGameCanvas;

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;

    private readonly downKeyEventHandler: DownKeyEventHandler = DownKeyEventHandler.getInstance()!;

    private readonly smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;

public constructor (allBinaryGameCanvas: AllBinaryGameCanvas){

            super();
        this.allBinaryGameCanvas= allBinaryGameCanvas;
    
this.inputToGameKeyMapping!.init(this.allBinaryGameCanvas);
    
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    public keyPressedByDevice(keyCode: number, deviceId: number){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this.allBinaryGameCanvas, keyCode)!;;
    

                        if(gameKey != this.NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this.allBinaryGameCanvas, gameKey)!;;
    
this.downGameKeyEventHandler!.fireEvent(gameKeyEvent);
    
this.downGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent);
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

                        }
                            

    var keyCodeAsInteger: Integer = this.smallIntegerSingletonFactory!.getAtNoThrow(keyCode)!;;
    
this.downKeyEventHandler!.fireEventI(keyCodeAsInteger);
    
this.downKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEventI(keyCodeAsInteger);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


    public keyReleasedByDevice(canvas: Canvas, keyCode: number, deviceId: number){
this.removeGameKeyEvent(canvas, keyCode, deviceId, false);
    
}


    removeGameKeyEvent(canvas: Canvas, keyCode: number, deviceId: number, repeated: boolean){

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(canvas, keyCode)!;;
    

                        if(gameKey != this.NONE)
                        
                                    {
                                    
    var gameKeyEventSourceInterface: GameKeyEventSourceInterface = canvas as unknown as GameKeyEventSourceInterface;;
    

    var gameKeyEvent: GameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(gameKeyEventSourceInterface, gameKey)!;;
    
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


}
                
            

