
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CollidableCompositeLayer } from '../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableBaseBehavior } from './CollidableBaseBehavior.js';
import { CollidableInterfaceCompositeInterface } from './CollidableInterfaceCompositeInterface.js';

export class CollidableNeverCollideBehavior extends CollidableBaseBehavior {
        
 constructor (isCollidable: boolean){
            super(isCollidable);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public isCollision(ownerLayer: CollidableCompositeLayer, allbinaryCollidableLayer: CollidableCompositeLayer): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public collide(ownerLayer: CollidableCompositeLayer, allbinaryCollidableLayer: CollidableCompositeLayer){
}


    public collideInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface){
}


    public isCollisionInterface(ownerLayer: CollidableCompositeLayer, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

