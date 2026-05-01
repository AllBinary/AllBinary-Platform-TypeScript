
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { BasicDataTableInterface } from "../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    
import { WorkFlowInterface } from "../../../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface WorkFlowEntityInterface extends BasicDataTableInterface {
        

    get(storeName: string): Vector

                //@Throws(Error::class, LicensingException::class)
            
    get(name: string, storeName: string): WorkFlowInterface

    delete(name: string, storeName: string)

    insert(values: Vector)

    update(updatedValues: HashMap<any, any>)

}
                
            

