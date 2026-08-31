
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresHelperBaseInterface } from './HighScoresHelperBaseInterface.js';
import { LastFetchHighScoresFactory } from './LastFetchHighScoresFactory.js';
import { HighScores } from './HighScores.js';
import { NullHighScoresSingletonFactory } from './NullHighScoresSingletonFactory.js';

export class HighScoresHelperBase
            extends Object
         implements HighScoresHelperBaseInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    highScoresArrayP: HighScores[] = LastFetchHighScoresFactory.getInstance()!.highScoresArray;

    public setHighScoresArray(highScoresArrayP: HighScores[]){

                        if(highScoresArrayP != 
                                    null
                                )
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(new StringMaker().append(commonStrings!.START)!.appendint(highScoresArrayP!.length)!.toString(), this, "setHighScoresArray");
    

                                    }
                                
                        else {
                            
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, "setHighScoresArray");
    

                        }
                            
this.highScoresArrayP= highScoresArrayP;
    
}


    public getNextHighScores(): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullHighScoresSingletonFactory.getInstance();;
    
}


    public isAnyHighScores(): boolean{



                            throw new RuntimeException();
                    
}


    public setSelectedHighScores(selectedHighScores: HighScores){
}


    public getSelectedHighScores(): HighScores{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullHighScoresSingletonFactory.getInstance();;
    
}


    public getHighScoresArray(): HighScores[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.highScoresArrayP;
    
}


    public selectHighScores(){
}


}



