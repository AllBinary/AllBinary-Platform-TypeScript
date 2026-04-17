
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
        
import { GameStateFactory } from "./GameStateFactory.js";

export class GameState
            extends Object
         {
        

    public NO_GAME_STATE: GameState = GameStateFactory.getInstance("NO_GAME_STATE")!;
        
        

    public PLAYING_GAME_STATE: GameState = GameStateFactory.getInstance("PLAYING_GAME_STATE")!;
        
        

    private name: string
public constructor (name: string, state: number){

            super();
            var name = name
var state = state
this.name= name;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}
                
            

