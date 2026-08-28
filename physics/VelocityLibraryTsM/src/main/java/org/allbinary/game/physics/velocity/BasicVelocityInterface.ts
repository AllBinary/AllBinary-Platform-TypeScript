
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
      const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
//not game specific package import { Angle } from '../../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface BasicVelocityInterface {
        

    getVelocityXBasicDecimalP(): BasicDecimal

    getVelocityYBasicDecimalP(): BasicDecimal

    zero()

    setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction)

    addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal, direction: Direction, otherDirection: Direction)

    setVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction)

    addVelocityWithDirection(magnitude: number, direction: Direction, otherDirection: Direction)

    setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle)

    addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal, angle: Angle, otherAngle: Angle)

    setVelocity(magnitude: number, angle: Angle, otherAngle: Angle)

    addVelocity(magnitude: number, angle: Angle, otherAngle: Angle)

    addVelocityi(magnitude: number, angle: number, otherAngle: number)

}



