
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


        
            import { ClassLoader } from '../../../../java/lang/ClassLoader.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
import { InputStream } from '../../../../java/io/InputStream.js';
      
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ResourceUtil
            extends Object
         {
        

    private static classLoader: any = NullUtil.getInstance()!.NULL_OBJECT;

    private static readonly instance: ResourceUtil = new ResourceUtil();

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ResourceUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


    public setClassLoader(classLoader: ClassLoader){
this.logUtil!.putF(new StringMaker().append("Resource Loader: ")!.append(classLoader!.constructor.name.toString()!)!.toString(), this, "setClassLoader");
    
ResourceUtil.classLoader= classLoader;
    
}


                //@Throws(Exception.constructor)
            
    public getResourceAsStream(resource: string): InputStream{

    var inputStream: InputStream = this.getResourceAsStreamAtStart(resource, 2)!;;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStreamAtStart(resource, 1);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception(new StringMaker().append("Unable to obtain: ")!.append(resource)!.toString());
                    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


                //@Throws(Exception.constructor)
            
    getResourceAsStreamAtStart(resource: string, startIndex: number): InputStream{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var index: number = resource.indexOf(commonSeps!.COLON)!;;
    

    var resourcePath: string = resource.substring(index +startIndex)!;;
    

    var inputStream: InputStream = resource..javaClass.getResourceAsStream(resourcePath)!;;
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    

                                    }
                                

    var classLoader: ClassLoader = ResourceUtil.classLoader as ClassLoader;;
    
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
}


}
                
            

