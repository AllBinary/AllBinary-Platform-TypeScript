
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Tokenizer } from '../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
      const Tokenizer = globalThis.org.allbinary.logic.string.tokens.Tokenizer;

      
//not game specific package import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DatabaseEncoder
            extends Object
         {
        

    public static encode(value: number[]): string{

        try {
            
    var array: number[] = value;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var index: number = 0;index < array.length; index++)
        {
stringBuffer!.append(Number(array[index]!).toString());
    

                        if(index < array.length -1)
                        
                                    {
                                    stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}

}


    public static decode(value: string): number[]{

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SPACE);;
    

    var vector: BasicArrayList = tokenizer.getTokensFromString(value, new BasicArrayListD())!;;
    

    var byteVector: BasicArrayList = new BasicArrayListD();;
    

    var size: number = vector.size()!;;
    

    var byteOfData: string;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
byteOfData= vector.objectArray[index]! as string;
    
byteVector!.add(Number(byteOfData));
    
}


    var decode: number[] = new Array(byteVector!.size());;
    

    var decodeIndex: number = 0;;
    

    var aByte: number;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
aByte= byteVector!.objectArray[index]! as number;
    
decode[decodeIndex]= aByte!;
    
decodeIndex++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return decode;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putSE(commonStrings!.EXCEPTION, "DatabaseEncoder", "decode", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


private constructor (){

            super();
        }


}
                
            

