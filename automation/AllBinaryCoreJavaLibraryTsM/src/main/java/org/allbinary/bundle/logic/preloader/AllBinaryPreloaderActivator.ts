
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BundleActivator } from '../../../../../org/osgi/framework/BundleActivator.js';
//not GWT import const BundleActivator

import { BundleContext } from '../../../../../org/osgi/framework/BundleContext.js';
//not GWT import const BundleContext

import { ServiceReference } from '../../../../../org/osgi/framework/ServiceReference.js';
//not GWT import const ServiceReference

import { ServiceRegistration } from '../../../../../org/osgi/framework/ServiceRegistration.js';
//not GWT import const ServiceRegistration

import { CryptServiceFactory } from '../../../../../org/allbinary/bundle/logic/system/loader/CryptServiceFactory.js';
//not GWT import const CryptServiceFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AllBinaryPreloaderActivator
            extends Object
         implements BundleActivator {
        

    private static context: BundleContext;

    private static readonly CRYPT_REGISTRY_NAME: string = "bundle.abcs.logic.system.loader.CryptService";

    public static getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AllBinaryPreloaderActivator.context;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

                //@Throws(Exception.constructor)
            
    public start(context: BundleContext){

 try { this.logUtil!.putF(this.commonStrings!.START, this, "start");
    
AllBinaryPreloaderActivator.context= context;
    
this.registerAsService();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "start", e);
    



                            throw e;
                    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public registerAsService(){

    let properties: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;;
    

    let serviceRegistration: ServiceRegistration = AllBinaryPreloaderActivator.context.registerService(CRYPT_REGISTRY_NAME, new CryptServiceFactory(), properties)!;;
    

    let serviceReference: ServiceReference = serviceRegistration!.getReference()!;;
    
serviceReference= AllBinaryPreloaderActivator.context.getServiceReference(CRYPT_REGISTRY_NAME);
    

                        if(serviceReference == 
                                    null
                                )
                        
                                    throw new Exception("No Such Service Reference");
                                
}


                //@Throws(Exception.constructor)
            
    public stop(context: BundleContext){
this.logUtil!.putF(this.commonStrings!.START, this, "stop");
    
}


}

