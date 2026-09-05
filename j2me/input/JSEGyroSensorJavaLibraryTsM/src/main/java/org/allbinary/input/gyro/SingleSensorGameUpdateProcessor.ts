
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
//not GWT import const Processor = globalThis.org.allbinary.canvas.Processor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SensorGameUpdateProcessor } from './SensorGameUpdateProcessor.js';
//not GWT import - same folder const SensorGameUpdateProcessor = globalThis.org.allbinary.input.gyro.SensorGameUpdateProcessor;

                import { AccelerometerSensorUpdateProcessor } from './AccelerometerSensorUpdateProcessor.js';
//not GWT import - same folder const AccelerometerSensorUpdateProcessor = globalThis.org.allbinary.input.gyro.AccelerometerSensorUpdateProcessor;

                import { GyroSensorUpdateProcessor } from './GyroSensorUpdateProcessor.js';
//not GWT import - same folder const GyroSensorUpdateProcessor = globalThis.org.allbinary.input.gyro.GyroSensorUpdateProcessor;

                
export class SingleSensorGameUpdateProcessor extends SensorGameUpdateProcessor {
        

    private readonly accelerometerSensorUpdateProcessor: Processor = new AccelerometerSensorUpdateProcessor();

    private readonly gyroSensorUpdateProcessor: Processor = new GyroSensorUpdateProcessor();

                //@Throws(Exception.constructor)
            
    public process(anyType: any = {}){
this.setNoSensors();
    
}


                //@Throws(Exception.constructor)
            
    public sendNotifications(anyType: any = {}){
}


}



