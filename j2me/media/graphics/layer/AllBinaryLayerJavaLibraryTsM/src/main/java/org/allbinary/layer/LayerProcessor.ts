
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerProcessorInterface } from './LayerProcessorInterface.js';
//sameFolderImports - not GWT import - same folder const LayerProcessorInterface
import { LayerManager } from './LayerManager.js';
//sameFolderImports - not GWT import - same folder const LayerManager
import { AllBinaryLayerManager } from './AllBinaryLayerManager.js';
//sameFolderImports - not GWT import - same folder const AllBinaryLayerManager
import { AllBinaryLayer } from './AllBinaryLayer.js';
//sameFolderImports - not GWT import - same folder const AllBinaryLayer

export class LayerProcessor
            extends Object
         implements LayerProcessorInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly layerManager: LayerManager;

public constructor (layerManager: LayerManager){

            super();
        this.layerManager= layerManager;
    
}


                //@Throws(Exception.constructor)
            
    public processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public getLayerManager(): LayerManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerManager;
    
}


                //@Throws(Exception.constructor)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){

    let layerManager: LayerManager = this.getLayerManager()!;;
    

    let size: number = layerManager!.getSize()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.processAt(allBinaryLayerManager, layerManager!.getLayerAt(index) as AllBinaryLayer, index);
    
}

}


}

