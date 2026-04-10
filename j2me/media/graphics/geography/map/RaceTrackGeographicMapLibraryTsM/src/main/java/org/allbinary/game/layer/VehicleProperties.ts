
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
        



import { VelocityProperties } from "../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    

export class VehicleProperties
            extends Object
         {
        

    private readonly velocityProperties: VelocityProperties

    private vehicleFrictionProperties: VehicleFrictionProperties
public constructor (velocityProperties: VelocityProperties, vehicleFrictionProperties: VehicleFrictionProperties){

            super();
            var velocityProperties = velocityProperties
var vehicleFrictionProperties = vehicleFrictionProperties
this.velocityProperties= velocityProperties
this.vehicleFrictionProperties= vehicleFrictionProperties
}


    public getVehicleFrictionProperties(): VehicleFrictionProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vehicleFrictionProperties;
    
}


    public setVehicleFrictionProperties(vehicleFrictionProperties: VehicleFrictionProperties){
var vehicleFrictionProperties = vehicleFrictionProperties
this.vehicleFrictionProperties= vehicleFrictionProperties
}


    public getVelocityProperties(): VelocityProperties{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return velocityProperties;
    
}


}
                
            

