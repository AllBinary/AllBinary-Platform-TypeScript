
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
        



import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { BasicDecimal } from "../../../../../org/allbinary/logic/math/BasicDecimal.js";

    
import { Angle } from "../../../../../org/allbinary/math/Angle.js";

    

interface BasicVelocityInterface {
        

    getVelocityXBasicDecimalP(): BasicDecimal

    getVelocityYBasicDecimalP(): BasicDecimal

    zero()

    setVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction)

    addVelocity(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction)

    setVelocity(magnitude: number, direction: Direction, otherDirection: Direction)

    addVelocity(magnitude: number, direction: Direction, otherDirection: Direction)

    setVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle)

    addVelocity(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle)

    setVelocity(magnitude: number, angle: Angle, otherAngle: Angle)

    addVelocity(magnitude: number, angle: Angle, otherAngle: Angle)

    addVelocity(magnitude: number, angle: number, otherAngle: number)

}
                
            

