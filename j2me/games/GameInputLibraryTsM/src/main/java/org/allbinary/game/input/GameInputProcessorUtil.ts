
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameInputProcessor } from "./GameInputProcessor.js";

import { InputFactory } from "./InputFactory.js";

export class GameInputProcessorUtil
            extends Object
         {
        

    public static init(inputProcessorArray: GameInputProcessor[]){
    //var inputProcessorArray = inputProcessorArray

    var noInputProcessor: GameInputProcessor = GameInputProcessor.getInstance()!;
        
        
;
    

    var total: number = InputFactory.getInstance()!.MAX;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < total; index++)
        {

    var inputProcessorCanBeNull: GameInputProcessor? = inputProcessorArray[index];
        
        
;
    

                        if(inputProcessorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    inputProcessorArray[index]= noInputProcessor;
    

                                    }
                                
}

}


}
                
            

