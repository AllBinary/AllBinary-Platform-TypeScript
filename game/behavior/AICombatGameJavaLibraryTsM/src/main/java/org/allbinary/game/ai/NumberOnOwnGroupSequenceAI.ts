
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

    
import { SequenceAI } from "../../../../org/allbinary/game/ai/sequence/SequenceAI.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { GroupLayerManagerListener } from "../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

export class NumberOnOwnGroupSequenceAI extends SequenceAI {
        

    private numberOnSameTeam: Integer[]
public constructor (numberOnSameTeam: Integer[], artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(artificialIntelligenceInterface, ownerLayerInterface, gameInput){

            super();
            var numberOnSameTeam = numberOnSameTeam
var artificialIntelligenceInterface = artificialIntelligenceInterface
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.numberOnSameTeam= numberOnSameTeam
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var layerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var index: number = this.getIndex()!;
        
        


                        if(numberOnSameTeam!.length > index)
                        
                                    {
                                    
    var size: number = GroupLayerManagerListener.getInstance()!.getGroupSize(layerInterface)!;
        
        


                        if(numberOnSameTeam[index]!.toInt() > size)
                        
                                    {
                                    this.this.next()

                                    }
                                

                                    }
                                
super.processAI(allBinaryLayerManager)
}


}
                
            

