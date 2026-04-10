
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
        



import { GroupInterfaceCompositeInterface } from "../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js";

    
import { PaintableInterface } from "../../../org/allbinary/graphics/paint/PaintableInterface.js";

    

interface LayerInterface extends NamedInterface, PaintableInterface, GroupInterfaceCompositeInterface, PositionInterface {
        

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

    move(dx: number, dy: number, dz: number)

    setVisible(visible: boolean)

    implmentsTickableInterface(): boolean

    implmentsCollidableInterface(): boolean

    implmentsGameInputInterface(): boolean

    implmentsArtificialIntelligenceCompositeInterface(): boolean

    getType(): number

}
                
            

