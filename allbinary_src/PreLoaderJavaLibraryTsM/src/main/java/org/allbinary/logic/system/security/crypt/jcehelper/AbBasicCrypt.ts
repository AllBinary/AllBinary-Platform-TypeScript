
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
        
import { Provider } from '../../../../../../../java/security/Provider.js';
//not GWT import const Provider

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

import { CryptInterface } from '../../../../../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
//not GWT import const CryptInterface

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SunJCE } from './SunJCE.js';
//sameFolderImports - not GWT import - same folder const SunJCE
import { KeySpecFactory } from './KeySpecFactory.js';
//sameFolderImports - not GWT import - same folder const KeySpecFactory

export class AbBasicCrypt
            extends Object
         implements CryptInterface {
        

    private cipher: Cipher;

    private secretKey: SecretKey;

    private algorithm: string;

    private key: number[];

public constructor (algorithm: string, key: string){

            super();
        
 try { this.algorithm= algorithm;
    
this.key= Array.from(new TextEncoder().encode(key), byte => (byte << 24) >> 24);
    
this.init();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, "AbCrypt(alg,key)", e);
    

 }
   }
 
}


    init(){

 try { 
    let sunJce: Provider = new com.sun.crypto.provider.SunJCE();;
    
Security.addProvider(sunJce);
    

    let keySpec: KeySpec = KeySpecFactory.getInstance()!.getInstance(this.algorithm, this.key)!;;
    

    let keyFactory: SecretKeyFactory = SecretKeyFactory.getInstance(this.algorithm)!;;
    
this.secretKey= keyFactory!.generateSecret(keySpec);
    
this.cipher= Cipher.getInstance(this.algorithm);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE("init Failed", this, commonStrings!.INIT, e);
    

 }
   }
 
}


    public encrypt(array: number[]): number[]{

 try { this.cipher.init(Cipher.ENCRYPT_MODE, secretKey);
    

    let ivArray: number[] = this.secretKey!.getEncoded()!;;
    

    let encrypted: number[] = this.cipher.doFinal(array)!;;
    

    let result: number[] = new Array(ivArray!.length +encrypted.length);;
    
PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    




                        for (
    let index: number = 0;index < ivArray!.length; index++)
        {
result[index]= ivArray[index]!;
    
}





                        for (
    let index: number = 0;index < encrypted.length; index++)
        {
result[index +ivArray!.length]= encrypted[index]!;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("Encrypt Failed", this, "encrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public decrypt(array: number[]): number[]{

 try { this.cipher.init(Cipher.DECRYPT_MODE, secretKey);
    

    let ivArray: number[] = new Array(8);;
    




                        for (
    let index: number = 0;index < 8; index++)
        {
ivArray[index]= array[index]!;
    
}

PreLogUtil.put("ivArray Length: " +ivArray!.length, this, "encrypt");
    

    let result: number[] = new Array(array.length -ivArray!.length);;
    




                        for (
    let index: number = ivArray!.length
                ;index < array.length; index++)
        {
result[index -ivArray!.length]= array[index]!;
    
}


    let decrypted: number[] = this.cipher.doFinal(result)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("decrypt Failed", this, "decrypt", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

