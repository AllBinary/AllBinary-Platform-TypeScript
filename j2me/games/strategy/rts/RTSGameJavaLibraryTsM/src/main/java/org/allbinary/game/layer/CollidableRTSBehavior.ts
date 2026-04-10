
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
        



import { CollisionType } from "../../../../org/allbinary/game/collision/CollisionType.js";

    
import { CollisionTypeFactory } from "../../../../org/allbinary/game/collision/CollisionTypeFactory.js";

    
import { CollidableDestroyableDamageableBehavior } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableBehavior.js";

    

export class CollidableRTSBehavior extends CollidableDestroyableDamageableBehavior {
        
public constructor (ownerLayer: CollidableCompositeLayer, collidable: boolean)                        

                            : super(ownerLayer, collidable){

            super();
                //var ownerLayer = ownerLayer
    //var collidable = collidable


                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(collidableInterfaceCompositeInterface: CollidableCompositeLayer): boolean{
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
        
        


    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(this.ownerLayer)!;
        
        


                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isCollision(collidableInterfaceCompositeInterface);
    

                                    }
                                
                        else {
                            
                        if(collidableInterfaceCompositeInterface!.getX2() <= this.ownerLayer!.getXP() || collidableInterfaceCompositeInterface!.getY2() <= this.ownerLayer!.getYP() || collidableInterfaceCompositeInterface!.getYP() >= this.ownerLayer!.getY2() || collidableInterfaceCompositeInterface!.getXP() >= this.ownerLayer!.getX2())
                        
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


                //@Throws(Error::class)
            
    public collide(collidableInterfaceCompositeInterface: CollidableCompositeLayer){
    //var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface

    var collisionTypeFactory: CollisionTypeFactory = CollisionTypeFactory.getInstance()!;
        
        


    var collisionType: CollisionType = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(this.ownerLayer)!;
        
        


                        if(collisionType == collisionTypeFactory!.PICKUP)
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(collisionType == collisionTypeFactory!.COLLISION)
                        
                                    {
                                    super.collide(collidableInterfaceCompositeInterface)

                                    }
                                
                        else {
                            this.this.collideNone(collidableInterfaceCompositeInterface)

                        }
                            
}


                //@Throws(Error::class)
            
    collideNone(collidableInterface: CollidableCompositeLayer){
    //var collidableInterface = collidableInterface
}


}
                
            

