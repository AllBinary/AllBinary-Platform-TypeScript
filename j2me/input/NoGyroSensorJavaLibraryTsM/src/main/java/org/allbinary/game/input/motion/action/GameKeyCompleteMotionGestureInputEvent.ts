
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

        


import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      //not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
import { GameKey } from '../../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyEventSourceInterface } from '../../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      //not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { InputToGameKeyMapping } from '../../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
      //not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      //not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent implements GameKeyEventSourceInterface {
        

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

public constructor (name: string, motionGestureInput: MotionGestureInput, inputToGameKeyMapping: InputToGameKeyMapping){
            super(name, motionGestureInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public update(){
}


    setGameKeyEvent(gameKeyEvent: GameKeyEvent){
this.gameKeyEvent= gameKeyEvent;
    
}


    public getGameKeyEvent(): GameKeyEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKeyEvent;
    
}


    setGameKey(gameKey: GameKey){
this.gameKey= gameKey;
    
}


    public getGameKey(): GameKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKey;
    
}


}



