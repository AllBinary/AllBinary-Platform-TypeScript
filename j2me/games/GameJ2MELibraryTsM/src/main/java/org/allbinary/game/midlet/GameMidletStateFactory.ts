
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameState } from '../../../../org/allbinary/game/state/GameState.js';
      const GameState = globalThis.org.allbinary.game.state.GameState;

      
//not game specific package import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
      const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
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
                
            

