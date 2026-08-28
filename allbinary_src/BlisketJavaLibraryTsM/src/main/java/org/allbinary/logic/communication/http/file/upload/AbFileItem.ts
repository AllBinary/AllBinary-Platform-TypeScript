
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
        
//not game specific package import { File } from '../../../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { IOException } from '../../../../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { InputStream } from '../../../../../../../java/io/InputStream.js';
      const InputStream = globalThis.java.io.InputStream;

      
//not game specific package import { OutputStream } from '../../../../../../../java/io/OutputStream.js';
      const OutputStream = globalThis.java.io.OutputStream;

      
//not game specific package import { UnsupportedEncodingException } from '../../../../../../../java/io/UnsupportedEncodingException.js';
      const UnsupportedEncodingException = globalThis.java.io.UnsupportedEncodingException;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { FileItem } from '../../../../../../../org/apache/commons/fileupload/FileItem.js';
      const FileItem = globalThis.org.apache.commons.fileupload.FileItem;

      
//not game specific package import { FileItemHeaders } from '../../../../../../../org/apache/commons/fileupload/FileItemHeaders.js';
      const FileItemHeaders = globalThis.org.apache.commons.fileupload.FileItemHeaders;

      
//not game specific package import { FileItemUtil } from '../../../../../../../org/apache/commons/fileupload/FileItemUtil.js';
      const FileItemUtil = globalThis.org.apache.commons.fileupload.FileItemUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AbFileItem
            extends Object
         implements FileItem {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly name: string;

    private fieldName: string;

    private readonly byteArray: number[];

public constructor (name: string, fieldName: string, byteArray: number[]){

            super();
        this.name= name;
    
this.fieldName= fieldName;
    
this.byteArray= byteArray;
    
}


                //@Throws(IOException.constructor)
            
    public getInputStream(): InputStream{



                            throw new IOException(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public getContentType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public isInMemory(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray!.length;
    
}


    public get(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray;
    
}


                //@Throws(UnsupportedEncodingException.constructor)
            
    public getString(encoding: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray;
    
}


    public getString(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileItemUtil.getInstance()!.getString(this.byteArray);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getString", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}

}


                //@Throws(Exception.constructor)
            
    public write(file: File){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public write(file: AbFile){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public delete(){
ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, "delete()");
    
}


    public getFieldName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fieldName;
    
}


    public setFieldName(name: string){
this.fieldName= name;
    
}


    public isFormField(): boolean{

                        if(StringValidationUtil.getInstance()!.isEmpty(this.fieldName))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public setFormField(state: boolean){
}


                //@Throws(IOException.constructor)
            
    public getOutputStream(): OutputStream{



                            throw new IOException(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public getHeaders(): FileItemHeaders{



                            throw new RuntimeException(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public setHeaders(fih: FileItemHeaders){



                            throw new RuntimeException(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


}



