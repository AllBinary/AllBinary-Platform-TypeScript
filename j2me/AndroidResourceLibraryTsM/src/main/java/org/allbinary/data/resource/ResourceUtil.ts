
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

import { Activity } from '../../../../android/app/Activity.js';
//not GWT import const Activity

import { Context } from '../../../../android/content/Context.js';
//not GWT import const Context

import { Resources } from '../../../../android/content/res/Resources.js';
//not GWT import const Resources

import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const DebugFactory

import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
//not GWT import const NoDebug

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
type ForcedLogUtil<T = any, U = any> = typeof ForcedLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ForcedLogUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
type HashtableUtil<T = any, U = any> = typeof HashtableUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HashtableUtil;

















                                        
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

    private hashMap: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

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

    let value: Integer = this.hashMap!.get(resource) as Integer;;
    

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

    let objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(this.hashMap)!;;
    




                        for (
    let index: number = objectArray!.length
                ;--index >= 0; )
        {

    let integer: Integer = this.hashMap!.get(objectArray[index]!) as Integer;;
    

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

    let integer: Integer = this.hashMap!.get(resource) as Integer;;
    

    let id: number = integer.intValue()!;;
    

    let resources: Resources = (this.resources as Resources);;
    

    let inputStream: InputStream = resources.openRawResource(id)!;;
    

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

