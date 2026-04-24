
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
        



import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { StreamUtil } from "../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { AbCrypt } from "../../../../../org/allbinary/logic/system/security/crypt/jcehelper/AbCrypt.js";

    
import { KeySpecFactory } from "../../../../../org/allbinary/logic/system/security/crypt/jcehelper/KeySpecFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbCryptUtil
            extends Object
         {
        

    private static readonly instance: AbCryptUtil = new AbCryptUtil();
        
        

    public static getInstance(): AbCryptUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly streamUtil: StreamUtil = StreamUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public decrypt(inputStream: InputStream, key: string): number[]{
    //var inputStream = inputStream
    //var key = key

    var outputStream: ByteArrayOutputStream = 
                null
            ;
        
        
;
    

        try {
            outputStream= this.streamUtil!.get(inputStream, new ByteArrayOutputStream(), new Array(16384)); as ByteArrayOutputStream;
    

    var abCrypt: AbCrypt = new AbCrypt(KeySpecFactory.getInstance()!.DESEDE);
        
        
;
    
abCrypt!.init(key);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return abCrypt!.decrypt(outputStream!.toByteArray());;
    

         finally {
            this.streamUtil!.close(outputStream);
    
this.streamUtil!.close(inputStream);
    

         }
        
}


}
                
            

