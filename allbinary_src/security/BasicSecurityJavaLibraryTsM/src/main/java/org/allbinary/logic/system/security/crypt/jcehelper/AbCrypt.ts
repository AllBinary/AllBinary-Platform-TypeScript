
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

      
//not game specific package import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not game specific package import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BouncyCastleProvider } from '../../../../../../../org/bouncycastle/jce/provider/BouncyCastleProvider.js';
      const BouncyCastleProvider = globalThis.org.bouncycastle.jce.provider.BouncyCastleProvider;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseSecretComposite } from './BaseSecretComposite.js';
import { KeySpecFactory } from './KeySpecFactory.js';
import { SecretComposite } from './SecretComposite.js';

export class AbCrypt
            extends Object
         implements CryptInterface {
        

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private secretComposite: BaseSecretComposite = BaseSecretComposite.NULL_SECRET_COMPOSITE;

    private algorithm: string;

public constructor (algorithm: string){

            super();
        this.algorithm= algorithm;
    
}


    public init(keyAsString: string){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            
        try {
            Security.addProvider(new BouncyCastleProvider());
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}


    var key: number[] = this.tsUtil!.getByteArray(keyAsString)!;;
    

    var keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, key)!;;
    

    var keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(this.algorithm)!;;
    

    var secretKey: SecretKey = keyFactory!.generateSecret(keySpec)!;;
    

    var cipher: Cipher = Cipher.getInstance(this.algorithm)!;;
    
this.secretComposite= new SecretComposite(secretKey, cipher, key);
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e);
    
}

}


    public encrypt(array: number[]): number[]{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.encrypt(array);;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


    public decrypt(array: number[]): number[]{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.decrypt(array);;
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


}
                
            

