
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
        



import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { Closeable } from "../../../../java/io/Closeable.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../java/io/OutputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StreamUtil
            extends Object
         {
        

    private static readonly instance: StreamUtil = new StreamUtil();
        
        

    public static getInstance(): StreamUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public get(inputStream: InputStream, outputStream: OutputStream, buffer: number[]): OutputStream{
    //var inputStream = inputStream
    //var outputStream = outputStream
var buffer = buffer

    var len: number = 0;
        
        
;
    

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


                //@Throws(Error::class)
            
    public getByteArray(inputStream: InputStream, outputStream2: ByteArrayOutputStream, byteArray: number[]): number[]{
    //var inputStream = inputStream
    //var outputStream2 = outputStream2
    //var byteArray = byteArray

    var outputStream: ByteArrayOutputStream = outputStream2;
        
        
;
    

        try {
            this.get(inputStream, outputStream, byteArray);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return outputStream!.toByteArray();

                        ;
    

                //: 
} catch(e) 
            {



                            throw e
}

         finally {
            this.close(outputStream);
    

         }
        
}


    public close(closeable: Closeable): boolean{
var closeable = closeable

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

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CLOSE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

