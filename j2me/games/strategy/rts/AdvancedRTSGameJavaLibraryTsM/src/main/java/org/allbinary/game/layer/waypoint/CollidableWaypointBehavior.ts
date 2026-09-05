
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
//not GWT import const CollidableRTSBehavior = globalThis.org.allbinary.game.layer.CollidableRTSBehavior;

      
import { CollidableInterfaceCompositeInterface } from '../../../../../org/allbinary/game/collision/CollidableInterfaceCompositeInterface.js';
//not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CollidableWaypointBehavior extends CollidableRTSBehavior {
        

public constructor (collidable: boolean){
            super(collidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, collisionLayer: CollidableCompositeLayer){
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterface: CollidableInterfaceCompositeInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterface: CollidableInterfaceCompositeInterface){
}


}



