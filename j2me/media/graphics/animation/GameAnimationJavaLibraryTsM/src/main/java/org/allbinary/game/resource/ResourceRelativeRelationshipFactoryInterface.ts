
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
        
//not game specific package import { GameFeatureControlledInterface } from '../../../../org/allbinary/game/configuration/feature/GameFeatureControlledInterface.js';
      const GameFeatureControlledInterface = globalThis.org.allbinary.game.configuration.feature.GameFeatureControlledInterface;

      
//not game specific package import { RelativeRelationship } from '../../../../org/allbinary/graphics/RelativeRelationship.js';
      const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface ResourceRelativeRelationshipFactoryInterface extends GameFeatureControlledInterface {
        

                //@Throws(Exception.constructor)
            
    getResourceRelativeRelationshipList(resource: string): BasicArrayList

                //@Throws(Exception.constructor)
            
    addResourceRelativeRelationship(resource: string, relativeRelationship: RelativeRelationship)

}
                
            

