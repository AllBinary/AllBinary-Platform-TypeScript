
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
        



//not game specific package import { JsType } from '../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GroupInterfaceCompositeInterface } from '../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js';
      const GroupInterfaceCompositeInterface = globalThis.org.allbinary.game.identification.GroupInterfaceCompositeInterface;

      
//not game specific package import { PaintableInterface } from '../../../org/allbinary/graphics/paint/PaintableInterface.js';
      const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
//not game specific package import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NamedInterface } from './NamedInterface.js';
import { PositionInterface } from './PositionInterface.js';

export interface LayerInterface extends NamedInterface, PaintableInterface, GroupInterfaceCompositeInterface, PositionInterface {
        

    getHeight(): number

    getWidth(): number

    getHalfHeight(): number

    getHalfWidth(): number

    getXP(): number

    getYP(): number

    getZP(): number

    getX2(): number

    getY2(): number

    getZ2(): number

    isVisible(): boolean

    moveDXYZ(dx: number, dy: number, dz: number)

    setVisible(visible: boolean)

    implmentsTickableInterface(): boolean

    implmentsCollidableInterface(): boolean

    implmentsGameInputInterface(): boolean

    implmentsArtificialIntelligenceCompositeInterface(): boolean

    getType(): number

}
                
            

