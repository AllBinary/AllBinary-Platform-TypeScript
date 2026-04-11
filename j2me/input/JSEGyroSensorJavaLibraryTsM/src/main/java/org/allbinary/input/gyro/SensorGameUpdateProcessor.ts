
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
        



import { NoCompleteMotionGestureInputEventListener } from "../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js";

    
import { AllBinarySensor } from "../../../../org/allbinary/input/AllBinarySensor.js";

    
import { NoAllBinarySensor } from "../../../../org/allbinary/input/NoAllBinarySensor.js";

    
import { AccelerometerSensorFactory } from "../../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js";

    

export class SensorGameUpdateProcessor
            extends Object
         {
        

    private inputSensor: AllBinarySensor

    setInputSensor(inputSensor: AllBinarySensor){
var inputSensor = inputSensor
this.inputSensor= inputSensor;
    
}


    public getInputSensor(): AllBinarySensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputSensor;
    
}


                //@Throws(Error::class)
            
    public process(anyType: any = {}){
var anyType = anyType
}


                //@Throws(Error::class)
            
    public sendNotifications(anyType: any = {}){
var anyType = anyType
}


    public isAnySensor(): boolean{

                        if(this.inputSensor == NoAllBinarySensor.getInstance())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    setNoSensors(){
GyroSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(NoCompleteMotionGestureInputEventListener.getInstance());
    
AccelerometerSensorFactory.getInstance()!.setCompleteMotionGestureInputEventListener(NoCompleteMotionGestureInputEventListener.getInstance());
    
this.setInputSensor(NoAllBinarySensor.getInstance());
    
}


}
                
            

