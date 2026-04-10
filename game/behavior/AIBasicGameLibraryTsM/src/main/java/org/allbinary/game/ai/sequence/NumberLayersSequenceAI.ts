
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

    

export class NumberLayersSequenceAI extends SequenceAI {
        

    private numberOfLayersLeft: number
public constructor (numberOfEnemiesLeft: number, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(artificialIntelligenceInterface, ownerLayerInterface, gameInput){

            super();
            var numberOfEnemiesLeft = numberOfEnemiesLeft
var artificialIntelligenceInterface = artificialIntelligenceInterface
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.numberOfLayersLeft= numberOfEnemiesLeft
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.getIndex() == 0)
                        
                                    {
                                    
                        if(allBinaryLayerManager!.getSize() < this.numberOfLayersLeft)
                        
                                    {
                                    this.setIndex(1)

                                    }
                                

                                    }
                                
super.processAI(allBinaryLayerManager)
}


}
                
            

