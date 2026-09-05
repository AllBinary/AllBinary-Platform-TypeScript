
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
        
import { JsType } from '../../../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { DataInputStream } from '../../../../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream = globalThis.java.io.DataInputStream;

      
import { InputStream } from '../../../../../../../java/io/InputStream.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { OutputStream } from '../../../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream = globalThis.java.io.OutputStream;

      
import { AbDataOutputStream } from '../../../../../../../org/allbinary/logic/io/AbDataOutputStream.js';
//not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;

      
import { FileStreamFactory } from '../../../../../../../org/allbinary/logic/io/FileStreamFactory.js';
//not GWT import const FileStreamFactory = globalThis.org.allbinary.logic.io.FileStreamFactory;

      
import { StreamUtil } from '../../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const StreamUtil = globalThis.org.allbinary.logic.io.StreamUtil;

      
import { FileFactory } from '../../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
import { JsMethod } from '../../../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RegistrationConfiguration
            extends Object
         {
        

    private static readonly SINGLETON: RegistrationConfiguration = new RegistrationConfiguration();

    public static getInstance(): RegistrationConfiguration{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RegistrationConfiguration.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private registrationCode: string = "No Registration Code";

    public readonly NAME: string = "registrationid";

    private readonly FILE: string = "Registration.dat";

private constructor (){

            super();
        
        try {
            
                        if(FileFactory.getInstance()!.isFile(this.FILE))
                        
                                    {
                                    this.read();
    

                                    }
                                
                        else {
                            this.write();
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e);
    
}

}


                //@Throws(Exception.constructor)
            
    read(){

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileInputStream: InputStream = fileInputStreamFactory!.getFileInputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    

    var dataInputStream: DataInputStream = new DataInputStream(fileInputStream);;
    
this.setRegistrationCode(dataInputStream!.readUTF());
    
PreLogUtil.put(new StringMaker().append("Read Configuration: ")!.append(this.toString())!.toString(), this, "read");
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    var dataOutputStream: AbDataOutputStream = 
                null
            ;;
    

        try {
            this.logUtil!.putF(new StringMaker().append("Write Configuration: ")!.append(this.toString())!.toString(), this, "write");
    

    var fileInputStreamFactory: FileStreamFactory = FileStreamFactory.getInstance()!;;
    

    var fileOutputStream: OutputStream = fileInputStreamFactory!.getFileOutputStreamInstance(StringUtil.getInstance()!.EMPTY_STRING, this.FILE)!;;
    
dataOutputStream= new AbDataOutputStream(fileOutputStream);
    
dataOutputStream!.writeUTF(this.getRegistrationCode());
    
dataOutputStream!.flush();
    

         finally {
            StreamUtil.getInstance()!.close(dataOutputStream);
    

         }
        
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append("Registration Code: ")!.append(this.getRegistrationCode())!.toString();;
    
}


    public setRegistrationCode(registrationCode: string){
this.registrationCode= registrationCode;
    
}


    public getRegistrationCode(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.registrationCode;
    
}


}



