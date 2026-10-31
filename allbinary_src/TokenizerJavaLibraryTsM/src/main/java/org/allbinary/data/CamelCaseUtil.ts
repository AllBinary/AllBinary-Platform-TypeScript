
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
        
            //not plain js import { Character }
            const Character = (globalThis.java?.lang?.Character ?? class {}) as typeof globalThis.java.lang.Character;
            type Character<T = any, U = any> = typeof Character extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Character;
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

import { Tokenizer } from '../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CamelCaseUtil
            extends Object
         {
        

    private static readonly instance: CamelCaseUtil = new CamelCaseUtil();

    public static getInstance(): CamelCaseUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CamelCaseUtil.instance;
    
}


    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getAsCamelCase(string: string, stringBuilder: StringMaker): string{

                        if(string == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

    let stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    
stringBuilder!.delete(0, stringBuilder!.length());
    

    let list: BasicArrayList = new BasicArrayListD();;
    

    let tokenizer: Tokenizer = new Tokenizer(this.commonSeps!.UNDERSCORE);;
    
tokenizer.getTokensFromString(string, list);
    

    let size: number = list.size()!;;
    

    let word: string;;
    




                        for (
    let i: number = 0;i < size; i++)
        {
word= list.get(i) as string;
    
word= (stringValidationUtil!.isEmpty(word) ? word : new StringMaker().appendchar(Character.toUpperCase(word[0]))!.append(word.substring(1)!.toLowerCase())!.toString());
    
stringBuilder!.append(word);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuilder!.toString();;
    
}


}

