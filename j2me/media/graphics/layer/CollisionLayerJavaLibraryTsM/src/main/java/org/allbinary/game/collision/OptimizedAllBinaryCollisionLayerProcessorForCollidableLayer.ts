
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
        



import { CollidableCompositeLayer } from "../../../../org/allbinary/game/layer/CollidableCompositeLayer.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LayerManager } from "../../../../org/allbinary/layer/LayerManager.js";

    
import { LayerProcessor } from "../../../../org/allbinary/layer/LayerProcessor.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer extends LayerProcessor {
        
public constructor ()                        

                            : super(new OptimizedAllBinaryCollisionLayerManager()){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, startIndex: number){
var allBinaryLayerManager = allBinaryLayerManager
var layerInterface = layerInterface
var startIndex = startIndex

    var collidableInterfaceCompositeInterface: CollidableCompositeLayer = layerInterface as CollidableCompositeLayer;
        
        
;
    

    var collidableBase: CollidableBaseBehavior = collidableInterfaceCompositeInterface!.getCollidableInferface()!;
        
        
;
    

                        if(collidableBase!.isCollidable())
                        
                                    {
                                    
    var layerManager: LayerManager = this.getLayerManager()!;
        
        
;
    

    var size: number = layerManager!.getSize()!;
        
        
;
    

    var collidableInterfaceCompositeInterface2: CollidableCompositeLayer
;
    

    var collidableBase2: CollidableBaseBehavior
;
    




                        for (
    var index: number = startIndex +1;
        
        
index < size; index++)
        {
collidableInterfaceCompositeInterface2= layerManager!.getLayerAt(index);

                         as CollidableCompositeLayer;
    
collidableBase2= collidableInterfaceCompositeInterface2!.getCollidableInferface();
    

                        if(collidableBase2!.isCollidable() && collidableBase!.isCollision(collidableInterfaceCompositeInterface2))
                        
                                    {
                                    collidableBase!.collide(collidableInterfaceCompositeInterface2);
    
collidableBase2!.collide(collidableInterfaceCompositeInterface);
    

                                    }
                                
}


                                    }
                                
}


    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{
var layerInterface = layerInterface

                        if(layerInterface!.implmentsCollidableInterface())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

