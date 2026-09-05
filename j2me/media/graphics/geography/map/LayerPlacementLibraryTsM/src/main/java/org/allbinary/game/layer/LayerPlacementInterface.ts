
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { ABHashtable } from '../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { LayerPlacementType } from './LayerPlacementType.js';
//not GWT import const LayerPlacementType = globalThis.org.allbinary.game.layer.LayerPlacementType;

                
export interface LayerPlacementInterface {
        

    getWidth(): number

    getHeight(): number

    getLayerType(): LayerPlacementType

                //@Throws(Exception.constructor)
            
    getInstance(): ABHashtable

}



