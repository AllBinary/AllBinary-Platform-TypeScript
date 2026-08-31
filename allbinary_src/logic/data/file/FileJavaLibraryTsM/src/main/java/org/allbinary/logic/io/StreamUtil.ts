
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { Closeable } from '../../../../java/io/Closeable.js';
      //not GWT import const Closeable = globalThis.java.io.Closeable;

      
import { InputStream } from '../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { OutputStream } from '../../../../java/io/OutputStream.js';
      //not GWT import const OutputStream = globalThis.java.io.OutputStream;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StreamUtil
            extends Object
         {
        

    private static readonly instance: StreamUtil = new StreamUtil();

    public static getInstance(): StreamUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StreamUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public get(inputStream: InputStream, outputStream: OutputStream, buffer: number[]): OutputStream{

    var len: number = 0;;
    

        while(true)
        {
len= inputStream!.read(buffer, 0, buffer.length);
    

                        if(len !=  -1)
                        
                                    {
                                    
                                    }
                                
                        else {
                            break;

                    

                        }
                            
outputStream!.write(buffer, 0, len);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream;
    
}


                //@Throws(Exception.constructor)
            
    public getByteArray(inputStream: InputStream, outputStream2: ByteArrayOutputStream, byteArray: number[]): number[]{

    var outputStream: ByteArrayOutputStream = outputStream2;;
    

        try {
            this.get(inputStream, outputStream, byteArray);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream!.toByteArray();;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

         finally {
            this.close(outputStream);
    

         }
        
}


    public close(closeable: Closeable): boolean{

        try {
            
                        if(closeable != 
                                    null
                                )
                        
                                    {
                                    closeable.close();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CLOSE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}



