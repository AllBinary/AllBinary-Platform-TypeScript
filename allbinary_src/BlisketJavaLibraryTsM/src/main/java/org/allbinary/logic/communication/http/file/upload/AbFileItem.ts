
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
        



import { File } from "../../../../../../../java/io/File.js";

    
import { IOException } from "../../../../../../../java/io/IOException.js";

    
import { InputStream } from "../../../../../../../java/io/InputStream.js";

    
import { OutputStream } from "../../../../../../../java/io/OutputStream.js";

    
import { UnsupportedEncodingException } from "../../../../../../../java/io/UnsupportedEncodingException.js";

    
import { ForcedLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { FileItem } from "../../../../../../../org/apache/commons/fileupload/FileItem.js";

    
import { FileItemHeaders } from "../../../../../../../org/apache/commons/fileupload/FileItemHeaders.js";

    
import { FileItemUtil } from "../../../../../../../org/apache/commons/fileupload/FileItemUtil.js";

    

export class AbFileItem
            extends Object
        
                , FileItem {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly name: string

    private fieldName: string

    private readonly byteArray: ByteArray
public constructor (name: string, fieldName: string, byteArray: ByteArray){

            super();
            var name = name
var fieldName = fieldName
var byteArray = byteArray
this.name= name
this.fieldName= fieldName
this.byteArray= byteArray
}


                //@Throws(IOException::class)
            
    public getInputStream(): InputStream{



                            throw IOException(commonStrings!.NOT_IMPLEMENTED)
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


    public get(): ByteArray{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray;
    
}


                //@Throws(UnsupportedEncodingException::class)
            
    public getString(encoding: string): string{
var encoding = encoding



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray.decodeToString();
    
}


    public getString(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileItemUtil.getInstance()!.getString(byteArray);
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "getString", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}

}


                //@Throws(Error::class)
            
    public write(file: File){
var file = file



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public write(file: AbFile){
var file = file



                            throw Error(commonStrings!.NOT_IMPLEMENTED)
}


    public delete(){
ForcedLogUtil.log(commonStrings!.NOT_IMPLEMENTED, "delete()")
}


    public getFieldName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fieldName;
    
}


    public setFieldName(name: string){
var name = name
this.fieldName= name
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
var state = state
}


                //@Throws(IOException::class)
            
    public getOutputStream(): OutputStream{



                            throw IOException(commonStrings!.NOT_IMPLEMENTED)
}


    public getHeaders(): FileItemHeaders{



                            throw RuntimeException(commonStrings!.NOT_IMPLEMENTED)
}


    public setHeaders(fih: FileItemHeaders){
var fih = fih



                            throw RuntimeException(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

