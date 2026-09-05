
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
//not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;

      
import { CompleteMotionGestureInputEventListenerInterface } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js';
//not GWT import const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NoCompleteMotionGestureInputEventListener
            extends Object
         implements CompleteMotionGestureInputEventListenerInterface {
        

    private static readonly instance: NoCompleteMotionGestureInputEventListener = new NoCompleteMotionGestureInputEventListener();

    public static getInstance(): NoCompleteMotionGestureInputEventListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoCompleteMotionGestureInputEventListener.instance;
    
}


private constructor (){

            super();
        }


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){
}


}



