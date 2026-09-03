
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
        
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not plain js import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
      const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
import { BundleContext } from '../../../../org/osgi/framework/BundleContext.js';
      //not GWT import const BundleContext = globalThis.org.osgi.framework.BundleContext;

      
import { ServiceReference } from '../../../../org/osgi/framework/ServiceReference.js';
      //not GWT import const ServiceReference = globalThis.org.osgi.framework.ServiceReference;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { OSGIServiceInterface } from '../../../../org/allbinary/osgi/OSGIServiceInterface.js';
      //not GWT import const OSGIServiceInterface = globalThis.org.allbinary.osgi.OSGIServiceInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OSGIServiceUtil
            extends Object
         {
        

    private static readonly instance: OSGIServiceUtil = new OSGIServiceUtil();

    public static getInstance(): OSGIServiceUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return OSGIServiceUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getServicesObjectVector(bundleContext: Object, serviceReferences: ServiceReference[]): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    

                        if(serviceReferences != 
                                    null
                                )
                        
                                    {
                                    
    var size: number = serviceReferences!.length
                ;;
    
this.logUtil!.putF("Service References: " +size, this, "getServicesObjectVector");
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var serviceReference: ServiceReference = serviceReferences[index]!;;
    

                        if(serviceReference != 
                                    null
                                )
                        
                                    {
                                    
    var osgiServiceInterface: OSGIServiceInterface = bundleContext!.getService(serviceReference) as OSGIServiceInterface;;
    

                        if(osgiServiceInterface == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No Service For Reference");
                    

                                    }
                                
vector.add(osgiServiceInterface);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}



