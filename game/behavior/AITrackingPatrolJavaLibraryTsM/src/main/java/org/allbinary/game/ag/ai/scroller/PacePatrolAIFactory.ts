
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { ArtificialIntelligenceInterface } from '../../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { ArtificialIntelligenceInterfaceFactoryInterface } from '../../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js';
      //not GWT import const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { ABHashtable } from '../../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from './BasePatrolAI.js';
//not GWT import const BasePatrolAI = globalThis.org.allbinary.game.ag.ai.scroller.BasePatrolAI;

                import { PacePatrolAI } from './PacePatrolAI.js';
//not GWT import const PacePatrolAI = globalThis.org.allbinary.game.ag.ai.scroller.PacePatrolAI;

                
export class PacePatrolAIFactory
            extends Object
         implements ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: ABHashtable, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
hashtable.put(BasePatrolAI.MAX_DISTANCE, SmallIntegerSingletonFactory.getInstance()!.getAt(220));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new PacePatrolAI(hashtable, ownerLayerInterface, gameInput);
    
}


}



