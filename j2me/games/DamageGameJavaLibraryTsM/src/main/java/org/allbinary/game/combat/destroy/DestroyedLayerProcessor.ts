
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
        



import { DestroyEventCircularStaticPool } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js";

    
import { DestroyedEvent } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js";

    
import { DestroyedEventHandler } from "../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicLayerProcessor } from "../../../../../org/allbinary/layer/BasicLayerProcessor.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DestroyedLayerProcessor extends BasicLayerProcessor {
        

    private DESTROYED_LAYER_PROCESSOR: BasicLayerProcessor = BasicLayerProcessor.NULL_LAYER_PROCESSOR;
        
        

    public static init(){
DESTROYED_LAYER_PROCESSOR= DestroyedLayerProcessor();
    
}


    public static getInstance(): BasicLayerProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DESTROYED_LAYER_PROCESSOR;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var list: BasicArrayList = this.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var destroyedEventHandler: DestroyedEventHandler = DestroyedEventHandler.getInstance()!;
        
        
;
    

    var destroyEventCircularStaticPool: DestroyEventCircularStaticPool = DestroyEventCircularStaticPool.getInstance()!;
        
        
;
    

    var destroyedEvent: DestroyedEvent
;
    

    var layerInterface: AllBinaryLayer
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var layerInterfaceCanBeNull: any = {}? = list.objectArray[index];
        
        
;
    

                        if(layerInterfaceCanBeNull != 
                                    null
                                )
                        
                                    {
                                    layerInterface= layerInterfaceCanBeNull as AllBinaryLayer;
    
allBinaryLayerManager!.remove(layerInterface);
    
destroyedEvent= destroyEventCircularStaticPool!.getInstance(layerInterface);
    
destroyedEventHandler!.fireEvent(destroyedEvent);
    

                                    }
                                
                        else {
                            
                        }
                            
}

list.clear();
    
}


}
                
            

