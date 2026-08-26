
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
        
//not game specific package import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
      const Processor = globalThis.org.allbinary.canvas.Processor;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
      const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

      
//not game specific package import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
      const NoCompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener;

      
//not game specific package import { SingleKeyPressGameKeyFromMotionGestureEventListener } from '../../../../org/allbinary/game/input/motion/action/SingleKeyPressGameKeyFromMotionGestureEventListener.js';
      const SingleKeyPressGameKeyFromMotionGestureEventListener = globalThis.org.allbinary.game.input.motion.action.SingleKeyPressGameKeyFromMotionGestureEventListener;

      
//not game specific package import { AccelerometerSensorFactory } from '../../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js';
      const AccelerometerSensorFactory = globalThis.org.allbinary.input.accelerometer.AccelerometerSensorFactory;

      
















                                        
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
                
            

