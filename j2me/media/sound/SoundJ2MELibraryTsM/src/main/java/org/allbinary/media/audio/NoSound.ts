
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Sound } from "./Sound.js";

import { NoPlayer } from "./NoPlayer.js";

export class NoSound extends Sound {
        

    public static getInstance(): NoSound{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly instance: NoSound = new NoSound();
        
        
private constructor (){
            super(StringUtil.getInstance()!.EMPTY_STRING);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setPlayerP(NoPlayer.NO_PLAYER);
    
}


}
                
            

