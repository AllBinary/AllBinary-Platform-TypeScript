
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
        



import { GameState } from "../../../org/allbinary/game/state/GameState.js";

    
import { GameStateFactory } from "../../../org/allbinary/game/state/GameStateFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IntermissionFactory
            extends Object
         {
        

    private static readonly instance: IntermissionFactory = new IntermissionFactory();
        
        

    public static getInstance(): IntermissionFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly START_LEVEL_INTERMISSION_GAME_STATE: GameState = GameStateFactory.getInstance("START_LEVEL_INTERMISSION_GAME_STATE")!;
        
        

    public readonly WAIT_LEVEL_INTERMISSION_GAME_STATE: GameState = GameStateFactory.getInstance("WAIT_LEVEL_INTERMISSION_GAME_STATE")!;
        
        

    public readonly SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE: GameState = GameStateFactory.getInstance("SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE")!;
        
        

    public readonly SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE: GameState = GameStateFactory.getInstance("SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE")!;
        
        

}
                
            

