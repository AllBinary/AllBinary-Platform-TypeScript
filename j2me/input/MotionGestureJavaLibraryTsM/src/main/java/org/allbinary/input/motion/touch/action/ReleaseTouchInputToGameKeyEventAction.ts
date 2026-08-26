
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
        
//not game specific package import { GameKey } from '../../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyFactory } from '../../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { GameKeyEventFactory } from '../../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
      const GameKeyEventFactory = globalThis.org.allbinary.game.input.event.GameKeyEventFactory;

      
//not game specific package import { GameKeyCompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js';
      const GameKeyCompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEvent;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ReleaseTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): GameKeyCompleteMotionGestureInputEvent{

                        if(ReleaseTouchInputToGameKeyEventAction.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    ReleaseTouchInputToGameKeyEventAction.instance= new ReleaseTouchInputToGameKeyEventAction();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ReleaseTouchInputToGameKeyEventAction.instance as GameKeyCompleteMotionGestureInputEvent;
    
}


    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

private constructor (){
            super("Release Action", TouchMotionGestureFactory.getInstance()!.RELEASED, PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping());
                    

                            //For kotlin this is before the body of the constructor.
                    

        try {
            this.setGameKey(this.NONE);
    
this.setGameKeyEvent(GameKeyEventFactory.getInstance()!.getInstanceForInput(this, this.NONE));
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


    public update(){
}


}
                
            

