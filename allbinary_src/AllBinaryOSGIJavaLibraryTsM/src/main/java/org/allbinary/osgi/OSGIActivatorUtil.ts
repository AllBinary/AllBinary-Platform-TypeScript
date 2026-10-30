
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

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Exception } from '../../../java/lang/Exception.js';
        
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

import { BundleContext } from '../../../org/osgi/framework/BundleContext.js';
//not GWT import const BundleContext

import { NullServiceReferenceFactory } from '../../../org/osgi/framework/NullServiceReferenceFactory.js';
//not GWT import const NullServiceReferenceFactory

import { ServiceReference } from '../../../org/osgi/framework/ServiceReference.js';
//not GWT import const ServiceReference

import { ServiceRegistration } from '../../../org/osgi/framework/ServiceRegistration.js';
//not GWT import const ServiceRegistration

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OSGIActivatorUtil
            extends Object
         {
        
static registerAsService(...args: any[]): any {
   
    if (args.length === 3 && typeof args[2] === 'string') return this.registerAsService$overload1(args[0], args[1], args[2]);
   
    if (args.length === 4 && typeof args[2] === 'string') return this.registerAsService$overload2(args[0], args[1], args[2], args[3]);
   
   throw new TypeError('No matching overload: registerAsService'); }
  
                //@Throws(Exception.constructor)
            
    public static registerAsService$overload1(bundleContext: BundleContext, anyType: any, serviceName: string){
OSGIActivatorUtil.registerAsService(bundleContext, anyType, serviceName, StdUtil.getInstance()!.createHashtable());
    
}


                //@Throws(Exception.constructor)
            
    public static registerAsService$overload2(bundleContext: BundleContext, anyType: any, serviceName: string, properties: ABHashtable<any, any>){

    let serviceRegistration: ServiceRegistration = bundleContext!.registerService(serviceName, anyType, properties)!;;
    

    let serviceReference: ServiceReference = serviceRegistration!.getReference()!;;
    
serviceReference= bundleContext!.getServiceReference(serviceName);
    

                        if(serviceReference == NullServiceReferenceFactory.getInstance()!.NULL_SERVICE_REFERENCE)
                        
                                    {
                                    


                            throw new Exception("No Such Service Reference");
                    

                                    }
                                
}


private constructor (){

            super();
        }


}

