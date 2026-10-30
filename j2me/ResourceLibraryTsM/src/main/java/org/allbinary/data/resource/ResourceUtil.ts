
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
//not GWT import const InputStream

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //J2SE - J2ME
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


    public setLoadingPaths(path: string, ext: string){
this.logUtil!.putF(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this, "setLoadingPaths");
    
}


    public setClassLoader(classLoader: ClassLoader){
this.logUtil!.putF(new StringMaker().append("Resource Loader: ")!.append(classLoader!.constructor.name.toString()!)!.toString(), this, "setClassLoader");
    
ResourceUtil.classLoader= classLoader;
    
}


                //@Throws(Exception.constructor)
            
    public getResourceAsStream(resource: string): InputStream{

    let inputStream: InputStream = this.getResourceAsStreamAtStart(resource, 2)!;;
    

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

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let index: number = resource.indexOf(commonSeps!.COLON)!;;
    

    let resourcePath: string = resource.substring(index +startIndex)!;;
    

    let inputStream: InputStream = resource..javaClass.getResourceAsStream(resourcePath)!;;
    

                        if(inputStream != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    

                                    }
                                

    let classLoader: ClassLoader = ResourceUtil.classLoader as ClassLoader;;
    
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

