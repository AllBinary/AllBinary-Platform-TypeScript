
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


        
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameMode
            extends Object
         {
        

    public static NONE: GameMode = new GameMode(StringUtil.getInstance()!.NULL_STRING);

    public static SERVER: GameMode = new GameMode("Server");

    public static CLIENT: GameMode = new GameMode("Client");

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
private constructor (name: string){

            super();
        var name = name
this.setName(name);
    
}


    setName(name: string){
var name = name
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();;
    
}


}
                
            

