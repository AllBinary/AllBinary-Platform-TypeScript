
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
        



import { DataInputStream } from "../../../../../../../java/io/DataInputStream.js";

    
import { InputStream } from "../../../../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../../../../java/io/OutputStream.js";

    
import { AbDataOutputStream } from "../../../../../../../org/allbinary/logic/io/AbDataOutputStream.js";

    
import { FileStreamFactory } from "../../../../../../../org/allbinary/logic/io/FileStreamFactory.js";

    
import { StreamUtil } from "../../../../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { FileFactory } from "../../../../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    

export class RegistrationConfiguration
            extends Object
         {
        

    private static readonly SINGLETON: RegistrationConfiguration = new RegistrationConfiguration();
        
        

    public static getInstance(): RegistrationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private registrationCode: string = "No Registration Code";
        
        

    public readonly NAME: string = "registrationid";
        
        

    private readonly FILE: string = "Registration.dat";
        
        
private constructor (){

            super();
            
        try {
            
                        if(FileFactory.getInstance()!.isFile(FILE))
                        
                                    {
                                    this.read();
    

                                    }
                                
                        else {
                            this.write();
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Error::class)
            
    read(){

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    

    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        
;
    

    var dataInputStream: DataInputStream = new DataInputStream(fileInputStream);
        
        
;
    
this.setRegistrationCode(dataInputStream!.readUTF());
    
PreLogUtil.put(StringMaker().
                            append("Read Configuration: ")!.append(this.toString())!.toString(), this, "read");
    
}


                //@Throws(Error::class)
            
    public write(){

    var dataOutputStream: AbDataOutputStream = 
                null
            ;
        
        
;
    

        try {
            logUtil!.put(StringMaker().
                            append("Write Configuration: ")!.append(this.toString())!.toString(), this, "write");
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;
        
        
;
    

    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, FILE)!;
        
        
;
    
dataOutputStream= AbDataOutputStream(fileOutputStream);
    
dataOutputStream!.writeUTF(this.getRegistrationCode());
    
dataOutputStream!.flush();
    

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream);
    

         }
        
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append("Registration Code: ")!.append(this.getRegistrationCode())!.toString();

                        ;
    
}


    public setRegistrationCode(registrationCode: string){
var registrationCode = registrationCode
this.registrationCode= registrationCode;
    
}


    public getRegistrationCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return registrationCode;
    
}


}
                
            

