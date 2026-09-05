
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { AllBinaryGameLayer } from '../../../../org/allbinary/game/layer/AllBinaryGameLayer.js';
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;

      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { LayerProcessor } from '../../../../org/allbinary/layer/LayerProcessor.js';
//not GWT import const LayerProcessor = globalThis.org.allbinary.layer.LayerProcessor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OptimizedTickableLayerManager } from './OptimizedTickableLayerManager.js';
//not GWT import - same folder const OptimizedTickableLayerManager = globalThis.org.allbinary.game.tick.OptimizedTickableLayerManager;

                
export class OptimizedTickableLayerProcessor extends LayerProcessor {
        

public constructor (){
            super(new OptimizedTickableLayerManager());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number){

    var tickableInterface: AllBinaryGameLayer = layerInterface as AllBinaryGameLayer;;
    
tickableInterface!.processTick(allBinaryLayerManager);
    
}


    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{

                        if(layerInterface!.implmentsTickableInterface())
                        
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



