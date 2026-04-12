
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class HighScoresHelperBase
            extends Object
        
                , HighScoresResultsListener {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    highScoresArrayP: HighScores[] = LastFetchHighScoresFactory.getInstance()!.highScoresArray;
        
        

    public setHighScoresArray(highScoresArrayP: HighScores[]){
    //var highScoresArrayP = highScoresArrayP

                        if(highScoresArrayP != 
                                    null
                                )
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(commonStrings!.START)!.appendint(highScoresArrayP!.length)!.toString(), this, "setHighScoresArray");
    

                                    }
                                
                        else {
                            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, "setHighScoresArray");
    

                        }
                            
this.highScoresArrayP= highScoresArrayP;
    
}


    public getNextHighScores(): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullHighScoresSingletonFactory.getInstance();

                        ;
    
}


    public isAnyHighScores(): boolean{



                            throw new RuntimeException()
}


    public setSelectedHighScores(selectedHighScores: HighScores){
    //var selectedHighScores = selectedHighScores
}


    public getSelectedHighScores(): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullHighScoresSingletonFactory.getInstance();

                        ;
    
}


    public getHighScoresArray(): HighScores[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresArrayP;
    
}


    public selectHighScores(){
}


}
                
            

