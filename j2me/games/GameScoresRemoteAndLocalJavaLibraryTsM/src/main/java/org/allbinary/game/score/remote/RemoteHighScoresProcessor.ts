
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

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { GameInfoData } from "../../../../../org/allbinary/game/GameInfoData.js";

    
import { GameConfigurationCentral } from "../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { XmlRpcAbeClient } from "../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js";

    
import { BooleanFactory } from "../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { NoCrypt } from "../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { HashtableUtil } from "../../../../../org/allbinary/util/HashtableUtil.js";

    

export class RemoteHighScoresProcessor
            extends Object
        
                , RemoteHighScoresProcessorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly noCrypt: NoCrypt = new NoCrypt();
        
        
public constructor (){

            super();
            }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public process(remoteHighScores: RemoteHighScores, abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo){
    //var remoteHighScores = remoteHighScores
    //var abeClientInformation = abeClientInformation
    //var gameInfo = gameInfo
logUtil!.put("Begin Remote HighScores Retrieval", this, commonStrings!.PROCESS)

    var gameInfoData: GameInfoData = GameInfoData.getInstance()!;
        
        


    var hashtable: Hashtable<Any, Any> = abeClientInformation!.toHashtable()!;
        
        

HashtableUtil.getInstance()!.putAll(gameInfo!.toHashtable(), hashtable)
hashtable.put(gameInfoData!.SOFTWARE_INFORMATION, remoteHighScores!.getSoftwareInformation()!.toString())
hashtable.put(remoteHighScores!.ASCENDING, remoteHighScores!.getAscending()!.toString())

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        

hashtable.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toString(displayInfoSingleton!.isPortrait()))
hashtable.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, GameConfigurationCentral.getInstance()!.toString())

                        if(XmlRpcAbeClient.isOnline)
                        
                                    {
                                    
    var resultHashtable: Hashtable<Any, Any> = XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresservicessl.php", "HighScoresService.process").
                            get(hashtable, noCrypt) as Hashtable<Any, Any>;
        
        

remoteHighScores!.update(resultHashtable)

                                    }
                                
}


}
                
            

