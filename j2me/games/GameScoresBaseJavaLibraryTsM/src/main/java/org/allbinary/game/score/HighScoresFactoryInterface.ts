
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
        



import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    

export interface HighScoresFactoryInterface {
        

    fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener)

    fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean)

    createHighScoresHelper(): HighScoresHelperBase

}
                
            

