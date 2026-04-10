
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
        



import { Processor } from "../../../../org/allbinary/canvas/Processor.js";

    
import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { SensorFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js";

    
import { NoCompleteMotionGestureInputEventListener } from "../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js";

    
import { SingleKeyPressGameKeyFromMotionGestureEventListener } from "../../../../org/allbinary/game/input/motion/action/SingleKeyPressGameKeyFromMotionGestureEventListener.js";

    
import { AccelerometerSensorFactory } from "../../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js";

    

export class AccelerometerSensorUpdateProcessor extends Processor {
        

                //@Throws(Error::class)
            
    public process(){

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;
        
        


                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.ORIENTATION_SENSORS))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(SingleKeyPressGameKeyFromMotionGestureEventListener())

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(SingleKeyPressGameKeyFromMotionGestureEventListener())

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.NO_ORIENTATION))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(NoCompleteMotionGestureInputEventListener.getInstance())

                                    }
                                
                        else {
                            


                            throw Error("Sensor Feature Not Set")

                        }
                            
}


}
                
            

