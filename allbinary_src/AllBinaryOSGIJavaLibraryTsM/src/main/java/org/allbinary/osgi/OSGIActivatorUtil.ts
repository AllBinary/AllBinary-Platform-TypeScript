
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
        
//not game specific package import { Hashtable } from '../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { BundleContext } from '../../../org/osgi/framework/BundleContext.js';
      const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
//not game specific package import { NullServiceReferenceFactory } from '../../../org/osgi/framework/NullServiceReferenceFactory.js';
      const NullServiceReferenceFactory = globalThis.org.osgi.framework.NullServiceReferenceFactory;

      
//not game specific package import { ServiceReference } from '../../../org/osgi/framework/ServiceReference.js';
      const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
//not game specific package import { ServiceRegistration } from '../../../org/osgi/framework/ServiceRegistration.js';
      const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OSGIActivatorUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string){
OSGIActivatorUtil.registerAsService(bundleContext, anyType, serviceName, new Hashtable<any, any>());
    
}


                //@Throws(Exception.constructor)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string, properties: Hashtable<any, any>){

    var serviceRegistration: ServiceRegistration = bundleContext!.registerService(serviceName, anyType, properties)!;;
    

    var serviceReference: ServiceReference = serviceRegistration!.getReference()!;;
    
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
                
            

