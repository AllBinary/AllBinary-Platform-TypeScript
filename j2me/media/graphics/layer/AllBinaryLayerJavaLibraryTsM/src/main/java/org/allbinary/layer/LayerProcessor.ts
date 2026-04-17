
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
        



import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LayerManager } from "./LayerManager.js";

import { AllBinaryLayerManager } from "./AllBinaryLayerManager.js";

import { AllBinaryLayer } from "./AllBinaryLayer.js";

export class LayerProcessor
            extends Object
         implements LayerProcessorInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly layerManager: LayerManager
public constructor (layerManager: LayerManager){

            super();
                //var layerManager = layerManager
this.layerManager= layerManager;
    
}


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number){
var allBinaryLayerManager = allBinaryLayerManager
var layerInterface = layerInterface
var index = index



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{
var layerInterface = layerInterface



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


    public getLayerManager(): LayerManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerManager;
    
}


                //@Throws(Error::class)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var layerManager: LayerManager = this.getLayerManager()!;
        
        
;
    

    var size: number = layerManager!.getSize()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.process(allBinaryLayerManager, layerManager!.getLayerAt(index);

                         as AllBinaryLayer, index);
    
}

}


}
                
            

