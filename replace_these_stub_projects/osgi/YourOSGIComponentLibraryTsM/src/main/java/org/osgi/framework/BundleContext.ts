
        /* Generated Code Do Not Modify */
        



import { Dictionary } from "../../../java/util/Dictionary.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Bundle } from "./Bundle.js";

import { ServiceRegistration } from "./ServiceRegistration.js";

import { ServiceReference } from "./ServiceReference.js";

export interface BundleContext {
        

    public getBundles(): Bundle[]

                //@Throws(BundleException::class)
            
    public installBundle(location: string): Bundle

    public registerService(clazz: string, service: any = {}, properties: Dictionary): ServiceRegistration

    public getService(reference: ServiceReference): any

                //@Throws(InvalidSyntaxException::class)
            
    public getServiceReferences(clazz: string, filter: string): ServiceReference[]

    public getServiceReference(clazz: string): ServiceReference

}
                
            

