
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { InputStream } from '../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CryptInterface } from './CryptInterface.js';
//not GWT import const  = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

                
export class BasicCryptUtil
            extends Object
         {
        

    private static readonly instance: BasicCryptUtil = new BasicCryptUtil();

    public static getInstance(): BasicCryptUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicCryptUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly XML_START: string = "<?xml";

                //@Throws(Exception.constructor)
            
    public getDecryptedInputStream(inputStream: InputStream, cryptInterface: CryptInterface): InputStream{

    var buffer: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    var ch: number= 0;;
    

        while(true)
        {
ch= inputStream!.read();
    

                        if(ch ==  -1)
                        
                                    {
                                    break;

                    

                                    }
                                
buffer.write(ch);
    
}


    var decrypted: number[] = cryptInterface!.decrypt(buffer.toByteArray())!;;
    

    var decryptedString: string = String.fromCharCode(...decrypted);;
    

    var index: number = decryptedString!.indexOf(this.XML_START)!;;
    

                        if(index > 0)
                        
                                    {
                                    decryptedString= decryptedString!.substring(index);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ByteArrayInputStream(this.tsUtil!.getByteArray(decryptedString));
    
}


}



