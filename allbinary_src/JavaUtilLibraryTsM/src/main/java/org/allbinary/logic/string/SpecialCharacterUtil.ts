
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { HashMap } from '../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not plain js import { CommonPhoneStrings } from '../../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { StringUtil } from './StringUtil.js';
const  = globalThis.org.allbinary.logic.string.StringUtil;

                
export class SpecialCharacterUtil
            extends Object
         {
        

    public static getHashMap(): HashMap<any, any>{

    var commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put("!", stringUtil!.EMPTY_STRING);
    
hashMap!.put("@", stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonPhoneStrings!.POUND, stringUtil!.EMPTY_STRING);
    
hashMap!.put("$", stringUtil!.EMPTY_STRING);
    
hashMap!.put("%", stringUtil!.EMPTY_STRING);
    
hashMap!.put("^", stringUtil!.EMPTY_STRING);
    
hashMap!.put(CommonSeps.getInstance()!.AMPERSAND, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonPhoneStrings!.STAR, stringUtil!.EMPTY_STRING);
    
hashMap!.put("(", stringUtil!.EMPTY_STRING);
    
hashMap!.put(")", stringUtil!.EMPTY_STRING);
    
hashMap!.put("-", stringUtil!.EMPTY_STRING);
    
hashMap!.put("_", stringUtil!.EMPTY_STRING);
    
hashMap!.put("+", stringUtil!.EMPTY_STRING);
    
hashMap!.put("=", stringUtil!.EMPTY_STRING);
    
hashMap!.put("\\", stringUtil!.EMPTY_STRING);
    
hashMap!.put("|", stringUtil!.EMPTY_STRING);
    
hashMap!.put(AbPathData.getInstance()!.EXTENSION_SEP, stringUtil!.EMPTY_STRING);
    
hashMap!.put(",", stringUtil!.EMPTY_STRING);
    
hashMap!.put("<", stringUtil!.EMPTY_STRING);
    
hashMap!.put(">", stringUtil!.EMPTY_STRING);
    
hashMap!.put("?", stringUtil!.EMPTY_STRING);
    
hashMap!.put(AbPathData.getInstance()!.SEPARATOR, stringUtil!.EMPTY_STRING);
    
hashMap!.put("~", stringUtil!.EMPTY_STRING);
    
hashMap!.put("`", stringUtil!.EMPTY_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}



