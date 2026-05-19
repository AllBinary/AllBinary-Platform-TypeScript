
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { AllBinarySensor } from '../../../../org/allbinary/input/AllBinarySensor.js';
      
import { NoAllBinarySensor } from '../../../../org/allbinary/input/NoAllBinarySensor.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SensorGameUpdateProcessor
            extends Object
         {
        

    private inputSensor: AllBinarySensor = NoAllBinarySensor.getInstance()!;

    setInputSensor(inputSensor: AllBinarySensor){
this.inputSensor= inputSensor;
    
}


    public getInputSensor(): AllBinarySensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputSensor;
    
}


                //@Throws(Exception.constructor)
            
    public process(anyType: any = {}){
}


                //@Throws(Exception.constructor)
            
    public sendNotifications(anyType: any = {}){
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
this.setInputSensor(NoAllBinarySensor.getInstance());
    
}


}
                
            

