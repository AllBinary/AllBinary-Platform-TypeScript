
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
//not GWT import const HashMap

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

//not plain js import { MathData } 
const MathData = globalThis.org.allbinary.logic.math.MathData;
type MathData<T = any, U = any> = typeof MathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathData;

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

export class SpecialCharacterUtil
            extends Object
         {
        

    public static getHashMap(): HashMap<any, any>{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put("!", stringUtil!.EMPTY_STRING);
    
hashMap!.put("@", stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonPhoneStrings!.POUND, stringUtil!.EMPTY_STRING);
    
hashMap!.put("$", stringUtil!.EMPTY_STRING);
    
hashMap!.put("%", stringUtil!.EMPTY_STRING);
    
hashMap!.put("^", stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.AMPERSAND, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonPhoneStrings!.STAR, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.PARENTHESIS_OPEN, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.PARENTHESIS_CLOSE, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.DASH, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.UNDERSCORE, stringUtil!.EMPTY_STRING);
    
hashMap!.put(MathData.getInstance()!.PLUS, stringUtil!.EMPTY_STRING);
    
hashMap!.put(commonSeps!.EQUALS, stringUtil!.EMPTY_STRING);
    
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

