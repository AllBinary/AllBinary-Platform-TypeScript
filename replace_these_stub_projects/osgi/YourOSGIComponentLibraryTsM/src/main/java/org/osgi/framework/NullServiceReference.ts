
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
        



            import { Object } from '../../../java/lang/Object.js';
        
            import { RuntimeException } from '../../../java/lang/RuntimeException.js';
        
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class NullServiceReference
            extends Object
         {
        

    public getProperty(key: string): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


    public getPropertyKeys(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.getArrayInstance();;
    
}


    public compareTo(o: any = {}): number{



                            throw new RuntimeException();
                    
}


}



