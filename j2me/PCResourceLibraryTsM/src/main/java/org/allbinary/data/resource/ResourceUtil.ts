
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
        



import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { FileInputStream } from "../../../../java/io/FileInputStream.js";

    
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StreamUtil } from "../../../../org/allbinary/logic/io/StreamUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class ResourceUtil
            extends Object
         {
        

    private static readonly instance: ResourceUtil = new ResourceUtil();
        
        

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private path: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private ext: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
private constructor (){

            super();
            }


    public setLoadingPaths(path: string, ext: string){
var path = path
var ext = ext
this.path= path;
    
this.ext= ext;
    
}


    public setClassLoader(classLoader: ClassLoader){
    //var classLoader = classLoader
}


                //@Throws(Error::class)
            
    public getResourceAsStream(resource: string): InputStream{
    //var resource = resource

    var inputStream: InputStream = this.getResourceAsStream(resource, 2)!;
        
        
;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStream(resource, 1);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error(StringMaker().
                            append("Unable to obtain: ")!.append(resource)!.toString())

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


                //@Throws(Error::class)
            
    getResourceAsStream(resource: string, startIndex: number): InputStream{
    //var resource = resource
    //var startIndex = startIndex

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var inputStream: InputStream = new FileInputStream(StringMaker().
                            append(path)!.append(resource)!.append(ext)!.toString());
        
        
;
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    
    var byteArray: number[] = new Array(inputStream!.available());
        
        
;
    
StreamUtil.getInstance()!.getByteArray(inputStream, ByteArrayOutputStream(), byteArray);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ByteArrayInputStream(byteArray);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


    public addResource(resource: string, value: Integer){
    //var resource = resource
    //var value = value
}


}
                
            

