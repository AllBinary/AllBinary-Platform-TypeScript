
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

    
import { StringUtil } from "../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Tokenizer } from "../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { CommonSeps } from "../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    

export class CamelCaseUtil
            extends Object
         {
        

    private static readonly instance: CamelCaseUtil = new CamelCaseUtil();
        
        

    public static getInstance(): CamelCaseUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

                @Throws(Exception::class)
            
    public getAsCamelCase(string: string, stringBuilder: StringMaker): string{
    //var string = string
    //var stringBuilder = stringBuilder

    
                        if(string == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

                                    }
                                

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        

delete(0, stringBuilder!.length())

    var list: BasicArrayList = new BasicArrayList();
        
        


    var tokenizer: Tokenizer = new Tokenizer(commonSeps!.UNDERSCORE);
        
        

getTokens(string, list)

    var size: number = list.size()!;
        
        


    var word: string





                        for (
    var i: number = 0;
        
        
i < size; i++)
        {
word= list.get(i) as String
word= stringValidationUtil!.isEmpty(word)
                        ?       
                                word
                                :

                            StringMaker().
                            appendchar(Character.toUpperCase(word[0]))!.append(word.substring(1)!.lowercase())!.toString();

    
append(word)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuilder!.toString();
    
}


}
                
            

