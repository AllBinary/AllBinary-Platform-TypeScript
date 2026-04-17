
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { HashSet } from "../../../../../java/util/HashSet.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { Replace } from "../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { CommonPhoneStrings } from "../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UniqueTokens
            extends Object
         {
        

    private readonly specialCharacters: Vector = new Vector();
        
        
public constructor (){

            super();
            specialCharacters!.add("!");
    
specialCharacters!.add("@");
    
specialCharacters!.add(CommonPhoneStrings.getInstance()!.POUND);
    
specialCharacters!.add("$");
    
specialCharacters!.add("%");
    
specialCharacters!.add("^");
    
specialCharacters!.add(CommonSeps.getInstance()!.AMPERSAND);
    
specialCharacters!.add(CommonPhoneStrings.getInstance()!.STAR);
    
specialCharacters!.add("(");
    
specialCharacters!.add(")");
    
specialCharacters!.add("-");
    
specialCharacters!.add("_");
    
specialCharacters!.add("+");
    
specialCharacters!.add("=");
    
specialCharacters!.add("\\");
    
specialCharacters!.add("|");
    
specialCharacters!.add(AbPathData.getInstance()!.EXTENSION_SEP);
    
specialCharacters!.add(",");
    
specialCharacters!.add("<");
    
specialCharacters!.add(">");
    
specialCharacters!.add("?");
    
specialCharacters!.add("/");
    
specialCharacters!.add("~");
    
specialCharacters!.add("`");
    
}


                //@Throws(Error::class)
            
    public getWhithoutDashesAndSkipNumberOnlyTokens(stringVector: Vector): HashSet{
var stringVector = stringVector

        try {
            
    var hashSet: HashSet = new HashSet();
        
        
;
    

    var index: number = 0;
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

        while(index < stringVector!.length)
        {

    var keywords: string = stringVector!.elementAt(index);

                         as String;
        
        
;
    

    var tokenizer: Tokenizer = new Tokenizer(commonSeps!.COMMA);
        
        
;
    

    var keywordVector: BasicArrayList = tokenizer.getTokens(keywords, new BasicArrayList())!;
        
        
;
    




                        for (
    var forIndex: number = 0;
        
        
forIndex < keywordVector!.size(); forIndex++)
        {

    var cleanString: string = keywordVector!.get(forIndex);

                         as String;
        
        
;
    
cleanString= cleanString!.trim();
    

                        if(cleanString!.indexOf('-') !=  -1)
                        cleanString= new Replace("-", commonSeps!.SPACE).
                            all(cleanString)
hashSet!.add(cleanString);
    

                        if(cleanString!.indexOf(' ') !=  -1)
                        
                                    {
                                    
    var spaceTokenizer: Tokenizer = new Tokenizer(commonSeps!.SPACE);
        
        
;
    

    var subKeywordVector: BasicArrayList = spaceTokenizer!.getTokens(cleanString, new BasicArrayList())!;
        
        
;
    




                        for (
    var spaceIndex: number = 0;
        
        
spaceIndex < subKeywordVector!.size(); spaceIndex++)
        {

    var subCleanString: string = subKeywordVector!.get(spaceIndex);

                         as String;
        
        
;
    

                        if(!isSpecialCharacter(subCleanString);

                         && !numberOnly(subCleanString);

                        )
                        
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
    

                //: 
} catch(e) 
            {



                            throw e
}

}


    numberOnly(subCleaningString: string): boolean{
    //var subCleaningString = subCleaningString

        try {
            Integer.parseInt(subCleaningString);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    isSpecialCharacter(subCleaningString: string): boolean{
var subCleaningString = subCleaningString




                        for (
    var index: number = 0;
        
        
index < specialCharacters!.length; index++)
        {

                        if(subCleaningString!.compareTo(specialCharacters!.elementAt(index);

                         as String) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

