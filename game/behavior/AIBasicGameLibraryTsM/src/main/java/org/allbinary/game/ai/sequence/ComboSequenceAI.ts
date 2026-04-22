
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

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SequenceAI } from "./SequenceAI.js";

export class ComboSequenceAI extends SequenceAI {
        
public constructor (artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
                    var artificialIntelligenceInterface = artificialIntelligenceInterface
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var artificialIntelligenceInterfaceArray: ArtificialIntelligenceInterface[] = this.getArtificialIntelligenceInterface()!;
        
        
;
    

    var size: number = artificialIntelligenceInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.setIndex(index);
    
super.processAI(allBinaryLayerManager);
    
}

}


}
                
            

