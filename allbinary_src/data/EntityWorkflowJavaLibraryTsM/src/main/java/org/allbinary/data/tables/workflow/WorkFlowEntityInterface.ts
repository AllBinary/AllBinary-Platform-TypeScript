
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { BasicDataTableInterface } from "../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    
import { WorkFlowInterface } from "../../../../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface WorkFlowEntityInterface extends BasicDataTableInterface {
        

    public get(storeName: string): Vector

                //@Throws(Error::class, LicensingException::class)
            
    public get(name: string, storeName: string): WorkFlowInterface

    public delete(name: string, storeName: string)

    public insert(values: Vector)

    public update(updatedValues: HashMap<any, any>)

}
                
            

