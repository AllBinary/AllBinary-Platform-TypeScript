
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
        
import { KeyValuePersistance } from "./KeyValuePersistance.js";

import { GamePersistanceStrings } from "./GamePersistanceStrings.js";

export class GameConfigurationPersistanceSingleton extends KeyValuePersistance {
        

    private GAME_PERSISTANCE: GameConfigurationPersistanceSingleton = new GameConfigurationPersistanceSingleton();
        
        

    public static getInstance(): GameConfigurationPersistanceSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GAME_PERSISTANCE;
    
}

private constructor ()                        

                            : super(GamePersistanceStrings.getInstance()!.SAVED_GAME_CONFIGURATION_RECORD_ID){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


}
                
            

