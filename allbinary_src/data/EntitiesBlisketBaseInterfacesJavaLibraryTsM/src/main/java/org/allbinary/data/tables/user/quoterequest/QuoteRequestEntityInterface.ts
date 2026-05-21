
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      
import { Vector } from '../../../../../../java/util/Vector.js';
      
import { QuoteRequest } from '../../../../../../org/allbinary/business/user/quoterequest/QuoteRequest.js';
      
import { BasicDataTableInterface } from '../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface QuoteRequestEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    get(userName: string, id: number): QuoteRequest

    getIds(userName: string): Vector

    deleteWhere(key: string, value: string)

    insert(values: Vector)

    update(userName: string, updatedValues: HashMap<any, any>)

}
                
            

