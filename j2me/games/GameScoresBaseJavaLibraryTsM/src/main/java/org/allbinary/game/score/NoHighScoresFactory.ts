
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

        


import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresBase } from './HighScoresBase.js';
//not GWT import - same folder const HighScoresBase = globalThis.org.allbinary.game.score.HighScoresBase;

                import { HighScores } from './HighScores.js';
//not GWT import - same folder const HighScores = globalThis.org.allbinary.game.score.HighScores;

                import { HighScoresResultsListener } from './HighScoresResultsListener.js';
//not GWT import - same folder const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

                import { HighScoresHelperBase } from './HighScoresHelperBase.js';
//not GWT import - same folder const HighScoresHelperBase = globalThis.org.allbinary.game.score.HighScoresHelperBase;

                import { HighScoresHelperBaseInterface } from './HighScoresHelperBaseInterface.js';
//not GWT import - same folder const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

                
export class NoHighScoresFactory extends HighScoresBase {
        

    private static readonly instance: NoHighScoresFactory = new NoHighScoresFactory();

    public static getInstance(): NoHighScoresFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NoHighScoresFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly NO_HIGH_SCORES: HighScores[] = [];

private constructor (){

            super();
        }


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
this.logUtil!.putF("Getting No HighScores", this, "fetchHighScores");
    
highScoresResultsListener!.setHighScoresArray(this.NO_HIGH_SCORES);
    
}


    public createHighScoresHelper(): HighScoresHelperBaseInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresHelperBase();
    
}


}



