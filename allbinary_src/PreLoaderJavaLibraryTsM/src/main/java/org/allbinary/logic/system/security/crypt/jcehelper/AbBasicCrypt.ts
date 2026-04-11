
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
        



import { Provider } from "../../../../../../../java/security/Provider.js";

    
import { Security } from "../../../../../../../java/security/Security.js";

    
import { KeySpec } from "../../../../../../../java/security/spec/KeySpec.js";

    
import { Cipher } from "../../../../../../../javax/crypto/Cipher.js";

    
import { SecretKey } from "../../../../../../../javax/crypto/SecretKey.js";

    
import { SecretKeyFactory } from "../../../../../../../javax/crypto/SecretKeyFactory.js";

    
import { CryptInterface } from "../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbBasicCrypt
            extends Object
        
                , CryptInterface {
        

    private cipher: Cipher

    private secretKey: SecretKey

    private algorithm: string

    private key: number[]
public constructor (algorithm: string, key: string){

            super();
            var algorithm = algorithm
var key = key

        try {
            this.algorithm= algorithm;
    
this.key= key.encodeToByteArray();
    
this.init();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e);
    
}

}


    init(){

        try {
            
    var sunJce: Provider = new com.sun.crypto.provider.SunJCE();
        
        
;
    
Security.addProvider(sunJce);
    

    var keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, this.key)!;
        
        
;
    

    var keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(algorithm)!;
        
        
;
    
this.secretKey= keyFactory!.generateSecret(keySpec);
    
this.cipher= Cipher.getInstance(algorithm);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e);
    
}

}


    public encrypt(array: number[]): number[]{
var array = array

        try {
            cipher.init(Cipher.ENCRYPT_MODE, secretKey);
    

    var ivArray: number[] = secretKey!.getEncoded()!;
        
        
;
    

    var encrypted: number[] = cipher.doFinal(array)!;
        
        
;
    

    var result: number[] = new Array(ivArray!.length +encrypted.length);
        
        
;
    
PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    




                        for (
    var index: number = 0;
        
        
index < ivArray!.length; index++)
        {
result[index]= ivArray[index]!;
    
}





                        for (
    var index: number = 0;
        
        
index < encrypted.length; index++)
        {
result[index +ivArray!.length]= encrypted[index]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public decrypt(array: number[]): number[]{
var array = array

        try {
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
    

    var ivArray: number[] = new Array(8);
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < 8; index++)
        {
ivArray[index]= array[index]!;
    
}

PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    

    var result: number[] = new Array(array.length -ivArray!.length);
        
        
;
    




                        for (
    var index: number = ivArray!.length
                ;
        
        
index < array.length; index++)
        {
result[index -ivArray!.length]= array[index]!;
    
}


    var decrypted: number[] = cipher.doFinal(result)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

