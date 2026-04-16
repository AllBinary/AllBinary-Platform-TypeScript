
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    

import { Runtime } from "./Runtime.js";

import { Runtime } from "./Runtime.js";

/*actual*/ export class Memory
            extends Object
         {
        

    /*actual*/ public static getInfo(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Memory: Free: ");
    
stringBuffer!.append(Runtime.getRuntime()!.freeMemory());
    
stringBuffer!.append(" Total: ");
    
stringBuffer!.append(Runtime.getRuntime()!.totalMemory());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

