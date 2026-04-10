
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { ArtificialIntelligenceInterface } from "../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { ArtificialIntelligenceInterfaceFactoryInterface } from "../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { InputProbability } from "../../../../../org/allbinary/game/ai/InputProbability.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class BasicRandomAIFactory
            extends Object
        
                , ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<Any, Any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput

    var visitor: Visitor = hashtable.get(BasicAI.AI_VISITOR as Object) as Visitor;
        
        


                        if(visitor == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("No Visitor Provided")

                                    }
                                

    var inputProbability: InputProbability = hashtable.get(InputProbability.INPUT_PROBABILITY as Object) as InputProbability;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicRandomAI(ownerLayerInterface, gameInput, inputProbability, visitor);
    
}


}
                
            

