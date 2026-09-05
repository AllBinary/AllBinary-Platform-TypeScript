
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
        
import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
//not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ArrayAI extends BasicAI {
        

    private readonly artificialIntelligenceInterfaceArray: ArtificialIntelligenceInterface[];

public constructor (artificialIntelligenceInterface: ArtificialIntelligenceInterface[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.artificialIntelligenceInterfaceArray= artificialIntelligenceInterface;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var size: number = this.artificialIntelligenceInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.artificialIntelligenceInterfaceArray[index]!.processAI(allBinaryLayerManager);
    
}

}


    public getArtificialIntelligenceInterface(): ArtificialIntelligenceInterface[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.artificialIntelligenceInterfaceArray;
    
}


}



