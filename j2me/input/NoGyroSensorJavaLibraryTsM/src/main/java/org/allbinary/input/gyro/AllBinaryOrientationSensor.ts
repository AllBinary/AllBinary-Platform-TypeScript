
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

    

export class AllBinaryOrientationSensor extends AllBinarySensor {
        

    public static readonly NULL_ALLBINARY_ORIENTATION_SENSOR: AllBinaryOrientationSensor = new AllBinaryOrientationSensor();
        
        

    private listener: CompleteMotionGestureInputEventListenerInterface = NoCompleteMotionGestureInputEventListener.getInstance()!;
        
        

    public setListener(completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface){
var completeMotionGestureInputEventListenerInterface = completeMotionGestureInputEventListenerInterface
this.listener= completeMotionGestureInputEventListenerInterface;
    
}

public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getOrientation(): Orientation{



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

