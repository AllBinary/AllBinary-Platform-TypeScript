
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../java/util/Vector.js';
      
import { BundleContext } from '../../../../org/osgi/framework/BundleContext.js';
      
import { ServiceReference } from '../../../../org/osgi/framework/ServiceReference.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { OSGIServiceInterface } from '../../../../org/allbinary/osgi/OSGIServiceInterface.js';
      
import { OSGIServiceVisitorInterface } from '../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OSGIServiceUtil } from './OSGIServiceUtil.js';

export class InputAutomationServiceConsumer
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly osgiServiceUtil: OSGIServiceUtil = OSGIServiceUtil.getInstance()!;

    private registryName: string

    private bundleContext: BundleContext

    private osgiServiceVisitorInterface: OSGIServiceVisitorInterface
public constructor (registryName: string, bundleContext: BundleContext, osgiServiceVisitorInterface: OSGIServiceVisitorInterface){

            super();
        this.setRegistryName(registryName);
    
this.setBundleContext(bundleContext);
    
this.setOsgiServiceVisitorInterface(osgiServiceVisitorInterface);
    
}


                //@Throws(Exception.constructor)
            
    public process(){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.PROCESS);
    

    var vector: Vector = this.osgiServiceUtil!.getServicesObjectVector(this.getBundleContext(), this.getServiceReferences())!;
;
    
this.logUtil!.putF("Processing " +vector.length +" Services", this, this.commonStrings!.PROCESS);
    

    var size: number = vector.length!;
;
    

    var osgiServiceInterface: OSGIServiceInterface
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
osgiServiceInterface= vector.get(index) as OSGIServiceInterface;
    

                        if(!getOsgiServiceVisitorInterface()!.visit(osgiServiceInterface))
                        
                                    {
                                    


                            throw new Exception("Unable to process service: " +osgiServiceInterface);
                    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    getServiceReferences(): ServiceReference[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBundleContext()!.getServiceReferences(this.getRegistryName(), 
                            null);;
    
}


    public getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.bundleContext;
    
}


    public setBundleContext(aBundleContext: BundleContext){
this.bundleContext= aBundleContext;
    
}


    public getRegistryName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.registryName;
    
}


    public setRegistryName(registryName: string){
this.registryName= registryName;
    
}


    public getOsgiServiceVisitorInterface(): OSGIServiceVisitorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.osgiServiceVisitorInterface;
    
}


    public setOsgiServiceVisitorInterface(osgiServiceVisitorInterface: OSGIServiceVisitorInterface){
this.osgiServiceVisitorInterface= osgiServiceVisitorInterface;
    
}


}
                
            

