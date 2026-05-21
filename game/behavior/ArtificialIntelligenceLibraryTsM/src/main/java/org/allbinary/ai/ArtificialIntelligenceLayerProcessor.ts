
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
        
import { AllBinaryLayer } from '../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerManager } from '../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
import { LayerProcessor } from '../../../org/allbinary/layer/LayerProcessor.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ArtificialIntelligenceLayerManager } from './ArtificialIntelligenceLayerManager.js';
import { ArtificialIntelligenceCompositeInterface } from './ArtificialIntelligenceCompositeInterface.js';

export class ArtificialIntelligenceLayerProcessor extends LayerProcessor {
        
public constructor (){
            super(new ArtificialIntelligenceLayerManager());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAt(allBinaryLayerManager: AllBinaryLayerManager, layerInterface: AllBinaryLayer, index: number){

    var artificialIntelligenceCompositeInterface: ArtificialIntelligenceCompositeInterface = layerInterface as ArtificialIntelligenceCompositeInterface;
;
    
artificialIntelligenceCompositeInterface!.getArtificialIntelligenceInterface()!.processAI(allBinaryLayerManager);
    
}


                //@Throws(Exception.constructor)
            
    public isProcessorLayer(layerInterface: AllBinaryLayer): boolean{

                        if(layerInterface!.implmentsArtificialIntelligenceCompositeInterface())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

