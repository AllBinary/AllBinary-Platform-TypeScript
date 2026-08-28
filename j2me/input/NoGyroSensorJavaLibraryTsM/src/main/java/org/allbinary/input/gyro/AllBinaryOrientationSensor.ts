
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { CompleteMotionGestureInputEventListenerInterface } from '../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js';
      const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;

      
//not game specific package import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
      const NoCompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener;

      
//not game specific package import { AllBinarySensor } from '../../../../org/allbinary/input/AllBinarySensor.js';
      const AllBinarySensor = globalThis.org.allbinary.input.AllBinarySensor;

      
//not game specific package import { Orientation } from '../../../../org/allbinary/logic/math/Orientation.js';
      const Orientation = globalThis.org.allbinary.logic.math.Orientation;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryOrientationSensor extends AllBinarySensor {
        

    public static readonly NULL_ALLBINARY_ORIENTATION_SENSOR: AllBinaryOrientationSensor = new AllBinaryOrientationSensor();

    private listener: CompleteMotionGestureInputEventListenerInterface = NoCompleteMotionGestureInputEventListener.getInstance()!;

    public setListener(completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface){
this.listener= completeMotionGestureInputEventListenerInterface;
    
}


public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getOrientation(): Orientation{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


}



