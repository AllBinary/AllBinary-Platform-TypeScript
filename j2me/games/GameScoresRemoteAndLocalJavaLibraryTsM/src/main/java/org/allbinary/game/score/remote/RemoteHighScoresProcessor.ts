
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
        
import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo

import { GameInfoData } from '../../../../../org/allbinary/game/GameInfoData.js';
//not GWT import const GameInfoData

import { GameConfigurationCentral } from '../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral

import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient

import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory

import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
//not GWT import const NoCrypt

import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScoresProcessorInterface } from './RemoteHighScoresProcessorInterface.js';
//not GWT import - same folder const RemoteHighScoresProcessorInterface
import { RemoteHighScoresData } from './RemoteHighScoresData.js';
//not GWT import - same folder const RemoteHighScoresData
import { XmlRpcRemoteHighScoresClient } from './XmlRpcRemoteHighScoresClient.js';
//not GWT import - same folder const XmlRpcRemoteHighScoresClient
import { RemoteHighScores } from './RemoteHighScores.js';
//not GWT import - same folder const RemoteHighScores

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
    

    var hashtable: ABHashtable<any, any> = abeClientInformation!.toHashtable()!;;
    
HashtableUtil.getInstance()!.putAll(gameInfo!.toHashtable(), hashtable);
    
hashtable.put(gameInfoData!.SOFTWARE_INFORMATION, remoteHighScores!.getSoftwareInformation()!.toString());
    
hashtable.put(remoteHighScores!.ASCENDING, remoteHighScores!.getAscending()!.toString());
    

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    
hashtable.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toStringb(displayInfoSingleton!.isPortrait()));
    
hashtable.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, GameConfigurationCentral.getInstance()!.toString());
    

                        if(XmlRpcAbeClient.isOnline)
                        
                                    {
                                    
    var resultHashtable: ABHashtable<any, any> = new XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresservicessl.php", "HighScoresService.process").get(hashtable, this.noCrypt) as ABHashtable<any, any>;;
    
remoteHighScores!.update(resultHashtable);
    

                                    }
                                
}


}



