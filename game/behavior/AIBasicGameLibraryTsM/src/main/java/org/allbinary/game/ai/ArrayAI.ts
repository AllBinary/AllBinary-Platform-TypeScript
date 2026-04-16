
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
        



import { ArtificialIntelligenceInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

import {  } from "./.js";

export class ArrayAI extends BasicAI {
        

    private readonly artificialIntelligenceInterfaceArray: ArtificialIntelligenceInterface[]
public constructor (artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var artificialIntelligenceInterface = artificialIntelligenceInterface
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.artificialIntelligenceInterfaceArray= artificialIntelligenceInterface;
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var size: number = this.artificialIntelligenceInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.artificialIntelligenceInterfaceArray[index]!.processAI(allBinaryLayerManager);
    
}

}


    public getArtificialIntelligenceInterface(): ArtificialIntelligenceInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artificialIntelligenceInterfaceArray;
    
}


}
                
            

