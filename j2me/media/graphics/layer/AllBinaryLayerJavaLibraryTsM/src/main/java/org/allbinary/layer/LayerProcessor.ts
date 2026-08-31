
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
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerProcessorInterface } from './LayerProcessorInterface.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerProcessorInterface;

                import { LayerManager } from './LayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.LayerManager;

                import { AllBinaryLayerManager } from './AllBinaryLayerManager.js';
//not GWT import const  = globalThis.org.allbinary.layer.AllBinaryLayerManager;

                import { AllBinaryLayer } from './AllBinaryLayer.js';
//not GWT import const  = globalThis.org.allbinary.layer.AllBinaryLayer;

                
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

    var layerManager: LayerManager = this.getLayerManager()!;;
    

    var size: number = layerManager!.getSize()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.processAt(allBinaryLayerManager, layerManager!.getLayerAt(index) as AllBinaryLayer, index);
    
}

}


}



