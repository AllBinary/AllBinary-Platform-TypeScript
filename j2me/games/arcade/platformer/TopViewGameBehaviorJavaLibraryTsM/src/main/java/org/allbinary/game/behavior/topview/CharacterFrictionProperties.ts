
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { FrictionProperties } from "../../../../../org/allbinary/game/physics/FrictionProperties.js";

    
import { FrictionData } from "../../../../../org/allbinary/game/physics/friction/FrictionData.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CharacterFrictionProperties extends FrictionProperties {
        

    private readonly WATER_FRICTION_NOMINATOR: number

    private readonly AIR_FRICTION_NOMINATOR: number

    private readonly COLLISION_FRICTION_NOMINATOR: number
public constructor (airFriction: number, waterFriction: number, collisionFriction: number){

            super();
            var airFriction = airFriction
var waterFriction = waterFriction
var collisionFriction = collisionFriction
AIR_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -airFriction;
    
COLLISION_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -collisionFriction;
    
WATER_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -waterFriction;
    
}


    public getWATER_FRICTION_NOMINATOR(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return WATER_FRICTION_NOMINATOR;
    
}


    public getAIR_FRICTION_NOMINATOR(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AIR_FRICTION_NOMINATOR;
    
}


    public getCOLLISION_FRICTION_NOMINATOR(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return COLLISION_FRICTION_NOMINATOR;
    
}


}
                
            

