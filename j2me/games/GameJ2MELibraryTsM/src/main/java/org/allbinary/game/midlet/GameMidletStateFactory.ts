
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
      //not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;

      
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
      //not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameMidletStateFactory
            extends Object
         {
        

    private static readonly INSTANCE: GameMidletStateFactory = new GameMidletStateFactory();

    public static getInstance(): GameMidletStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameMidletStateFactory.INSTANCE;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private currentGameState: GameState = GameStateFactory.getInstance()!.NO_GAME_STATE;

private constructor (){

            super();
        }


    public getCurrentGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentGameState;
    
}


    public setCurrentGameState(currentGameState: GameState){
this.logUtil!.putF(new StringMaker().append("Current GameState: ")!.append(StringUtil.getInstance()!.toString(currentGameState))!.toString(), this, "setCurrentGameState");
    
this.currentGameState= currentGameState;
    
}


}



