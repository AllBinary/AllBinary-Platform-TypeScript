
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
        



//not game specific package import { Angle } from '../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Direction } from './Direction.js';

export interface DirectionalInterface {
        

    setFrameByDirection(direction: Direction)

    setFrameToAngle(angle: Angle)

    adjustFrameToAngle(newAngle: Angle)

    adjustFrame(angle: number)

}



