
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { BasicDataTableInterface } from "../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    

interface StoreFrontsEntityInterface extends BasicDataTableInterface {
        

                @Throws(Exception::class)
            
    public getStoreFrontInterface(name: string): StoreFrontInterface

    public getStoreFrontNames(): Vector

    public delete(value: string)

    public insert(values: Vector)

    public update(updatedValues: HashMap<Any, Any>)

}
                
            

