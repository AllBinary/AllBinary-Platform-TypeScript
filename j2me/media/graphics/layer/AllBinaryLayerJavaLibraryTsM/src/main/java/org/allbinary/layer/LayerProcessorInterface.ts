
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

        


            import { Exception } from '../../../java/lang/Exception.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicLayerProcessorInterface } from './BasicLayerProcessorInterface.js';
//not GWT import - same folder const BasicLayerProcessorInterface
import { LayerManager } from './LayerManager.js';
//not GWT import - same folder const LayerManager
import { AllBinaryLayerManager } from './AllBinaryLayerManager.js';
//not GWT import - same folder const AllBinaryLayerManager
import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import - same folder const AllBinaryLayer

export interface LayerProcessorInterface extends BasicLayerProcessorInterface {
        

    getLayerManager(): LayerManager

                //@Throws(Exception.constructor)
            
    processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number)

                //@Throws(Exception.constructor)
            
    isProcessorLayer(layerInterface: AllBinaryLayer): boolean

}



