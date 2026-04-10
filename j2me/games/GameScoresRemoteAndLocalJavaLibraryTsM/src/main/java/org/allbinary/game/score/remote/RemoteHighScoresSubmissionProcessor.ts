
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { GameInfoData } from "../../../../../org/allbinary/game/GameInfoData.js";

    
import { GameConfigurationCentral } from "../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { HighScore } from "../../../../../org/allbinary/game/score/HighScore.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { XmlRpcAbeClient } from "../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { NoCrypt } from "../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { HashtableUtil } from "../../../../../org/allbinary/util/HashtableUtil.js";

    

export class RemoteHighScoresSubmissionProcessor
            extends Object
        
                , RemoteHighScoresSubmissionProcessorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly noCrypt: NoCrypt = new NoCrypt();
        
        
public constructor (){

            super();
            }

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public process(remoteHighScores: RemoteHighScores, abeClientInformation: AbeClientInformationInterface, highScore: HighScore){
    //var remoteHighScores = remoteHighScores
    //var abeClientInformation = abeClientInformation
    //var highScore = highScore

        try {
            put("Begin Remote HighScores Submission", this, commonStrings!.PROCESS)

    var gameInfoData: GameInfoData = GameInfoData.getInstance()!;
        
        


    var hashtable: Hashtable<Any, Any> = abeClientInformation!.toHashtable()!;
        
        

putAll(highScore!.getGameInfo()!.toHashtable(), hashtable)
put(RemoteHighScoresData.getInstance()!.CUSTOMER_USER_NAME, "None")
put(RemoteHighScoresData.getInstance()!.DISPLAY_NAME, highScore!.getName())
put(gameInfoData!.SOFTWARE_INFORMATION, remoteHighScores!.getSoftwareInformation()!.toString())
put(remoteHighScores!.ASCENDING, remoteHighScores!.getAscending()!.toString())

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toString(displayInfoSingleton!.isPortrait()))
put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, GameConfigurationCentral.getInstance()!.toString())
put(RemoteHighScoresData.getInstance()!.SCORE, (highScore!.getScore()).toString())

    
                        if(XmlRpcAbeClient.isOnline)
                        
                                    {
                                    
    var resultHashtable: Hashtable<Any, Any> = XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresubmissionservicessl.php", "HighScoreSubmissionService.process").
                            get(hashtable, noCrypt) as Hashtable<Any, Any>;
        
        

update(resultHashtable)

                                    }
                                
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e)
}

}


}
                
            

