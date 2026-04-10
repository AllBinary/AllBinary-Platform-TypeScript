
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
        



import { FrictionData } from "../../../../org/allbinary/game/physics/friction/FrictionData.js";

    
import { DragVelocityBehavior } from "../../../../org/allbinary/game/physics/velocity/DragVelocityBehavior.js";

    
import { VelocityProperties } from "../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    

export class FrictionProperties
            extends Object
         {
        
public constructor (){

            super();
            }


    public friction(velocityProperties: VelocityProperties, nominator: number){
var velocityProperties = velocityProperties
var nominator = nominator
reduce(velocityProperties, nominator, FrictionData.getFrictionDenominator())
}


}
                
            

