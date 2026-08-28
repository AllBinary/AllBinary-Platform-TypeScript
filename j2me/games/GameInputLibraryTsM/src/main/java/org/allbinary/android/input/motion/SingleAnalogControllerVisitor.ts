
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
        



//not game specific package import { AnalogLocationInput } from '../../../../../org/allbinary/game/input/analog/AnalogLocationInput.js';
      const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;

      
//not game specific package import { AnalogLocationInputFactory } from '../../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js';
      const AnalogLocationInputFactory = globalThis.org.allbinary.game.input.analog.AnalogLocationInputFactory;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnalogControllerVisitor } from './AnalogControllerVisitor.js';
import { AnalogLocationInputProcessor } from './AnalogLocationInputProcessor.js';

export class SingleAnalogControllerVisitor extends AnalogControllerVisitor {
        

    private readonly playerInputId: number;

public constructor (playerInputId: number){

            super();
        this.playerInputId= playerInputId;
    
}


    public process(allbinaryLayerManager: AllBinaryLayerManager, analogLocationInputProcessor: AnalogLocationInputProcessor){

    var analogLocationInput: AnalogLocationInput = AnalogLocationInputFactory.getInstance()!.getInstanceForPlayer(this.playerInputId)!;;
    
analogLocationInputProcessor!.process(allbinaryLayerManager, analogLocationInput);
    
}


}



