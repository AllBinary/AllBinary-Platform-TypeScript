
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
        
//not plain js import { StdUtil } from '../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABHashtable } from '../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
import { BundleContext } from '../../../org/osgi/framework/BundleContext.js';
      //not GWT import const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
import { NullServiceReferenceFactory } from '../../../org/osgi/framework/NullServiceReferenceFactory.js';
      //not GWT import const NullServiceReferenceFactory = globalThis.org.osgi.framework.NullServiceReferenceFactory;

      
import { ServiceReference } from '../../../org/osgi/framework/ServiceReference.js';
      //not GWT import const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
import { ServiceRegistration } from '../../../org/osgi/framework/ServiceRegistration.js';
      //not GWT import const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OSGIActivatorUtil
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string){
OSGIActivatorUtil.registerAsService(bundleContext, anyType, serviceName, StdUtil.getInstance()!.createHashtable());
    
}


                //@Throws(Exception.constructor)
            
    public static registerAsService(bundleContext: BundleContext, anyType: any = {}, serviceName: string, properties: ABHashtable){

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



