
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
        



import { CompleteMotionGestureInputEventListenerInterface } from "../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListenerInterface.js";

    
import { NoCompleteMotionGestureInputEventListener } from "../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js";

    
import { AllBinarySensor } from "../../../../org/allbinary/input/AllBinarySensor.js";

    
import { Orientation } from "../../../../org/allbinary/logic/math/Orientation.js";

    
import { PrimitiveFloatUtil } from "../../../../org/allbinary/logic/math/PrimitiveFloatUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryOrientationSensor extends AllBinarySensor {
        

    sensorDataFloatArray: number[] = PrimitiveFloatUtil.getArrayInstance()!;
        
        

    listener: CompleteMotionGestureInputEventListenerInterface = NoCompleteMotionGestureInputEventListener.getInstance()!;
        
        

    public setCompleteMotionGestureInputEventListener(completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface){
var completeMotionGestureInputEventListenerInterface = completeMotionGestureInputEventListenerInterface
this.listener= completeMotionGestureInputEventListenerInterface;
    
}

protected constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getOrientation(): Orientation{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

