
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
        



import { OrderHistoryEntity } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/order/OrderHistoryEntity.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OrderHistory } from "./OrderHistory.js";

export class OrderHistoryFactory
            extends Object
         {
        

    public static getInstance(id: string): OrderHistory{
var id = id

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

        try {
            
    var orderHistoryEntityInterface: OrderHistoryEntity = new org.allbinary.data.tables.user.commerce.inventory.order.OrderHistoryEntity();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return orderHistoryEntityInterface!.getOrder(id); as OrderHistory;
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, "OrderHistoryFactory", commonStrings!.GET_INSTANCE, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


}
                
            

