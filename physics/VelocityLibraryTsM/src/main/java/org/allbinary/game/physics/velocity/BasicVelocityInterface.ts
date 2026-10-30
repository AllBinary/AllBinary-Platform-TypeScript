
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

        


import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction

import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal

import { Angle } from '../../../../../org/allbinary/math/Angle.js';
//not GWT import const Angle

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface BasicVelocityInterface {
        

    getVelocityXBasicDecimalP(): BasicDecimal;

    getVelocityYBasicDecimalP(): BasicDecimal;

    zero(): void;

    setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction): void;

    addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction): void;

    setVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction): void;

    addVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction): void;

    setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle): void;

    addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle): void;

    setVelocity(magnitude: number, angle: Angle, otherAngle: Angle): void;

    addVelocity(magnitude: number, angle: Angle, otherAngle: Angle): void;

    addVelocityi(magnitude: number, angle: number, otherAngle: number): void;

}

