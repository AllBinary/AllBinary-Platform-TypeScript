
        /* Generated Code Do Not Modify */
        



import { Dictionary } from "../../../java/util/Dictionary.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Bundle } from "./Bundle.js";

import { ServiceRegistration } from "./ServiceRegistration.js";

import { ServiceReference } from "./ServiceReference.js";

export interface BundleContext {
        

    getBundles(): Bundle[]

                //@Throws(BundleException::class)
            
    installBundle(location: string): Bundle

    registerService(clazz: string, service: any, properties: Dictionary): ServiceRegistration

    getService(reference: ServiceReference): any

                //@Throws(InvalidSyntaxException::class)
            
    getServiceReferences(clazz: string, filter: string): ServiceReference[]

    getServiceReference(clazz: string): ServiceReference

}
                
            

