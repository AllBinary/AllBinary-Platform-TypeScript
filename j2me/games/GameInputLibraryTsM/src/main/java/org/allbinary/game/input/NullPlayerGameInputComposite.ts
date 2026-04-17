
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { NoPlayerGameInput } from "./NoPlayerGameInput.js";

import { PlayerGameInput } from "./PlayerGameInput.js";

export class NullPlayerGameInputComposite
            extends Object
         implements PlayerGameInputCompositeInterface {
        

    public static readonly NULL_PLAYER_GAME_INPUT_COMPOSITE: NullPlayerGameInputComposite = new NullPlayerGameInputComposite();
        
        

    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(Error::class)
            
    public processInput(layerManager: AllBinaryLayerManager){
var layerManager = layerManager
}


    public initInputProcessors(){
}


    public getPlayerGameInput(): PlayerGameInput{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoPlayerGameInput.getInstance();

                        ;
    
}


}
                
            

