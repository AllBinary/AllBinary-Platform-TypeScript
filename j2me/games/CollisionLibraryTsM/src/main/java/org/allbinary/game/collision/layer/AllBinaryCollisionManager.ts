
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

    
import { LayerManager } from "../../../../../org/allbinary/layer/LayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryCollisionManager
            extends Object
         {
        

    private allBinaryCollisionManager: AllBinaryCollisionManager = new AllBinaryCollisionManager();
        
        

    public static getInstance(): AllBinaryCollisionManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryCollisionManager.allBinaryCollisionManager;
    
}

private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public process(layerManager: LayerManager, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface, startIndex: number){
var layerManager = layerManager
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
var startIndex = startIndex

    var size: number = layerManager!.getSize()!;
        
        
;
    




                        for (
    var index: number = startIndex +1;
        
        
index < size; index++)
        {

    var collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface = layerManager!.getLayerAt(index); as CollidableInterfaceCompositeInterface;
        
        
;
    
this.collide(layerManager, collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
    
}

}


                //@Throws(Error::class)
            
    collide(layerManager: LayerManager, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface){
var layerManager = layerManager
var collidableInterfaceCompositeInterface = collidableInterfaceCompositeInterface
var collidableInterfaceCompositeInterface2 = collidableInterfaceCompositeInterface2

    var collidableBase2: CollidableBaseBehavior = collidableInterfaceCompositeInterface2!.getCollidableInferface()!;
        
        
;
    

    var collidableBase: CollidableBaseBehavior = collidableInterfaceCompositeInterface!.getCollidableInferface()!;
        
        
;
    

                        if(collidableBase2!.isCollidable())
                        
                                    {
                                    
                        if(collidableBase!.isCollision(collidableInterfaceCompositeInterface2))
                        
                                    {
                                    collidableBase!.collide(collidableInterfaceCompositeInterface2);
    
collidableBase2!.collide(collidableInterfaceCompositeInterface);
    

                                    }
                                

                                    }
                                
}


}
                
            

