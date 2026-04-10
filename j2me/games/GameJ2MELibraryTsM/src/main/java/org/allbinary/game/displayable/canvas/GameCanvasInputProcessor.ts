
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyEventSourceInterface } from "../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { InputProcessor } from "../../../../../org/allbinary/game/input/InputProcessor.js";

    
import { PlatformInputMappingFactory } from "../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { DownGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js";

    
import { DownKeyEventHandler } from "../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { UpGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js";

    
import { InputToGameKeyMapping } from "../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class GameCanvasInputProcessor extends InputProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly allBinaryGameCanvas: AllBinaryGameCanvas

    private readonly downGameKeyEventHandler: DownGameKeyEventHandler = DownGameKeyEventHandler.getInstance()!;
        
        

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;
        
        

    private readonly downKeyEventHandler: DownKeyEventHandler = DownKeyEventHandler.getInstance()!;
        
        

    private readonly smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;
        
        
public constructor (allBinaryGameCanvas: AllBinaryGameCanvas){

            super();
                //var allBinaryGameCanvas = allBinaryGameCanvas
this.allBinaryGameCanvas= allBinaryGameCanvas
this.inputToGameKeyMapping!.init(this.allBinaryGameCanvas)
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    public keyPressed(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this.allBinaryGameCanvas, keyCode)!;
        
        


                        if(gameKey != NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(this.allBinaryGameCanvas, gameKey)!;
        
        

downGameKeyEventHandler!.fireEvent(gameKeyEvent)
downGameKeyEventHandler!.getInstance(deviceId)!.fireEvent(gameKeyEvent)

                                    }
                                
                        else {
                            logUtil!.put(StringMaker().
                            append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT)

                        }
                            

    var keyCodeAsInteger: Integer = smallIntegerSingletonFactory!.getInstanceNoThrow(keyCode)!;
        
        

downKeyEventHandler!.fireEvent(keyCodeAsInteger)
downKeyEventHandler!.getInstance(deviceId)!.fireEvent(keyCodeAsInteger)
} catch(e: Exception)
            {
logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e)
}

}


    public keyReleased(canvas: Canvas, keyCode: number, deviceId: number){
    //var canvas = canvas
    //var keyCode = keyCode
    //var deviceId = deviceId
this.this.removeGameKeyEvent(canvas, keyCode, deviceId, false)
}


    removeGameKeyEvent(canvas: Canvas, keyCode: number, deviceId: number, repeated: boolean){
    //var canvas = canvas
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated

        try {
            
    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(canvas, keyCode)!;
        
        


                        if(gameKey != NONE)
                        
                                    {
                                    
    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(canvas as GameKeyEventSourceInterface, gameKey)!;
        
        

upGameKeyEventHandler!.fireEvent(gameKeyEvent)
upGameKeyEventHandler!.getInstance(deviceId)!.fireEvent(gameKeyEvent)

                                    }
                                
                        else {
                            logUtil!.put(StringMaker().
                            append(this.gameInputStrings!.NO_KEY)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.REMOVE_KEY_EVENT)

                        }
                            
} catch(e: Exception)
            {
logUtil!.put("Key Event Error", this, this.gameInputStrings!.REMOVE_KEY_EVENT, e)
}

}


}
                
            

