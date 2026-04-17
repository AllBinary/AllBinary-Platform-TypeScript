
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

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { HighScoresBase } from "./HighScoresBase.js";

import { HighScoresResultsListener } from "./HighScoresResultsListener.js";

import { HighScoresHelperBase } from "./HighScoresHelperBase.js";

export class NoHighScoresFactory extends HighScoresBase {
        

    private static readonly instance: NoHighScoresFactory = new NoHighScoresFactory();
        
        

    public static getInstance(): NoHighScoresFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly NO_HIGH_SCORES: HighScores[] = [];
        
        
private constructor (){

            super();
            }


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
this.logUtil!.putF("Getting No HighScores", this, "fetchHighScores");
    
highScoresResultsListener!.setHighScoresArray(NO_HIGH_SCORES);
    
}


    public createHighScoresHelper(): HighScoresHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresHelperBase();
    
}


}
                
            

