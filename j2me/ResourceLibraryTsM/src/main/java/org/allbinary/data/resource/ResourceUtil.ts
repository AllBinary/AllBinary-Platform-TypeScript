
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
        



import { InputStream } from "../../../../java/io/InputStream.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

export class ResourceUtil
            extends Object
         {
        

    private classLoader: any = {} = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private static readonly instance: ResourceUtil = new ResourceUtil();
        
        

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public setClassLoader(classLoader: ClassLoader){
    //var classLoader = classLoader
logUtil!.put(StringMaker().
                            append("Resource Loader: ")!.append(classLoader!.constructor.name.toString()!)!.toString(), this, "setClassLoader");
    
ResourceUtil.classLoader= classLoader;
    
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

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var index: number = resource.indexOf(commonSeps!.COLON)!;
        
        
;
    

    var resourcePath: string = resource.substring(index +startIndex)!;
        
        
;
    

    var inputStream: InputStream = resource.javaClass.getResourceAsStream(resourcePath)!;
        
        
;
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    

                                    }
                                

    var classLoader: ClassLoader = ResourceUtil.classLoader as ClassLoader;
        
        
;
    
inputStream= classLoader!.getResourceAsStream(resourcePath);
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    

                                    }
                                
inputStream= Thread.currentThread()!.getContextClassLoader()!.getResourceAsStream(resourcePath);
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


    public addResource(resource: string, value: Integer){
    //var resource = resource
    //var value = value
}


}
                
            

