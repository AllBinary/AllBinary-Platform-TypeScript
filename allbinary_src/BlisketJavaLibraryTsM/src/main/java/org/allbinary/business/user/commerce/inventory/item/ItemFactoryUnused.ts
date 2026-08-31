
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { HttpServletRequest } from '../../../../../../../javax/servlet/http/HttpServletRequest.js';
      //not GWT import const HttpServletRequest = globalThis.javax.servlet.http.HttpServletRequest;

      
import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      //not GWT import const MoneyException = globalThis.org.allbinary.business.user.commerce.money.MoneyException;

      
import { TableMappingInterface } from '../../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { RequestParams } from '../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
      //not GWT import const RequestParams = globalThis.org.allbinary.logic.communication.http.request.RequestParams;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Item } from './Item.js';
//not GWT import const Item = globalThis.org.allbinary.business.user.commerce.inventory.item.Item;

                
export class ItemFactoryUnused
            extends Object
         {
        

                //@Throws(MoneyException.constructor)
            
    public static getInstance(hashMap: HashMap<any, any>): TableMappingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Item(hashMap) as TableMappingInterface;
    
}


                //@Throws(Exception.constructor, MoneyException.constructor)
            
    public static getInstance(request: HttpServletRequest): TableMappingInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Item(new RequestParams(request).toHashMap()) as TableMappingInterface;
    
}


private constructor (){

            super();
        }


}



