
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
        



import { Enumeration } from "../../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { GameInfo } from "../../../../../org/allbinary/game/GameInfo.js";

    
import { HighScore } from "../../../../../org/allbinary/game/score/HighScore.js";

    
import { HighScores } from "../../../../../org/allbinary/game/score/HighScores.js";

    
import { RemoteErrorHighScoresSingletonFactory } from "../../../../../org/allbinary/game/score/RemoteErrorHighScoresSingletonFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SoftwareInformation } from "../../../../../org/allbinary/logic/system/SoftwareInformation.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { RemoteHighScoresProcessorFactory } from "./RemoteHighScoresProcessorFactory.js";

import { RemoteHighScoresSubmissionProcessorFactory } from "./RemoteHighScoresSubmissionProcessorFactory.js";

import { RemoteHighScoresData } from "./RemoteHighScoresData.js";

export class RemoteHighScores extends HighScores {
        

    private static readonly hashTable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, isAscending: Boolean): HighScores{
    //var abeClientInformation = abeClientInformation
    //var softwareInformation = softwareInformation
    //var gameInfo = gameInfo
    //var heading = heading
    //var columnTwoHeading = columnTwoHeading
    //var isAscending = isAscending



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RemoteHighScores.getInstance(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, true);;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static getInstance(abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, isAscending: Boolean, preload: boolean): HighScores{
    //var abeClientInformation = abeClientInformation
    //var softwareInformation = softwareInformation
    //var gameInfo = gameInfo
    //var heading = heading
    //var columnTwoHeading = columnTwoHeading
    //var isAscending = isAscending
    //var preload = preload

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var highScores: HighScores = hashTable!.get(gameInfo); as HighScores;
        
        
;
    

                        if(highScores == 
                                    null
                                )
                        
                                    {
                                    highScores= new RemoteHighScores(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, preload);
    
hashTable!.put(gameInfo, highScores);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return highScores;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, RemoteErrorHighScoresSingletonFactory.getInstance(), commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RemoteErrorHighScoresSingletonFactory.getInstance();;
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface

    private readonly softwareInformation: SoftwareInformation

    private ascending: Boolean

    public readonly ASCENDING: string = "ASCENDING";
        
        
private constructor (abeClientInformation: AbeClientInformationInterface, softwareInformation: SoftwareInformation, gameInfo: GameInfo, heading: string, columnTwoHeading: string, ascending: Boolean, preload: boolean){
            super(gameInfo!.toString(), heading, columnTwoHeading);
                        //var abeClientInformation = abeClientInformation
    //var softwareInformation = softwareInformation
    //var gameInfo = gameInfo
    //var heading = heading
    //var columnTwoHeading = columnTwoHeading
    //var ascending = ascending
    //var preload = preload


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
    //var newHighScore = newHighScore
RemoteHighScoresSubmissionProcessorFactory.getInstance()!.process(this, this.abeClientInformation, newHighScore);
    
}


    public update(hashtable: Hashtable<any, any>){
    //var hashtable = hashtable
this.getList()!.clear();
    

    var vector: Vector = hashtable.get(RemoteHighScoresData.getInstance()!.HIGH_SCORES as Object); as Vector;
        
        
;
    

                        if(vector != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var highScoreVector: Vector = vector.elementAt(index); as Vector;
        
        
;
    

    var displayName: string = highScoreVector!.elementAt(0); as String;
        
        
;
    

    var score: string = highScoreVector!.elementAt(1); as String;
        
        
;
    

    var longScore: number = Long.parseLong(score)!;
        
        
;
    

    var highScore: HighScore = new HighScore( -1, displayName, 
                            null, longScore);
        
        
;
    
this.getList()!.add(highScore);
    
}


                                    }
                                
                        else {
                            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var enumeration: Enumeration<any?> = hashtable.elements()!;
        
        
;
    

    var nextElement: any
;
    

        while(enumeration.hasMoreElements())
        {
nextElement= enumeration.nextElement()!;
    
this.logUtil!.putF("NextElement: " +nextElement, this, commonStrings!.PROCESS);
    
}


                        }
                            
}


    setAscending(ascending: Boolean){
    //var ascending = ascending
this.ascending= ascending;
    
}


    public getAscending(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ascending;
    
}


    public getSoftwareInformation(): SoftwareInformation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return softwareInformation;
    
}


}
                
            

