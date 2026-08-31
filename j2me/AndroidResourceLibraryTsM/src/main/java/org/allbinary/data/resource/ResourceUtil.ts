
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
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Activity } from '../../../../android/app/Activity.js';
      //not GWT import const Activity = globalThis.android.app.Activity;

      
import { Context } from '../../../../android/content/Context.js';
      //not GWT import const Context = globalThis.android.content.Context;

      
import { Resources } from '../../../../android/content/res/Resources.js';
      //not GWT import const Resources = globalThis.android.content.res.Resources;

      
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
      //not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;

      
import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
      //not GWT import const NoDebug = globalThis.org.allbinary.debug.NoDebug;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Android
export class ResourceUtil
            extends Object
         {
        

    private static readonly instance: ResourceUtil = new ResourceUtil();

    public static getInstance(): ResourceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ResourceUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private context: any = NullUtil.getInstance()!.NULL_OBJECT;

    private resources: any = NullUtil.getInstance()!.NULL_OBJECT;

    private hashMap: Hashtable<any, any> = new Hashtable<any, any>();

private constructor (){

            super();
        }


    public setLoadingPaths(path: string, ext: string){
this.logUtil!.putF(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this, "setLoadingPaths");
    
}


    public getContext(): Context{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.context as Context;
    
}


    public setContextFromActivity(activity: Activity){
this.context= activity;
    
}


    public setContext(aContext: Context){
this.context= aContext;
    
}


    public getResourceId(resource: string): Integer{

    var value: Integer = this.hashMap!.get(resource) as Integer;;
    

                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(resource)!.append(CommonSeps.getInstance()!.COLON)!.append(value.toString())!.toString(), this, "getResourceId");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public addResource(resource: string, value: Integer){

                        if(DebugFactory.getInstance() != NoDebug.getInstance())
                        
                                    {
                                    PreLogUtil.put(new StringMaker().append(resource)!.append(CommonSeps.getInstance()!.COLON)!.append(value.toString())!.toString(), this, "addResource");
    

                        if(this.containsDuplicate(resource, value))
                        
                                    {
                                    ForcedLogUtil.log(new StringMaker().append("Found Duplicate Resource: ")!.append(resource)!.toString(), this);
    

                                    }
                                

                                    }
                                
this.hashMap!.put(resource, value);
    
}


    containsDuplicate(resource: string, value: Integer): boolean{

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(this.hashMap)!;;
    




                        for (
    var index: number = objectArray!.length
                ;--index >= 0; )
        {

    var integer: Integer = this.hashMap!.get(objectArray[index]!) as Integer;;
    

                        if(resource != objectArray[index])
                        
                                    {
                                    
                        if(value != integer)
                        
                                    {
                                    
                        if(value.intValue() == integer.intValue())
                        
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
this.logUtil!.putF(new StringMaker().append("Resource Loader: ")!.append(resources.constructor.name.toString()!)!.toString(), this, "setResources");
    
this.resources= resources;
    
}


                //@Throws(Exception.constructor)
            
    public getResourceAsStream(resource: string): InputStream{

    var integer: Integer = this.hashMap!.get(resource) as Integer;;
    

    var id: number = integer.intValue()!;;
    

    var resources: Resources = (this.resources as Resources);;
    

    var inputStream: InputStream = resources.openRawResource(id)!;;
    

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



