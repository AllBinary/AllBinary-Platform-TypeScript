
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            //import { NumberFormatException } from '../../../../../java/lang/NumberFormatException.js';
            const NumberFormatException = globalThis.java.lang.NumberFormatException;
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { HashSet } from '../../../../../java/util/HashSet.js';
//not GWT import const HashSet

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { Replace } from '../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
//not GWT import const Replace

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

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
        import { Tokenizer } from './Tokenizer.js';
//sameFolderImports - not GWT import - same folder const Tokenizer

export class UniqueTokens
            extends Object
         {
        

    private readonly specialCharacters: BasicArrayList = new BasicArrayListD();

public constructor (){

            super();
        this.specialCharacters!.add("!");
    
this.specialCharacters!.add("@");
    
this.specialCharacters!.add(CommonPhoneStrings.getInstance()!.POUND);
    
this.specialCharacters!.add("$");
    
this.specialCharacters!.add("%");
    
this.specialCharacters!.add("^");
    
this.specialCharacters!.add(CommonSeps.getInstance()!.AMPERSAND);
    
this.specialCharacters!.add(CommonPhoneStrings.getInstance()!.STAR);
    
this.specialCharacters!.add("(");
    
this.specialCharacters!.add(")");
    
this.specialCharacters!.add("-");
    
this.specialCharacters!.add("_");
    
this.specialCharacters!.add("+");
    
this.specialCharacters!.add("=");
    
this.specialCharacters!.add("\\");
    
this.specialCharacters!.add("|");
    
this.specialCharacters!.add(AbPathData.getInstance()!.EXTENSION_SEP);
    
this.specialCharacters!.add(",");
    
this.specialCharacters!.add("<");
    
this.specialCharacters!.add(">");
    
this.specialCharacters!.add("?");
    
this.specialCharacters!.add("/");
    
this.specialCharacters!.add("~");
    
this.specialCharacters!.add("`");
    
}


                //@Throws(Exception.constructor)
            
    public getWhithoutDashesAndSkipNumberOnlyTokens(stringVector: BasicArrayList): HashSet{

 try { 
    let hashSet: HashSet = new HashSet();;
    

    let index: number = 0;;
    

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

        while(index < stringVector!.size())
        {

    let keywords: string = stringVector!.get(index) as string;;
    

    let tokenizer: Tokenizer = new Tokenizer(commonSeps!.COMMA);;
    

    let keywordVector: BasicArrayList = tokenizer.getTokensFromString(keywords, new BasicArrayListD())!;;
    




                        for (
    let forIndex: number = 0;forIndex < keywordVector!.size(); forIndex++)
        {

    let cleanString: string = keywordVector!.get(forIndex) as string;;
    
cleanString= cleanString!.trim();
    

                        if(cleanString!.indexOf('-') !=  -1)
                        cleanString= new Replace("-", commonSeps!.SPACE).all(cleanString)
hashSet!.add(cleanString);
    

                        if(cleanString!.indexOf(' ') !=  -1)
                        
                                    {
                                    
    let spaceTokenizer: Tokenizer = new Tokenizer(commonSeps!.SPACE);;
    

    let subKeywordVector: BasicArrayList = spaceTokenizer!.getTokensFromString(cleanString, new BasicArrayListD())!;;
    




                        for (
    let spaceIndex: number = 0;spaceIndex < subKeywordVector!.size(); spaceIndex++)
        {

    let subCleanString: string = subKeywordVector!.get(spaceIndex) as string;;
    

                        if(!isSpecialCharacter(subCleanString) && !numberOnly(subCleanString))
                        
                                    {
                                    hashSet!.add(subCleanString);
    

                                    }
                                
}


                                    }
                                
}

index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashSet;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  



                            throw e;
                    

 }
   }
 
}


    numberOnly(subCleaningString: string): boolean{

 try { Integer.parseInt(subCleaningString);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 if (caught instanceof NumberFormatException) {
  const e = caught;
  



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
  else { throw caught; } }
 
}


    isSpecialCharacter(subCleaningString: string): boolean{




                        for (
    let index: number = 0;index < this.specialCharacters!.size(); index++)
        {

                        if(subCleaningString!.compareTo(this.specialCharacters!.get(index) as string) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

