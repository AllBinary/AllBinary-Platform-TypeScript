
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { SensorFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js";

    
import { AllBinaryOrientationSensor } from "../../../../org/allbinary/input/gyro/AllBinaryOrientationSensor.js";

    

export class AccelerometerSensorFactory
            extends Object
         {
        

    private allBinaryAccelerometerSensor: AllBinaryOrientationSensor

                //@Throws(Error::class)
            
    public static init(){

    var features: Features = Features.getInstance()!;
        
        
;
    

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;
        
        
;
    

                        if(features.isFeature(sensorFeatureFactory!.ORIENTATION_SENSORS))
                        
                                    {
                                    


                            throw Error("No Orientation Sensors")

                                    }
                                
                             else 
                        if(features.isFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    


                            throw Error("No Simulation Sensors")

                                    }
                                
                             else 
                        if(features.isFeature(sensorFeatureFactory!.NO_ORIENTATION))
                        
                                    {
                                    allBinaryAccelerometerSensor= NoAccelerometerSensor();
    

                                    }
                                
                        else {
                            


                            throw Error("Not Such SensorFeature")

                        }
                            
}


    public static getInstance(): AllBinaryOrientationSensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allBinaryAccelerometerSensor;
    
}


}
                
            

