
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresFactoryInterface } from './HighScoresFactoryInterface.js';
//not GWT import - same folder const HighScoresFactoryInterface = globalThis.org.allbinary.game.score.HighScoresFactoryInterface;

                import { HighScoresResultsListener } from './HighScoresResultsListener.js';
//not GWT import - same folder const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;

                import { HighScoresHelperBaseInterface } from './HighScoresHelperBaseInterface.js';
//not GWT import - same folder const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;

                
export class HighScoresBase
            extends Object
         implements HighScoresFactoryInterface {
        

    commonStrings: CommonStrings = CommonStrings.getInstance()!;

protected constructor (){

            super();
        }


    public fetchHighScores(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener){



                            throw new RuntimeException();
                    
}


    public fetchHighScoresPreload(gameInfo: GameInfo, highScoresResultsListener: HighScoresResultsListener, preload: boolean){



                            throw new RuntimeException();
                    
}


    public createHighScoresHelper(): HighScoresHelperBaseInterface{



                            throw new RuntimeException();
                    
}


}



