
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
        



import { AnalogLocationInput } from '../../../../../org/allbinary/game/input/analog/AnalogLocationInput.js';
      //not GWT import const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;

      
import { AnalogLocationInputFactory } from '../../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js';
      //not GWT import const AnalogLocationInputFactory = globalThis.org.allbinary.game.input.analog.AnalogLocationInputFactory;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
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



