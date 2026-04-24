
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
        



import { CollidableHelperFactory } from "../../../../../org/allbinary/game/collision/CollidableHelperFactory.js";

    
import { CollidableInterfaceCompositeInterface } from "../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js";

    
import { CollisionHelper } from "../../../../../org/allbinary/game/collision/CollisionHelper.js";

    
import { CollisionType } from "../../../../../org/allbinary/game/collision/CollisionType.js";

    
import { CollisionTypeFactory } from "../../../../../org/allbinary/game/collision/CollisionTypeFactory.js";

    
import { LayerCollisionUtil } from "../../../../../org/allbinary/game/collision/LayerCollisionUtil.js";

    
import { DamageableInterface } from "../../../../../org/allbinary/game/combat/damage/DamageableInterface.js";

    
import { CollidableCompositeLayer } from "../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { CollidableDestroyableDamageableBehavior } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CollidableWeaponBehavior extends CollidableDestroyableDamageableBehavior {
        

    public static readonly NULL_COLLIDABLE_WEAPON_BEHAVIOR: CollidableWeaponBehavior = new CollidableWeaponBehavior(CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER, false);
        
        

    private collided: boolean= false

    collisionHelper: CollisionHelper
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean){
            super(ownerLayer, collidable);
                    var ownerLayer = ownerLayer
var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
this.setCollided(false);
    
this.setCollidable(true);
    
this.collisionHelper= CollidableHelperFactory.getInstance();
    
}


    public init(sourceLayerInterface: AllBinaryLayer){
var sourceLayerInterface = sourceLayerInterface
this.setCollided(false);
    
this.collisionHelper!.setOwnerLayerInterface(sourceLayerInterface);
    
}


    public isCollision(collisionLayer: CollidableCompositeLayer): boolean{
var collisionLayer = collisionLayer

                        if(this.collisionHelper!.isCollidable(collisionLayer))
                        
                                    {
                                    
                        if(this.ownerLayer!.getGroupInterface()[0] != collisionLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(collisionLayer);;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public collide(collisionLayer: CollidableCompositeLayer){
var collisionLayer = collisionLayer
super.collide(collisionLayer);
    
this.collided= true;
    
}


    private readonly layerCollisionUtil: LayerCollisionUtil = LayerCollisionUtil.getInstance()!;
        
        

    public isCollision(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

                        if(this.collisionHelper!.isCollidable(collidableInterfaceCompositeInterface as CollidableCompositeLayer))
                        
                                    {
                                    
    var layerInterface: AllBinaryLayer = collidableInterfaceCompositeInterface as AllBinaryLayer;
        
        
;
    

                        if(this.ownerLayer!.getGroupInterface()[0] != layerInterface!.getGroupInterface()[0])
                        
                                    {
                                    
                        if(this.layerCollisionUtil!.isCollision(this.ownerLayer, layerInterface))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
damageUtil!.process(this.ownerLayer as DamageableInterface, collidableInterfaceCompositeInterface as DamageableInterface);
    
this.collided= true;
    
}


    public getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType{
var layerInterface = layerInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollisionTypeFactory.getInstance()!.COLLISION;
    
}


    public isCollided(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return collided;
    
}


    setCollided(collided: boolean){
var collided = collided
this.collided= collided;
    
}


}
                
            

