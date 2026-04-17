
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { ArtificialIntelligenceInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UpDownVectorAIFactory
            extends Object
         implements ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UpDownVectorAI(ownerLayerInterface, gameInput);
    
}


}
                
            

