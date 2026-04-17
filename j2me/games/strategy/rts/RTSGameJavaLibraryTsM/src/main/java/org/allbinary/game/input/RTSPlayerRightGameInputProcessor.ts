
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { GameKeyEvent } from "../../../../org/allbinary/game/input/event/GameKeyEvent.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RTSPlayerGameInputProcessor } from "./RTSPlayerGameInputProcessor.js";

import { RTSPlayerGameInput } from "./RTSPlayerGameInput.js";

export class RTSPlayerRightGameInputProcessor extends RTSPlayerGameInputProcessor {
        
public constructor (rtsPlayerGameInput: RTSPlayerGameInput)                        

                            : super(rtsPlayerGameInput){

            super();
            var rtsPlayerGameInput = rtsPlayerGameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
var allbinaryLayerManager = allbinaryLayerManager
var gameKeyEvent = gameKeyEvent
rtsPlayerGameInput!.right();
    
}


}
                
            

