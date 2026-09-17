
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
        
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory
import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
//not GWT import const NoCompleteMotionGestureInputEventListener
import { SingleKeyPressGameKeyFromMotionGestureEventListener } from '../../../../org/allbinary/game/input/motion/action/SingleKeyPressGameKeyFromMotionGestureEventListener.js';
//not GWT import const SingleKeyPressGameKeyFromMotionGestureEventListener
import { AccelerometerSensorFactory } from '../../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js';
//not GWT import const AccelerometerSensorFactory
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AccelerometerSensorUpdateProcessor extends Processor {
        

                //@Throws(Exception.constructor)
            
    public process(){

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;;
    

                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.ORIENTATION_SENSORS))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(new SingleKeyPressGameKeyFromMotionGestureEventListener());
    

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(new SingleKeyPressGameKeyFromMotionGestureEventListener());
    

                                    }
                                
                             else 
                        if(Features.getInstance()!.isFeature(sensorFeatureFactory!.NO_ORIENTATION))
                        
                                    {
                                    AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(NoCompleteMotionGestureInputEventListener.getInstance());
    

                                    }
                                
                        else {
                            


                            throw new Exception("Sensor Feature Not Set");
                    

                        }
                            
}


}



