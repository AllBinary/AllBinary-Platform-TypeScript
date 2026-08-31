
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
        
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
      //not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

      
import { Orientation } from '../../../../org/allbinary/logic/math/Orientation.js';
      //not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AllBinaryOrientationSensor } from './AllBinaryOrientationSensor.js';
//not GWT import const AllBinaryOrientationSensor = globalThis.org.allbinary.input.gyro.AllBinaryOrientationSensor;

                import { NoGyroSensor } from './NoGyroSensor.js';
//not GWT import const NoGyroSensor = globalThis.org.allbinary.input.gyro.NoGyroSensor;

                
export class OrientationToGameKeyEvent
            extends Object
         {
        

    private allBinaryGyroSensor: AllBinaryOrientationSensor;

    private readonly MIN: number = 15;

public constructor (){

            super();
        
                        if(Features.getInstance()!.isFeature(SensorFeatureFactory.getInstance()!.NO_ORIENTATION))
                        
                                    {
                                    this.allBinaryGyroSensor= new NoGyroSensor();
    

                                    }
                                
                        else {
                            


                            throw new Exception("Not Such Feature");
                    

                        }
                            
}


    public setAllBinaryGyroSensor(allBinaryGyroSensor: AllBinaryOrientationSensor){
this.allBinaryGyroSensor= allBinaryGyroSensor;
    
}


    public getAllBinaryGyroSensor(): AllBinaryOrientationSensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allBinaryGyroSensor;
    
}


                //@Throws(Exception.constructor)
            
    public process(){
}


                //@Throws(Exception.constructor)
            
    updateGameKeyEvents(orientation: Orientation, yaw: number, pitch: number, roll: number){
}


}



