
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
        import { LayerProcessor } from './LayerProcessor.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerProcessor;

                import { SingleLayerLayerManager } from './SingleLayerLayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.SingleLayerLayerManager;

                import { LayerManager } from './LayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerManager;

                import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import const  = globalThis.org.allbinary.layer.AllBinaryLayer;

                import { AllBinaryLayerManager } from './AllBinaryLayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.AllBinaryLayerManager;

                
export class SingleLayerLayerProcessor extends LayerProcessor {
        

public constructor (){
            super(new SingleLayerLayerManager());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){

    var layerManager: LayerManager = this.getLayerManager()!;;
    
this.processAt(allBinaryLayerManager, layerManager!.getLayerAt(0) as AllBinaryLayer, 0);
    
}


}



