
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
        



            import { Object } from "../../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../../java/lang/Exception.js";
        
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { HttpServletRequest } from "../../../../../../../javax/servlet/http/HttpServletRequest.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { TableMappingInterface } from "../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { RequestParams } from "../../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Item } from "./Item.js";

export class ItemFactoryUnused
            extends Object
         {
        

                //@Throws(MoneyException::class)
            
    public static getInstance(hashMap: HashMap<any, any>): TableMappingInterface{
var hashMap = hashMap



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Item(hashMap) as TableMappingInterface;
    
}


                //@Throws(Exception::class, MoneyException::class)
            
    public static getInstance(request: HttpServletRequest): TableMappingInterface{
var request = request



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Item(new RequestParams(request).
                            toHashMap()) as TableMappingInterface;
    
}

private constructor (){

            super();
        }


}
                
            

