
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
import { CollidableCompositeLayer } from '../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
      //not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { LayerManager } from '../../../../org/allbinary/layer/LayerManager.js';
      //not GWT import const LayerManager = globalThis.org.allbinary.layer.LayerManager;

      
import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
      //not GWT import const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OptimizedAllBinaryCollisionLayerManager } from './OptimizedAllBinaryCollisionLayerManager.js';
import { CollidableBaseBehavior } from './CollidableBaseBehavior.js';

export class OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer extends LayerProcessor {
        

public constructor (){
            super(new OptimizedAllBinaryCollisionLayerManager());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, startIndex: number){

    var collidableInterfaceCompositeInterface: CollidableCompositeLayer = layerInterface as CollidableCompositeLayer;;
    

    var collidableBase: CollidableBaseBehavior = collidableInterfaceCompositeInterface!.getCollidableInferface()!;;
    

                        if(collidableBase!.isCollidable(collidableInterfaceCompositeInterface))
                        
                                    {
                                    
    var layerManager: LayerManager = this.getLayerManager()!;;
    

    var size: number = layerManager!.getSize()!;;
    

    var collidableInterfaceCompositeInterface2: CollidableCompositeLayer;;
    

    var collidableBase2: CollidableBaseBehavior;;
    




                        for (
    var index: number = startIndex +1;index < size; index++)
        {
collidableInterfaceCompositeInterface2= layerManager!.getLayerAt(index) as CollidableCompositeLayer;
    
collidableBase2= collidableInterfaceCompositeInterface2!.getCollidableInferface();
    

                        if(collidableBase2!.isCollidable(collidableInterfaceCompositeInterface) && collidableBase!.isCollision(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2))
                        
                                    {
                                    collidableBase!.collide(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2);
    
collidableBase2!.collide(collidableInterfaceCompositeInterface2, collidableInterfaceCompositeInterface);
    

                                    }
                                
}


                                    }
                                
}


    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{

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



