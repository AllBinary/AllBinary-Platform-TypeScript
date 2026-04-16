
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
        




import { GameTypeFactory } from "./GameTypeFactory.js";

import { GameMode } from "./GameMode.js";

import { GameTypeFactory } from "./GameTypeFactory.js";

import { GameMode } from "./GameMode.js";

export class BasicHighScoresGameInfoFactory
            extends Object
         {
        

    private static readonly SINGLETON: BasicHighScoresGameInfoFactory = new BasicHighScoresGameInfoFactory();
        
        

    public static getInstance(): BasicHighScoresGameInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    public readonly MULTI_PLAYER_SERVER: GameInfo = new GameInfo(GameTypeFactory.getInstance()!.MULTI_PLAYER, GameMode.SERVER, 0, 0);
        
        

    public readonly SINGLE_PLAYER_SERVER: GameInfo = new GameInfo(GameTypeFactory.getInstance()!.SINGLE_PLAYER, GameMode.SERVER, 0, 0);
        
        

}
                
            

