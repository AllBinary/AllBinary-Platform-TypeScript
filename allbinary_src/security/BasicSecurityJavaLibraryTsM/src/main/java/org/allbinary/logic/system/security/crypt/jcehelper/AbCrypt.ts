
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
        
import { Security } from '../../../../../../../java/security/Security.js';
//not GWT import const Security

import { KeySpec } from '../../../../../../../java/security/spec/KeySpec.js';
//not GWT import const KeySpec

import { Cipher } from '../../../../../../../javax/crypto/Cipher.js';
//not GWT import const Cipher

import { SecretKey } from '../../../../../../../javax/crypto/SecretKey.js';
//not GWT import const SecretKey

import { SecretKeyFactory } from '../../../../../../../javax/crypto/SecretKeyFactory.js';
//not GWT import const SecretKeyFactory

import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
//not GWT import const CryptInterface

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { BouncyCastleProvider } from '../../../../../../../org/bouncycastle/jce/provider/BouncyCastleProvider.js';
//not GWT import const BouncyCastleProvider

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseSecretComposite } from './BaseSecretComposite.js';
//sameFolderImports - not GWT import - same folder const BaseSecretComposite
import { KeySpecFactory } from './KeySpecFactory.js';
//sameFolderImports - not GWT import - same folder const KeySpecFactory
import { SecretComposite } from './SecretComposite.js';
//sameFolderImports - not GWT import - same folder const SecretComposite

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

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
 try { Security.addProvider(new BouncyCastleProvider());
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    

 }
   }
 

    let key: number[] = this.tsUtil!.getByteArray(keyAsString)!;;
    

    let keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, key)!;;
    

    let keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(this.algorithm)!;;
    

    let secretKey: SecretKey = keyFactory!.generateSecret(keySpec)!;;
    

    let cipher: Cipher = Cipher.getInstance(this.algorithm)!;;
    
this.secretComposite= new SecretComposite(secretKey, cipher, key);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e);
    

 }
   }
 
}


    public encrypt(array: number[]): number[]{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.encrypt(array);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    

 }
   }
 
}


    public decrypt(array: number[]): number[]{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.secretComposite!.decrypt(array);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_BYTE_ARRAY;
    

 }
   }
 
}


}

