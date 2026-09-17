
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
//not GWT import - same folder const BasicLayerProcessorInterfaceimport { LayerManager } from './LayerManager.js';
//not GWT import - same folder const LayerManagerimport { AllBinaryLayerManager } from './AllBinaryLayerManager.js';
//not GWT import - same folder const AllBinaryLayerManagerimport { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import - same folder const AllBinaryLayer
export interface LayerProcessorInterface extends BasicLayerProcessorInterface {
        

    getLayerManager(): LayerManager

                //@Throws(Exception.constructor)
            
    processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number)

                //@Throws(Exception.constructor)
            
    isProcessorLayer(layerInterface: AllBinaryLayer): boolean

}



