
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
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      const GameInfo = globalThis.org.allbinary.game.GameInfo;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HighScoresFactoryInterface } from './HighScoresFactoryInterface.js';
import { HighScoresResultsListener } from './HighScoresResultsListener.js';
import { HighScoresHelperBaseInterface } from './HighScoresHelperBaseInterface.js';

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
                
            

