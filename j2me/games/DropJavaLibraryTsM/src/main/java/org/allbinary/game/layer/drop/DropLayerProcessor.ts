
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
        



import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicLayerProcessor } from "../../../../../org/allbinary/layer/BasicLayerProcessor.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DropLayerProcessor extends BasicLayerProcessor {
        

    private static readonly LAYER_PROCESSOR: BasicLayerProcessor = new DropLayerProcessor();
        
        

    public static getInstance(): BasicLayerProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LAYER_PROCESSOR;
    
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var list: BasicArrayList = this.getList()!;
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var layerInterface: AllBinaryLayer = list.objectArray[index]! as AllBinaryLayer;
        
        


    var dropLayerInterface: DropLayerInterface = layerInterface as DropLayerInterface;
        
        

append(dropLayerInterface!.getDroppedLayer() as AllBinaryLayer)
}

clear()
}


}
                
            

