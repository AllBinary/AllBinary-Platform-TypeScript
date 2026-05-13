
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
        
import { CollidableHelperFactory } from '../../../../../org/allbinary/game/collision/CollidableHelperFactory.js';

    
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';

    
import { CollisionHelper } from '../../../../../org/allbinary/game/collision/CollisionHelper.js';

    
import { CollisionType } from '../../../../../org/allbinary/game/collision/CollisionType.js';

    
import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';

    
import { LayerCollisionUtil } from '../../../../../org/allbinary/game/collision/LayerCollisionUtil.js';

    
import { DamageableInterface } from '../../../../../org/allbinary/game/combat/damage/DamageableInterface.js';

    
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';

    
import { CollidableDestroyableDamageableBehavior } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';

    
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CollidableDamageWeaponBehavior extends CollidableDestroyableDamageableBehavior {
        

    private collided: boolean= false

    collisionHelper: CollisionHelper
public constructor (collidable: boolean){
            super(collidable);
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


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{
    //var ownerLayer = ownerLayer
var collisionLayer = collisionLayer

                        if(this.collisionHelper!.isCollidable(collisionLayer))
                        
                                    {
                                    
                        if(ownerLayer!.getGroupInterface()[0] != collisionLayer!.getGroupInterface()[0])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(ownerLayer, collisionLayer);;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer){
    //var ownerLayer = ownerLayer
var collisionLayer = collisionLayer
super.collide(ownerLayer, collisionLayer);
    
this.collided= true;
    
}


    private readonly layerCollisionUtil: LayerCollisionUtil = LayerCollisionUtil.getInstance()!;

    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{
    //var ownerLayer = ownerLayer
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

                        if(this.collisionHelper!.isCollidable(collidableInterfaceCompositeInterface as CollidableCompositeLayer))
                        
                                    {
                                    
    var layerInterface: AllBinaryLayer = collidableInterfaceCompositeInterface as AllBinaryLayer;
;
    

                        if(ownerLayer!.getGroupInterface()[0] != layerInterface!.getGroupInterface()[0])
                        
                                    {
                                    
                        if(this.layerCollisionUtil!.isCollision(ownerLayer, layerInterface))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
    //var ownerLayer = ownerLayer
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
this.damageUtil!.process(ownerLayer as DamageableInterface, collidableInterfaceCompositeInterface as DamageableInterface);
    
this.collided= true;
    
}


    public getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType{
var layerInterface = layerInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollisionTypeFactory.getInstance()!.COLLISION;
    
}


    public isCollided(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collided;
    
}


    setCollided(collided: boolean){
var collided = collided
this.collided= collided;
    
}


}
                
            

