
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
        



import { CollidableBaseBehavior } from "../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js";

    
import { CollidableInterfaceCompositeInterface } from "../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js";

    
import { DamageUtil } from "../../../../../org/allbinary/game/combat/damage/DamageUtil.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    

export class CollidableDestroyableDamageableBehavior extends CollidableBaseBehavior {
        

    readonly damageUtil: DamageUtil = DamageUtil.getInstance()!;
        
        
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean)                        

                            : super(ownerLayer, collidable){

            super();
                //var ownerLayer = ownerLayer
    //var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(collisionLayer: CollidableCompositeLayer): boolean{
    //var collisionLayer = collisionLayer

                        if(this.ownerLayer!.getGroupInterface()[0] != collisionLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(collisionLayer);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var ownerCollidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = this.ownerLayer as CollidableDestroyableDamageableLayer;
        
        


    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface as CollidableDestroyableDamageableLayer;
        
        

ownerCollidableDestroyableDamageableLayer!.damage(collidableDestroyableDamageableLayer!.getDamage(0), 0)
}


    public isCollision(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log("No Longer Used", this)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
ForcedLogUtil.log("No Longer Used", this)
}


}
                
            

