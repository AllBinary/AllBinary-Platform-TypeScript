
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

        


import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GroupInterfaceCompositeInterface } from '../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js';
      //not GWT import const GroupInterfaceCompositeInterface = globalThis.org.allbinary.game.identification.GroupInterfaceCompositeInterface;

      
import { PaintableInterface } from '../../../org/allbinary/graphics/paint/PaintableInterface.js';
      //not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NamedInterface } from './NamedInterface.js';
//not GWT import const NamedInterface = globalThis.org.allbinary.layer.NamedInterface;

                //not plain js import { PositionInterface } from './PositionInterface.js';
const PositionInterface = globalThis.org.allbinary.layer.PositionInterface;

                
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



