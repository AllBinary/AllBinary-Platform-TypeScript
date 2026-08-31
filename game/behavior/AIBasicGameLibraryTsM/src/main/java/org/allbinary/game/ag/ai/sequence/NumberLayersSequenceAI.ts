
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ArtificialIntelligenceInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SequenceAI } from './SequenceAI.js';

export class NumberLayersSequenceAI extends SequenceAI {
        

    private numberOfLayersLeft: number;

public constructor (numberOfEnemiesLeft: number, artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.numberOfLayersLeft= numberOfEnemiesLeft;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.getIndex() == 0)
                        
                                    {
                                    
                        if(allBinaryLayerManager!.getSize() < this.numberOfLayersLeft)
                        
                                    {
                                    this.setIndex(1);
    

                                    }
                                

                                    }
                                
super.processAI(allBinaryLayerManager);
    
}


}



