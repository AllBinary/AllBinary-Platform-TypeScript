
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
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseMotionGestureEventListener } from './BaseMotionGestureEventListener.js';
//not GWT import - same folder const BaseMotionGestureEventListener = globalThis.org.allbinary.input.motion.gesture.observer.BaseMotionGestureEventListener;

                import { MotionGestureEvent } from './MotionGestureEvent.js';
//not GWT import - same folder const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;

                
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

                //@Throws(Exception.constructor)
            
    released(ev: MotionGestureEvent)

}



