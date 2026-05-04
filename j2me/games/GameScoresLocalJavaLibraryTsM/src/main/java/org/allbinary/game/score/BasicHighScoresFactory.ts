
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';

    
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { SoftwareInformation } from '../../../../org/allbinary/logic/system/SoftwareInformation.js';

    
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresBase } from './HighScoresBase.js';
import { HighScores } from './HighScores.js';
import { HighScoresResultsListener } from './HighScoresResultsListener.js';
import { RecordStoreHighScores } from './RecordStoreHighScores.js';
import { ScoreComparator } from './ScoreComparator.js';
import { HighScoresHelper2 } from './HighScoresHelper2.js';
import { HighScoresHelperBase } from './HighScoresHelperBase.js';

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
this.logUtil!.putF("Getting Local HighScores", this, FETCH);
    
this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true);
    
}


    public fetchHighScoresPreload(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){
    //var gameInfo = gameInfo
    //var highScoresResultsListener = highScoresResultsListener
    //var preload = preload

        try {
            this.highScoresArray[0]= RecordStoreHighScores.getInstance(this.abeClientInformation, gameInfo, this.TOP, this.PERSONAL_HIGH_SCORES, this.SCORES, new ScoreComparator(true));
    
highScoresResultsListener!.setHighScoresArray(this.highScoresArray);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, FETCH, e);
    
}

}


    public createHighScoresHelper(): HighScoresHelperBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresHelper2();
    
}


}
                
            

