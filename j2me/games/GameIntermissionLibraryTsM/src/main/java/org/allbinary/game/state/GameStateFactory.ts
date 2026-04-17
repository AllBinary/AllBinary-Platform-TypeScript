
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
        
import { GameState } from "./GameState.js";

export class GameStateFactory
            extends Object
         {
        

    private index: number = 0;
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(name: string): GameState{
var name = name



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GameState(name, index++);
    
}

private constructor (){

            super();
            }


}
                
            

