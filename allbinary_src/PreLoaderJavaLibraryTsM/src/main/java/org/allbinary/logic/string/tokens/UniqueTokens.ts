
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
        



import { HashSet } from "../../../../../java/util/HashSet.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { Replace } from "../../../../../org/allbinary/logic/string/regex/replace/Replace.js";

    
import { CommonPhoneStrings } from "../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class UniqueTokens
            extends Object
         {
        

    private readonly specialCharacters: Vector = new Vector();
        
        
public constructor (){

            super();
            add("!")
add("@")
add(CommonPhoneStrings.getInstance()!.POUND)
add("$")
add("%")
add("^")
add(CommonSeps.getInstance()!.AMPERSAND)
add(CommonPhoneStrings.getInstance()!.STAR)
add("(")
add(")")
add("-")
add("_")
add("+")
add("=")
add("\\")
add("|")
add(AbPathData.getInstance()!.EXTENSION_SEP)
add(",")
add("<")
add(">")
add("?")
add("/")
add("~")
add("`")
}


                @Throws(Exception::class)
            
    public getWhithoutDashesAndSkipNumberOnlyTokens(stringVector: Vector): HashSet{
var stringVector = stringVector

        try {
            
    var hashSet: HashSet = new HashSet();
        
        


    var index: number = 0;
        
        


    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


        while(index < stringVector!.length)
        {

    var keywords: string = stringVector!.elementAt(index) as String;
        
        


    var tokenizer: Tokenizer = new Tokenizer(commonSeps!.COMMA);
        
        


    var keywordVector: BasicArrayList = tokenizer.getTokens(keywords, BasicArrayList())!;
        
        





                        for (
    var forIndex: number = 0;
        
        
forIndex < keywordVector!.size(); forIndex++)
        {

    var cleanString: string = keywordVector!.get(forIndex) as String;
        
        

cleanString= cleanString!.trim()

    
                        if(cleanString!.indexOf('-') !=  -1)
                        cleanString= Replace("-", commonSeps!.SPACE).
                            all(cleanString)
add(cleanString)

    
                        if(cleanString!.indexOf(' ') !=  -1)
                        
                                    {
                                    
    var spaceTokenizer: Tokenizer = new Tokenizer(commonSeps!.SPACE);
        
        


    var subKeywordVector: BasicArrayList = spaceTokenizer!.getTokens(cleanString, BasicArrayList())!;
        
        





                        for (
    var spaceIndex: number = 0;
        
        
spaceIndex < subKeywordVector!.size(); spaceIndex++)
        {

    var subCleanString: string = subKeywordVector!.get(spaceIndex) as String;
        
        


    
                        if(!isSpecialCharacter(subCleanString) && !numberOnly(subCleanString))
                        
                                    {
                                    add(subCleanString)

                                    }
                                
}


                                    }
                                
}

index++
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashSet;
    
} catch(e: Exception)
            {



                            throw e
}

}


    numberOnly(subCleaningString: string): boolean{
    //var subCleaningString = subCleaningString

        try {
            parseInt(subCleaningString)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: NumberFormatException)
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

    
                        if(subCleaningString!.compareTo(specialCharacters!.elementAt(index) as String) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

