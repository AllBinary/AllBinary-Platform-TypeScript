
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

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HighScoresFactoryInterface } from "./HighScoresFactoryInterface.js";

import { HighScoresResultsListener } from "./HighScoresResultsListener.js";

import { HighScoresHelperBase } from "./HighScoresHelperBase.js";

export class HighScoresBase
            extends Object
         implements HighScoresFactoryInterface {
        

    commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
protected constructor (){

            super();
        }


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener



                            throw new RuntimeException()
}


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
    //var preload = preload



                            throw new RuntimeException()
}


    public createHighScoresHelper(): HighScoresHelperBase{



                            throw new RuntimeException()
}


}
                
            

