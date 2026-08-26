
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
//not game specific package import { GameKey } from '../../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyEventSourceInterface } from '../../../../../../org/allbinary/game/input/GameKeyEventSourceInterface.js';
      const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;

      
//not game specific package import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { InputToGameKeyMapping } from '../../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
      const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;

      
//not game specific package import { MotionGestureInput } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
      const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameKeyCompleteMotionGestureInputEventFactory } from './GameKeyCompleteMotionGestureInputEventFactory.js';

export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent implements GameKeyEventSourceInterface {
        

    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;

    private readonly SOURCE_ID: number = this.gameKeyEventFactory!.MOTION_GESTURE_SOURCE_ID;

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;

    private gameKeyEvent: GameKeyEvent = GameKeyEvent.NONE;

    private inputToGameKeyMapping: InputToGameKeyMapping;

public constructor (name: string, motionGestureInput: MotionGestureInput, inputToGameKeyMapping: InputToGameKeyMapping){
            super(name, motionGestureInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.inputToGameKeyMapping= inputToGameKeyMapping;
    
GameKeyCompleteMotionGestureInputEventFactory.getInstance()!.add(this);
    
this.update();
    
}


    public getSourceId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.SOURCE_ID;
    
}


    public update(){

        try {
            this.setGameKey(this.inputToGameKeyMapping!.getInstance(this.getMotionGestureInput()!.getId()));
    
this.setGameKeyEvent(this.gameKeyEventFactory!.getInstanceForInput(this, this.getGameKey()));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e);
    
}

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
                
            

