
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
        



import { ArtificialIntelligenceInterface } from "../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NumberLayersSequenceAIFactory
            extends Object
         {
        

    public getInstance(numberOfEnemiesLeft: number, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
var numberOfEnemiesLeft = numberOfEnemiesLeft
var artificialIntelligenceInterface = artificialIntelligenceInterface
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NumberLayersSequenceAI(numberOfEnemiesLeft, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    
}


}
                
            

