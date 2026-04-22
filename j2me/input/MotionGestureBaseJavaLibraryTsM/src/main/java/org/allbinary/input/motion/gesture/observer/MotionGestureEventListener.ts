
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BaseMotionGestureEventListener } from "./BaseMotionGestureEventListener.js";

import { MotionGestureEvent } from "./MotionGestureEvent.js";

export interface MotionGestureEventListener extends BaseMotionGestureEventListener {
        

    onPressedMotionGestureEvent(ev: MotionGestureEvent)

    onUpMotionGestureEvent(ev: MotionGestureEvent)

    onDownMotionGestureEvent(ev: MotionGestureEvent)

    onLeftMotionGestureEvent(ev: MotionGestureEvent)

    onRightMotionGestureEvent(ev: MotionGestureEvent)

    onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent)

    onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent)

    onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent)

    onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent)

                //@Throws(Error::class)
            
    released(ev: MotionGestureEvent)

}
                
            

