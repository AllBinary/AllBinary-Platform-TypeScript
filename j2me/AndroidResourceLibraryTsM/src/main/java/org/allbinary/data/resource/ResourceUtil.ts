
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
        



            import Hashtable from "@ohos.util.HashMap";
        
import { InputStream } from "../../../../java/io/InputStream.js";

    

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Activity } from "../../../../android/app/Activity.js";

    
import { Context } from "../../../../android/content/Context.js";

    
import { Resources } from "../../../../android/content/res/Resources.js";

    
import { DebugFactory } from "../../../../org/allbinary/debug/DebugFactory.js";

    
import { NoDebug } from "../../../../org/allbinary/debug/NoDebug.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    

export class ResourceUtil
            extends Object
         {
        

    private static readonly instance: ResourceUtil = new ResourceUtil();
        
        

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private context: any = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private resources: any = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private hashMap: Hashtable<any, any> = new Hashtable<any, any>();
        
        
private constructor (){

            super();
            }


    public getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return context as Context;
    
}


    public setContext(activity: Activity){
var activity = activity
this.context= activity;
    
}


    public setContext(aContext: Context){
var aContext = aContext
this.context= aContext;
    
}


    public getResourceId(resource: string): Integer{
var resource = resource

    var value: Integer = this.hashMap!.get(resource as Object);

                         as Integer;
        
        
;
    

                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append(resource)!.append(CommonSeps.getInstance()!.COLON)!.append(value.toString())!.toString(), this, "getResourceId");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public addResource(resource: string, value: Integer){
var resource = resource
var value = value

                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    PreLogUtil.put(new StringMaker().
                            append(resource)!.append(CommonSeps.getInstance()!.COLON)!.append(value.toString())!.toString(), this, "addResource");
    

                        if(this.containsDuplicate(resource, value))
                        
                                    {
                                    ForcedLogUtil.log(new StringMaker().
                            append("Found Duplicate Resource: ")!.append(resource)!.toString(), this);
    

                                    }
                                

                                    }
                                
this.hashMap!.put(resource, value);
    
}


    containsDuplicate(resource: string, value: Integer): boolean{
var resource = resource
var value = value

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashMap)!;
        
        
;
    




                        for (
    var index: number = objectArray!.length
                ;
        
        
--index >= 0; )
        {

    var integer: Integer = this.hashMap!.get(objectArray[index]! as Object);

                         as Integer;
        
        
;
    

                        if(resource != objectArray[index])
                        
                                    {
                                    
                        if(value != integer)
                        
                                    {
                                    
                        if(value.toInt() == integer.toInt())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public setResources(resources: Resources){
    //var resources = resources
this.logUtil!.putF(new StringMaker().
                            append("Resource Loader: ")!.append(resources.constructor.name.toString()!)!.toString(), this, "setResources");
    
this.resources= resources;
    
}


                //@Throws(Error::class)
            
    public getResourceAsStream(resource: string): InputStream{
    //var resource = resource

    var integer: Integer = this.hashMap!.get(resource as Object);

                         as Integer;
        
        
;
    

    var id: number = integer.toInt()!;
        
        
;
    

    var inputStream: InputStream = 
                                    (resources as Resources).openRawResource(id)!;
        
        
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


}
                
            

