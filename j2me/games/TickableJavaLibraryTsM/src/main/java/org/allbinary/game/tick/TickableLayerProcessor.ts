
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
        



import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LayerProcessor } from "../../../../org/allbinary/layer/LayerProcessor.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TickableLayerProcessor extends LayerProcessor {
        
public constructor (){
            super(new TickableLayerManager());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number){
var allBinaryLayerManager = allBinaryLayerManager
var layerInterface = layerInterface
var index = index

    var tickableInterface: TickableInterface = layerInterface as TickableInterface;
        
        
;
    
tickableInterface!.processTick(allBinaryLayerManager);
    
}


    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{
var layerInterface = layerInterface

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
                
            

