
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
        



import { CompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js";

    
import { GameKey } from "../../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyEventSourceInterface } from "../../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js";

    
import { GameKeyEvent } from "../../../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { GameKeyEventFactory } from "../../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { InputToGameKeyMapping } from "../../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent
                , GameKeyEventSourceInterface {
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

    private readonly SOURCE_ID: number = gameKeyEventFactory!.MOTION_GESTURE_SOURCE_ID;
        
        

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;
        
        

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        

    private inputToGameKeyMapping: InputToGameKeyMapping
public constructor (name: string, motionGestureInput: MotionGestureInput, inputToGameKeyMapping: InputToGameKeyMapping)                        

                            : super(name, motionGestureInput){

            super();
            var name = name
var motionGestureInput = motionGestureInput
var inputToGameKeyMapping = inputToGameKeyMapping


                            //For kotlin this is before the body of the constructor.
                    
this.inputToGameKeyMapping= inputToGameKeyMapping
GameKeyCompleteMotionGestureInputEventFactory.getInstance()!.add(this)
this.update()
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SOURCE_ID;
    
}


    public update(){

        try {
            this.setGameKey(inputToGameKeyMapping!.getInstance(this.getMotionGestureInput()!.getId()))
this.setGameKeyEvent(this.gameKeyEventFactory!.getInstance(this, getGameKey()))
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e)
}

}


    setGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
this.gameKeyEvent= gameKeyEvent
}


    public getGameKeyEvent(): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEvent;
    
}


    setGameKey(gameKey: GameKey){
var gameKey = gameKey
this.gameKey= gameKey
}


    public getGameKey(): GameKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKey;
    
}


}
                
            

