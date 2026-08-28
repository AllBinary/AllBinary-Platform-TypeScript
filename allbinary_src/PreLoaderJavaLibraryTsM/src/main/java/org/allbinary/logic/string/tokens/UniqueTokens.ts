
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
        
            import { NumberFormatException } from '../../../../../java/lang/NumberFormatException.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not game specific package import { HashSet } from '../../../../../java/util/HashSet.js';
      const HashSet = globalThis.java.util.HashSet;

      
//not game specific package import { Vector } from '../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { Replace } from '../../../../../org/allbinary/logic/string/regex/replace/Replace.js';
      const Replace = globalThis.org.allbinary.logic.string.regex.replace.Replace;

      
//not game specific package import { CommonPhoneStrings } from '../../../../../org/allbinary/string/CommonPhoneStrings.js';
      const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Tokenizer } from './Tokenizer.js';

export class UniqueTokens
            extends Object
         {
        

    private readonly specialCharacters: Vector = new Vector();

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
            
    public getWhithoutDashesAndSkipNumberOnlyTokens(stringVector: Vector): HashSet{

        try {
            
    var hashSet: HashSet = new HashSet();;
    

    var index: number = 0;;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

        while(index < stringVector!.length)
        {

    var keywords: string = stringVector!.elementAt(index) as string;;
    

    var tokenizer: Tokenizer = new Tokenizer(commonSeps!.COMMA);;
    

    var keywordVector: BasicArrayList = tokenizer.getTokensFromString(keywords, new BasicArrayListD())!;;
    




                        for (
    var forIndex: number = 0;forIndex < keywordVector!.size(); forIndex++)
        {

    var cleanString: string = keywordVector!.get(forIndex) as string;;
    
cleanString= cleanString!.trim();
    

                        if(cleanString!.indexOf('-') !=  -1)
                        cleanString= new Replace("-", commonSeps!.SPACE).all(cleanString)
hashSet!.add(cleanString);
    

                        if(cleanString!.indexOf(' ') !=  -1)
                        
                                    {
                                    
    var spaceTokenizer: Tokenizer = new Tokenizer(commonSeps!.SPACE);;
    

    var subKeywordVector: BasicArrayList = spaceTokenizer!.getTokensFromString(cleanString, new BasicArrayListD())!;;
    




                        for (
    var spaceIndex: number = 0;spaceIndex < subKeywordVector!.size(); spaceIndex++)
        {

    var subCleanString: string = subKeywordVector!.get(spaceIndex) as string;;
    

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
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


    numberOnly(subCleaningString: string): boolean{

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




                        for (
    var index: number = 0;index < this.specialCharacters!.length; index++)
        {

                        if(subCleaningString!.compareTo(this.specialCharacters!.elementAt(index) as string) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



