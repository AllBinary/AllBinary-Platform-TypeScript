
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameType } from './GameType.js';
//not GWT import - same folder const GameType = globalThis.org.allbinary.game.GameType;

                
export class GameTypeFactory
            extends Object
         {
        

    private static readonly instance: GameTypeFactory = new GameTypeFactory();

    public static getInstance(): GameTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameTypeFactory.instance;
    
}


    public NULL_GAME_TYPE_ARRAY: GameType[] = [];

    public NONE: GameType = new GameType(StringUtil.getInstance()!.NULL_STRING);

    public SINGLE_PLAYER: GameType = new GameType("Single Player");

    public MULTI_PLAYER: GameType = new GameType("Multi Player");

    public BOT: GameType = new GameType("Artificial Player");

}



