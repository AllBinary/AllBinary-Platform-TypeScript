
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
        



import { NullUtil } from "../../../../../../org/allbinary/logic/NullUtil.js";

    
import { PreLogUtil } from "../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Tokenizer } from "../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class DatabaseEncoder
            extends Object
         {
        

    public static encode(value: number[]): string{
var value = value

        try {
            
    var array: number[] = value;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < array.length; index++)
        {
stringBuffer!.append(array[index]!.
                            toString());
    

                        if(index < array.length -1)
                        
                                    {
                                    stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}

}


    public static decode(value: string): number[]{
var value = value

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SPACE);
        
        
;
    

    var vector: BasicArrayList = tokenizer.getTokens(value, new BasicArrayList())!;
        
        
;
    

    var byteVector: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = vector.size()!;
        
        
;
    

    var byteOfData: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
byteOfData= vector.objectArray[index]! as String;
    
byteVector!.add(byteOfData.toByte());
    
}


    var decode: number[] = new Array(byteVector!.size());
        
        
;
    

    var decodeIndex: number = 0;
        
        
;
    

    var aByte: Byte
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
aByte= byteVector!.objectArray[index]! as Byte;
    
decode[decodeIndex]= aByte!.toByte();
    
decodeIndex++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return decode;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putSE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}

private constructor (){

            super();
            }


}
                
            

