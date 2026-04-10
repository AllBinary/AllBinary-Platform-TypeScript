
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

    
import { Orientation } from "../../../../org/allbinary/logic/math/Orientation.js";

    

export class OrientationToGameKeyEvent
            extends Object
         {
        

    private allBinaryGyroSensor: AllBinaryOrientationSensor

    private readonly MIN: number = 15;
        
        
public constructor (){

            super();
            
                        if(Features.getInstance()!.isFeature(SensorFeatureFactory.getInstance()!.NO_ORIENTATION))
                        
                                    {
                                    allBinaryGyroSensor= NoGyroSensor()

                                    }
                                
                        else {
                            


                            throw Error("Not Such Feature")

                        }
                            
}


    public setAllBinaryGyroSensor(allBinaryGyroSensor: AllBinaryOrientationSensor){
var allBinaryGyroSensor = allBinaryGyroSensor
this.allBinaryGyroSensor= allBinaryGyroSensor
}


    public getAllBinaryGyroSensor(): AllBinaryOrientationSensor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return allBinaryGyroSensor;
    
}


                //@Throws(Error::class)
            
    public process(){
}


                //@Throws(Error::class)
            
    updateGameKeyEvents(orientation: Orientation, yaw: number, pitch: number, roll: number){
var orientation = orientation
var yaw = yaw
var pitch = pitch
var roll = roll
}


}
                
            

