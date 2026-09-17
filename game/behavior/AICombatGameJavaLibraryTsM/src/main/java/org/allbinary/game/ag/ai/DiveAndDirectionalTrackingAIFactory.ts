
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
        
import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
//not GWT import const ArtificialIntelligenceInterface

import { BasicRandomAIFactory } from '../../../../../org/allbinary/game/ag/ai/tactical/BasicRandomAIFactory.js';
//not GWT import const BasicRandomAIFactory

import { ArtificialIntelligenceInterfaceFactoryInterface } from '../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js';
//not GWT import const ArtificialIntelligenceInterfaceFactoryInterface

import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI

import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThrustAIVisitorFactory } from './ThrustAIVisitorFactory.js';
//not GWT import - same folder const ThrustAIVisitorFactory
import { BasicProbabilityAIDataFactory } from './BasicProbabilityAIDataFactory.js';
//not GWT import - same folder const BasicProbabilityAIDataFactory
import { LastKeyAIVisitorFactory } from './LastKeyAIVisitorFactory.js';
//not GWT import - same folder const LastKeyAIVisitorFactory
import { DiveAndDirectionalTrackingAI } from './DiveAndDirectionalTrackingAI.js';
//not GWT import - same folder const DiveAndDirectionalTrackingAI

export class DiveAndDirectionalTrackingAIFactory
            extends Object
         implements ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: ABHashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{

    var visitorCanBeNull: any = hashtable.get(BasicAI.AI_VISITOR);;
    

                        if(visitorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    visitorCanBeNull= ThrustAIVisitorFactory.getInstance();
    

                                    }
                                

    var hashtable2: ABHashtable<any, any> = new BasicProbabilityAIDataFactory().getInstance()!;;
    
hashtable2.put(BasicAI.AI_VISITOR, LastKeyAIVisitorFactory.getInstance());
    

    var artificialIntelligenceInterface: ArtificialIntelligenceInterface = new BasicRandomAIFactory().getInstance(hashtable2, ownerLayerInterface, gameInput)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new DiveAndDirectionalTrackingAI(ownerLayerInterface, artificialIntelligenceInterface, gameInput, visitorCanBeNull as Visitor);
    
}


}



