
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
      //not GWT import const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DropLayerInterface } from './DropLayerInterface.js';
//not GWT import const DropLayerInterface = globalThis.org.allbinary.game.layer.drop.DropLayerInterface;

                
export class DropLayerProcessor extends BasicLayerProcessor {
        

    private static readonly LAYER_PROCESSOR: BasicLayerProcessor = new DropLayerProcessor();

    public static getInstance(): BasicLayerProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DropLayerProcessor.LAYER_PROCESSOR;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public process(allBinaryLayerManager: AllBinaryLayerManager){

    var list: BasicArrayList = this.getList()!;;
    

    var size: number = list.size()!;;
    

    var layerInterface: AllBinaryLayer;;
    

    var dropLayerInterface: DropLayerInterface;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
layerInterface= list.objectArray[index]! as AllBinaryLayer;
    
dropLayerInterface= layerInterface as unknown as DropLayerInterface;
    
layerInterface= dropLayerInterface!.getDroppedLayer() as unknown as AllBinaryLayer;
    
allBinaryLayerManager!.append(layerInterface);
    
}

list.clear();
    
}


}



