
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { ArtificialIntelligenceInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { BasicRandomAIFactory } from "../../../../org/allbinary/game/ai/tactical/BasicRandomAIFactory.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class DiveAndDirectionalTrackingAIFactory
            extends Object
        
                , ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
    //var hashtable = hashtable
    //var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput

    var visitorCanBeNull: any? = hashtable.get(BasicAI.AI_VISITOR as Object);
        
        
;
    

                        if(visitorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    visitorCanBeNull= ThrustAIVisitorFactory.getInstance();
    

                                    }
                                

    var hashtable2: Hashtable<any, any> = new BasicProbabilityAIDataFactory().
                            getInstance()!;
        
        
;
    
hashtable2.put(BasicAI.AI_VISITOR, LastKeyAIVisitorFactory.getInstance());
    

    var artificialIntelligenceInterface: ArtificialIntelligenceInterface = new BasicRandomAIFactory().
                            getInstance(hashtable2, ownerLayerInterface, gameInput)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new DiveAndDirectionalTrackingAI(ownerLayerInterface, artificialIntelligenceInterface, gameInput, visitorCanBeNull as Visitor);
    
}


}
                
            

