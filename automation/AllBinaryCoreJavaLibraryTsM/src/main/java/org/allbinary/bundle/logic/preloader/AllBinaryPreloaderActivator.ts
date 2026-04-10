
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { BundleActivator } from "../../../../../org/osgi/framework/BundleActivator.js";

    
import { BundleContext } from "../../../../../org/osgi/framework/BundleContext.js";

    
import { ServiceReference } from "../../../../../org/osgi/framework/ServiceReference.js";

    
import { ServiceRegistration } from "../../../../../org/osgi/framework/ServiceRegistration.js";

    
import { CryptServiceFactory } from "../../../../../org/allbinary/bundle/logic/system/loader/CryptServiceFactory.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AllBinaryPreloaderActivator
            extends Object
        
                , BundleActivator {
        

    private context: BundleContext

    private static readonly CRYPT_REGISTRY_NAME: string = "bundle.abcs.logic.system.loader.CryptService";
        
        

    public static getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return context;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public start(context: BundleContext){
var context = context

        try {
            logUtil!.put(this.commonStrings!.START, this, "start")
AllBinaryPreloaderActivator.context= context
this.registerAsService()
} catch(e: Exception)
            {
logUtil!.put(this.commonStrings!.EXCEPTION, this, "start", e)



                            throw e
}

}


                //@Throws(Error::class)
            
    public registerAsService(){

    var properties: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        


    var serviceRegistration: ServiceRegistration = context.registerService(CRYPT_REGISTRY_NAME, CryptServiceFactory(), properties)!;
        
        


    var serviceReference: ServiceReference = serviceRegistration!.getReference()!;
        
        

serviceReference= context.getServiceReference(CRYPT_REGISTRY_NAME)

                        if(serviceReference == 
                                    null
                                )
                        
                                    throw Error("No Such Service Reference")
}


                //@Throws(Error::class)
            
    public stop(context: BundleContext){
var context = context
logUtil!.put(this.commonStrings!.START, this, "stop")
}


}
                
            

