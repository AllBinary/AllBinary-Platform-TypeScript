
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
        
import { PickedUpLayerInterface } from '../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterface.js';
      //not GWT import const PickedUpLayerInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterface;

      
import { LayerInterface } from '../../../../../org/allbinary/layer/LayerInterface.js';
      //not GWT import const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface DropLayerInterface extends LayerInterface {
        

                //@Throws(Exception.constructor)
            
    getDroppedLayer(): PickedUpLayerInterface

}



