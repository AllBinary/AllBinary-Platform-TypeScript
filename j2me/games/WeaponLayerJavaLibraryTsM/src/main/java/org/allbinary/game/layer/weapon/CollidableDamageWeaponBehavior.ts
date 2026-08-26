
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { CollidableHelperFactory } from '../../../../../org/allbinary/game/collision/CollidableHelperFactory.js';
      const CollidableHelperFactory = globalThis.org.allbinary.game.collision.CollidableHelperFactory;

      
//not game specific package import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
      const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
//not game specific package import { CollisionHelper } from '../../../../../org/allbinary/game/collision/CollisionHelper.js';
      const CollisionHelper = globalThis.org.allbinary.game.collision.CollisionHelper;

      
//not game specific package import { CollisionType } from '../../../../../org/allbinary/game/collision/CollisionType.js';
      const CollisionType = globalThis.org.allbinary.game.collision.CollisionType;

      
//not game specific package import { CollisionTypeFactory } from '../../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
      const CollisionTypeFactory = globalThis.org.allbinary.game.collision.CollisionTypeFactory;

      
//not game specific package import { DamageableInterface } from '../../../../../org/allbinary/game/combat/damage/DamageableInterface.js';
      const DamageableInterface = globalThis.org.allbinary.game.combat.damage.DamageableInterface;

      
//not game specific package import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
//not game specific package import { CollidableDestroyableDamageableBehavior } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';
      const CollidableDestroyableDamageableBehavior = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableBehavior;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CollidableDamageWeaponBehavior extends CollidableDestroyableDamageableBehavior {
        

    private collided: boolean= false;

    collisionHelper: CollisionHelper;

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setCollided(false);
    
this.setCollidable(true);
    
this.collisionHelper= CollidableHelperFactory.getInstance();
    
}


    public init(sourceLayerInterface: AllBinaryLayer){
this.setCollided(false);
    
this.collisionHelper!.setOwnerLayerInterface(sourceLayerInterface);
    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{

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
super.collide(ownerLayer, collisionLayer);
    
this.collided= true;
    
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{

                        if(this.collisionHelper!.isCollidable(collidableInterfaceCompositeInterface as CollidableCompositeLayer))
                        
                                    {
                                    
    var layerInterface: AllBinaryLayer = collidableInterfaceCompositeInterface as AllBinaryLayer;;
    

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
this.damageUtil!.process(ownerLayer as DamageableInterface, collidableInterfaceCompositeInterface as DamageableInterface);
    
this.collided= true;
    
}


    public getCollisionTypeWith(layerInterface: AllBinaryLayer): CollisionType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollisionTypeFactory.getInstance()!.COLLISION;
    
}


    public isCollided(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collided;
    
}


    setCollided(collided: boolean){
this.collided= collided;
    
}


}
                
            

