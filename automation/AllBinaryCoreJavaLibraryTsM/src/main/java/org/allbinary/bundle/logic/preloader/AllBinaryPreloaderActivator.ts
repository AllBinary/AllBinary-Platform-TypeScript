
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
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { BundleActivator } from '../../../../../org/osgi/framework/BundleActivator.js';
      const BundleActivator = globalThis.org.osgi.framework.BundleActivator;

      
//not game specific package import { BundleContext } from '../../../../../org/osgi/framework/BundleContext.js';
      const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
//not game specific package import { ServiceReference } from '../../../../../org/osgi/framework/ServiceReference.js';
      const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
//not game specific package import { ServiceRegistration } from '../../../../../org/osgi/framework/ServiceRegistration.js';
      const ServiceRegistration = globalThis.org.osgi.framework.ServiceRegistration;

      
//not game specific package import { CryptServiceFactory } from '../../../../../org/allbinary/bundle/logic/system/loader/CryptServiceFactory.js';
      const CryptServiceFactory = globalThis.org.allbinary.bundle.logic.system.loader.CryptServiceFactory;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
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

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, "start");
    
AllBinaryPreloaderActivator.context= context;
    
this.registerAsService();
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "start", e);
    



                            throw e;
                    
}

}


                //@Throws(Exception.constructor)
            
    public registerAsService(){

    var properties: Hashtable<any, any> = new Hashtable<any, any>();;
    

    var serviceRegistration: ServiceRegistration = AllBinaryPreloaderActivator.context.registerService(CRYPT_REGISTRY_NAME, new CryptServiceFactory(), properties)!;;
    

    var serviceReference: ServiceReference = serviceRegistration!.getReference()!;;
    
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
                
            

