
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CollidableCompositeLayer } from '../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer
import { NamedInterface } from '../../../../org/allbinary/layer/NamedInterface.js';
//not GWT import const NamedInterface
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollisionType } from './CollisionType.js';
//not GWT import - same folder const CollisionType
export interface CollidableInterface extends NamedInterface {
        

                //@Throws(Exception.constructor)
            
    isCollidable(ownerLayer: CollidableCompositeLayer): boolean

                //@Throws(Exception.constructor)
            
    isCollision(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean

                //@Throws(Exception.constructor)
            
    collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer)

    getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType

}



