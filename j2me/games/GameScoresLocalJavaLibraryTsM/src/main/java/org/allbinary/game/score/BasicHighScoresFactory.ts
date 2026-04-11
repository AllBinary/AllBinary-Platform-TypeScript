
        /* Generated Code Do Not Modify */
        



import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SoftwareInformation } from "../../../../org/allbinary/logic/system/SoftwareInformation.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

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
public constructor (abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation){

            super();
                //var abeClientInformation = abeClientInformation
    //var softwareInformation = softwareInformation
this.abeClientInformation= abeClientInformation;
    
}


    private readonly highScoresArray: HighScores[] = new Array(1);
        
        

    private readonly TOP: string = "Top";
        
        

    private readonly SCORES: string = "Scores";
        
        

    private readonly PERSONAL_HIGH_SCORES: string = "Personal Top Scores";
        
        

    private readonly FETCH: string = "fetchHighScores";
        
        

    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
logUtil!.put("Getting Local HighScores", this, FETCH);
    
this.fetchHighScores(gameInfo, highScoresResultsListener, true);
    
}


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
    //var preload = preload

        try {
            highScoresArray[0]= RecordStoreHighScores.getInstance(abeClientInformation, gameInfo, TOP, PERSONAL_HIGH_SCORES, SCORES, new ScoreComparator(true));
    
highScoresResultsListener!.setHighScoresArray(highScoresArray);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, FETCH, e);
    
}

}


    public createHighScoresHelper(): HighScoresHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresHelper2();
    
}


}
                
            

