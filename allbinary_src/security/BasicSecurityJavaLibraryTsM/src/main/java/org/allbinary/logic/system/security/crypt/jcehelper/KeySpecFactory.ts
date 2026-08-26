
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
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
//not game specific package import { KeySpec } from '../../../../../../../java/security/spec/KeySpec.js';
      const KeySpec = globalThis.java.security.spec.KeySpec;

      
//not game specific package import { DESKeySpec } from '../../../../../../../javax/crypto/spec/DESKeySpec.js';
      const DESKeySpec = globalThis.javax.crypto.spec.DESKeySpec;

      
//not game specific package import { DESedeKeySpec } from '../../../../../../../javax/crypto/spec/DESedeKeySpec.js';
      const DESedeKeySpec = globalThis.javax.crypto.spec.DESedeKeySpec;

      
//not game specific package import { TsUtil } from '../../../../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class KeySpecFactory
            extends Object
         {
        

    private static readonly instance: KeySpecFactory = new KeySpecFactory();

    public static getInstance(): KeySpecFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return KeySpecFactory.instance;
    
}


    public readonly DES: string = "DES";

    public readonly DESEDE: string = "DESede";

    public readonly BLOWFISH: string = "Blowfish";

private constructor (){

            super();
        }


    public getInstance(algorithm: string, keyData: number[]): KeySpec{

        try {
            
    var tsUtil: TsUtil = TsUtil.getInstance()!;;
    

                        if(tsUtil!.compareTo(algorithm, this.DES) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new DESKeySpec(keyData);
    

                                    }
                                
                             else 
                        if(tsUtil!.compareTo(algorithm, this.DESEDE) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new DESedeKeySpec(keyData);
    

                                    }
                                
                        else {
                            


                            throw new RuntimeException();
                    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                            throw new RuntimeException();
                    
}

}


}
                
            

