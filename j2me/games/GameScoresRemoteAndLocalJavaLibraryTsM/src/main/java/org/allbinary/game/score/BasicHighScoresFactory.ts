
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
        



import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { BasicHighScoresGameInfoFactory } from "../../../../org/allbinary/game/BasicHighScoresGameInfoFactory.js";

    
import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { GameType } from "../../../../org/allbinary/game/GameType.js";

    
import { GameTypeFactory } from "../../../../org/allbinary/game/GameTypeFactory.js";

    
import { RemoteHighScores } from "../../../../org/allbinary/game/score/remote/RemoteHighScores.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SoftwareInformation } from "../../../../org/allbinary/logic/system/SoftwareInformation.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { SecondaryThreadPool } from "../../../../org/allbinary/thread/SecondaryThreadPool.js";

    

export class BasicHighScoresFactory extends HighScoresBase {
        

    public static loaded(index2: number): boolean{
    //var index2 = index2

                        if(index2 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface

    private readonly softwareInformation: SoftwareInformation
public constructor (abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation){

            super();
                //var abeClientInformation = abeClientInformation
    //var softwareInformation = softwareInformation
this.abeClientInformation= abeClientInformation;
    
this.softwareInformation= softwareInformation;
    
}


    private readonly highScoresArray: HighScores[] = new Array(2);
        
        

    private readonly TOP: string = "Top";
        
        

    private readonly SCORES: string = "Scores";
        
        

    private readonly PERSONAL_HIGH_SCORES: string = "Personal Top Scores";
        
        

    private readonly WORLD_TOP_SCORES: string = "World Top Scores";
        
        

    private readonly FETCH: string = "fetchHighScores";
        
        

    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
logUtil!.put("Getting Remote/Local HighScores", this, FETCH);
    
this.fetchHighScores(gameInfo, highScoresResultsListener, true);
    
}


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
    //var preload = preload
SecondaryThreadPool.getInstance()!.runTask(object: ARunnable()
                                {
                                
    public run(){

        try {
            logUtil!.put(commonStrings!.START, this, FETCH);
    
highScoresArray[0]= RecordStoreHighScores.getInstance(abeClientInformation, gameInfo, TOP, PERSONAL_HIGH_SCORES, SCORES, ScoreComparator(true));
    

    var gameType: GameType = gameInfo!.getGameType()!;
        
        
;
    

    var gameTypeFactory: GameTypeFactory = GameTypeFactory.getInstance()!;
        
        
;
    

    var gameInfo2: GameInfo = gameInfo;
        
        
;
    

                        if(gameType == gameTypeFactory!.SINGLE_PLAYER || gameType == gameTypeFactory!.BOT)
                        
                                    {
                                    gameInfo2= BasicHighScoresGameInfoFactory.getInstance()!.SINGLE_PLAYER_SERVER;
    

                                    }
                                
                             else 
                        if(gameType == gameTypeFactory!.MULTI_PLAYER)
                        
                                    {
                                    gameInfo2= BasicHighScoresGameInfoFactory.getInstance()!.MULTI_PLAYER_SERVER;
    

                                    }
                                
highScoresArray[1]= RemoteHighScores.getInstance(abeClientInformation, softwareInformation, gameInfo2, WORLD_TOP_SCORES, SCORES, BooleanFactory.getInstance()!.FALSE, preload);
    
logUtil!.put(commonStrings!.END, this, FETCH);
    
LastFetchHighScoresFactory.getInstance()!.highScoresArray= highScoresArray;
    
highScoresResultsListener!.setHighScoresArray(highScoresArray);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, FETCH, e);
    
}

}

                                }
                            );
    
}


    public createHighScoresHelper(): HighScoresHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HighScoresHelper2();
    
}


}
                
            

