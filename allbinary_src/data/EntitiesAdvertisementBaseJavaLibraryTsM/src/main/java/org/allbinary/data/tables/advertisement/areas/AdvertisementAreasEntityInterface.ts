
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { AdvertisementAreaInterface } from '../../../../../../org/allbinary/business/advertisement/area/AdvertisementAreaInterface.js';
      //not GWT import const AdvertisementAreaInterface = globalThis.org.allbinary.business.advertisement.area.AdvertisementAreaInterface;

      
import { BasicDataTableInterface } from '../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AdvertisementAreasEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    get(storeName: string): Vector

                //@Throws(Exception.constructor)
            
    get(storeName: string, advertisementAreaName: string): AdvertisementAreaInterface

    delete(value: string)

    insert(values: Vector)

    update(updatedValues: HashMap<any, any>)

}



