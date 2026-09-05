
        /* Generated Code Do Not Modify */

        


import { Dictionary } from '../../../java/util/Dictionary.js';
//not GWT import const Dictionary = globalThis.java.util.Dictionary;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Bundle } from './Bundle.js';
//not GWT import - same folder const Bundle = globalThis.org.osgi.framework.Bundle;

                import { ServiceRegistration } from './ServiceRegistration.js';
//not GWT import - same folder const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

                import { ServiceReference } from './ServiceReference.js';
//not GWT import - same folder const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

                
export interface BundleContext {
        

    getBundles(): Bundle[]

                //@Throws(BundleException.constructor)
            
    installBundle(location: string): Bundle

    registerService(clazz: string, service: any, properties: Dictionary): ServiceRegistration

    getService(reference: ServiceReference): any

                //@Throws(InvalidSyntaxException.constructor)
            
    getServiceReferences(clazz: string, filter: string): ServiceReference[]

    getServiceReference(clazz: string): ServiceReference

}



