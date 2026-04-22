
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
        



import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TickableInterface } from "./TickableInterface.js";

export class NullTickable
            extends Object
         implements TickableInterface {
        

    private static readonly SINGLETON: NullTickable = new NullTickable();
        
        

    public static getInstance(): NullTickable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


                //@Throws(Error::class)
            
    public processTick(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
}


    private readonly NAME: string = "NulLTickable";
        
        

    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NAME;
    
}


}
                
            

