
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
        



import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInputMapping
            extends Object
         {
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private gameKey: GameKey = GameKey.NULL_GAME_KEY;
        
        
public constructor (name: string, gameKey: GameKey){

            super();
        var name = name
var gameKey = gameKey
this.setName(name);
    
this.setGameKey(gameKey);
    
}


    setGameKey(gameKey: GameKey){
var gameKey = gameKey
this.gameKey= gameKey;
    
}


    public getGameKey(): GameKey{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return gameKey;
    
}


    setName(name: string){
var name = name
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

