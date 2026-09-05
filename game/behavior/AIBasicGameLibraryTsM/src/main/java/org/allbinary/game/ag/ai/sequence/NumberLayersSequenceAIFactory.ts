
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
import { ArtificialIntelligenceInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
//not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NumberLayersSequenceAI } from './NumberLayersSequenceAI.js';
//not GWT import - same folder const NumberLayersSequenceAI = globalThis.org.allbinary.game.ag.ai.sequence.NumberLayersSequenceAI;

                
export class NumberLayersSequenceAIFactory
            extends Object
         {
        

    public getInstance(numberOfEnemiesLeft: number, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new NumberLayersSequenceAI(numberOfEnemiesLeft, artificialIntelligenceInterface, ownerLayerInterface, gameInput);
    
}


}



