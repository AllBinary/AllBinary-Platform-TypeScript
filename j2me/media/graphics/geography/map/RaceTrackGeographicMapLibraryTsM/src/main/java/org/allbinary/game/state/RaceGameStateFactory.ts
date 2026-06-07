
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameStateFactory } from './GameStateFactory.js';
import { GameState } from './GameState.js';

export class RaceGameStateFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): RaceGameStateFactory{

                        if(RaceGameStateFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    RaceGameStateFactory.instance= new RaceGameStateFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RaceGameStateFactory.instance as RaceGameStateFactory;
    
}


    public readonly START_GAME_STATE: GameState = GameStateFactory.getInstance()!.createGameState("START_GAME_STATE")!;

    public readonly YELLOW_LIGHT_GAME_STATE: GameState = GameStateFactory.getInstance()!.createGameState("YELLOW_LIGHT_GAME_STATE")!;

    public readonly RED_LIGHT_GAME_STATE: GameState = GameStateFactory.getInstance()!.createGameState("RED_LIGHT_GAME_STATE")!;

}
                
            

