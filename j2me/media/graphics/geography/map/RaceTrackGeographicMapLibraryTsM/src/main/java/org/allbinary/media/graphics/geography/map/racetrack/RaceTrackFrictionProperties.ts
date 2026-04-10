
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
        



import { FrictionData } from "../../../../../../../org/allbinary/game/physics/friction/FrictionData.js";

    

export class RaceTrackFrictionProperties
            extends Object
         {
        

    private readonly ROAD_FRICTION_NOMINATOR: number

    private readonly GROUND_FRICTION_NOMINATOR: number
public constructor (roadFriction: number, groundFriction: number){

            super();
            var roadFriction = roadFriction
var groundFriction = groundFriction
ROAD_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -roadFriction
GROUND_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -groundFriction
}


    public getRoadFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ROAD_FRICTION_NOMINATOR;
    
}


    public getGroundFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.GROUND_FRICTION_NOMINATOR;
    
}


}
                
            

