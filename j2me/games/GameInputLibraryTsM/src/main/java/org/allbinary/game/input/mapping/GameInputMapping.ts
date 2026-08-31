
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInputMapping
            extends Object
         {
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;

public constructor (name: string, gameKey: GameKey){

            super();
        this.setName(name);
    
this.setGameKey(gameKey);
    
}


    setGameKey(gameKey: GameKey){
this.gameKey= gameKey;
    
}


    public getGameKey(): GameKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameKey;
    
}


    setName(name: string){
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}



