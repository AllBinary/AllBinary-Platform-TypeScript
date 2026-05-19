
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
      
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      
import { LayerManager } from '../../../../../org/allbinary/layer/LayerManager.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryCollisionManager
            extends Object
         {
        

    private static allBinaryCollisionManager: AllBinaryCollisionManager = new AllBinaryCollisionManager();

    public static getInstance(): AllBinaryCollisionManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryCollisionManager.allBinaryCollisionManager;
    
}

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public process(layerManager: LayerManager, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface, startIndex: number){

    var size: number = layerManager!.getSize()!;
;
    




                        for (
    var index: number = startIndex +1;
index < size; index++)
        {

    var collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface = layerManager!.getLayerAt(index) as CollidableInterfaceCompositeInterface;
;
    
this.collide(layerManager, collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
    
}

}


                //@Throws(Exception.constructor)
            
    collide(layerManager: LayerManager, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface){

    var collidableBase2: CollidableBaseBehavior = collidableInterfaceCompositeInterface2!.getCollidableInferface()!;
;
    

    var collidableBase: CollidableBaseBehavior = collidableInterfaceCompositeInterface!.getCollidableInferface()!;
;
    

                        if(collidableBase2!.isCollidable(collidableInterfaceCompositeInterface as CollidableCompositeLayer))
                        
                                    {
                                    
                        if(collidableBase!.isCollisionInterface(collidableInterfaceCompositeInterface as CollidableCompositeLayer, collidableInterfaceCompositeInterface2))
                        
                                    {
                                    collidableBase!.collideInterface(collidableInterfaceCompositeInterface as CollidableCompositeLayer, collidableInterfaceCompositeInterface2);
    
collidableBase2!.collideInterface(collidableInterfaceCompositeInterface as CollidableCompositeLayer, collidableInterfaceCompositeInterface);
    

                                    }
                                

                                    }
                                
}


}
                
            

