
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { BasicRandomAIFactory } from '../../../../../org/allbinary/game/ag/ai/tactical/BasicRandomAIFactory.js';
      //not GWT import const BasicRandomAIFactory = globalThis.org.allbinary.game.ag.ai.tactical.BasicRandomAIFactory;

      
import { ArtificialIntelligenceInterfaceFactoryInterface } from '../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js';
      //not GWT import const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;

      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      //not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
      //not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThrustAIVisitorFactory } from './ThrustAIVisitorFactory.js';
import { BasicProbabilityAIDataFactory } from './BasicProbabilityAIDataFactory.js';
import { LastKeyAIVisitorFactory } from './LastKeyAIVisitorFactory.js';
import { DiveAndDirectionalTrackingAI } from './DiveAndDirectionalTrackingAI.js';

export class DiveAndDirectionalTrackingAIFactory
            extends Object
         implements ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{

    var visitorCanBeNull: any = hashtable.get(BasicAI.AI_VISITOR);;
    

                        if(visitorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    visitorCanBeNull= ThrustAIVisitorFactory.getInstance();
    

                                    }
                                

    var hashtable2: Hashtable<any, any> = new BasicProbabilityAIDataFactory().getInstance()!;;
    
hashtable2.put(BasicAI.AI_VISITOR, LastKeyAIVisitorFactory.getInstance());
    

    var artificialIntelligenceInterface: ArtificialIntelligenceInterface = new BasicRandomAIFactory().getInstance(hashtable2, ownerLayerInterface, gameInput)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new DiveAndDirectionalTrackingAI(ownerLayerInterface, artificialIntelligenceInterface, gameInput, visitorCanBeNull as Visitor);
    
}


}



