
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../java/util/Vector.js";

    
import { BundleContext } from "../../../../org/osgi/framework/BundleContext.js";

    
import { ServiceReference } from "../../../../org/osgi/framework/ServiceReference.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { OSGIServiceInterface } from "../../../../org/allbinary/osgi/OSGIServiceInterface.js";

    
import { OSGIServiceVisitorInterface } from "../../../../org/allbinary/osgi/OSGIServiceVisitorInterface.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

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
                //var registryName = registryName
    //var bundleContext = bundleContext
    //var osgiServiceVisitorInterface = osgiServiceVisitorInterface
this.setRegistryName(registryName);
    
this.setBundleContext(bundleContext);
    
this.setOsgiServiceVisitorInterface(osgiServiceVisitorInterface);
    
}


                //@Throws(Error::class)
            
    public process(){
logUtil!.put(this.commonStrings!.START, this, commonStrings!.PROCESS);
    

    var vector: Vector = osgiServiceUtil!.getServicesObjectVector(this.getBundleContext(), this.getServiceReferences())!;
        
        
;
    
logUtil!.put("Processing " +vector.length +" Services", this, commonStrings!.PROCESS);
    

    var size: number = vector.length!;
        
        
;
    

    var osgiServiceInterface: OSGIServiceInterface
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
osgiServiceInterface= vector.get(index);

                         as OSGIServiceInterface;
    

                        if(!getOsgiServiceVisitorInterface()!.visit(osgiServiceInterface);

                        )
                        
                                    {
                                    


                            throw Error("Unable to process service: " +osgiServiceInterface)

                                    }
                                
}

}


                //@Throws(Error::class)
            
    getServiceReferences(): ServiceReference[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getBundleContext()!.getServiceReferences(this.getRegistryName(), 
                            null);

                        ;
    
}


    public getBundleContext(): BundleContext{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bundleContext;
    
}


    public setBundleContext(aBundleContext: BundleContext){
var aBundleContext = aBundleContext
bundleContext= aBundleContext;
    
}


    public getRegistryName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return registryName;
    
}


    public setRegistryName(registryName: string){
var registryName = registryName
this.registryName= registryName;
    
}


    public getOsgiServiceVisitorInterface(): OSGIServiceVisitorInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osgiServiceVisitorInterface;
    
}


    public setOsgiServiceVisitorInterface(osgiServiceVisitorInterface: OSGIServiceVisitorInterface){
var osgiServiceVisitorInterface = osgiServiceVisitorInterface
this.osgiServiceVisitorInterface= osgiServiceVisitorInterface;
    
}


}
                
            

