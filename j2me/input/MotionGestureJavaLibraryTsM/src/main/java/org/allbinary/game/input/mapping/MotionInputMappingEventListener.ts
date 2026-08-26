
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { InputMappingEvent } from '../../../../../org/allbinary/game/input/mapping/event/InputMappingEvent.js';
      const InputMappingEvent = globalThis.org.allbinary.game.input.mapping.event.InputMappingEvent;

      
//not game specific package import { InputMappingEventListenerInterface } from '../../../../../org/allbinary/game/input/mapping/event/InputMappingEventListenerInterface.js';
      const InputMappingEventListenerInterface = globalThis.org.allbinary.game.input.mapping.event.InputMappingEventListenerInterface;

      
//not game specific package import { GameKeyCompleteMotionGestureInputEventFactory } from '../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEventFactory.js';
      const GameKeyCompleteMotionGestureInputEventFactory = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEventFactory;

      
//not game specific package import { BasicTouchInputFactory } from '../../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
      const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionInputMappingEventListener
            extends Object
         implements InputMappingEventListenerInterface {
        

    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onInputMappingEvent(inputMappingEvent: InputMappingEvent){
GameKeyCompleteMotionGestureInputEventFactory.getInstance()!.updateAll();
    
BasicTouchInputFactory.getInstance()!.updateAll(inputMappingEvent!.getInputToGameKeyMapping());
    
}


}
                
            

