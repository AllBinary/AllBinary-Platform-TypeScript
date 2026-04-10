
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
        



import { FrictionProperties } from "../../../../org/allbinary/game/physics/FrictionProperties.js";

    
import { FrictionData } from "../../../../org/allbinary/game/physics/friction/FrictionData.js";

    

export class VehicleFrictionProperties extends FrictionProperties {
        

    private readonly TIRE_FRICTION_NOMINATOR: number

    private readonly BRAKE_FRICTION_NOMINATOR: number

    private readonly AIR_FRICTION_NOMINATOR: number

    private readonly CRASH_FRICTION_NOMINATOR: number
public constructor (tireFriction: number, brakeFriction: number, airFriction: number, crashFriction: number){

            super();
            var tireFriction = tireFriction
var brakeFriction = brakeFriction
var airFriction = airFriction
var crashFriction = crashFriction
TIRE_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -tireFriction
BRAKE_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -brakeFriction
AIR_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -airFriction
CRASH_FRICTION_NOMINATOR= FrictionData.getFrictionDenominator() -crashFriction
}


    public getTireFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.TIRE_FRICTION_NOMINATOR;
    
}


    public getBrakeFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.BRAKE_FRICTION_NOMINATOR;
    
}


    public getAirFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.AIR_FRICTION_NOMINATOR;
    
}


    public getCrashFrictionNominator(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.CRASH_FRICTION_NOMINATOR;
    
}


}
                
            

