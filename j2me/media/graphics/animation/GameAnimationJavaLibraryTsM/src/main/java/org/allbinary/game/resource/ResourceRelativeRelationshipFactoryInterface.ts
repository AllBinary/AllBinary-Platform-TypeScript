
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
        



import { GameFeatureControlledInterface } from "../../../../org/allbinary/game/configuration/feature/GameFeatureControlledInterface.js";

    
import { RelativeRelationship } from "../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

interface ResourceRelativeRelationshipFactoryInterface extends GameFeatureControlledInterface {
        

                //@Throws(Error::class)
            
    getResourceRelativeRelationshipList(resource: string): BasicArrayList

                //@Throws(Error::class)
            
    addResourceRelativeRelationship(resource: string, relativeRelationship: RelativeRelationship)

}
                
            

