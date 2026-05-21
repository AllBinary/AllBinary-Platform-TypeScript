
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CollisionType } from '../../../../org/allbinary/game/collision/CollisionType.js';
      
import { CollisionTypeFactory } from '../../../../org/allbinary/game/collision/CollisionTypeFactory.js';
      
import { CollidableDestroyableDamageableBehavior } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableCompositeLayer } from './CollidableCompositeLayer.js';

export class CollidableRTSBehavior extends CollidableDestroyableDamageableBehavior {
        
public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean{

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer)!;
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(ownerLayer, collidableInterfaceCompositeInterface);;
    

                                    }
                                
                        else {
                            
                        if(collidableInterfaceCompositeInterface!.getX2() <= ownerLayer!.getXP() || collidableInterfaceCompositeInterface!.getY2() <= ownerLayer!.getYP() || collidableInterfaceCompositeInterface!.getYP() >= ownerLayer!.getY2() || collidableInterfaceCompositeInterface!.getXP() >= ownerLayer!.getX2())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableCompositeLayer){

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
;
    

    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer)!;
;
    

                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    super.collide(ownerLayer, collidableInterfaceCompositeInterface);
    

                                    }
                                
                        else {
                            this.collideNone(ownerLayer, collidableInterfaceCompositeInterface);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    collideNone(ownerLayer: CollidableCompositeLayer, collidableInterface: CollidableCompositeLayer){
}


}
                
            

