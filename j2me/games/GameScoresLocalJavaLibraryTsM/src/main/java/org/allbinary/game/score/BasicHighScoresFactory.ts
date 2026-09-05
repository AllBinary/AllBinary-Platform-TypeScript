
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { SoftwareInformation } from '../../../../org/allbinary/logic/system/SoftwareInformation.js';
//not GWT import const SoftwareInformation = globalThis.org.allbinary.logic.system.SoftwareInformation;

      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresBase } from './HighScoresBase.js';
//not GWT import - same folder const HighScoresBase = globalThis.org.allbinary.game.score.HighScoresBase;

                import { HighScores } from './HighScores.js';
//not GWT import - same folder const HighScores = globalThis.org.allbinary.game.score.HighScores;

                import { HighScoresResultsListener } from './HighScoresResultsListener.js';
//not GWT import - same folder const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

                import { RecordStoreHighScores } from './RecordStoreHighScores.js';
//not GWT import - same folder const RecordStoreHighScores = globalThis.org.allbinary.game.score.RecordStoreHighScores;

                import { ScoreComparator } from './ScoreComparator.js';
//not GWT import - same folder const ScoreComparator = globalThis.org.allbinary.game.score.ScoreComparator;

                import { HighScoresHelper2 } from './HighScoresHelper2.js';
//not GWT import - same folder const HighScoresHelper2 = globalThis.org.allbinary.game.score.HighScoresHelper2;

                import { HighScoresHelperBaseInterface } from './HighScoresHelperBaseInterface.js';
//not GWT import - same folder const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

                
export class BasicHighScoresFactory extends HighScoresBase {
        

    public static loaded(index2: number): boolean{

                        if(index2 >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface;

public constructor (abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation){

            super();
        this.abeClientInformation= abeClientInformation;
    
}


    private readonly highScoresArray: HighScores[] = new Array(1);

    private readonly TOP: string = "Top";

    private readonly SCORES: string = "Scores";

    private readonly PERSONAL_HIGH_SCORES: string = "Personal Top Scores";

    private readonly FETCH: string = "fetchHighScores";

    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){
this.logUtil!.putF("Getting Local HighScores", this, this.FETCH);
    
this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true);
    
}


    public fetchHighScoresPreload(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){

        try {
            this.highScoresArray[0]= RecordStoreHighScores.getInstance(this.abeClientInformation, gameInfo, this.TOP, this.PERSONAL_HIGH_SCORES, this.SCORES, new ScoreComparator(true));
    
highScoresResultsListener!.setHighScoresArray(this.highScoresArray);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.FETCH, e);
    
}

}


    public createHighScoresHelper(): HighScoresHelperBaseInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new HighScoresHelper2();
    
}


}



