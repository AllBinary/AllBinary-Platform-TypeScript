
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not game specific package import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { SequenceAI } from '../../../../../org/allbinary/game/ag/ai/sequence/SequenceAI.js';
      //not GWT import and is game specific code const SequenceAI = globalThis.org.allbinary.game.ag.ai.sequence.SequenceAI;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { GroupLayerManagerListener } from '../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
      const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NumberOnOwnGroupSequenceAI extends SequenceAI {
        

    private numberOnSameTeam: Integer[];

public constructor (numberOnSameTeam: Integer[], artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.numberOnSameTeam= numberOnSameTeam;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var layerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var index: number = this.getIndex()!;;
    

                        if(this.numberOnSameTeam!.length > index)
                        
                                    {
                                    
    var size: number = GroupLayerManagerListener.getInstance()!.getGroupSizeFromInterface(layerInterface)!;;
    

                        if(this.numberOnSameTeam[index]!.intValue() > size)
                        
                                    {
                                    this.next();
    

                                    }
                                

                                    }
                                
super.processAI(allBinaryLayerManager);
    
}


}
                
            

