
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Provider } from '../../../../../../../java/security/Provider.js';
      const Provider = globalThis.java.security.Provider;

      
//not game specific package import { Security } from '../../../../../../../java/security/Security.js';
      const Security = globalThis.java.security.Security;

      
//not game specific package import { KeySpec } from '../../../../../../../java/security/spec/KeySpec.js';
      const KeySpec = globalThis.java.security.spec.KeySpec;

      
//not game specific package import { Cipher } from '../../../../../../../javax/crypto/Cipher.js';
      const Cipher = globalThis.javax.crypto.Cipher;

      
//not game specific package import { SecretKey } from '../../../../../../../javax/crypto/SecretKey.js';
      const SecretKey = globalThis.javax.crypto.SecretKey;

      
//not game specific package import { SecretKeyFactory } from '../../../../../../../javax/crypto/SecretKeyFactory.js';
      const SecretKeyFactory = globalThis.javax.crypto.SecretKeyFactory;

      
//not game specific package import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not game specific package import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SunJCE } from './SunJCE.js';
import { KeySpecFactory } from './KeySpecFactory.js';

export class AbBasicCrypt
            extends Object
         implements CryptInterface {
        

    private cipher: Cipher;

    private secretKey: SecretKey;

    private algorithm: string;

    private key: number[];

public constructor (algorithm: string, key: string){

            super();
        
        try {
            this.algorithm= algorithm;
    
this.key= key.getBytes();
    
this.init();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e);
    
}

}


    init(){

        try {
            
    var sunJce: Provider = new com.sun.crypto.provider.SunJCE();;
    
Security.addProvider(sunJce);
    

    var keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, this.key)!;;
    

    var keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(this.algorithm)!;;
    
this.secretKey= keyFactory!.generateSecret(keySpec);
    
this.cipher= Cipher.getInstance(this.algorithm);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e);
    
}

}


    public encrypt(array: number[]): number[]{

        try {
            this.cipher.init(Cipher.ENCRYPT_MODE, secretKey);
    

    var ivArray: number[] = this.secretKey!.getEncoded()!;;
    

    var encrypted: number[] = this.cipher.doFinal(array)!;;
    

    var result: number[] = new Array(ivArray!.length +encrypted.length);;
    
PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    




                        for (
    var index: number = 0;index < ivArray!.length; index++)
        {
result[index]= ivArray[index]!;
    
}





                        for (
    var index: number = 0;index < encrypted.length; index++)
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

        try {
            this.cipher.init(Cipher.DECRYPT_MODE, secretKey);
    

    var ivArray: number[] = new Array(8);;
    




                        for (
    var index: number = 0;index < 8; index++)
        {
ivArray[index]= array[index]!;
    
}

PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    

    var result: number[] = new Array(array.length -ivArray!.length);;
    




                        for (
    var index: number = ivArray!.length
                ;index < array.length; index++)
        {
result[index -ivArray!.length]= array[index]!;
    
}


    var decrypted: number[] = this.cipher.doFinal(result)!;;
    



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



