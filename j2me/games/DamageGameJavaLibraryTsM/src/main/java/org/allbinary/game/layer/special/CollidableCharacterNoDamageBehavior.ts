
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
        



import { CollidableInterfaceCompositeInterface } from "../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js";

    
import { CollisionType } from "../../../../../org/allbinary/game/collision/CollisionType.js";

    
import { CollisionTypeFactory } from "../../../../../org/allbinary/game/collision/CollisionTypeFactory.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { PickedUpLayerInterface } from "../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { CollidableDestroyableDamageableBehavior } from "./CollidableDestroyableDamageableBehavior.js";

export class CollidableCharacterNoDamageBehavior extends CollidableDestroyableDamageableBehavior {
        
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean)                        

                            : super(ownerLayer, collidable){

            super();
            var ownerLayer = ownerLayer
var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
        
        
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(this.ownerLayer)!;
        
        
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayer as CollidableDestroyableDamageableLayer;
        
        
;
    
collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickup(collidableInterfaceCompositeInterface as PickedUpLayerInterface);
    

                                    }
                                
                        else {
                            
                        }
                            
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log(commonStrings!.NOT_IMPLEMENTED, this);
    
}


}
                
            

