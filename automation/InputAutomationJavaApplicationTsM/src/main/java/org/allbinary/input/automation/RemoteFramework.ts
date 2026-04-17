
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
        



import { Map } from "../../../../java/util/Map.js";

    
import { BundleContext } from "../../../../org/osgi/framework/BundleContext.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface RemoteFramework {
        

    public connect(host: string): BundleContext

    public disconnect(bc: BundleContext)

    public getSystemProperties(bc: BundleContext): Map

}
                
            

