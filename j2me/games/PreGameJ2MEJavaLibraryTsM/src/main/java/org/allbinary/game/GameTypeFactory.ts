
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
        



import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameTypeFactory
            extends Object
         {
        

    private static readonly instance: GameTypeFactory = new GameTypeFactory();
        
        

    public static getInstance(): GameTypeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public NULL_GAME_TYPE_ARRAY: GameType[] = [];
        
        

    public NONE: GameType = new GameType(StringUtil.getInstance()!.NULL_STRING);
        
        

    public SINGLE_PLAYER: GameType = new GameType("Single Player");
        
        

    public MULTI_PLAYER: GameType = new GameType("Multi Player");
        
        

    public BOT: GameType = new GameType("Artificial Player");
        
        

}
                
            

