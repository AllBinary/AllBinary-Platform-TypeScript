
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { CollidableCompositeLayer } from '../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      //not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { NamedInterface } from '../../../../org/allbinary/layer/NamedInterface.js';
      //not GWT import const NamedInterface = globalThis.org.allbinary.layer.NamedInterface;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollisionType } from './CollisionType.js';
//not GWT import const  = globalThis.org.allbinary.game.collision.CollisionType;

                
export interface CollidableInterface extends NamedInterface {
        

                //@Throws(Exception.constructor)
            
    isCollidable(ownerLayer: CollidableCompositeLayer): boolean

                //@Throws(Exception.constructor)
            
    isCollision(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean

                //@Throws(Exception.constructor)
            
    collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer)

    getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType

}



