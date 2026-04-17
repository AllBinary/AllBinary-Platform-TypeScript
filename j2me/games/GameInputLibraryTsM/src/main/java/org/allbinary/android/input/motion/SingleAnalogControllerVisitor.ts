
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
        



import { AnalogLocationInput } from "../../../../../org/allbinary/game/input/analog/AnalogLocationInput.js";

    
import { AnalogLocationInputFactory } from "../../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnalogControllerVisitor } from "./AnalogControllerVisitor.js";

import { AnalogLocationInputProcessor } from "./AnalogLocationInputProcessor.js";

export class SingleAnalogControllerVisitor extends AnalogControllerVisitor {
        

    private readonly playerInputId: number
public constructor (playerInputId: number){

            super();
                //var playerInputId = playerInputId
this.playerInputId= playerInputId;
    
}


    public process(allbinaryLayerManager: AllBinaryLayerManager, analogLocationInputProcessor: AnalogLocationInputProcessor){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var analogLocationInputProcessor = analogLocationInputProcessor

    var analogLocationInput: AnalogLocationInput = AnalogLocationInputFactory.getInstance()!.getInstance(playerInputId)!;
        
        
;
    
analogLocationInputProcessor!.process(allbinaryLayerManager, analogLocationInput);
    
}


}
                
            

