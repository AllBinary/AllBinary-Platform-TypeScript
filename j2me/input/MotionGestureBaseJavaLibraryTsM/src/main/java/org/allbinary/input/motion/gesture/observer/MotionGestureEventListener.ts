
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
//sameFolderImports - not GWT import - same folder const BaseMotionGestureEventListener
import { MotionGestureEvent } from './MotionGestureEvent.js';
//sameFolderImports - not GWT import - same folder const MotionGestureEvent

export interface MotionGestureEventListener extends BaseMotionGestureEventListener {
        

    onPressedMotionGestureEvent(ev: MotionGestureEvent): void;

    onUpMotionGestureEvent(ev: MotionGestureEvent): void;

    onDownMotionGestureEvent(ev: MotionGestureEvent): void;

    onLeftMotionGestureEvent(ev: MotionGestureEvent): void;

    onRightMotionGestureEvent(ev: MotionGestureEvent): void;

    onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent): void;

    onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent): void;

    onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent): void;

    onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent): void;

                //@Throws(Exception.constructor)
            
    released(ev: MotionGestureEvent): void;

}

