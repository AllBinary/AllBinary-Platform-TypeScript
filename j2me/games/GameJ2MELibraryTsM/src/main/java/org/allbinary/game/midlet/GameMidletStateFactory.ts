
        /* Generated Code Do Not Modify */
        



import { GameState } from "../../../../org/allbinary/game/state/GameState.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameMidletStateFactory
            extends Object
         {
        

    private static readonly INSTANCE: GameMidletStateFactory = new GameMidletStateFactory();
        
        

    public static getInstance(): GameMidletStateFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return INSTANCE;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private currentGameState: GameState = GameState.NO_GAME_STATE;
        
        
private constructor (){

            super();
            }


    public getCurrentGameState(): GameState{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentGameState;
    
}


    public setCurrentGameState(currentGameState: GameState){
var currentGameState = currentGameState
this.logUtil!.putF(new StringMaker().
                            append("Current GameState: ")!.append(StringUtil.getInstance()!.toString(currentGameState))!.toString(), this, "setCurrentGameState");
    
this.currentGameState= currentGameState;
    
}


}
                
            

