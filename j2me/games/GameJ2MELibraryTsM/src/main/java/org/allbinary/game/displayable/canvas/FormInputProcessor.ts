
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

    
import { GameInputStrings } from "../../../../../org/allbinary/game/input/GameInputStrings.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyEventSourceInterface } from "../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { InputProcessor } from "../../../../../org/allbinary/game/input/InputProcessor.js";

    
import { PlatformKeyFactory } from "../../../../../org/allbinary/game/input/PlatformKeyFactory.js";

    
import { DownKeyEventHandler } from "../../../../../org/allbinary/game/input/event/DownKeyEventHandler.js";

    
import { GameKeyEvent } from "../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { UpGameKeyEventHandler } from "../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class FormInputProcessor extends InputProcessor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    private readonly downKeyEventHandler: DownKeyEventHandler = DownKeyEventHandler.getInstance()!;
        
        

    private readonly upGameKeyEventHandler: UpGameKeyEventHandler = UpGameKeyEventHandler.getInstance()!;
        
        

    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;
        
        

    private readonly platformKeyFactory: PlatformKeyFactory = PlatformKeyFactory.getInstance()!;
        
        

    private readonly allBinaryGameCanvas: AllBinaryGameCanvas
public constructor (allBinaryGameCanvas: AllBinaryGameCanvas){

            super();
            var allBinaryGameCanvas = allBinaryGameCanvas
this.allBinaryGameCanvas= allBinaryGameCanvas
}


    public keyPressed(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId

        try {
            put(StringMaker().
                            append(inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)!.toString(), this, this.gameInputStrings!.KEY_PRESSED)

    var input: Input = inputFactory!.getInstance(keyCode)!;
        
        


    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(this.allBinaryGameCanvas, input)!;
        
        

fireEvent(gameKeyEvent)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e)
}

}


    public keyReleased(canvas: Canvas, keyCode: number, deviceId: number){
    //var canvas = canvas
    //var keyCode = keyCode
    //var deviceId = deviceId

        try {
            
    var input: Input = this.inputFactory!.getInstance(keyCode)!;
        
        


    
                        if(platformKeyFactory!.isEnter(input))
                        
                                    {
                                    put(StringMaker().
                            append(inputFactory!.KEY_CODE_LABEL)!.appendint(keyCode)!.append(CommonSeps.getInstance()!.SPACE)!.append(inputFactory!.DEVICE_ID_LABEL)!.appendint(deviceId)!.toString(), this, gameInputStrings!.KEY_RELEASED)

    var gameKey: GameKey = GameKeyFactory.getInstance()!.KEY_NUM0;
        
        


    var gameKeyEvent: GameKeyEvent = gameKeyEventFactory!.getInstance(canvas as GameKeyEventSourceInterface, gameKey)!;
        
        

fireEvent(gameKeyEvent)
fireEvent(gameKeyEvent)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, this.gameInputStrings!.ADD_KEY_EVENT, e)
}

}


}
                
            

