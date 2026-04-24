
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
        



import { RemoteInfo } from "../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerFactoryInterface } from "../../../../../org/allbinary/layer/AllBinaryLayerFactoryInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FallingPickupLayerFactory
            extends Object
         implements AllBinaryLayerFactoryInterface {
        

                //@Throws(Error::class)
            
    public getInstance(): AllBinaryLayer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new FallingPickupLayer(RemoteInfo.REMOTE_INFO);
    
}


}
                
            

