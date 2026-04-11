
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    

export class NullServiceReference
            extends Object
         {
        

    public getProperty(key: string): any = {}{
var key = key



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


    public getPropertyKeys(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();

                        ;
    
}


    public compareTo(o: any = {}): number{
var o = o



                            throw RuntimeException()
}


}
                
            

