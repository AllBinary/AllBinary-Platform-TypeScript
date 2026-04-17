
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

    
import { InputToGameKeyMapping } from "../../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { MotionGestureInput } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent implements GameKeyEventSourceInterface {
        

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;
        
        

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;
        
        
public constructor (name: string, motionGestureInput: MotionGestureInput, inputToGameKeyMapping: InputToGameKeyMapping)                        

                            : super(name, motionGestureInput){

            super();
            var name = name
var motionGestureInput = motionGestureInput
var inputToGameKeyMapping = inputToGameKeyMapping


                            //For kotlin this is before the body of the constructor.
                    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public update(){
}


    setGameKeyEvent(gameKeyEvent: GameKeyEvent){
var gameKeyEvent = gameKeyEvent
this.gameKeyEvent= gameKeyEvent;
    
}


    public getGameKeyEvent(): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKeyEvent;
    
}


    setGameKey(gameKey: GameKey){
var gameKey = gameKey
this.gameKey= gameKey;
    
}


    public getGameKey(): GameKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKey;
    
}


}
                
            

