
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
        




export interface LayerProcessorInterface extends BasicLayerProcessorInterface {
        

    getLayerManager(): LayerManager

                //@Throws(Error::class)
            
    process(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number)

                //@Throws(Error::class)
            
    isProcessorLayer(layerInterface: AllBinaryLayer): boolean

}
                
            

