
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
        



import { CryptInterface } from "../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { ByteUtil } from "../../../../../../../org/allbinary/logic/java/byteutil/ByteUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicCrypt
            extends Object
         implements CryptInterface {
        

    private readonly byteUtil: ByteUtil = ByteUtil.getInstance()!;
        
        

    private readonly key: number[]
public constructor (keyAsString: string){

            super();
            var keyAsString = keyAsString

    var key: number[] = NullUtil.getInstance()!.NULL_BYTE_ARRAY;
        
        
;
    

        try {
            key= keyAsString!.encodeToByteArray();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e);
    
}

this.key= key;
    
}


    public encrypt(array: number[]): number[]{
    //var array = array

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mutilate(array);

                        ;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


    public decrypt(array: number[]): number[]{
    //var array = array

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mutilate(array);

                        ;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


    public mutilate(array: number[]): number[]{
var array = array

    var value: number
;
    




                        for (
    var index: number = 0;
        
        
index < key.length; index++)
        {
value= key[index]!;
    
array= byteUtil!.xor(array, value);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return array;
    
}


}
                
            

