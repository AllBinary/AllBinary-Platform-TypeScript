
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

    

export class OSGIServiceUtil
            extends Object
         {
        

    private static readonly instance: OSGIServiceUtil = new OSGIServiceUtil();
        
        

    public static getInstance(): OSGIServiceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getServicesObjectVector(bundleContext: Object, serviceReferences: ServiceReference[]): Vector{
    //var bundleContext = bundleContext
    //var serviceReferences = serviceReferences

    var vector: Vector = new Vector();
        
        
;
    

                        if(serviceReferences != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = serviceReferences!.length
                ;
        
        
;
    
logUtil!.put("Service References: " +size, this, "getServicesObjectVector");
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var serviceReference: ServiceReference = serviceReferences[index]!;
        
        
;
    

                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var osgiServiceInterface: OSGIServiceInterface = bundleContext!.getService(serviceReference);

                         as OSGIServiceInterface;
        
        
;
    

                        if(osgiServiceInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("No Service For Reference")

                                    }
                                
vector.add(osgiServiceInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

