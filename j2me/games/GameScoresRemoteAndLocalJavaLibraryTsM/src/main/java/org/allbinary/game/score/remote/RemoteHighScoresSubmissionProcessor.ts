
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GameInfoData } from '../../../../../org/allbinary/game/GameInfoData.js';
      const GameInfoData = globalThis.org.allbinary.game.GameInfoData;

      
//not game specific package import { GameConfigurationCentral } from '../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
//not game specific package import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
      const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
      const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;

      
//not game specific package import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
      const NoCrypt = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScoresSubmissionProcessorInterface } from './RemoteHighScoresSubmissionProcessorInterface.js';
import { RemoteHighScoresData } from './RemoteHighScoresData.js';
import { XmlRpcRemoteHighScoresClient } from './XmlRpcRemoteHighScoresClient.js';
import { RemoteHighScores } from './RemoteHighScores.js';

export class RemoteHighScoresSubmissionProcessor
            extends Object
         implements RemoteHighScoresSubmissionProcessorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly noCrypt: NoCrypt = new NoCrypt();

public constructor (){

            super();
        }

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public process(remoteHighScores: RemoteHighScores, abeClientInformation: AbeClientInformationInterface, highScore: HighScore){

        try {
            this.logUtil!.putF("Begin Remote HighScores Submission", this, this.commonStrings!.PROCESS);
    

    var gameInfoData: GameInfoData = GameInfoData.getInstance()!;;
    

    var hashtable: Hashtable<any, any> = abeClientInformation!.toHashtable()!;;
    
HashtableUtil.getInstance()!.putAll(highScore!.getGameInfo()!.toHashtable(), hashtable);
    
hashtable.put(RemoteHighScoresData.getInstance()!.CUSTOMER_USER_NAME, "None");
    
hashtable.put(RemoteHighScoresData.getInstance()!.DISPLAY_NAME, highScore!.getName());
    
hashtable.put(gameInfoData!.SOFTWARE_INFORMATION, remoteHighScores!.getSoftwareInformation()!.toString());
    
hashtable.put(remoteHighScores!.ASCENDING, remoteHighScores!.getAscending()!.toString());
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
hashtable.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toStringb(displayInfoSingleton!.isPortrait()));
    
hashtable.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, GameConfigurationCentral.getInstance()!.toString());
    
hashtable.put(RemoteHighScoresData.getInstance()!.SCORE, (highScore!.getScore()).toString());
    

                        if(XmlRpcAbeClient.isOnline)
                        
                                    {
                                    
    var resultHashtable: Hashtable<any, any> = new XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresubmissionservicessl.php", "HighScoreSubmissionService.process").get(hashtable, this.noCrypt) as Hashtable<any, any>;;
    
remoteHighScores!.update(resultHashtable);
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e);
    
}

}


}



