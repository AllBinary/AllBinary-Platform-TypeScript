
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
//not game specific package import { Enumeration } from '../../../../../java/util/Enumeration.js';
      const Enumeration = globalThis.java.util.Enumeration;

      
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { GameInfo } from '../../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
      const HighScore = globalThis.org.allbinary.game.score.HighScore;

      
//not game specific package import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
      const HighScores = globalThis.org.allbinary.game.score.HighScores;

      
//not game specific package import { RemoteErrorHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/RemoteErrorHighScoresSingletonFactory.js';
      const RemoteErrorHighScoresSingletonFactory = globalThis.org.allbinary.game.score.RemoteErrorHighScoresSingletonFactory;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SoftwareInformation } from '../../../../../org/allbinary/logic/system/SoftwareInformation.js';
      const SoftwareInformation = globalThis.org.allbinary.logic.system.SoftwareInformation;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { EnumerationUtil } from '../../../../../org/allbinary/util/EnumerationUtil.js';
      const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RemoteHighScoresProcessorFactory } from './RemoteHighScoresProcessorFactory.js';
import { RemoteHighScoresSubmissionProcessorFactory } from './RemoteHighScoresSubmissionProcessorFactory.js';
import { RemoteHighScoresData } from './RemoteHighScoresData.js';

export class RemoteHighScores extends HighScores {
        

    private static readonly hashTable: Hashtable<any, any> = new Hashtable<any, any>();
//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getInstance(abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, isAscending: Boolean): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RemoteHighScores.getInstancePreload(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, true);;
    
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public static getInstancePreload(abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, isAscending: Boolean, preload: boolean): HighScores{

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            
    var highScores: HighScores = RemoteHighScores.hashTable!.get(gameInfo) as HighScores;;
    

                        if(highScores == 
                                    null
                                )
                        
                                    {
                                    highScores= new RemoteHighScores(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, preload);
    
RemoteHighScores.hashTable!.put(gameInfo, highScores);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScores;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, RemoteErrorHighScoresSingletonFactory.getInstance(), commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RemoteErrorHighScoresSingletonFactory.getInstance();;
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private readonly softwareInformation: SoftwareInformation;

    private ascending: Boolean;

    public readonly ASCENDING: string = "ASCENDING";

private constructor (abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, ascending: Boolean, preload: boolean){
            super(gameInfo!.toString(), heading, columnTwoHeading);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.abeClientInformation= abeClientInformation;
    
this.softwareInformation= softwareInformation;
    
this.setAscending(ascending);
    

                        if(preload)
                        
                                    {
                                    RemoteHighScoresProcessorFactory.getInstance()!.process(this, this.abeClientInformation, gameInfo);
    

                                    }
                                
}


    public addHighScore(newHighScore: HighScore){
RemoteHighScoresSubmissionProcessorFactory.getInstance()!.process(this, this.abeClientInformation, newHighScore);
    
}


    public update(hashtable: Hashtable<any, any>){
this.getList()!.clear();
    

    var vector: Vector = hashtable.get(RemoteHighScoresData.getInstance()!.HIGH_SCORES) as Vector;;
    

                        if(vector != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var highScoreVector: Vector = vector.elementAt(index) as Vector;;
    

    var displayName: string = highScoreVector!.elementAt(0) as string;;
    

    var score: string = highScoreVector!.elementAt(1) as string;;
    

    var longScore: number = Long.parseLong(score)!;;
    

    var highScore: HighScore = new HighScore( -1, displayName, 
                            null, longScore);;
    
this.getList()!.add(highScore);
    
}


                                    }
                                
                        else {
                            
    var NEXT_ELEMENT: string = "NextElement: ";;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var enumeration: Enumeration<any> = hashtable.elements()!;;
    

    var nextElement: any;;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
nextElement= this.enumerationUtil!.nextElement(enumeration)!;
    
this.logUtil!.putF(NEXT_ELEMENT +nextElement, this, commonStrings!.PROCESS);
    
}


                        }
                            
}


    setAscending(ascending: Boolean){
this.ascending= ascending;
    
}


    public getAscending(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ascending;
    
}


    public getSoftwareInformation(): SoftwareInformation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.softwareInformation;
    
}


}



