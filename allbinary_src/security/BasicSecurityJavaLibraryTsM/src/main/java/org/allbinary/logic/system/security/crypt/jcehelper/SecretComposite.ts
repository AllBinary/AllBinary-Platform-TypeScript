
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { Cipher } from "../../../../../../../javax/crypto/Cipher.js";

    
import { SecretKey } from "../../../../../../../javax/crypto/SecretKey.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { ByteUtil } from "../../../../../../../org/allbinary/logic/java/byteutil/ByteUtil.js";

    

export class SecretComposite extends BaseSecretComposite {
        

    private readonly byteUtil: ByteUtil = ByteUtil.getInstance()!;
        
        

    private readonly cipher: Cipher

    private readonly secretKey: SecretKey

    private key: number[]
public constructor (secretKey: SecretKey, cipher: Cipher, key: number[]){

            super();
                //var secretKey = secretKey
    //var cipher = cipher
    //var key = key
this.secretKey= secretKey;
    
this.cipher= cipher;
    
this.key= key;
    
}


                //@Throws(Error::class)
            
    public encrypt(array: number[]): number[]{
var array = array
array= this.mutilate(array);
    
cipher.init(Cipher.ENCRYPT_MODE, secretKey);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cipher.doFinal(array);

                        ;
    
}


                //@Throws(Error::class)
            
    public decrypt(array: number[]): number[]{
var array = array
cipher.init(Cipher.DECRYPT_MODE, secretKey);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mutilate(cipher.doFinal(array));

                        ;
    
}


    mutilate(array: number[]): number[]{
var array = array




                        for (
    var index: number = 0;
        
        
index < key.length; index++)
        {

    var value: number = key[index]!;
        
        
;
    

                        if(value < 8 && value > 0)
                        
                                    {
                                    array= byteUtil!.xorByte(array, value.toInt());
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return array;
    
}


}
                
            

