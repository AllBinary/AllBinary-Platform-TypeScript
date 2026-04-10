
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
        



import { KeySpec } from "../../../../../../../java/security/spec/KeySpec.js";

    
import { DESKeySpec } from "../../../../../../../javax/crypto/spec/DESKeySpec.js";

    
import { DESedeKeySpec } from "../../../../../../../javax/crypto/spec/DESedeKeySpec.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class KeySpecFactory
            extends Object
         {
        

    private static readonly instance: KeySpecFactory = new KeySpecFactory();
        
        

    public static getInstance(): KeySpecFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly DES: string = "DES";
        
        

    public readonly DESEDE: string = "DESede";
        
        

    public readonly BLOWFISH: string = "Blowfish";
        
        
private constructor (){

            super();
            }


    public getInstance(algorithm: string, keyData: ByteArray): KeySpec{
var algorithm = algorithm
var keyData = keyData

        try {
            
    
                        if(algorithm.compareTo(this.DES) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DESKeySpec(keyData);
    

                                    }
                                
                             else 
    
                        if(algorithm.compareTo(this.DESEDE) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DESedeKeySpec(keyData);
    

                                    }
                                
                        else {
                            


                            throw RuntimeException()

                        }
                            
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e)



                            throw RuntimeException()
}

}


}
                
            

