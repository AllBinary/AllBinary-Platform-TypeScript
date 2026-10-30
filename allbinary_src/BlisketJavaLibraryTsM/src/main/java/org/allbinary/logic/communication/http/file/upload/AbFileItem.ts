
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
        
import { File } from '../../../../../../../java/io/File.js';
//not GWT import const File

import { IOException } from '../../../../../../../java/io/IOException.js';
//not GWT import const IOException

import { InputStream } from '../../../../../../../java/io/InputStream.js';
//not GWT import const InputStream

import { OutputStream } from '../../../../../../../java/io/OutputStream.js';
//not GWT import const OutputStream

import { UnsupportedEncodingException } from '../../../../../../../java/io/UnsupportedEncodingException.js';
//not GWT import const UnsupportedEncodingException

//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
type ForcedLogUtil<T = any, U = any> = typeof ForcedLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ForcedLogUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { FileItem } from '../../../../../../../org/apache/commons/fileupload/FileItem.js';
//not GWT import const FileItem

import { FileItemHeaders } from '../../../../../../../org/apache/commons/fileupload/FileItemHeaders.js';
//not GWT import const FileItemHeaders

import { FileItemUtil } from '../../../../../../../org/apache/commons/fileupload/FileItemUtil.js';
//not GWT import const FileItemUtil

















                                        
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

getString(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getString$overload1(args[0]);
   
    if (args.length === 0) return this.getString$overload2();
   
   throw new TypeError('No matching overload: getString'); }
  
                //@Throws(UnsupportedEncodingException.constructor)
            
    public getString$overload1(encoding: string): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.byteArray;
    
}


    public getString$overload2(): string{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileItemUtil.getInstance()!.getString(this.byteArray);;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.HTTPERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "getString", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    

 }
   }
 
}

write(...args: any[]): any {
   
    if (args.length === 1) return this.write$overload1(args[0]);
   
    if (args.length === 1) return this.write$overload2(args[0]);
   
   throw new TypeError('No matching overload: write'); }
  
                //@Throws(Exception.constructor)
            
    public write$overload1(file: File){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


                //@Throws(Exception.constructor)
            
    public write$overload2(file: AbFile){



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

