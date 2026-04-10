
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
        




export class GameInfoCopyFactory
            extends Object
         {
        

    public static getInstance(gameInfo: GameInfo, maxLevel: number): GameInfo{
var gameInfo = gameInfo
var maxLevel = maxLevel



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInfo(gameInfo!.getGameType(), gameInfo!.getGameMode(), gameInfo!.getPlayerType(), maxLevel, gameInfo!.getCurrentLevel());
    
}


    public static getInstance(gameInfo: GameInfo): GameInfo{
var gameInfo = gameInfo



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameInfo(gameInfo!.getGameType(), gameInfo!.getGameMode(), gameInfo!.getPlayerType(), gameInfo!.getHighestLevel(), gameInfo!.getCurrentLevel());
    
}


}
                
            

