
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
        



import { Security } from "../../../../../../../java/security/Security.js";

    
import { KeySpec } from "../../../../../../../java/security/spec/KeySpec.js";

    
import { Cipher } from "../../../../../../../javax/crypto/Cipher.js";

    
import { SecretKey } from "../../../../../../../javax/crypto/SecretKey.js";

    
import { SecretKeyFactory } from "../../../../../../../javax/crypto/SecretKeyFactory.js";

    
import { CryptInterface } from "../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js";

    
import { NullUtil } from "../../../../../../../org/allbinary/logic/NullUtil.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { ByteUtil } from "../../../../../../../org/allbinary/logic/java/byteutil/ByteUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { BouncyCastleProvider } from "../../../../../../../org/bouncycastle/jce/provider/BouncyCastleProvider.js";

    

export class AbCrypt
            extends Object
        
                , CryptInterface {
        

    private secretComposite: BaseSecretComposite = BaseSecretComposite.NULL_SECRET_COMPOSITE;
        
        

    private algorithm: string
public constructor (algorithm: string){

            super();
                //var algorithm = algorithm
this.algorithm= algorithm
}


    public init(keyAsString: string){
    //var keyAsString = keyAsString

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


        try {
            
        try {
            Security.addProvider(BouncyCastleProvider())
} catch(e: Exception)
            {
PreLogUtil.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}


    var key: ByteArray = keyAsString!.encodeToByteArray()!;
        
        


    var keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, key)!;
        
        


    var keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(algorithm)!;
        
        


    var secretKey: SecretKey = keyFactory!.generateSecret(keySpec)!;
        
        


    var cipher: Cipher = Cipher.getInstance(algorithm)!;
        
        

this.secretComposite= SecretComposite(secretKey, cipher, key)
} catch(e: Exception)
            {
PreLogUtil.put("init Failed", this, commonStrings!.INIT, e)
}

}


    public encrypt(array: ByteArray): ByteArray{
    //var array = array

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.encrypt(array);
    
} catch(e: Exception)
            {
PreLogUtil.put("Encrypt Failed", this, "encrypt", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


    public decrypt(array: ByteArray): ByteArray{
    //var array = array

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.decrypt(array);
    
} catch(e: Exception)
            {
PreLogUtil.put("decrypt Failed", this, "decrypt", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    
}

}


}
                
            

