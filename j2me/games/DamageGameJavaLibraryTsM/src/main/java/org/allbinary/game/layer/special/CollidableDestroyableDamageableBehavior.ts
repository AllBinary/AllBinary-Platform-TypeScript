
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CollidableBaseBehavior } from '../../../../../org/allbinary/game/collision/CollidableBaseBehavior.js';
      
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      
import { DamageUtil } from '../../../../../org/allbinary/game/combat/damage/DamageUtil.js';
      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableDestroyableDamageableLayer } from './CollidableDestroyableDamageableLayer.js';

export class CollidableDestroyableDamageableBehavior extends CollidableBaseBehavior {
        

    readonly damageUtil: DamageUtil = DamageUtil.getInstance()!;

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{

                        if(ownerLayer!.getGroupInterface()[0] != collisionLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(ownerLayer, collisionLayer);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    var ownerCollidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = ownerLayer as CollidableDestroyableDamageableLayer;;
    

    var collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface as CollidableDestroyableDamageableLayer;;
    
ownerCollidableDestroyableDamageableLayer!.damage(collidableDestroyableDamageableLayer!.getDamage(0), 0);
    
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
ForcedLogUtil.log("No Longer Used", this);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
ForcedLogUtil.log("No Longer Used", this);
    
}


}
                
            

