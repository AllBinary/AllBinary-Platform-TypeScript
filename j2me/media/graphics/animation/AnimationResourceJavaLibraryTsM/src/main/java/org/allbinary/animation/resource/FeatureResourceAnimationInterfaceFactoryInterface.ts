
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GameFeatureControlledInterface } from "../../../../org/allbinary/game/configuration/feature/GameFeatureControlledInterface.js";

    
import { RectangleResourceFactoryInterface } from "../../../../org/allbinary/game/resource/RectangleResourceFactoryInterface.js";

    

export interface FeatureResourceAnimationInterfaceFactoryInterface extends ResourceAnimationInterfaceFactoryInterface, RectangleResourceFactoryInterface, GameFeatureControlledInterface {
        

    getHashtable(): Hashtable<any, any>

}
                
            

