
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
        
import { AllBinaryLayerManager } from '../../../org/allbinary/layer/AllBinaryLayerManager.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ArtificialIntelligenceInterface } from './ArtificialIntelligenceInterface.js';

export class ArtificialIntelligence
            extends Object
         implements ArtificialIntelligenceInterface {
        

    private static readonly instance: ArtificialIntelligence = new ArtificialIntelligence();

    public static getInstance(): ArtificialIntelligence{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArtificialIntelligence.instance;
    
}

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public processAI(layerManager: AllBinaryLayerManager){
var layerManager = layerManager
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 1;
    
}


}
                
            

