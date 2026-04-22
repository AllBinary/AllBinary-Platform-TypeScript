
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
        



import { InputMappingEvent } from "../../../../../org/allbinary/game/input/mapping/event/InputMappingEvent.js";

    
import { InputMappingEventListenerInterface } from "../../../../../org/allbinary/game/input/mapping/event/InputMappingEventListenerInterface.js";

    
import { GameKeyCompleteMotionGestureInputEventFactory } from "../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEventFactory.js";

    
import { BasicTouchInputFactory } from "../../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionInputMappingEventListener
            extends Object
         implements InputMappingEventListenerInterface {
        

    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public onInputMappingEvent(inputMappingEvent: InputMappingEvent){
var inputMappingEvent = inputMappingEvent
GameKeyCompleteMotionGestureInputEventFactory.getInstance()!.updateAll();
    
BasicTouchInputFactory.getInstance()!.updateAll(inputMappingEvent!.getInputToGameKeyMapping());
    
}


}
                
            

