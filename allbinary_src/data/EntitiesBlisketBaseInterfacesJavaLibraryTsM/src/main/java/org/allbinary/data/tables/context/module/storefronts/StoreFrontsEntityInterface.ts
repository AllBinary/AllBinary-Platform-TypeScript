
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { StoreFrontInterface } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { BasicDataTableInterface } from '../../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreFrontsEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    getStoreFrontInterface(name: string): StoreFrontInterface

    getStoreFrontNames(): Vector

    delete(value: string)

    insert(values: Vector)

    update(updatedValues: HashMap<any, any>)

}



