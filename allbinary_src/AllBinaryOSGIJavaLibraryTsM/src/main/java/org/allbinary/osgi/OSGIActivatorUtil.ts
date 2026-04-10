
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
        



import { Hashtable } from "../../../java/util/Hashtable.js";

    
import { BundleContext } from "../../../org/osgi/framework/BundleContext.js";

    
import { NullServiceReferenceFactory } from "../../../org/osgi/framework/NullServiceReferenceFactory.js";

    
import { ServiceReference } from "../../../org/osgi/framework/ServiceReference.js";

    
import { ServiceRegistration } from "../../../org/osgi/framework/ServiceRegistration.js";

    

export class OSGIActivatorUtil
            extends Object
         {
        

                @Throws(Exception::class)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string){
    //var bundleContext = bundleContext
    //var anyType = anyType
    //var serviceName = serviceName
registerAsService(bundleContext, anyType, serviceName, Hashtable<Any, Any>())
}


                @Throws(Exception::class)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string, properties: Hashtable<Any, Any>){
    //var bundleContext = bundleContext
    //var anyType = anyType
    //var serviceName = serviceName
    //var properties = properties

    var serviceRegistration: ServiceRegistration = bundleContext!.registerService(serviceName, anyType, properties)!;
        
        


    var serviceReference: ServiceReference = serviceRegistration!.getReference()!;
        
        

serviceReference= bundleContext!.getServiceReference(serviceName)

    
                        if(serviceReference == NullServiceReferenceFactory.getInstance()!.NULL_SERVICE_REFERENCE)
                        
                                    {
                                    


                            throw Exception("No Such Service Reference")

                                    }
                                
}

private constructor (){

            super();
            }


}
                
            

