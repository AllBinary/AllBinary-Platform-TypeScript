
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { InputStream } from "../../../../java/io/InputStream.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ResourceUtil
            extends Object
         {
        

    private instance: ResourceUtil = new ResourceUtil();
        
        

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getResourceAsStream(resource: string): InputStream{
var resource = resource

    var inputStream: InputStream = resource.javaClass.getResourceAsStream(resource)!;
        
        
;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStream(resource, 2);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    inputStream= this.getResourceAsStream(resource, 1);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var index: number = resource.lastIndexOf('/')!;
        
        
;
    

    var resourcePath: string = resource.substring(index +1)!;
        
        
;
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    resourcePath= resource.substring(index);
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    var RES: string = "res";
        
        
;
    
resourcePath= stringMaker!.append(RES)!.append(resource.substring(index))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append("/")!.append(RES)!.append(resource.substring(index))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

    var COLON: string = CommonSeps.getInstance()!.COLON;
        
        
;
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RES)!.append(COLON)!.append(resource.substring(index))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RES)!.append(COLON)!.append(resource.substring(index +1))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    
    var RESOURCE_STRING: string = "resource";
        
        
;
    
stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(resource.substring(index))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
resourcePath= stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(resource.substring(index +1))!.toString();
    
inputStream= resource.javaClass.getResourceAsStream(resourcePath);
    

                        if(inputStream == 
                                    null
                                )
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    



                            throw new Error(stringMaker!.append("Unable to obtain: ")!.append(resource)!.toString())

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


                //@Throws(Error::class)
            
    getResourceAsStream(resource: string, startIndex: number): InputStream{
var resource = resource
var startIndex = startIndex

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var index: number = resource.indexOf(CommonSeps.getInstance()!.COLON)!;
        
        
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
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


    public addResource(resource: string, value: Integer){
    //var resource = resource
    //var value = value
}


}
                
            

