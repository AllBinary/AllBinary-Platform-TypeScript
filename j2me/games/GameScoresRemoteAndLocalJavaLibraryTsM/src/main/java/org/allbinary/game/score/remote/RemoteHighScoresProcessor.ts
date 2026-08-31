
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
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      //not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
import { GameInfoData } from '../../../../../org/allbinary/game/GameInfoData.js';
      //not GWT import const GameInfoData = globalThis.org.allbinary.game.GameInfoData;

      
import { GameConfigurationCentral } from '../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
      //not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
      //not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;

      
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
      //not GWT import const NoCrypt = globalThis.org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScoresProcessorInterface } from './RemoteHighScoresProcessorInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.score.remote.RemoteHighScoresProcessorInterface;

                import { RemoteHighScoresData } from './RemoteHighScoresData.js';
//not GWT import const  = globalThis.org.allbinary.game.score.remote.RemoteHighScoresData;

                import { XmlRpcRemoteHighScoresClient } from './XmlRpcRemoteHighScoresClient.js';
//not GWT import const  = globalThis.org.allbinary.game.score.remote.XmlRpcRemoteHighScoresClient;

                import { RemoteHighScores } from './RemoteHighScores.js';
//not GWT import const  = globalThis.org.allbinary.game.score.remote.RemoteHighScores;

                
export class RemoteHighScoresProcessor
            extends Object
         implements RemoteHighScoresProcessorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly noCrypt: NoCrypt = new NoCrypt();

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public process(remoteHighScores: RemoteHighScores, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo){
this.logUtil!.putF("Begin Remote HighScores Retrieval", this, this.commonStrings!.PROCESS);
    

    var gameInfoData: GameInfoData = GameInfoData.getInstance()!;;
    

    var hashtable: Hashtable<any, any> = abeClientInformation!.toHashtable()!;;
    
HashtableUtil.getInstance()!.putAll(gameInfo!.toHashtable(), hashtable);
    
hashtable.put(gameInfoData!.SOFTWARE_INFORMATION, remoteHighScores!.getSoftwareInformation()!.toString());
    
hashtable.put(remoteHighScores!.ASCENDING, remoteHighScores!.getAscending()!.toString());
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
hashtable.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toStringb(displayInfoSingleton!.isPortrait()));
    
hashtable.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, GameConfigurationCentral.getInstance()!.toString());
    

                        if(XmlRpcAbeClient.isOnline)
                        
                                    {
                                    
    var resultHashtable: Hashtable<any, any> = new XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresservicessl.php", "HighScoresService.process").get(hashtable, this.noCrypt) as Hashtable<any, any>;;
    
remoteHighScores!.update(resultHashtable);
    

                                    }
                                
}


}



