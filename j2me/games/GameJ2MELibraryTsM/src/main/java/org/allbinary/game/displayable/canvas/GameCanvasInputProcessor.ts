
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyEventSourceInterface } from '../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      //not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      //not GWT import const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
import { InputProcessor } from '../../../../../org/allbinary/game/input/InputProcessor.js';
      //not GWT import const InputProcessor = globalThis.org.allbinary.game.input.InputProcessor;

      
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      //not GWT import const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
      //not GWT import const DownGameKeyEventHandler = globalThis.org.allbinary.game.input.event.DownGameKeyEventHandler;

      
import { DownKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js';
      //not GWT import const DownKeyEventHandler = globalThis.org.allbinary.game.input.event.DownKeyEventHandler;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      //not GWT import const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
      //not GWT import const UpGameKeyEventHandler = globalThis.org.allbinary.game.input.event.UpGameKeyEventHandler;

      
import { InputToGameKeyMapping } from '../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
      //not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryGameCanvas } from './AllBinaryGameCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

                
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



