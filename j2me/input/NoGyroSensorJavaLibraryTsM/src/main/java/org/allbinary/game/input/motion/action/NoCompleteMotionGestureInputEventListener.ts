
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

    
import { CompleteMotionGestureInputEventListenerInterface } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js";

    
import { ForcedLogUtil } from "../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../../org/allbinary/logic/util/event/EventStrings.js";

    

export class NoCompleteMotionGestureInputEventListener
            extends Object
        
                , CompleteMotionGestureInputEventListenerInterface {
        

    private static readonly instance: NoCompleteMotionGestureInputEventListener = new NoCompleteMotionGestureInputEventListener();
        
        

    public static getInstance(): NoCompleteMotionGestureInputEventListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    public onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent: CompleteMotionGestureInputEvent){
var completeMotionGestureInputEvent = completeMotionGestureInputEvent
}


}
                
            

