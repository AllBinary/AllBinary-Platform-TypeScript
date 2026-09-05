
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

        


import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
//not GWT import const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScores } from './RemoteHighScores.js';
//not GWT import - same folder const RemoteHighScores = globalThis.org.allbinary.game.score.remote.RemoteHighScores;

                
export interface RemoteHighScoresSubmissionProcessorInterface {
        

    process(remoteHighScores: RemoteHighScores, abeClientInformation: AbeClientInformationInterface, highScore: HighScore)

}



