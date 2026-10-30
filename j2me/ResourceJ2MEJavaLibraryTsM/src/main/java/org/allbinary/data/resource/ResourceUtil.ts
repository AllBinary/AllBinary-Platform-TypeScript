
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { InputStream } from '../../../../java/io/InputStream.js';
//not GWT import const InputStream

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
        //J2ME
export class ResourceUtil
            extends Object
         {
        

    private static instance: ResourceUtil = new ResourceUtil();

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


                //@Throws(Exception.constructor)
            
    public getResourceAsStream(resource: string): InputStream{

    let inputStream: InputStream = resource..javaClass.getResourceAsStream(resource)!;;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStreamAtStart(resource, 2);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStreamAtStart(resource, 1);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    let stringMaker: StringMaker = new StringMaker();;
    

    let index: number = resource.lastIndexOf('/')!;;
    

    let resourcePath: string = resource.substring(index +1)!;;
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    resourcePath= resource.substring(index);
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    let RES: string = "res";;
    
resourcePath= stringMaker!.append(RES)!.append(resource.substring(index))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append("/")!.append(RES)!.append(resource.substring(index))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

    let COLON: string = CommonSeps.getInstance()!.COLON;;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RES)!.append(COLON)!.append(resource.substring(index))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RES)!.append(COLON)!.append(resource.substring(index +1))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    let RESOURCE_STRING: string = "resource";;
    
stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(resource.substring(index))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(resource.substring(index +1))!.toString();
    
inputStream= resource..javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    



                            throw new Exception(stringMaker!.append("Unable to obtain: ")!.append(resource)!.toString());
                    

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


                //@Throws(Exception.constructor)
            
    getResourceAsStreamAtStart(resource: string, startIndex: number): InputStream{

    let stringMaker: StringMaker = new StringMaker();;
    

    let index: number = resource.indexOf(CommonSeps.getInstance()!.COLON)!;;
    

    let resourcePath: string = resource.substring(index +startIndex)!;;
    

    let inputStream: InputStream = resource..javaClass.getResourceAsStream(resourcePath)!;;
    

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

