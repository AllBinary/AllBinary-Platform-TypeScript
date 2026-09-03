
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

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { QuoteRequest } from '../../../../../../org/allbinary/business/user/quoterequest/QuoteRequest.js';
      //not GWT import const QuoteRequest = globalThis.org.allbinary.business.user.quoterequest.QuoteRequest;

      
import { BasicDataTableInterface } from '../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js';
      //not GWT import const BasicDataTableInterface = globalThis.org.allbinary.data.tables.BasicDataTableInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface QuoteRequestEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    get(userName: string, id: number): QuoteRequest

    getIds(userName: string): BasicArrayList

    deleteWhere(key: string, value: string)

    insert(values: BasicArrayList)

    update(userName: string, updatedValues: HashMap<any, any>)

}



