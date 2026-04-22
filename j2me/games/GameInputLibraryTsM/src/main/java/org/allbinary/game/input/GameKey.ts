
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
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Input } from "./Input.js";

export class GameKey extends Input {
        

    public static readonly NULL_GAME_KEY: GameKey = new GameKey( -1, StringUtil.getInstance()!.NULL_STRING);
        
        
 constructor (key: number, name: string){
            super(key, name);
                        //var key = key
    //var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append("GameKey ")!.append(super.toString())!.toString();

                        ;
    
}


}
                
            

